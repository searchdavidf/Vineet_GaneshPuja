# V10 Robust

Upload only:
- index.html
- assets/invitation.jpeg

Architecture:
- Hindi/English opens Reader before lyric rendering.
- If lyrics fail, the Reader still opens and shows the exact error.
- Two independent click paths are used for language buttons.
- Lyrics use DOM textContent instead of innerHTML.
- Song data is validated before rendering.
- No service worker, manifest, external JS/CSS, localStorage or Google Fonts.
- Critical path avoids replaceAll, optional chaining and Element.animate.

Verify deployed source contains:
GANESH APP BUILD: V10 ROBUST
