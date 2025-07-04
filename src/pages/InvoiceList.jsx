import React from 'react';
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Paper,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Avatar,
  Button,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Pagination
} from '@mui/material';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DraftsIcon from '@mui/icons-material/Drafts';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';

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

const rows = [
  {
    id: '#4980',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'miron mahmud',
    email: 'miron@gmail.com',
    amount: '$5,689.00',
    status: 'Recieved',
    date: '15/06/2022 14:02',
  },
  {
    id: '#4981',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'tahmina bonny',
    email: 'tahmina@gmail.com',
    amount: '$4,578.00',
    status: 'Drafts',
    date: '15/06/2022 14:02',
  },
  {
    id: '#4982',
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
    name: 'labonno khan',
    email: 'labonno@gmail.com',
    amount: '$6,872.00',
    status: 'Pending',
    date: '15/06/2022 14:02',
  },
  {
    id: '#4983',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    name: 'sheikh adabali',
    email: 'sheikh@gmail.com',
    amount: '$6,890.00',
    status: 'Recieved',
    date: '15/06/2022 14:02',
  },
  {
    id: '#4984',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'johara khatun',
    email: 'johara@gmail.com',
    amount: '$5,347.00',
    status: 'Drafts',
    date: '15/06/2022 14:02',
  },
  {
    id: '#4985',
    avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
    name: 'kurulus osman',
    email: 'kurulus@gmail.com',
    amount: '$7,920.00',
    status: 'Pending',
    date: '15/06/2022 14:02',
  },
];

const statusColor = {
  Recieved: '#a7f3d0',
  Drafts: '#dbeafe',
  Pending: '#f0abfc',
};

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

      {/* Cards */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        {stats.map((stat, index) => (
          <Paper
            key={index}
            sx={{
              flex: 1,
              minWidth: '300px',
              p: 4,
              borderRadius: 2,
              background: stat.bgColor,
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 140,
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold">
                {stat.value}
              </Typography>
              <Typography variant="h6">{stat.label}</Typography>
            </Box>
            <Box sx={{ position: 'absolute', top: 12, right: 16, opacity: 0.3 }}>
              {stat.icon}
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Table Filters */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Shopping Invoices
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3, width: '100%' }}>
          <FormControl sx={{ flex: 1, minWidth: 180 }}>
            <InputLabel>Show By</InputLabel>
            <Select defaultValue={12} label="Show By" size="small">
              <MenuItem value={12}>12 Row</MenuItem>
              <MenuItem value={25}>25 Row</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ flex: 1, minWidth: 180 }}>
            <InputLabel>Status By</InputLabel>
            <Select defaultValue="Recieved" label="Status By" size="small">
              <MenuItem value="Recieved">Recieved</MenuItem>
              <MenuItem value="Drafts">Drafts</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Issued By"
            placeholder="dd-mm-yyyy"
            size="small"
            sx={{ flex: 1, minWidth: 180 }}
          />
          <TextField
            label="Search By"
            placeholder="id / name / email"
            size="small"
            sx={{ flex: 1, minWidth: 180 }}
          />
        </Box>

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976d2' }}>
                <TableCell sx={{ color: '#fff' }}>UID</TableCell>
                <TableCell sx={{ color: '#fff' }}>CLIENT</TableCell>
                <TableCell sx={{ color: '#fff' }}>EMAIL</TableCell>
                <TableCell sx={{ color: '#fff' }}>AMOUNT</TableCell>
                <TableCell sx={{ color: '#fff' }}>STATUS</TableCell>
                <TableCell sx={{ color: '#fff' }}>ISSUE DATE</TableCell>
                <TableCell sx={{ color: '#fff' }}>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <input type="checkbox" style={{ marginRight: 8 }} />
                    {row.id}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar src={row.avatar} />
                      <Typography>{row.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        bgcolor: statusColor[row.status],
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        display: 'inline-block',
                        fontWeight: 600,
                        fontSize: 13,
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <IconButton><VisibilityIcon color="secondary" /></IconButton>
                    <IconButton><CloudDownloadIcon color="primary" /></IconButton>
                    <IconButton><DeleteIcon color="error" /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 2, textAlign: 'right' }}>
          <Pagination count={5} shape="rounded" />
        </Box>
      </Paper>
    </Box>
  );
};

export default InvoiceList;
