import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Divider,
  IconButton,
} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MoreVert, CalendarMonth } from '@mui/icons-material';

const visitorData = [
  { month: 'JAN', desktop: 400, mobile: 200 },
  { month: 'FEB', desktop: 420, mobile: 250 },
  { month: 'MAR', desktop: 430, mobile: 280 },
  { month: 'APR', desktop: 300, mobile: 180 },
  { month: 'MAY', desktop: 260, mobile: 220 },
  { month: 'JUN', desktop: 310, mobile: 300 },
  { month: 'JUL', desktop: 450, mobile: 270 },
  { month: 'AGU', desktop: 390, mobile: 310 },
  { month: 'SEP', desktop: 280, mobile: 400 },
  { month: 'OCT', desktop: 240, mobile: 380 },
  { month: 'NOV', desktop: 290, mobile: 310 },
  { month: 'DEC', desktop: 340, mobile: 260 },
];

const countries = [
  {
    name: 'Bangladesh',
    value: 2500,
    seo: '90%',
    flagUrl: 'https://flagcdn.com/w40/bd.png',
  },
  {
    name: 'United State',
    value: 1400,
    seo: '85%',
    flagUrl: 'https://flagcdn.com/w40/us.png',
  },
  {
    name: 'Saudi Arabia',
    value: 3900,
    seo: '70%',
    flagUrl: 'https://flagcdn.com/w40/sa.png',
  },
  {
    name: 'Germany',
    value: 4170,
    seo: '65%',
    flagUrl: 'https://flagcdn.com/w40/de.png',
  },
  {
    name: 'Philippines',
    value: 5298,
    seo: '58%',
    flagUrl: 'https://flagcdn.com/w40/ph.png',
  },
];

const TrafficAndCountrySection = () => {
  return (
    <Box
      mt={5}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
        gap: 2,
      }}
    >
      {/* Visitors Device */}
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" fontWeight="600">
            Visitors Device
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #d1d5db',
              borderRadius: 2,
              px: 2,
              py: 0.5,
              fontSize: 14,
              color: '#6b7280',
              gap: 1,
              cursor: 'pointer',
            }}
          >
            <CalendarMonth sx={{ fontSize: 18 }} />
            Select Option
          </Box>
        </Box>

        <Box sx={{ height: 450, mt: 3 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={visitorData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="desktop" stackId="a" fill="#1e3a8a" />
              <Bar dataKey="mobile" stackId="a" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      {/* Country Keywords */}
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="subtitle1" fontWeight="600">
            Country Keywords
          </Typography>
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        </Box>

        {countries.map((country, index) => (
          <Box key={index}>
            <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar src={country.flagUrl} sx={{ width: 30, height: 30 }} />
                <Box>
                  <Typography fontSize={13} color="#6b7280">
                    COUNTRY
                  </Typography>
                  <Typography fontWeight={600}>{country.name}</Typography>
                </Box>
              </Box>
              <Box textAlign="right">
                <Typography fontSize={13} color="#6b7280">
                  VALUE
                </Typography>
                <Typography fontWeight={600}>{country.value}</Typography>
              </Box>
              <Box textAlign="right" width="50px">
                <Typography fontSize={13} color="#6b7280">
                  SEO
                </Typography>
                <Typography fontWeight={600}>{country.seo}</Typography>
              </Box>
            </Box>
            {index < countries.length - 1 && <Divider sx={{ my: 1.5 }} />}
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default TrafficAndCountrySection;
