# Google Flights Clone

Welcome to the **Google Flights Clone**! This is a React.js-based flight search app built with Vite, Tailwind CSS, and the RapidAPI Sky Scraper API. It allows users to search for flights and displays up to 10 flight results in an accordion-style UI, similar to Google Flights.

## 🚀 Features

- **Flight Search Interface**: Users can search for flights by specifying the origin, destination, trip type, flight type, and number of passengers.
- **Flight Results Accordion**: Results are displayed in an intuitive accordion UI, showing flight dates and prices with detailed flight information available on demand.
- **Optimized API Calls**: Uses memoization and efficient rendering strategies to minimize API requests and enhance performance.
- **Fully Responsive Design**: Ensures an excellent user experience across all devices.

## 🛠️ Tech Stack

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast development server and build tool for modern web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: A promise-based HTTP client for API interactions.
- **RapidAPI Sky Scraper API**: Powers the flight search functionality.

## 📝 Installation Guide

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/adhikarivkey/google-flight-replica.git
cd google-flights-clone
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure API Key
Create a `config.js` file in the root directory and add your RapidAPI credentials:
```js
const API_KEY = "PASTE_YOUR_KEY_HERE";
export default API_KEY;
```

### 4️⃣ Run the App Locally
```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) in your browser. You can manually change the port if needed.

## 🔍 How It Works

1. **Flight Search**: Users enter flight details using input fields.
2. **API Integration**: Axios sends a request to the RapidAPI Sky Scraper API to fetch flight data.
3. **Displaying Results**: The flight results are displayed in an accordion-style UI with essential flight details.

Happy coding! ✈️

