import React, { useState } from 'react';
import {
  Box, Typography, Grid, Select, MenuItem, TextField,
  FormControl, InputLabel, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Avatar, IconButton, Checkbox
} from '@mui/material';
import { Visibility, Delete, FileDownload } from '@mui/icons-material';

const orders = [
  {
    uid: '#4980',
    client: 'miron mahmud',
    avatar: '/assets/images/avatar1.jpg',
    product: '(2) item',
    amount: '$56.00',
    payment: 'bkash',
    status: 'Pending',
    datetime: '15/06/2022 14:02',
  },
  {
    uid: '#4981',
    client: 'tahmina bonny',
    avatar: '/assets/images/avatar2.jpg',
    product: '(1) item',
    amount: '$45.00',
    payment: 'tap tap send',
    status: 'Shipped',
    datetime: '15/06/2022 14:02',
  },
  {
    uid: '#4982',
    client: 'labonno khan',
    avatar: '/assets/images/avatar3.jpg',
    product: '(3) item',
    amount: '$68.00',
    payment: 'nagad',
    status: 'Cancelled',
    datetime: '15/06/2022 14:02',
  },
  {
    uid: '#4983',
    client: 'sheikh adabali',
    avatar: '/assets/images/avatar4.jpg',
    product: '(1) item',
    amount: '$68.00',
    payment: 'paypal',
    status: 'Received',
    datetime: '15/06/2022 14:02',
  },
  {
    uid: '#4984',
    client: 'johara khatun',
    avatar: '/assets/images/avatar5.jpg',
    product: '(5) item',
    amount: '$53.00',
    payment: 'payoneer',
    status: 'Shipped',
    datetime: '15/06/2022 14:02',
  },
  {
    uid: '#4985',
    client: 'kurulus osman',
    avatar: '/assets/images/avatar6.jpg',
    product: '(4) item',
    amount: '$79.00',
    payment: 'cash on delivery',
    status: 'Pending',
    datetime: '15/06/2022 14:02',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending': return { color: '#d63384', bg: '#fce4f5' };
    case 'Shipped': return { color: '#0d6efd', bg: '#e1ecff' };
    case 'Cancelled': return { color: '#dc3545', bg: '#ffe1e1' };
    case 'Received': return { color: '#198754', bg: '#e4f6ec' };
    default: return { color: '#6c757d', bg: '#f8f9fa' };
  }
};

const OrdersPage = () => {
  const [rowsPerPage, setRowsPerPage] = useState('12');
  const [statusFilter, setStatusFilter] = useState('Pending');
  const [search, setSearch] = useState('');
  const [issuedDate, setIssuedDate] = useState('');

  return (
    <Box p={3}>
      {/* KPI Cards */}
      <Box display="flex" gap={2} flexWrap="wrap" mb={3}>
        {[
          { label: 'Pending_orders', count: 547, color: '#d63384' },
          { label: 'Shipped_orders', count: 398, color: '#0d6efd' },
          { label: 'Received_orders', count: 605, color: '#198754' },
          { label: 'Cancelled_orders', count: 249, color: '#dc3545' },
        ].map((card, idx) => (
          <Box
            key={idx}
            flex="1 1 0"
            minWidth="250px"
            component={Paper}
            sx={{
              py: 3,
              px: 2,
              borderRadius: 2,
              background: card.color,
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="h5" fontWeight="bold">{card.count}</Typography>
            <Typography variant="body2">{card.label}</Typography>
          </Box>
        ))}
      </Box>

      {/* Filters */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" mb={2}>Order Information</Typography>
        <Grid container spacing={2} wrap="nowrap">
          <Grid item sx={{ flex: 1 }}>
            <FormControl fullWidth>
              <InputLabel>Show by</InputLabel>
              <Select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(e.target.value)}
                label="Show by"
              >
                <MenuItem value="12">12 Row</MenuItem>
                <MenuItem value="25">25 Row</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{ flex: 1 }}>
            <FormControl fullWidth>
              <InputLabel>Status by</InputLabel>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                label="Status by"
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Shipped">Shipped</MenuItem>
                <MenuItem value="Received">Received</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{ flex: 1 }}>
            <TextField
              fullWidth
              type="date"
              value={issuedDate}
              onChange={(e) => setIssuedDate(e.target.value)}
              label="Issued by"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item sx={{ flex: 1 }}>
            <TextField
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="id / name / email"
              label="Search by"
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Order Table */}
      <Paper>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: '#0d6efd' }}>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell sx={{ color: 'white' }}>UID</TableCell>
                <TableCell sx={{ color: 'white' }}>Client</TableCell>
                <TableCell sx={{ color: 'white' }}>Product</TableCell>
                <TableCell sx={{ color: 'white' }}>Amount</TableCell>
                <TableCell sx={{ color: 'white' }}>Payment</TableCell>
                <TableCell sx={{ color: 'white' }}>Status</TableCell>
                <TableCell sx={{ color: 'white' }}>Date Time</TableCell>
                <TableCell sx={{ color: 'white' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                const statusStyle = getStatusColor(order.status);
                return (
                  <TableRow key={order.uid}>
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" />
                    </TableCell>
                    <TableCell>{order.uid}</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar src={order.avatar} alt={order.client} />
                        <Typography>{order.client}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>{order.payment}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          backgroundColor: statusStyle.bg,
                          color: statusStyle.color,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '12px',
                          display: 'inline-block',
                          fontWeight: 500,
                          fontSize: '0.8rem',
                        }}
                      >
                        {order.status}
                      </Box>
                    </TableCell>
                    <TableCell>{order.datetime}</TableCell>
                    <TableCell>
                      <IconButton sx={{ color: '#0d6efd' }}><Visibility /></IconButton>
                      <IconButton sx={{ color: '#0dcaf0' }}><FileDownload /></IconButton>
                      <IconButton sx={{ color: '#dc3545' }}><Delete /></IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default OrdersPage;
