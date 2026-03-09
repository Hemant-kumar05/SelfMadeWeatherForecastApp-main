# Weather Forecast App

A simple weather app that fetches current weather by **city name** using the **OpenWeather** API.

## Run the project (recommended)

This is a static HTML/CSS/JS project, so you should run it with a small local web server (recommended over opening the file directly).

## Set your OpenWeather API key

1. Create a free API key at https://openweathermap.org/api
2. Open `sketch.js` and set:

   ```js
   const OPENWEATHER_API_KEY = 'YOUR_OPENWEATHER_API_KEY_HERE';
   ```

### Option A: Python (quickest)

1. Open a terminal in this project folder.
2. Run:

   - **Windows (PowerShell or CMD):**

     ```bash
     python -m http.server 8000
     ```

3. Open in your browser:

   - http://localhost:8000/

### Option B: VS Code Live Server

1. Install the **Live Server** extension.
2. Right-click `index.html` and choose **Open with Live Server**.

## Notes / Troubleshooting

- If you open `index.html` with a `file://` URL, some browsers may block network requests or behave inconsistently. Use a local server instead.
- This project calls OpenWeather from the browser, so it needs a working API key.
   - The key is configured in `sketch.js` via `OPENWEATHER_API_KEY`.
   - If you see errors like `401` (Unauthorized) or `Invalid API key`, replace the `appid=...` value with your own OpenWeather API key.

## Project files

- `index.html` - UI markup
- `style.css` - styles
- `sketch.js` - app logic + OpenWeather fetch
- `assets/` - icons/images


