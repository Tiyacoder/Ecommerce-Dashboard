import React from 'react';
import { Box, Grid, Typography, Avatar, Divider, Button, Paper } from '@mui/material';
import {
  Phone, Email, Language, LocationOn,
  Facebook, Twitter, LinkedIn, WhatsApp, YouTube,
  ShoppingCart, Star, ShoppingBag
} from '@mui/icons-material';

const UserProfile = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* LEFT PANEL: User Info */}
        <Grid item xs={12} md={4}>
          <Box sx={{ borderRadius: 2, p: 3, backgroundColor: '#fff', boxShadow: 1 }}>
            <Typography variant="h6" fontWeight={600}>User Information</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Avatar
                alt="Miron Mahmud"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                sx={{ width: 64, height: 64, mr: 2 }}
              />
              <Box>
                <Typography fontWeight={600}>Miron Mahmud</Typography>
                <Typography color="text.secondary" fontSize={14}>@mironcoder</Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" gutterBottom>Communication</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone fontSize="small" sx={{ mr: 1 }} />
              <Typography fontSize={14}>+91 987-654-3210</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email fontSize="small" sx={{ mr: 1 }} />
              <Typography fontSize={14}>demo@example.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Language fontSize="small" sx={{ mr: 1 }} />
              <Typography fontSize={14}>examplehotash.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn fontSize="small" sx={{ mr: 1 }} />
              <Typography fontSize={14}>11Hd-50, Avenue NY 90001, United States</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" gutterBottom>Biography</Typography>
            <Typography fontSize={14} color="text.secondary">
              It has survived not only five centuries,<br />
              but also the leap into electronic typesetting, remaining essentially unchanged.<br />
              It was popularised in the 1960s with the release of Letraset sheets
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" gutterBottom>Elsewhere</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              <Button startIcon={<Facebook />} size="small" variant="contained" color="primary">Facebook</Button>
              <Button startIcon={<Twitter />} size="small" variant="contained" color="info">Twitter</Button>
              <Button startIcon={<LinkedIn />} size="small" variant="contained" color="primary">LinkedIn</Button>
              <Button startIcon={<WhatsApp />} size="small" variant="contained" color="success">WhatsApp</Button>
              <Button startIcon={<YouTube />} size="small" variant="contained" color="error">YouTube</Button>
            </Box>
          </Box>
        </Grid>

        {/* RIGHT PANEL: Cards + Recent Activities */}
        <Grid item xs={12} md={8}>
          {/* Card Row */}
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Paper
              sx={{
                flex: 1,
                bgcolor: '#d946ef',
                color: 'white',
                p: 2,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Typography fontWeight={700} fontSize={20}>5789</Typography>
                <Typography fontSize={14}>Total Orders</Typography>
              </Box>
              <ShoppingCart />
            </Paper>
            <Paper
              sx={{
                flex: 1,
                bgcolor: '#fbbf24',
                color: 'white',
                p: 2,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Typography fontWeight={700} fontSize={20}>2373</Typography>
                <Typography fontSize={14}>Total Reviews</Typography>
              </Box>
              <Star />
            </Paper>
            <Paper
              sx={{
                flex: 1,
                bgcolor: '#10b981',
                color: 'white',
                p: 2,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Typography fontWeight={700} fontSize={20}>7893</Typography>
                <Typography fontSize={14}>Total Products</Typography>
              </Box>
              <ShoppingBag />
            </Paper>
          </Box>

          {/* Recent Activities */}
          <Box sx={{ borderRadius: 2, p: 3, backgroundColor: '#fff', boxShadow: 1 }}>
            <Typography variant="h6" fontWeight={600}>Recent Activities</Typography>

            <Box sx={{ mt: 3 }}>
              <Typography fontWeight={500}>✅ Your account is logged in</Typography>
              <Typography fontSize={14} color="text.secondary">
                Successfully signed in to the dashboard from Chrome on Windows 11.
              </Typography>
              <Typography fontSize={12} color="text.disabled" sx={{ mt: 0.5 }}>45 minutes ago</Typography>
              <Divider sx={{ my: 2 }} />

              <Typography fontWeight={500}>🌐 Language changed to Bengali</Typography>
              <Typography fontSize={14} color="text.secondary">
                Interface language updated for better accessibility.
              </Typography>
              <Typography fontSize={12} color="text.disabled" sx={{ mt: 0.5 }}>24 hours ago</Typography>
              <Divider sx={{ my: 2 }} />

              <Typography fontWeight={500}>🛒 Viewed product: “Wireless Headphones”</Typography>
              <Typography fontSize={14} color="text.secondary">
                Browsed product page and checked reviews.
              </Typography>
              <Typography fontSize={12} color="text.disabled" sx={{ mt: 0.5 }}>Yesterday</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
