import React from 'react';
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
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
          <Typography variant="subtitle1" fontWeight={600}>
            Page Views
          </Typography>
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        </Box>

        <Table size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f9fafb' }}>
              <TableCell sx={{ fontWeight: 600 }}>PAGE NAME</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>VISITORS</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>BOUNCE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ['/ecommerce', 5787, '20%'],
              ['/analytics', 4934, '35%'],
              ['/register', 6478, '15%'],
              ['/message', 3589, '40%'],
              ['/product-upload', 2872, '55%'],
              ['/user-profile', 1236, '63%'],
            ].map(([name, visitors, bounce], i) => (
              <TableRow
                key={i}
                hover
                sx={{
                  height: 70, // ⬅️ Increased row height
                }}
              >
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography color="primary" sx={{ display: 'inline-flex' }}>
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-9l-7-7z" />
                        <path d="M13 3v6h6" />
                      </svg>
                    </Typography>
                    {name}
                  </Box>
                </TableCell>
                <TableCell>{visitors}</TableCell>
                <TableCell>{bounce}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Traffic Sources */}
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="subtitle1" fontWeight={600}>
            Traffic Sources
          </Typography>
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        </Box>

        <Table size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#1d4ed8' }}>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>SOURCE</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>USERS</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>SESSIONS</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>BOUNCE</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>DURATION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ['Direct', 872, 1077, '63%', '00:09:18'],
              ['Referral', 789, 390, '74%', '00:03:20'],
              ['Organic', 872, 1077, '63%', '00:09:18'],
              ['Social', 1023, 1265, '29%', '00:06:25'],
              ['Campaign', 7843, 2389, '35%', '00:15:25'],
              ['Others', 872, 1077, '63%', '00:09:18'],
            ].map(([source, users, sessions, bounce, duration], i) => (
              <TableRow
                key={i}
                hover
                sx={{
                  height: 70, // ⬅️ Increased row height
                }}
              >
                <TableCell>{source}</TableCell>
                <TableCell>{users}</TableCell>
                <TableCell>{sessions}</TableCell>
                <TableCell>{bounce}</TableCell>
                <TableCell>{duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default PageViewsAndTrafficSources;
