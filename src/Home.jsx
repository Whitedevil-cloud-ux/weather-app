import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material';

function Home() {
    return (
        <Box 
            sx={{
                marginLeft: '23rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                minHeight: '100vh',
                textAlign: 'center',
                p: 2,
            }}
        >
            {/* Navigation */}
            <Box 
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 4,
                }}
            >
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
                        <li style={{ margin: '0 15px' }}>
                            <Link to='/about' style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>About</Link>
                        </li>
                        <li style={{ margin: '0 15px' }}>
                            <Link to='/weather' style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>Weather</Link>
                        </li>
                    </ul>
                </nav>
            </Box>

            {/* Heading */}
            <Typography variant="h3" sx={{ mb: 1, color: '#333' }}>
                Welcome to WeatherPro
            </Typography>
            <Typography variant="h5" sx={{ mb: 2, color: '#666' }}>
                Your source for Weather Updates
            </Typography>

            {/* App Information */}
            <Typography variant="h6" sx={{ mb: 2, color: '#444' }}>
                Stay Updated
            </Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>
                Download our mobile app for weather updates on the go!
            </Typography>

            {/* Button */}
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                Download App
            </Button>
        </Box>
    );
}

export default Home;
