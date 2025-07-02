import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
  InputAdornment
} from '@mui/material';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Home as HomeIcon
} from '@mui/icons-material';

const Register = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        background: 'linear-gradient(135deg, #f0f4ff, #e6f0ff)'
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 4,
          py: 8
        }}
      >
        <Box maxWidth={400}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            BEST UX/UI FASHION<br />
            ECOMMERCE DASHBOARD<br />
            & ADMIN PANEL
          </Typography>
          <Typography variant="body2" sx={{ color: '#555', mb: 4 }}>
             Build visually stunning dashboards and intuitive admin experiences
  with clean design, advanced components, and a seamless user journey.
  Perfect for developers who care about performance and elegance.
          </Typography>
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            sx={{
              backgroundColor: '#0066FF',
              '&:hover': { backgroundColor: '#0055cc' }
            }}
          >
            GO TO HOME
          </Button>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            maxWidth: 400,
            p: 4,
            textAlign: 'center',
            borderRadius: 2
          }}
        >
          <Typography variant="h6" sx={{ mb: 3 }}>
            Register a new account
          </Typography>

          {/* Name */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="enter your name"
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              )
            }}
          />

          {/* Email */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="enter your email"
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              )
            }}
          />

          {/* Password */}
          <TextField
            fullWidth
            type="password"
            variant="outlined"
            placeholder="enter your password"
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              )
            }}
          />

          {/* Confirm Password */}
          <TextField
            fullWidth
            type="password"
            variant="outlined"
            placeholder="confirm your password"
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              )
            }}
          />

          {/* Terms Checkbox */}
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the all Terms & Condiotions"
            sx={{ mb: 2, textAlign: 'left' }}
          />

          {/* Sign Up Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mb: 2,
              backgroundColor: '#0066FF',
              '&:hover': { backgroundColor: '#0055cc' }
            }}
          >
            SIGN UP
          </Button>

          <Divider sx={{ my: 2 }}>or</Divider>

          {/* Social Buttons */}
          <Button
            fullWidth
            startIcon={<TwitterIcon />}
            sx={{
              mb: 1,
              backgroundColor: '#1DA1F2',
              color: '#fff',
              '&:hover': { backgroundColor: '#198cd8' }
            }}
          >
            Continue with Twitter
          </Button>

          <Button
            fullWidth
            startIcon={<FacebookIcon />}
            sx={{
              backgroundColor: '#3b5998',
              color: '#fff',
              '&:hover': { backgroundColor: '#2d4373' }
            }}
          >
            Continue with Facebook
          </Button>

          {/* Login Link */}
          <Typography sx={{ mt: 3 }}>
            Already have an account?{' '}
            <Link href="/login" underline="hover">
              Login
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Register;
