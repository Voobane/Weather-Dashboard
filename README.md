# 🌤️ Weather Dashboard

A browser-based weather application that displays current conditions and a **5-day forecast** for any city in the world. Powered by the **OpenWeatherMap API**, with search history saved to **localStorage** so your recent cities are always one click away.

**Live Site:** ------To be added to mmy portfolio website-----

---

## 📖 Overview

This project focuses on working with a real-world third-party API and browser-native storage. Users search for a city, see live weather data, and can return to any previous search from a persistent history list — all without a backend.

---

## ✨ Features

- 🌍 Search weather for **any city worldwide**
- 🌡️ Current conditions: temperature, humidity, wind speed, and weather icon
- 📅 **5-day forecast** with daily conditions at a glance
- 🕘 Search history saved to **localStorage** — persists across sessions
- 🔄 Click any city in the history to reload its weather instantly
- 📱 Responsive layout that works on desktop and mobile

---

## 🛠️ Tech Stack

| Technology         | Purpose                      |
| ------------------ | ---------------------------- |
| HTML5 / CSS3       | Structure and styling        |
| JavaScript (ES6+)  | Application logic            |
| OpenWeatherMap API | Live weather data            |
| localStorage       | Client-side data persistence |
| Day.js             | Date formatting              |
| Bootstrap          | Responsive UI components     |

---

## 🚀 Getting Started

### Prerequisites

- A free [OpenWeatherMap API key](https://openweathermap.org/appid)

### Installation

```bash
# Clone the repository
git clone https://github.com/Voobane/Weather-Dashboard.git
cd Weather-Dashboard
```

### API Key Setup

Open `assets/js/script.js` and replace the placeholder with your API key:

```js
const apiKey = "YOUR_API_KEY_HERE";
```

> 💡 For production, store the key server-side or use environment variables. Avoid committing real API keys.

### Running the App

Open `index.html` directly in your browser — no build step required.

---

## 📁 Project Structure

```
Weather-Dashboard/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js        # API calls, DOM manipulation, localStorage
├── index.html
└── README.md
```

---

## 🌐 How It Works

1. User types a city name and submits the form
2. App calls the **OpenWeatherMap Geocoding API** to get coordinates
3. Coordinates are passed to the **5-Day Forecast API** to get weather data
4. Current weather and 5-day cards are rendered to the DOM
5. The city is saved to **localStorage** and displayed in the history list
6. Clicking a history item triggers a new API call for that city

---

## 💡 What I Learned

- Making **chained fetch requests** — converting a city name to coordinates, then using those coordinates in a second API call
- Parsing and rendering **JSON API responses** to the DOM dynamically
- Using **localStorage** to persist data between browser sessions
- Handling **edge cases** like empty input and cities not found
- Reading and using official **API documentation** to understand endpoints and parameters

---

## 📸 Screenshots

> `Assets\_Images\Weather Dashboard Preview.jpg`

---

## 👤 Author

**Matt (Voobane)**

- GitHub: [@Voobane](https://github.com/Voobane)
