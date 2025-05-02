import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './SearchBox.css';
import { ClipLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import Alert from '@mui/material/Alert';

function SearchBox() {
    const [loading, setLoading] = useState(false); 
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [searchedCity, setSearchedCity] = useState("");
    const [error, setError] = useState("");

    // Using Vite's import.meta.env for environment variables
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        try {
            setLoading(true);
            setError("");
    
            const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
            console.log("Fetching:", url);
    
            const response = await fetch(url);
    
            // Log raw response headers and body
            console.log("Status:", response.status);
            console.log("Content-Type:", response.headers.get("content-type"));
            const rawText = await response.text();
            console.log("Raw Response:", rawText);
    
            // If not JSON, throw an error
            if (!response.ok) {
                throw new Error(`HTTP ${response.status} - ${rawText}`);
            }
    
            if (!response.headers.get("content-type")?.includes("application/json")) {
                throw new Error("Invalid response from server (not JSON)");
            }
    
            const jsonResponse = JSON.parse(rawText); // parse manually from rawText
            console.log("Parsed JSON:", jsonResponse);
    
            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message || "City not found");
            }
    
            const result = {
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
    
            setWeather(result);
            setSearchedCity(city);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError(error.message || "Something went wrong");
            setWeather(null);
            setTimeout(() => setError(""), 3000);
        } finally {
            setLoading(false);
        }
    };
    
    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedCity = city.trim();
        if (!trimmedCity) {
            setError("Please enter a valid name.");
            setTimeout(() => setError(""), 1000);
            return;
        }
        setWeather(null);
        getWeatherInfo();  // Fetch weather data after validation
        setCity("");  // Reset city input after search
    };

    return (
        <Box
            sx={{
                marginLeft: '33rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '100vh',
                textAlign: 'center',
                p: 2,
            }}
        >
            <nav className="nav-about" style={{ marginBottom: '20px' }}>
                <Link to='/about' style={{ textDecoration: 'none', color: '#1976d2' }}>About</Link>
            </nav>

            <Typography variant="h4" sx={{ marginBottom: '20px', color: '#333' }}>
                Search Weather
            </Typography>

            {loading ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '50vh',
                    }}
                >
                    <ClipLoader size={50} color={"#36D7B7"} loading={loading} />
                    <p>Loading Weather Data...</p>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%', maxWidth: '400px' }}
                >
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="city"
                            label="City Name"
                            variant="standard"
                            value={city}
                            onChange={handleChange}
                            sx={{
                                marginBottom: '20px',
                                width: '300px',
                            }}
                        />
                        <br />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                marginTop: '10px',
                                width: '200px',
                            }}
                        >
                            Search
                        </Button>
                    </form>

                    {weather && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                color: 'black',
                                marginTop: '30px',
                                textAlign: 'center',
                                backgroundColor: '#f0f0f0',
                                padding: '20px',
                                borderRadius: '8px',
                                width: '100%',
                                maxWidth: '400px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Typography variant="h5" sx={{ color: '#1976d2' }}>
                                Weather in {searchedCity}
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: '10px' }}>
                                Temperature: {weather.temp}°C
                            </Typography>
                            <Typography variant="body1">Min Temp: {weather.tempMin}°C</Typography>
                            <Typography variant="body1">Max Temp: {weather.tempMax}°C</Typography>
                            <Typography variant="body1">Humidity: {weather.humidity}%</Typography>
                            <Typography variant="body1">Feels Like: {weather.feelsLike}°C</Typography>
                            <Typography variant="body1">Condition: {weather.weather}</Typography>
                        </motion.div>
                    )}
                </motion.div>
            )}

            {error && (
                <Alert variant="outlined" severity="error" sx={{ marginTop: 2 }}>
                    {error}
                </Alert>
            )}
        </Box>
    );
}

export default SearchBox;
