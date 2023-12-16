import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Link, Paper, Box } from '@mui/material';

const Signup = ({ switchToLogin }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (newUsername && newPassword) {
      alert('Account created successfully!');
     
    } else {
      alert('Please fill in all the fields.');
     
    }
  };

  return (
    <Box display="flex" justifyContent="center" marginTop={10}>
      <Paper elevation={3} sx={{ width: 'fit-content', margin: 'auto' }}>
        <Container maxWidth="xs" padding={2}>
          <form onSubmit={handleSignup}>
            <Typography variant="h5" align="center" marginTop={5}>Sign Up</Typography>
            <TextField
              label="Username"
              variant="outlined"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              required
              fullWidth
              sx={{ marginTop: 3 }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              fullWidth
              sx={{ marginTop: 3 }}
            />
           <Box textAlign="center" marginTop={3}>
           <Button type="submit" variant="contained" color="primary" sx={{ marginBottom: 2 }}>
            Sign Up
            </Button>
             </Box>

           
            
          </form>
        </Container>
      </Paper>
    </Box>
  );
};

export default Signup;
