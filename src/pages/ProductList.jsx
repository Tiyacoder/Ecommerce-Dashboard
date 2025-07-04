import React from 'react';
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Paper
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CategoryIcon from '@mui/icons-material/Category';
import VerifiedIcon from '@mui/icons-material/Verified';
import ProductTable from '../components/ProductTable'; // ✅ Correct path

const stats = [
  {
    label: 'Total Products',
    value: 547,
    icon: <ShoppingBagIcon sx={{ fontSize: 40, color: '#90caf9' }} />,
    bgColor: 'linear-gradient(to right, #2196f3, #42a5f5)',
  },
  {
    label: 'Total_categories',
    value: 605,
    icon: <CategoryIcon sx={{ fontSize: 40, color: '#a5d6a7' }} />,
    bgColor: 'linear-gradient(to right, #43a047, #66bb6a)',
  },
  {
    label: 'Total_barnds',
    value: 249,
    icon: <VerifiedIcon sx={{ fontSize: 40, color: '#ce93d8' }} />,
    bgColor: 'linear-gradient(to right, #ab47bc, #ec407a)',
  },
];

const ProductList = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box
        sx={{
          bgcolor: 'white',
          p: 2,
          borderRadius: 2,
          boxShadow: 1,
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Product List
        </Typography>
        <Breadcrumbs sx={{ mt: 1 }} separator="~">
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Products
          </Link>
          <Typography color="text.primary">Product List</Typography>
        </Breadcrumbs>
      </Box>

      {/* Stats Cards */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        {stats.map((stat, index) => (
          <Paper
            key={index}
            sx={{
              flex: 1,
              minWidth: 250,
              minHeight: 150,
              p: 4,
              borderRadius: 2,
              background: stat.bgColor,
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold">
                {stat.value}
              </Typography>
              <Typography variant="body1">{stat.label}</Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                opacity: 0.3,
              }}
            >
              {stat.icon}
            </Box>
          </Paper>
        ))}
      </Box>

      {/* ✅ Product Table from components */}
      <ProductTable />
    </Box>
  );
};

export default ProductList;
