(() => {
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  const views = {
    invitation: $("#invitationView"),
    welcome: $("#welcomeView"),
    join: $("#joinView"),
    reader: $("#readerView"),
    closing: $("#closingView")
  };

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
  const headerSongTitle = $("#headerSongTitle");
  const songPositionBadge = $("#songPositionBadge");
  const lyrics = $("#lyrics");
  const songList = $("#songList");
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  const prevSongLabel = $("#prevSongLabel");
  const nextSongLabel = $("#nextSongLabel");
  const scriptPillText = $("#scriptPillText");
  const backdrop = $("#drawerBackdrop");

  function showView(name) {
    Object.entries(views).forEach(([key, el]) => {
      el.classList.toggle("view-active", key === name);
    });
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function resetReaderState() {
    state.currentIndex = 0;
    state.fontScale = 1;
    state.spacing = "comfortable";
    applyFontScale();
    applySpacing();
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
    headerSongTitle.textContent = title;
    songType.textContent = song.type || "Aarti";
    songPositionBadge.textContent = `${state.currentIndex + 1} of ${SONGS.length}`;
    scriptPillText.textContent = state.script === "devanagari" ? "हिन्दी" : "English";

    lyrics.innerHTML = (song.verses || []).map((verse, idx) => {
      const lines = verse[state.script] || [];
      const body = lines.map(line => `<p>${escapeHtml(line)}</p>`).join("");
      const sep = idx < song.verses.length - 1 ? `<div class="verse-separator"></div>` : "";
      return `<section class="verse">${body}</section>${sep}`;
    }).join("");

    const prevSong = SONGS[state.currentIndex - 1];
    const nextSong = SONGS[state.currentIndex + 1];

    prevSongLabel.textContent = prevSong ? getSongTitle(prevSong) : "First song";
    nextSongLabel.textContent = nextSong ? getSongTitle(nextSong) : "Finish";

    prevBtn.disabled = !prevSong;
    prevBtn.style.opacity = prevSong ? "1" : ".45";

    if (direction !== 0) {
      lyrics.animate(
        [
          { opacity: 0, transform: `translateX(${direction > 0 ? "12px" : "-12px"})` },
          { opacity: 1, transform: "translateX(0)" }
        ],
        { duration: 220, easing: "ease-out" }
      );
    }

    renderSongList();
    updateScriptChoices();
    applyFontScale();
    applySpacing();
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
      btn.addEventListener("click", () => {
        const index = Number(btn.dataset.songIndex);
        selectSong(index);
      });
    });
  }

  function selectSong(index) {
    if (!Number.isInteger(index) || index < 0 || index >= SONGS.length) return;
    const direction = index > state.currentIndex ? 1 : index < state.currentIndex ? -1 : 0;
    state.currentIndex = index;
    renderSong(direction);
    closeSheets();
    showView("reader");
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
    state.fontScale = Math.max(.82, Math.min(1.48, state.fontScale));
    document.documentElement.style.setProperty("--lyrics-scale", state.fontScale.toFixed(2));
  }

  const spacingModes = {
    compact: { line: 1.45, gap: 1.55 },
    comfortable: { line: 1.72, gap: 2.25 },
    spacious: { line: 2.05, gap: 3.05 }
  };

  function applySpacing() {
    const mode = spacingModes[state.spacing] || spacingModes.comfortable;
    document.documentElement.style.setProperty("--line-height", mode.line);
    document.documentElement.style.setProperty("--verse-gap", `${mode.gap}rem`);

    $$(".spacing-option").forEach(btn => {
      btn.classList.toggle("selected", btn.dataset.spacing === state.spacing);
    });
  }

  function setSpacing(mode) {
    if (!spacingModes[mode]) return;
    state.spacing = mode;
    applySpacing();
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

  function openReaderFromLanguage(language) {
    state.script = language;
    resetReaderState();
    renderSong();
    showView("reader");
  }

  // Intro flow
  $("#invitationContinueBtn").addEventListener("click", () => showView("welcome"));
  $("#skipToJoinBtn").addEventListener("click", () => showView("join"));
  $("#backToInvitationBtn").addEventListener("click", () => showView("invitation"));
  $("#welcomeContinueBtn").addEventListener("click", () => showView("join"));
  $("#backToWelcomeBtn").addEventListener("click", () => showView("welcome"));

  $$(".language-select-card").forEach(btn => {
    btn.addEventListener("click", () => openReaderFromLanguage(btn.dataset.language));
  });

  // Reader
  $("#homeBtn").addEventListener("click", () => {
    resetReaderState();
    showView("invitation");
  });

  $("#songPickerBtn").addEventListener("click", () => openSheet("songDrawer"));
  $("#scriptBtn").addEventListener("click", () => openSheet("scriptSheet"));
  $("#songsBtn").addEventListener("click", () => openSheet("songDrawer"));
  $("#formatBtn").addEventListener("click", () => openSheet("settingsSheet"));

  prevBtn.addEventListener("click", prevSong);
  nextBtn.addEventListener("click", nextSong);

  // Script
  $$("[data-script-choice]").forEach(btn => {
    btn.addEventListener("click", () => setScript(btn.dataset.scriptChoice));
  });

  // Reading settings
  $("#fontDown").addEventListener("click", () => {
    state.fontScale -= .1;
    applyFontScale();
  });
  $("#fontReset").addEventListener("click", () => {
    state.fontScale = 1;
    applyFontScale();
  });
  $("#fontUp").addEventListener("click", () => {
    state.fontScale += .1;
    applyFontScale();
  });

  $$(".spacing-option").forEach(btn => {
    btn.addEventListener("click", () => setSpacing(btn.dataset.spacing));
  });

  $("#wakeBtn").addEventListener("click", () => {
    state.wakeLock ? releaseWakeLock() : requestWakeLock();
  });

  document.addEventListener("visibilitychange", async () => {
    if (document.visibilityState === "visible" && state.wakeRequested && !state.wakeLock) {
      await requestWakeLock();
    }
  });

  // Drawers
  backdrop.addEventListener("click", closeSheets);
  $$("[data-close-sheet]").forEach(btn => btn.addEventListener("click", closeSheets));

  // Closing
  $("#restartBtn").addEventListener("click", () => {
    resetReaderState();
    showView("join");
  });

  $("#inviteBtn").addEventListener("click", () => {
    resetReaderState();
    showView("invitation");
  });

  // Swipe navigation (reader only)
  let touchStartX = null;
  let touchStartY = null;

  document.addEventListener("touchstart", (e) => {
    if (!views.reader.classList.contains("view-active")) return;
    if (e.target.closest(".sheet,.reader-header,.end-controls")) return;
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive:true });

  document.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;

    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.35) {
      dx < 0 ? nextSong() : prevSong();
    }

    touchStartX = touchStartY = null;
  }, { passive:true });

  // Initial state
  resetReaderState();
  renderSongList();
  updateScriptChoices();
  showView("invitation");

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(err => {
        console.warn("Service worker registration failed:", err);
      });
    });
  }
})();
