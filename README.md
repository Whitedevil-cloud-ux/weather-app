## Weather App

A simple and responsive weather application built with React that allows users to search for the current weather information based on the city name. It fetches real-time weather data from the OpenWeatherMap API and displays various weather details such as temperature, humidity, weather conditions, and more.

### Key Features:

* Search for the weather by city name.
* Display current temperature, humidity, and weather conditions.
* Show additional weather details such as feels-like temperature, min/max temperature, and more.
* Built using **React**, **Material-UI**, and integrated with **OpenWeatherMap API** for real-time weather updates.
* Loading animation using **react-spinners** during data fetch.
* Simple, user-friendly interface with smooth animations using **framer-motion**.

### Technologies Used:

* **React**: JavaScript library for building user interfaces.
* **OpenWeatherMap API**: Provides real-time weather data.
* **Material-UI**: React components for modern UI designs.
* **Framer Motion**: For adding animations to the components.
* **React-Spinners**: For displaying loading spinners during API requests.

### How to Run:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/whitedevil-cloud-ux/weather-app.git
   ```
2. Install the necessary dependencies:

   ```bash
   cd weather-app
   npm install
   ```
3. Create a `.env` file in the root of the project and add your OpenWeatherMap API key like so:

   ```env
   VITE_API_KEY=your_api_key_here
   ```
4. Run the application:

   ```bash
   npm start
   ```

