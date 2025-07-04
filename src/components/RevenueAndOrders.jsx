import React from 'react';
import {
  Box,
  Typography,
  Paper,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const revenueData = [
  { month: 'JAN', invested: 500, earnings: 400, expenses: 300 },
  { month: 'FEB', invested: 800, earnings: 700, expenses: 500 },
  { month: 'MAR', invested: 1000, earnings: 850, expenses: 600 },
  { month: 'APR', invested: 1200, earnings: 900, expenses: 650 },
  { month: 'MAY', invested: 1400, earnings: 1000, expenses: 700 },
  { month: 'JUN', invested: 1600, earnings: 1100, expenses: 800 },
  { month: 'JUL', invested: 1500, earnings: 1050, expenses: 780 },
  { month: 'AGU', invested: 1500, earnings: 1100, expenses: 770 },
  { month: 'SEP', invested: 1500, earnings: 1100, expenses: 770 },
  { month: 'OCT', invested: 1500, earnings: 1100, expenses: 770 },
  { month: 'NOV', invested: 1300, earnings: 1050, expenses: 750 },
  { month: 'DEC', invested: 1100, earnings: 1000, expenses: 720 },
];

const ordersOverviewData = [
  { name: 'Pending', value: 28, color: '#d946ef', count: 547 },
  { name: 'Shipped', value: 20, color: '#60a5fa', count: 398 },
  { name: 'Recieved', value: 31, color: '#22c55e', count: 605 },
  { name: 'Cancelled', value: 13, color: '#ef4444', count: 249 },
  { name: 'Refunded', value: 9, color: '#fbbf24', count: 176 },
];

const RevenueAndOrders = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 4, minHeight: 600 }}>
      {/* Revenue Report */}
      <Paper
        elevation={0}
        sx={{
          flex: 2,
          p: 3,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 600, // set fixed height
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="h6">Revenue Report</Typography>
          <FormControl size="small">
            <Select defaultValue="monthly" displayEmpty>
              <MenuItem value="monthly">Select Option</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', gap: 6, mb: 4 }}>
          <Box>
            <Typography variant="caption" color="text.secondary">
              Invested
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              3,387.67K
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">
              Earnings
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              2,856.35K
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">
              Expenses
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              1,994.12K
            </Typography>
          </Box>
        </Box>

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={revenueData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="stepAfter"
              dataKey="invested"
              stackId="1"
              stroke="#60a5fa"
              fill="#60a5fa"
              fillOpacity={0.3}
            />
            <Area
              type="stepAfter"
              dataKey="earnings"
              stackId="1"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.3}
            />
            <Area
              type="stepAfter"
              dataKey="expenses"
              stackId="1"
              stroke="#d946ef"
              fill="#d946ef"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Paper>

      {/* Orders Overview */}
      <Paper
        elevation={0}
        sx={{
          flex: 1,
          p: 3,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 600, // match height
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Orders Overview
          </Typography>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={ordersOverviewData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={45}
              >
                {ordersOverviewData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ mt: 4 }}>
          {ordersOverviewData.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                py: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: item.color,
                  }}
                />
                {item.name}
              </Typography>
              <Typography variant="body2">{item.count}</Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default RevenueAndOrders;
