import React from 'react';
import {
  Box, Paper, Typography, Avatar, Grid, TextField,
  Button, Divider
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

const MyAccount = () => (
  <Box sx={{ p: 3 }}>
    <Grid container spacing={3}>
      {/* Left Panel: Profile Info */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 1 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Profile</Typography>
            <Button startIcon={<EditIcon />} size="small" variant="outlined">
              Edit
            </Button>
          </Box>

          <Box textAlign="center" my={3}>
            <Avatar
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              sx={{ width: 100, height: 100, mx: 'auto' }}
            />
          </Box>

          <TextField
            fullWidth label="Username" defaultValue="mironcoder" sx={{ mb: 2 }}
          />
          <TextField
            fullWidth label="Full Name" defaultValue="Miron Mahmud" sx={{ mb: 2 }}
          />
          <TextField
            fullWidth label="Email" defaultValue="demo@example.com" sx={{ mb: 2 }}
          />
          <TextField
            fullWidth label="Phone" defaultValue="+91 987-654-3210" sx={{ mb: 2 }}
          />
          <TextField
            fullWidth label="Address" defaultValue="11Hd-50, Avenue NY 90001, USA"
          />
        </Paper>
      </Grid>

      {/* Right Panel: Password Update */}
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h6" gutterBottom>Update Password</Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Leave blank if you don’t want to change.
          </Typography>

          <TextField
            fullWidth type="password" label="Current Password" sx={{ mb: 2 }}
          />
          <TextField
            fullWidth type="password" label="New Password" sx={{ mb: 2 }}
          />
          <TextField
            fullWidth type="password" label="Confirm Password" sx={{ mb: 2 }}
          />

          <Divider sx={{ my: 2 }} />

          <Box textAlign="right">
            <Button variant="contained" color="primary">
              Update
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

export default MyAccount;
