import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const PageViewsAndTrafficSources = () => {
  return (
    <Box
      mt={4}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 2,
      }}
    >
      {/* Page Views */}
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="subtitle1" fontWeight="600">Page Views</Typography>
          <IconButton size="small"><MoreVert /></IconButton>
        </Box>

        <Box component="table" width="100%" sx={{ fontSize: 14 }}>
          <Box component="thead" sx={{ bgcolor: '#f9fafb', fontWeight: 'bold' }}>
            <Box component="tr" display="grid" gridTemplateColumns="3fr 2fr 1fr" py={1}>
              <Box component="th">PAGE NAME</Box>
              <Box component="th">VISITORS</Box>
              <Box component="th">BOUNCE</Box>
            </Box>
          </Box>

          <Box component="tbody" sx={{ display: 'grid', rowGap: '20px' }}>
            {[
              ['/ecommerce', 5787, '20%'],
              ['/analytics', 4934, '35%'],
              ['/register', 6478, '15%'],
              ['/message', 3589, '40%'],
              ['/product-upload', 2872, '55%'],
              ['/user-profile', 1236, '63%'],
            ].map(([name, visitors, bounce], i) => (
              <Box
                key={i}
                component="tr"
                display="grid"
                gridTemplateColumns="3fr 2fr 1fr"
                py={1.5}
                alignItems="center"
              >
                <Box component="td" display="flex" alignItems="center" gap={1}>
                  <Typography color="primary" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-9l-7-7z" />
                      <path d="M13 3v6h6" />
                    </svg>
                  </Typography>
                  {name}
                </Box>
                <Box component="td">{visitors}</Box>
                <Box component="td">{bounce}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>

      {/* Traffic Sources */}
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="subtitle1" fontWeight="600">Traffic Sources</Typography>
          <IconButton size="small"><MoreVert /></IconButton>
        </Box>

        <Box component="table" width="100%" sx={{ fontSize: 14 }}>
          <Box component="thead" sx={{ bgcolor: '#1d4ed8', color: 'white' }}>
            <Box component="tr" display="grid" gridTemplateColumns="2fr 1fr 1fr 1fr 1fr" py={1}>
              <Box component="th">SOURCE</Box>
              <Box component="th">USERS</Box>
              <Box component="th">SESSIONS</Box>
              <Box component="th">BOUNCE</Box>
              <Box component="th">DURATION</Box>
            </Box>
          </Box>

          <Box component="tbody" sx={{ display: 'grid', rowGap: '20px' }}>
            {[
              ['Direct', 872, 1077, '63%', '00:09:18'],
              ['Referral', 789, 390, '74%', '00:03:20'],
              ['Organic', 872, 1077, '63%', '00:09:18'],
              ['Social', 1023, 1265, '29%', '00:06:25'],
              ['Campaign', 7843, 2389, '35%', '00:15:25'],
              ['Others', 872, 1077, '63%', '00:09:18'],
            ].map(([source, users, sessions, bounce, duration], i) => (
              <Box
                key={i}
                component="tr"
                display="grid"
                gridTemplateColumns="2fr 1fr 1fr 1fr 1fr"
                py={1.5}
                alignItems="center"
              >
                <Box component="td" color="primary">{source}</Box>
                <Box component="td">{users}</Box>
                <Box component="td">{sessions}</Box>
                <Box component="td">{bounce}</Box>
                <Box component="td">{duration}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default PageViewsAndTrafficSources;
