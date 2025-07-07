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

import {
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts';

import TrafficAndCountrySection from '../components/TrafficAndCountrySection';
import PageViewsAndTrafficSources from '../components/PageViewsAndTrafficSources';

const analyticsCards = [
  {
    label: 'Impressions',
    value: '136,758K',
    color: '#d946ef',
    icon: <TrendingUp />,
    chartData: [
      { value: 3 },
      { value: 5 },
      { value: 2.5 },
      { value: 5.5 },
      { value: 3.2 },
      { value: 6 },
      { value: 2.8 },
      { value: 5 },
    ],
  },
  {
    label: 'Engagements',
    value: '125,964K',
    color: '#22c55e',
    icon: <People />,
    chartData: [
      { value: 2 },
      { value: 4.5 },
      { value: 3 },
      { value: 6 },
      { value: 3.5 },
      { value: 5.8 },
      { value: 2.2 },
      { value: 4.7 },
    ],
  },
  {
    label: 'Conversions',
    value: '141,253K',
    color: '#3b82f6',
    icon: <SyncAlt />,
    chartData: [
      { value: 3.5 },
      { value: 2 },
      { value: 5 },
      { value: 2.8 },
      { value: 5.5 },
      { value: 3 },
      { value: 6.2 },
      { value: 4 },
    ],
  },
  {
    label: 'Bounce Rate',
    value: '154,179K',
    color: '#ef4444',
    icon: <TrendingDown />,
    chartData: [
      { value: 5 },
      { value: 2.2 },
      { value: 6 },
      { value: 3 },
      { value: 5.3 },
      { value: 2.6 },
      { value: 5.9 },
      { value: 3.4 },
    ],
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
      minHeight: 160,
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

    <Box height={40} mt="auto">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={item.chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth={3.5}
            dot={false}
            animationDuration={800}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  </Paper>
);

const Analytics = () => {
  return (
    <Box sx={{ px: 3, py: 2 }}>
      <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
        Analytics
      </Typography>

      {/* Cards Section */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {analyticsCards.map((item, idx) => (
          <AnalyticsCard key={idx} item={item} />
        ))}
      </Box>

      <TrafficAndCountrySection />

      <PageViewsAndTrafficSources />
    </Box>
  );
};

export default Analytics;
