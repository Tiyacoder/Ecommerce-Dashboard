import React from 'react';
import {
  Box,
  Button,
  Divider,
  Link,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  InputAdornment
} from '@mui/material';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = React.useState('');
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4ff, #e6f0ff)',
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
        <Typography variant="h6" sx={{ mb: 3 }}>
          Login to Hotash
        </Typography>

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
            ),
          }}
        />
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
            ),
          }}
        />
        <Select
          fullWidth
          value={role}
          displayEmpty
          onChange={(e) => setRole(e.target.value)}
          sx={{ mb: 2 }}
        >
          <MenuItem value="" disabled>
            Select Option
          </MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
        </Select>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mb: 1,
            backgroundColor: '#0066FF',
            '&:hover': {
              backgroundColor: '#0055cc',
            },
          }}
        >
          SIGN IN
        </Button>

        <Link href="#" underline="hover" sx={{ display: 'block', mb: 2 }}>
          FORGOT PASSWORD
        </Link>

        <Divider sx={{ my: 2 }}>or</Divider>

        <Button
          fullWidth
          startIcon={<TwitterIcon />}
          sx={{
            mb: 1,
            backgroundColor: '#1DA1F2',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#198cd8',
            },
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
            '&:hover': {
              backgroundColor: '#2d4373',
            },
          }}
        >
          Continue with Facebook
        </Button>

        {/* Home Button */}
        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => navigate('/ecommerce')}
        >
          Go to Home
        </Button>

        <Typography sx={{ mt: 3 }}>
          Don’t have an account?{' '}
          <Link href="#" underline="hover">
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
