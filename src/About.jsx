import React from 'react';
import { Typography, Box, Grid, Link } from '@mui/material';
import './About.css';

export default function About() {
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 3,
                width: '100%',  // Ensure full width of container
                minHeight: '100vh',  // Ensure the container takes the full height of the viewport
            }}
        >
            {/* Main Heading */}
            <Typography variant="h3" sx={{ 
                marginBottom: '30px', 
                color: '#333', 
                fontWeight: 'bold', 
                textAlign: 'center', 
                width: '100%',  // Ensures full width
                marginLeft: 'auto',  // Center the text within the container
                marginRight: 'auto',  // Center the text within the container
            }}>
                About WeatherPro
            </Typography>

            {/* Brief Info */}
            <Box sx={{ width: '100%', maxWidth: '900px' }}>
                <Grid container spacing={4} sx={{ marginBottom: '40px' }}>
                    {/* Who We Are */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" sx={{ 
                            color: '#1976d2', 
                            fontWeight: 'bold', 
                            marginBottom: '15px',
                            textAlign: 'left',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '100%',
                        }}>
                            Who We Are
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', textAlign: 'left' }}>
                            WeatherPro is dedicated to providing accurate, reliable, and timely weather updates. Whether you're planning a trip, heading to work, or just curious about the weather, we're here to help you stay informed and prepared.
                        </Typography>
                    </Grid>

                    {/* Our Mission */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" sx={{ 
                            color: '#1976d2', 
                            fontWeight: 'bold', 
                            marginBottom: '15px',
                            textAlign: 'left',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '100%',
                        }}>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', textAlign: 'left' }}>
                            Our mission is to offer simple, fast, and user-friendly weather information, ensuring you have the right data to make informed decisions every day.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Features */}
                <Grid container spacing={4} sx={{ marginBottom: '40px' }}>
                    {/* What We Offer */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" sx={{ 
                            color: '#1976d2', 
                            fontWeight: 'bold', 
                            marginBottom: '15px',
                            textAlign: 'left',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '100%',
                        }}>
                            What We Offer
                        </Typography>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li><Typography variant="body1" sx={{ color: '#333' }}><b>Real-time Weather Updates:</b> Get the current weather in your area, updated regularly.</Typography></li>
                            <li><Typography variant="body1" sx={{ color: '#333' }}><b>5-Day Forecasts:</b> Plan ahead with weather predictions for the next five days.</Typography></li>
                            <li><Typography variant="body1" sx={{ color: '#333' }}><b>Weather Alerts:</b> Stay safe with timely notifications about extreme weather conditions.</Typography></li>
                            <li><Typography variant="body1" sx={{ color: '#333' }}><b>Radar and Maps:</b> Track weather systems and storms in real-time with our interactive radar.</Typography></li>
                        </ul>
                    </Grid>

                    {/* Why Choose WeatherPro */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" sx={{ 
                            color: '#1976d2', 
                            fontWeight: 'bold', 
                            marginBottom: '15px',
                            textAlign: 'left',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '100%',
                        }}>
                            Why Choose WeatherPro
                        </Typography>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li><Typography variant="body1" sx={{ color: '#333' }}><b>Accuracy:</b> We provide the most reliable information.</Typography></li>
                            <li><Typography variant="body1" sx={{ color: '#333' }}><b>Simplicity:</b> Easy-to-understand interface designed for everyone.</Typography></li>
                            <li><Typography variant="body1" sx={{ color: '#333' }}><b>Accessibility:</b> Available on both web and mobile, so you can stay updated anytime, anywhere.</Typography></li>
                        </ul>
                    </Grid>
                </Grid>

                {/* Contact Us */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ 
                        color: '#1976d2', 
                        fontWeight: 'bold', 
                        marginBottom: '15px', 
                        textAlign: 'center', 
                        width: '100%',
                    }}>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333' }}>
                        Have questions or feedback? Feel free to reach out to us at <Link href="mailto:support@weatherpro.com" sx={{ color: '#1976d2' }}>support@weatherpro.com</Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
