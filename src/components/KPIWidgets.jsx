import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import {
  Person, ShoppingCart, Storefront, Star, TrendingUp, TrendingDown
} from '@mui/icons-material';

const cardData = [
  {
    title: 'Total Users',
    value: 277,
    change: '+95%',
    lastMonth: 'Last Month',
    color: '#4CAF50',
    icon: <Person />,
    trend: <TrendingUp />,
  },
  {
    title: 'Total Orders',
    value: 338,
    change: '+30%',
    lastMonth: 'Last Month',
    color: '#e91e63',
    icon: <ShoppingCart />,
    trend: <TrendingDown />,
  },
  {
    title: 'Total Sales',
    value: '$3,787,681.00',
    change: '40.63%',
    lastMonth: '$3,578.90 in last month',
    color: '#2979ff',
    icon: null,
    isChart: true,
  },
  {
    title: 'Total Products',
    value: 557,
    change: '+25%',
    lastMonth: 'Last Month',
    color: '#2196f3',
    icon: <Storefront />,
    trend: <TrendingDown />,
  },
  {
    title: 'Total Reviews',
    value: 166,
    change: '+45%',
    lastMonth: 'Last Month',
    color: '#ff9800',
    icon: <Star />,
    trend: <TrendingUp />,
  },
];

const KPIWidgets = () => {
  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={card.isChart ? 6 : 3} key={index}>
          <Card sx={{
            background: card.color,
            color: '#fff',
            height: card.isChart ? 140 : 120,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: 2
          }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="subtitle2">{card.title}</Typography>
                  <Typography variant="h5" fontWeight="bold">{card.value}</Typography>
                  <Typography variant="body2">{card.change} {card.lastMonth}</Typography>
                </Box>
                {card.icon && <Box fontSize="30px">{card.icon}</Box>}
              </Box>
              {card.isChart && (
                <Box mt={2} sx={{ opacity: 0.4 }}>
                  <img src="https://dummyimage.com/200x40/ffffff/ffffff" alt="chart" />
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default KPIWidgets;
