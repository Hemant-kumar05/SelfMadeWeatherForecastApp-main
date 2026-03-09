# Weather Forecast App

A lightweight weather app that fetches **current weather by city name** using the **OpenWeather** API.

## Features

- Search weather by city name
- Shows temperature (°C), humidity, and wind speed
- Updates weather icon based on conditions

## Tech

- HTML + CSS + JavaScript (no build step)
- OpenWeather Current Weather API

## Prerequisites

- A modern web browser
- (Recommended) Python 3.x to run a local server OR the VS Code Live Server extension
- An OpenWeather API key

## 1) Set your OpenWeather API key

This project calls OpenWeather directly from the browser, so you must provide an API key.

1. Create a free API key: https://openweathermap.org/api
2. Open `sketch.js`
3. Replace the placeholder value:

   ```js
   const OPENWEATHER_API_KEY = 'YOUR_OPENWEATHER_API_KEY_HERE';
   ```

## 2) Run the project locally (recommended)

Because this is a static site, the best way to run it is with a small local web server (recommended over opening the file with `file://`).

### Option A: Python (quickest)

1. Open a terminal in the project folder.
2. Start a server:

   ```bash
   python -m http.server 8000
   ```

3. Open the app:

   http://localhost:8000/

### Option B: VS Code Live Server

1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` → **Open with Live Server**.

## Deploy (GitHub Pages)

You can host this as a static site using GitHub Pages.

This repo includes a GitHub Actions workflow that deploys the site automatically.

1. Push the repository to GitHub.
2. In your GitHub repo: **Settings → Pages**
3. Under **Build and deployment**, set:
   - Source: **GitHub Actions**
4. Go to the **Actions** tab and wait for the workflow **Deploy to GitHub Pages** to finish.

After that, GitHub will provide the public URL.

## Troubleshooting

- **Nothing happens / fetch fails**: make sure your API key is set in `sketch.js`.
- **401 Unauthorized / Invalid API key**: your key is wrong, inactive, or not yet activated by OpenWeather.
- **404 Invalid City Name**: check spelling (try a well-known city like `Delhi`, `London`, `Tokyo`).
- **Icons not showing**: verify the corresponding file exists in the `assets/` folder.

## Project structure

- `index.html` — UI markup
- `style.css` — styles
- `sketch.js` — app logic + API calls
- `assets/` — images/icons


