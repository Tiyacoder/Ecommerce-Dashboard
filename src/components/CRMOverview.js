import React from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import { ThumbUp, InsertChart, People, ShoppingCart } from '@mui/icons-material';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

// Sample Data
const barData = [
  { day: 'S', value: 40 },
  { day: 'M', value: 30 },
  { day: 'T', value: 50 },
  { day: 'W', value: 20 },
  { day: 'T', value: 25 },
  { day: 'F', value: 35 },
  { day: 'S', value: 40 },
];

const cards = [
  {
    title: 'Campaign Sent',
    value: 6790,
    change: '+45%',
    changeColor: 'green',
    icon: <InsertChart />,
    gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
    barColor: '#3b82f6',
  },
  {
    title: 'Leads Generate',
    value: 5397,
    change: '+35%',
    changeColor: 'green',
    icon: <ThumbUp />,
    gradient: 'linear-gradient(135deg, #f97316, #fb923c)',
    barColor: '#f97316',
  },
  {
    title: 'Deals Customer',
    value: 4278,
    change: '-25%',
    changeColor: 'red',
    icon: <People />,
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    barColor: '#10b981',
  },
  {
    title: 'Revenue Booked',
    value: 3594,
    change: '+15%',
    changeColor: 'green',
    icon: <ShoppingCart />,
    gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    barColor: '#a855f7',
  },
];

const CRMOverview = () => {
  return (
    <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={3} mt={2}>
      {cards.map((card, index) => (
        <Paper key={index} sx={{ p: 3, display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Avatar sx={{
              background: card.gradient,
              width: 40,
              height: 40,
              color: 'white',
            }}>
              {card.icon}
            </Avatar>
            <Box textAlign="right">
              <Typography fontSize={22} fontWeight="bold">{card.value}</Typography>
              <Typography fontSize={13} color="text.secondary">{card.title}</Typography>
              <Typography fontSize={12} color={card.changeColor} mt={0.5}>
                {card.change} Since last week
              </Typography>
            </Box>
          </Box>

          <Box sx={{ height: 100, mt: 3 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="day" hide />
                <Bar dataKey="value" fill={card.barColor} radius={[10, 10, 0, 0]} barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default CRMOverview;
