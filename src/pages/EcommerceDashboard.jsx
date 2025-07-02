import React from 'react';
import {
  Box,
  Typography,
  Paper,
  IconButton,
} from '@mui/material';
import {
  MoreVert,
  Person,
  ShoppingCart,
  Storefront,
  Star,
} from '@mui/icons-material';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import ProductTable from '../components/ProductTable';
import RevenueAndOrders from '../components/RevenueAndOrders';
import ClientActivitySection from '../components/ClientActivitySection';


const salesData = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 800 },
  { name: 'Mar', uv: 1000 },
  { name: 'Apr', uv: 1800 },
];

const kpiCards = [
  {
    label: 'Total Users',
    value: 277,
    change: '+95%',
    lastMonth: 'Last Month',
    icon: <Person />,
    color: '#22c55e',
  },
  {
    label: 'Total Orders',
    value: 338,
    change: '+30%',
    lastMonth: 'Last Month',
    icon: <ShoppingCart />,
    color: '#e879f9',
  },
  {
    label: 'Total Sales',
    value: '$3,787,681.00',
    change: '40.63%',
    lastMonth: '$3,578.90 in last month',
    chart: true,
    color: '#3b82f6',
  },
  {
    label: 'Total Products',
    value: 557,
    change: '+25%',
    lastMonth: 'Last Month',
    icon: <Storefront />,
    color: '#60a5fa',
  },
  {
    label: 'Total Reviews',
    value: 166,
    change: '+45%',
    lastMonth: 'Last Month',
    icon: <Star />,
    color: '#fbbf24',
  },
];

const KPIWidget = ({ card }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        bgcolor: card.color,
        color: '#fff',
        height: '100%',
        position: 'relative',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <IconButton
        sx={{ position: 'absolute', top: 8, right: 8, color: '#fff' }}
        size="small"
      >
        <MoreVert />
      </IconButton>

      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {card.label}
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          {card.value}
        </Typography>
      </Box>

      {card.chart ? (
        <>
          <Typography variant="caption">{card.lastMonth}</Typography>
          <Box sx={{ height: 60, mt: 1 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#fff"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </>
      ) : (
        <Typography variant="caption">
          {card.change} {card.lastMonth}
        </Typography>
      )}
    </Paper>
  );
};

const EcommerceDashboard = () => {
  return (
    <Box sx={{ px: 3, py: 2 }}>
      {/* Breadcrumb */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mb: 2,
          color: '#6b7280',
        }}
      >
        <Typography variant="caption">Home ~ Dashboard ~ Ecommerce</Typography>
      </Box>

      {/* Title */}
      <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
        Ecommerce
      </Typography>

      {/* KPI Card Layout */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '180px 180px',
          gap: 2,
        }}
      >
        <Box sx={{ gridColumn: '1', gridRow: '1' }}>
          <KPIWidget card={kpiCards[0]} />
        </Box>
        <Box sx={{ gridColumn: '2', gridRow: '1' }}>
          <KPIWidget card={kpiCards[1]} />
        </Box>
        <Box sx={{ gridColumn: '3', gridRow: '1 / span 2' }}>
          <KPIWidget card={kpiCards[2]} />
        </Box>
        <Box sx={{ gridColumn: '1', gridRow: '2' }}>
          <KPIWidget card={kpiCards[3]} />
        </Box>
        <Box sx={{ gridColumn: '2', gridRow: '2' }}>
          <KPIWidget card={kpiCards[4]} />
        </Box>
      </Box>

      {/* ✅ Product Table Section */}
      <Box mt={5}>
        <ProductTable
          categoryOptions={['MEN', 'WOMEN', 'CHILDREN']}
          brandOptions={['gucci', 'h&m', 'zara']}
        />
      </Box>

      {/* ✅ Revenue and Orders Section */}
      <Box mt={5}>
        <RevenueAndOrders />
      </Box>
      <Box mt={5}>
  <ClientActivitySection />
</Box>

    </Box>
  );
};

export default EcommerceDashboard;
