(() => {
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  const views = {
    welcome: $("#welcomeView"),
    reader: $("#readerView"),
    closing: $("#closingView")
  };

  /*
    IMPORTANT UX BEHAVIOUR:
    State intentionally resets on every browser refresh.
    Nothing about script, current song or font size is restored
    from localStorage.
  */
  const state = {
    script: "devanagari",
    currentIndex: 0,
    fontScale: 1,
    spacing: "comfortable",
    wakeLock: null,
    wakeRequested: false
  };

  const songTitle = $("#songTitle");
  const songType = $("#songType");
  const progressText = $("#progressText");
  const lyrics = $("#lyrics");
  const counterBtn = $("#counterBtn");
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  const songList = $("#songList");
  const songChips = $("#songChips");
  const backdrop = $("#drawerBackdrop");
  const quickTitle = $("#currentSongQuickTitle");
  const scriptPillText = $("#scriptPillText");
  const songPositionBadge = $("#songPositionBadge");
  const spacingQuickText = $("#spacingQuickText");

  function showView(name) {
    Object.entries(views).forEach(([key, el]) => {
      el.classList.toggle("view-active", key === name);
    });
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }

  function getSongTitle(song) {
    return song?.title?.[state.script] || song?.title?.roman || song?.id || "";
  }

  function renderSong(direction = 0) {
    const song = SONGS[state.currentIndex];
    if (!song) return;

    const title = getSongTitle(song);

    songTitle.textContent = title;
    songType.textContent = song.type || "Aarti";
    progressText.textContent = `${state.currentIndex + 1} of ${SONGS.length}`;
    songPositionBadge.textContent = `Song ${state.currentIndex + 1} • ${song.type || "Aarti"}`;
    counterBtn.textContent = `${state.currentIndex + 1} / ${SONGS.length}`;
    quickTitle.textContent = title;

    scriptPillText.textContent = state.script === "devanagari" ? "हिन्दी" : "English";

    lyrics.innerHTML = (song.verses || []).map((verse, idx) => {
      const lines = verse[state.script] || [];
      const body = lines.map(line => `<p>${escapeHtml(line)}</p>`).join("");
      const sep = idx < song.verses.length - 1 ? `<div class="verse-separator">✦</div>` : "";
      return `<section class="verse">${body}</section>${sep}`;
    }).join("");

    lyrics.style.opacity = "0";
    lyrics.style.transform = `translateX(${direction > 0 ? "16px" : direction < 0 ? "-16px" : "0"})`;
    requestAnimationFrame(() => {
      lyrics.style.transition = "opacity .25s ease, transform .25s ease";
      lyrics.style.opacity = "1";
      lyrics.style.transform = "translateX(0)";
    });

    prevBtn.disabled = state.currentIndex === 0;
    prevBtn.style.opacity = prevBtn.disabled ? ".4" : "1";

    renderSongList();
    renderSongChips();
    updateScriptChoices();
    applyFontScale();
  }

  function renderSongList() {
    songList.innerHTML = SONGS.map((song, i) => `
      <button class="song-item ${i === state.currentIndex ? "active" : ""}" data-song-index="${i}">
        <span class="song-number">${i + 1}</span>
        <span>
          <strong>${escapeHtml(getSongTitle(song))}</strong>
          <small>${escapeHtml(song.type || "Song")}</small>
        </span>
        <span>${i === state.currentIndex ? "●" : "›"}</span>
      </button>
    `).join("");

    $$(".song-item").forEach(btn => {
      btn.addEventListener("click", () => selectSong(Number(btn.dataset.songIndex)));
    });
  }

  function renderSongChips() {
    songChips.innerHTML = SONGS.map((song, i) => `
      <button class="song-chip ${i === state.currentIndex ? "active" : ""}" data-chip-index="${i}">
        ${i + 1}. ${escapeHtml(getSongTitle(song))}
      </button>
    `).join("");

    $$(".song-chip").forEach(btn => {
      btn.addEventListener("click", () => selectSong(Number(btn.dataset.chipIndex)));
    });

    requestAnimationFrame(() => {
      const active = songChips.querySelector(".song-chip.active");
      if (active) active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  }

  function selectSong(index) {
    if (!Number.isInteger(index) || index < 0 || index >= SONGS.length) return;
    const direction = index > state.currentIndex ? 1 : index < state.currentIndex ? -1 : 0;
    state.currentIndex = index;
    renderSong(direction);
    closeSheets();
    showView("reader");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function nextSong() {
    if (state.currentIndex < SONGS.length - 1) {
      selectSong(state.currentIndex + 1);
    } else {
      showView("closing");
    }
  }

  function prevSong() {
    if (state.currentIndex > 0) selectSong(state.currentIndex - 1);
  }

  function setScript(script) {
    if (!["devanagari","roman"].includes(script)) return;
    state.script = script;
    renderSong();
    closeSheets();
  }

  function applyFontScale() {
    state.fontScale = Math.min(1.55, Math.max(.78, state.fontScale));
    document.documentElement.style.setProperty("--lyrics-scale", state.fontScale.toFixed(2));
  }

  function changeFont(delta) {
    state.fontScale += delta;
    applyFontScale();
  }

  function resetFont() {
    state.fontScale = 1;
    applyFontScale();
  }


  const spacingModes = {
    compact: {
      lineHeight: 1.55,
      verseGap: 16,
      versePaddingY: 12,
      label: "Compact"
    },
    comfortable: {
      lineHeight: 1.86,
      verseGap: 24,
      versePaddingY: 18,
      label: "Comfort"
    },
    spacious: {
      lineHeight: 2.18,
      verseGap: 34,
      versePaddingY: 22,
      label: "Spacious"
    }
  };

  function applySpacing() {
    const mode = spacingModes[state.spacing] || spacingModes.comfortable;

    document.documentElement.style.setProperty("--lyrics-line-height", mode.lineHeight);
    document.documentElement.style.setProperty("--verse-gap", `${mode.verseGap}px`);
    document.documentElement.style.setProperty("--verse-padding-y", `${mode.versePaddingY}px`);

    if (spacingQuickText) spacingQuickText.textContent = mode.label;

    $$(".spacing-option").forEach(btn => {
      btn.classList.toggle("selected", btn.dataset.spacing === state.spacing);
    });
  }

  function setSpacing(mode) {
    if (!spacingModes[mode]) return;
    state.spacing = mode;
    applySpacing();
  }

  function cycleSpacing() {
    const order = ["compact", "comfortable", "spacious"];
    const current = order.indexOf(state.spacing);
    const next = order[(current + 1) % order.length];
    setSpacing(next);
  }

  function openSheet(id) {
    closeSheets(false);
    const sheet = document.getElementById(id);
    if (!sheet) return;
    backdrop.hidden = false;
    sheet.classList.add("open");
    sheet.setAttribute("aria-hidden","false");
  }

  function closeSheets(hideBackdrop = true) {
    $$(".sheet").forEach(sheet => {
      sheet.classList.remove("open");
      sheet.setAttribute("aria-hidden","true");
    });
    if (hideBackdrop) backdrop.hidden = true;
  }

  function updateScriptChoices() {
    $$("[data-script-choice]").forEach(btn => {
      btn.classList.toggle("selected", btn.dataset.scriptChoice === state.script);
    });
  }

  async function requestWakeLock() {
    if (!("wakeLock" in navigator)) {
      alert("Screen wake lock is not supported in this browser.");
      return;
    }
    try {
      state.wakeLock = await navigator.wakeLock.request("screen");
      state.wakeRequested = true;
      updateWakeToggle();
      state.wakeLock.addEventListener("release", () => {
        state.wakeLock = null;
        updateWakeToggle();
      });
    } catch (err) {
      console.warn("Wake Lock error:", err);
    }
  }

  async function releaseWakeLock() {
    state.wakeRequested = false;
    if (state.wakeLock) {
      await state.wakeLock.release();
      state.wakeLock = null;
    }
    updateWakeToggle();
  }

  function updateWakeToggle() {
    $("#wakeBtn").setAttribute("aria-checked", state.wakeLock ? "true" : "false");
  }

  function validateSongs() {
    SONGS.forEach((song, songIndex) => {
      if (!song.title?.devanagari || !song.title?.roman) {
        console.warn(`Song ${songIndex + 1}: missing a title in one script.`);
      }
      (song.verses || []).forEach((verse, verseIndex) => {
        const d = verse.devanagari || [];
        const r = verse.roman || [];
        if (d.length !== r.length) {
          console.warn(`Song "${song.id}", verse ${verseIndex + 1}: line count mismatch (${d.length} / ${r.length}).`);
        }
      });
    });
  }

  // Welcome: always starts fresh after refresh.
  $$(".language-card").forEach(btn => {
    btn.addEventListener("click", () => {
      state.script = btn.dataset.language;
      state.currentIndex = 0;
      state.fontScale = 1;
      state.spacing = "comfortable";
      applySpacing();
      renderSong();
      showView("reader");
    });
  });

  // Main reader controls
  nextBtn.addEventListener("click", nextSong);
  prevBtn.addEventListener("click", prevSong);

  $("#songsBtn").addEventListener("click", () => openSheet("songDrawer"));
  counterBtn.addEventListener("click", () => openSheet("songDrawer"));
  $("#chooseSongBtn").addEventListener("click", () => openSheet("songDrawer"));

  $("#scriptBtn").addEventListener("click", () => openSheet("scriptSheet"));
  $("#settingsBtn").addEventListener("click", () => openSheet("settingsSheet"));

  $("#homeBtn").addEventListener("click", () => {
    state.currentIndex = 0;
    state.fontScale = 1;
    state.spacing = "comfortable";
    applyFontScale();
    applySpacing();
    showView("welcome");
  });

  $("#restartBtn").addEventListener("click", () => {
    state.currentIndex = 0;
    state.fontScale = 1;
    state.spacing = "comfortable";
    applySpacing();
    renderSong();
    showView("reader");
  });

  $("#inviteBtn").addEventListener("click", () => {
    state.currentIndex = 0;
    state.fontScale = 1;
    state.spacing = "comfortable";
    applyFontScale();
    applySpacing();
    showView("welcome");
  });

  backdrop.addEventListener("click", closeSheets);
  $$("[data-close-sheet]").forEach(btn => btn.addEventListener("click", closeSheets));

  $$("[data-script-choice]").forEach(btn => {
    btn.addEventListener("click", () => setScript(btn.dataset.scriptChoice));
  });

  // Font controls: both always-visible quick controls and settings sheet.
  $("#fontQuickDown").addEventListener("click", () => changeFont(-.10));
  $("#fontQuickReset").addEventListener("click", resetFont);
  $("#fontQuickUp").addEventListener("click", () => changeFont(.10));

  $("#fontDown").addEventListener("click", () => changeFont(-.10));
  $("#fontReset").addEventListener("click", resetFont);
  $("#fontUp").addEventListener("click", () => changeFont(.10));

  $("#spacingQuickBtn").addEventListener("click", cycleSpacing);

  $$(".spacing-option").forEach(btn => {
    btn.addEventListener("click", () => setSpacing(btn.dataset.spacing));
  });

  $("#wakeBtn").addEventListener("click", () => {
    if (state.wakeLock) releaseWakeLock();
    else requestWakeLock();
  });

  document.addEventListener("visibilitychange", async () => {
    if (document.visibilityState === "visible" && state.wakeRequested && !state.wakeLock) {
      await requestWakeLock();
    }
  });

  // Swipe left/right between songs
  let touchStartX = null;
  let touchStartY = null;

  document.addEventListener("touchstart", (e) => {
    if (!views.reader.classList.contains("view-active")) return;
    if (e.target.closest(".sheet,.bottom-dock,.song-chips,.quick-tools")) return;
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive:true });

  document.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      dx < 0 ? nextSong() : prevSong();
    }
    touchStartX = touchStartY = null;
  }, { passive:true });

  validateSongs();
  applyFontScale();
  applySpacing();
  renderSongList();
  renderSongChips();
  updateScriptChoices();

  // CRITICAL: never restore the previous reader state on refresh.
  // Every load starts at the welcome screen.
  showView("welcome");

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(err => {
        console.warn("Service worker registration failed:", err);
      });
    });
  }
})();
