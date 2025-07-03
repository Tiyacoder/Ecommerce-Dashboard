import React from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Link
} from '@mui/material';
import { Email as EmailIcon, Home as HomeIcon } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0f7fa, #f1f8e9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          textAlign: 'center',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          reset the password
        </Typography>

        <TextField
          fullWidth
          placeholder="Enter your email"
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mb: 2,
            backgroundColor: '#0066FF',
            '&:hover': {
              backgroundColor: '#0055cc',
            },
          }}
        >
          GET LINK
        </Button>

        <Paper
          variant="outlined"
          sx={{
            mt: 2,
            py: 1,
            backgroundColor: '#f5f5f5',
            boxShadow: 'none',
          }}
        >
          <Typography variant="body2">
            remember the password?{' '}
            <Link component={RouterLink} to="/login" underline="hover">
              Login
            </Link>
          </Typography>
        </Paper>

        {/* ✅ Home Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<HomeIcon />}
          onClick={() => navigate('/ecommerce')}
          sx={{
            mt: 3,
            color: '#0066FF',
            borderColor: '#0066FF',
            '&:hover': {
              borderColor: '#0055cc',
              backgroundColor: '#f0f4ff',
            },
          }}
        >
          GO TO HOME
        </Button>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;
