import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
  Divider,
} from '@mui/material';

const Settings = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Informations Section */}
      <Typography variant="h6" gutterBottom>
        Informations
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Update your site’s general information like title, description, and contact details. This
        information will be used across various pages and settings.
      </Typography>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Site Title" placeholder="My Awesome Dashboard" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Tagline" placeholder="Manage Everything Easily" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Email Address" placeholder="admin@example.com" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Website URL" placeholder="https://www.example.com" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            placeholder="A flexible and modern admin dashboard to manage users, orders, and analytics efficiently."
            multiline
            rows={4}
          />
        </Grid>
      </Grid>

      <Divider sx={{ mb: 3 }} />

      {/* Accessibility Section */}
      <Typography variant="h6" gutterBottom>
        Accessibility
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Control what kind of notifications and access behavior users will experience on your platform.
      </Typography>

      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Send notification on each user registration"
      />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Allow users to register on the website"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Send notification for direct messages"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Require admin approval for new memberships"
      />
    </Box>
  );
};

export default Settings;
