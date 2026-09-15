(() => {
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  const views = {
    welcome: $("#welcomeView"),
    reader: $("#readerView"),
    closing: $("#closingView")
  };

  const state = {
    script: localStorage.getItem("ganeshScript") || "devanagari",
    currentIndex: Number(localStorage.getItem("ganeshSongIndex") || 0),
    fontScale: Number(localStorage.getItem("ganeshFontScale") || 1),
    wakeLock: null,
    wakeRequested: false
  };

  if (!["devanagari", "roman"].includes(state.script)) state.script = "devanagari";
  if (!Number.isFinite(state.currentIndex) || state.currentIndex < 0 || state.currentIndex >= SONGS.length) state.currentIndex = 0;
  if (!Number.isFinite(state.fontScale)) state.fontScale = 1;

  const songTitle = $("#songTitle");
  const songType = $("#songType");
  const progressText = $("#progressText");
  const lyrics = $("#lyrics");
  const counterBtn = $("#counterBtn");
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  const songList = $("#songList");
  const backdrop = $("#drawerBackdrop");

  function showView(name) {
    Object.entries(views).forEach(([key, el]) => {
      el.classList.toggle("view-active", key === name);
    });
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function normalizeUrlForSong(song) {
    const url = new URL(window.location.href);
    url.searchParams.set("song", song.id);
    history.replaceState({}, "", url);
  }

  function renderSong(direction = 0) {
    const song = SONGS[state.currentIndex];
    if (!song) return;

    songTitle.textContent = song.title[state.script] || song.title.roman || song.id;
    songType.textContent = song.type || "Aarti";
    progressText.textContent = `Song ${state.currentIndex + 1} of ${SONGS.length}`;
    counterBtn.textContent = `${state.currentIndex + 1} / ${SONGS.length}`;

    const verses = song.verses || [];
    lyrics.innerHTML = verses.map((verse, idx) => {
      const lines = verse[state.script] || [];
      const body = lines.map(line => `<p>${escapeHtml(line)}</p>`).join("");
      const sep = idx < verses.length - 1 ? `<div class="verse-separator">✦</div>` : "";
      return `<section class="verse">${body}</section>${sep}`;
    }).join("");

    lyrics.style.opacity = "0";
    lyrics.style.transform = `translateX(${direction > 0 ? "18px" : direction < 0 ? "-18px" : "0"})`;
    requestAnimationFrame(() => {
      lyrics.style.transition = "opacity .28s ease, transform .28s ease";
      lyrics.style.opacity = "1";
      lyrics.style.transform = "translateX(0)";
    });

    prevBtn.disabled = state.currentIndex === 0;
    prevBtn.style.opacity = prevBtn.disabled ? ".45" : "1";

    localStorage.setItem("ganeshSongIndex", state.currentIndex);
    normalizeUrlForSong(song);
    applyFontScale();
    renderSongList();
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function nextSong() {
    if (state.currentIndex < SONGS.length - 1) {
      state.currentIndex += 1;
      renderSong(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      showView("closing");
    }
  }

  function prevSong() {
    if (state.currentIndex > 0) {
      state.currentIndex -= 1;
      renderSong(-1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function setScript(script) {
    if (!["devanagari", "roman"].includes(script)) return;
    const oldScrollRatio = document.documentElement.scrollHeight > window.innerHeight
      ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      : 0;

    state.script = script;
    localStorage.setItem("ganeshScript", script);

    if (views.reader.classList.contains("view-active")) {
      renderSong();
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({ top: Math.max(0, max * oldScrollRatio), behavior: "instant" });
      });
    }

    updateScriptChoices();
    renderSongList();
    closeSheets();
  }

  function renderSongList() {
    songList.innerHTML = SONGS.map((song, i) => {
      const title = song.title[state.script] || song.title.roman;
      return `
        <button class="song-item ${i === state.currentIndex ? "active" : ""}" data-song-index="${i}">
          <span class="song-number">${i + 1}</span>
          <span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(song.type || "Song")}</small></span>
          <span>${i === state.currentIndex ? "●" : ""}</span>
        </button>
      `;
    }).join("");

    $$(".song-item").forEach(btn => {
      btn.addEventListener("click", () => {
        state.currentIndex = Number(btn.dataset.songIndex);
        renderSong();
        closeSheets();
        showView("reader");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  function openSheet(id) {
    closeSheets(false);
    const sheet = document.getElementById(id);
    if (!sheet) return;
    backdrop.hidden = false;
    sheet.classList.add("open");
    sheet.setAttribute("aria-hidden", "false");
  }

  function closeSheets(hideBackdrop = true) {
    $$(".sheet").forEach(sheet => {
      sheet.classList.remove("open");
      sheet.setAttribute("aria-hidden", "true");
    });
    if (hideBackdrop) backdrop.hidden = true;
  }

  function applyFontScale() {
    state.fontScale = Math.min(1.35, Math.max(.85, state.fontScale));
    document.documentElement.style.setProperty("--lyrics-scale", state.fontScale);
    localStorage.setItem("ganeshFontScale", state.fontScale);
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

  function updateScriptChoices() {
    $$("[data-script-choice]").forEach(btn => {
      btn.classList.toggle("selected", btn.dataset.scriptChoice === state.script);
    });
  }

  function validateSongs() {
    SONGS.forEach((song, songIndex) => {
      if (!song.title?.devanagari || !song.title?.roman) {
        console.warn(`Song ${songIndex + 1}: missing title in one script.`);
      }

      (song.verses || []).forEach((verse, verseIndex) => {
        const d = verse.devanagari || [];
        const r = verse.roman || [];
        if (d.length !== r.length) {
          console.warn(
            `Song "${song.id}", verse ${verseIndex + 1}: Devanagari (${d.length}) and Roman (${r.length}) line counts do not match.`
          );
        }
      });
    });
  }

  function loadSongFromUrl() {
    const params = new URLSearchParams(location.search);
    const id = params.get("song");
    if (!id) return false;
    const index = SONGS.findIndex(s => s.id === id);
    if (index >= 0) {
      state.currentIndex = index;
      return true;
    }
    return false;
  }

  // Welcome language buttons
  $$(".language-card").forEach(btn => {
    btn.addEventListener("click", () => {
      state.script = btn.dataset.language;
      localStorage.setItem("ganeshScript", state.script);
      renderSong();
      showView("reader");
    });
  });

  nextBtn.addEventListener("click", nextSong);
  prevBtn.addEventListener("click", prevSong);
  counterBtn.addEventListener("click", () => openSheet("songDrawer"));
  $("#songsBtn").addEventListener("click", () => openSheet("songDrawer"));
  $("#scriptBtn").addEventListener("click", () => openSheet("scriptSheet"));
  $("#settingsBtn").addEventListener("click", () => openSheet("settingsSheet"));

  $("#homeBtn").addEventListener("click", () => showView("welcome"));
  $("#restartBtn").addEventListener("click", () => {
    state.currentIndex = 0;
    renderSong();
    showView("reader");
  });
  $("#inviteBtn").addEventListener("click", () => showView("welcome"));

  backdrop.addEventListener("click", closeSheets);
  $$("[data-close-sheet]").forEach(btn => btn.addEventListener("click", closeSheets));

  $$("[data-script-choice]").forEach(btn => {
    btn.addEventListener("click", () => setScript(btn.dataset.scriptChoice));
  });

  $("#fontDown").addEventListener("click", () => { state.fontScale -= .1; applyFontScale(); });
  $("#fontReset").addEventListener("click", () => { state.fontScale = 1; applyFontScale(); });
  $("#fontUp").addEventListener("click", () => { state.fontScale += .1; applyFontScale(); });

  $("#wakeBtn").addEventListener("click", () => {
    if (state.wakeLock) releaseWakeLock();
    else requestWakeLock();
  });

  document.addEventListener("visibilitychange", async () => {
    if (document.visibilityState === "visible" && state.wakeRequested && !state.wakeLock) {
      await requestWakeLock();
    }
  });

  // Swipe navigation
  let touchStartX = null;
  let touchStartY = null;

  document.addEventListener("touchstart", (e) => {
    if (!views.reader.classList.contains("view-active")) return;
    if (e.target.closest(".sheet, .bottom-dock")) return;
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;

    if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      if (dx < 0) nextSong();
      else prevSong();
    }

    touchStartX = touchStartY = null;
  }, { passive: true });

  validateSongs();
  applyFontScale();
  updateScriptChoices();
  renderSongList();

  const deepLinked = loadSongFromUrl();
  if (deepLinked) {
    renderSong();
    showView("reader");
  }

  // Register PWA service worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(err => {
        console.warn("Service worker registration failed:", err);
      });
    });
  }
})();
