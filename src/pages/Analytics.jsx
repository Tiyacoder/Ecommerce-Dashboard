import React from 'react';
import {
  Box,
  Typography,
  Paper,
  IconButton,
} from '@mui/material';
import {
  MoreVert,
  TrendingUp,
  People,
  SyncAlt,
  TrendingDown,
} from '@mui/icons-material';
import TrafficAndCountrySection from '../components/TrafficAndCountrySection';
import PageViewsAndTrafficSources from '../components/PageViewsAndTrafficSources';

const analyticsCards = [
  {
    label: 'Impressions',
    value: '136,758K',
    color: '#d946ef',
    icon: <TrendingUp />,
  },
  {
    label: 'Engagements',
    value: '125,964K',
    color: '#22c55e',
    icon: <People />,
  },
  {
    label: 'Conversions',
    value: '141,253K',
    color: '#3b82f6',
    icon: <SyncAlt />,
  },
  {
    label: 'Bounce Rate',
    value: '154,179K',
    color: '#ef4444',
    icon: <TrendingDown />,
  },
];

const AnalyticsCard = ({ item }) => (
  <Paper
    elevation={0}
    sx={{
      flex: 1,
      bgcolor: item.color,
      color: 'white',
      p: 2,
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 160, // ⬅️ Increased height
    }}
  >
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="subtitle1" fontWeight="bold">
        {item.value}
      </Typography>
      <IconButton size="small" sx={{ color: 'white' }}>
        <MoreVert />
      </IconButton>
    </Box>
    <Typography variant="body2" mt={1}>
      {item.label}
    </Typography>
  </Paper>
);

const Analytics = () => {
  return (
    <Box sx={{ px: 3, py: 2 }}>
      <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
        Analytics
      </Typography>

      {/* Cards Section */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {analyticsCards.map((item, idx) => (
          <AnalyticsCard key={idx} item={item} />
        ))}
      </Box>

      {/* Visitors + Country Section */}
      <TrafficAndCountrySection />

      {/* Page Views + Traffic Sources Section */}
      <PageViewsAndTrafficSources />
    </Box>
  );
};

export default Analytics;
