import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Link, Paper, Box } from '@mui/material';
import Main from '../components/Main'; 

const Login = ({ switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Track login status

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (username.trim() === '') {
      alert('Please enter a username.');
      return;
    }

    if (password.trim() === '') {
      alert('Please enter a password.');
      return;
    }

    if (password.length < 6) {
      alert('Password should be at least 6 characters.');
      return;
    }

    // Validation passed, proceed with login
    alert('Logged in successfully!');
    setLoggedIn(true); // Update login status
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google login integration
    alert('Google login functionality will be added here.');
    // Perform Google login logic here
  };

  return (
    <Box display="flex" justifyContent="center" marginTop={10}>
      {loggedIn ? (
        <Main /> // Render Main component if logged in
      ) : (
        <Paper elevation={3} sx={{ width: 'fit-content', margin: 'auto' }}>
          <Container maxWidth="xs" padding={2}>
            <form onSubmit={handleLogin}>
              <Typography variant="h5" align="center" marginTop={5}>
                Login
              </Typography>
              <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                sx={{ marginTop: 4 }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                sx={{ marginTop: 4 }}
              />
              <Box textAlign="center" marginTop={2}>
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </Box>
              <Typography variant="body1" align="center" marginTop={2}>
                Don't have an account? <Link href="#" onClick={switchToSignup}>Sign Up</Link>
              </Typography>
              
            </form>
          </Container>
        </Paper>
      )}
    </Box>
  );
};

export default Login;
