import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Avatar,
  Badge,
  Typography,
  alpha,
} from '@mui/material';
import {
  Search,
  Language,
  DarkMode,
  Email,
  Notifications,
  Settings,
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#fff',
        borderBottom: '1px solid #e5e7eb',
        zIndex: 1201,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        {/* Search */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#f2f6fa',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            width: 300,
          }}
        >
          <Search fontSize="small" sx={{ color: '#a0aec0' }} />
          <InputBase
            placeholder="quick finding..."
            sx={{ ml: 1, fontSize: '0.9rem', color: '#333', width: '100%' }}
          />
        </Box>

        {/* Icons & Profile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton>
            <DarkMode sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton>
            <Language sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton>
            <Badge badgeContent={12} color="primary">
              <Email sx={{ fontSize: 20 }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={23} color="primary">
              <Notifications sx={{ fontSize: 20 }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={34} color="primary">
              <Settings sx={{ fontSize: 20 }} />
            </Badge>
          </IconButton>

          {/* Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar
              src="https://i.pravatar.cc/150?img=13"
              sx={{ width: 32, height: 32 }}
            />
            <Box>
              <Typography variant="body2" fontWeight={600}>
                Miron Mahmud
              </Typography>
              <Typography variant="caption" color="text.secondary">
                @mironcoder
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
