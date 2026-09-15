# Ganesh Chaturthi Song App

A lightweight, mobile-first HTML/CSS/JS app for Ganesh Chaturthi aarti and bhajan lyrics.

## What you need to edit

### 1. Add your songs
Open `songs.js`.

Replace the sample songs with your own songs.

Each song follows this structure:

```js
{
  id: "unique-song-id",
  type: "Ganesh Aarti",
  title: {
    devanagari: "जय गणेश देवा",
    roman: "Jai Ganesh Deva"
  },
  verses: [
    {
      devanagari: [
        "Line 1",
        "Line 2"
      ],
      roman: [
        "Line 1",
        "Line 2"
      ]
    }
  ]
}
```

Keep matching Devanagari and Roman lines inside the same verse.

### 2. Invitation image
The current invitation is already included at:

`assets/invitation.jpeg`

If you replace it, keep the same filename or update the image path in `index.html`.

## Run locally

You can open `index.html`, but PWA/offline functions work best through a small local server.

For example:

```bash
python -m http.server 8080
```

Then open:

`http://localhost:8080`

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload every file and folder from this project.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. GitHub will show your public URL after deployment.

No build command is required.

## VPS / Nginx deployment

Copy the whole project directory to your web root.

Example:

```bash
sudo mkdir -p /var/www/ganesh-songs
sudo cp -r ./* /var/www/ganesh-songs/
```

Minimal Nginx config:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/ganesh-songs;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Then:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Features included

- Mobile-first responsive UI
- Invitation welcome page
- Hindi / Roman script selection
- Dynamic song renderer
- Instant language switching
- Previous / next song navigation
- Swipe navigation
- Song list drawer
- Adjustable lyrics size
- Screen wake-lock option where supported
- Remembers script, song and font size
- Direct URL linking to songs
- Closing blessing screen
- Offline-ready PWA structure
- Reduced-motion accessibility support

## Important

After changing songs or assets, update the cache name in `service-worker.js`, for example:

```js
const CACHE = "ganesh-songs-v2";
```

This helps visitors receive the latest version after deployment.


## V3 UX changes

- Every browser refresh now resets to the welcome screen.
- Song number, selected script and font size are intentionally not restored.
- Welcome text and language choices appear before the invitation on mobile.
- Invitation height is capped on mobile so it cannot hide instructions.
- A large "Select Aarti / Bhajan" control is always visible on the reader screen.
- Horizontal quick song chips make direct song switching easier.
- Font-size controls (A− / A / A+) are always visible on the reader screen.
- The Settings drawer still contains larger reading controls and screen wake lock.


## V4 reading improvements

- Added adjustable lyrics line spacing.
- Three spacing modes: Compact, Comfortable, Spacious.
- Verse spacing changes together with line spacing.
- Quick spacing control is visible beside the font-size controls.
- Full spacing selector is also available in Reading Settings.
- Spacing resets to Comfortable on every page refresh.
