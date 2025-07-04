import React from 'react';
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Grid,
  Paper
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DraftsIcon from '@mui/icons-material/Drafts';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const stats = [
  {
    label: 'Recieved Amount',
    value: '$78,593.00',
    icon: <AccountBalanceIcon sx={{ fontSize: 40, color: '#a5d6a7' }} />,
    bgColor: 'linear-gradient(to right, #43a047, #66bb6a)',
  },
  {
    label: 'Drafts Amount',
    value: '$24,950.00',
    icon: <DraftsIcon sx={{ fontSize: 40, color: '#90caf9' }} />,
    bgColor: 'linear-gradient(to right, #2196f3, #42a5f5)',
  },
  {
    label: 'Pending Amount',
    value: '$53,617.00',
    icon: <MoreHorizIcon sx={{ fontSize: 40, color: '#ce93d8' }} />,
    bgColor: 'linear-gradient(to right, #ab47bc, #ec407a)',
  },
];

const InvoiceList = () => {
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
          Invoice List
        </Typography>
        <Breadcrumbs sx={{ mt: 1 }} separator="~">
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Invoices
          </Link>
          <Typography color="text.primary">Invoice List</Typography>
        </Breadcrumbs>
      </Box>

      {/* Stats Cards - now take full width */}
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
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
                <Typography variant="h6">{stat.label}</Typography>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 16,
                  opacity: 0.3,
                }}
              >
                {stat.icon}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InvoiceList;
