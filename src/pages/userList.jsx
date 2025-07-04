// src/pages/userList.jsx
import React from 'react';
import {
  Avatar,
  Box,
  Checkbox,
  Chip,
  IconButton,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

/* ────────────────────────────────  SUMMARY CARDS  ──────────────────────────────── */

const summaryCards = [
  {
    label: 'Pending Users',
    value: '547',
    gradient: 'linear-gradient(90deg, #da22ff, #9733ee)',
    icon: <MoreHorizIcon sx={{ color: 'white' }} />,
  },
  {
    label: 'Approved Users',
    value: '605',
    gradient: 'linear-gradient(90deg, #11998e, #38ef7d)',
    icon: <CheckCircleIcon sx={{ color: 'white' }} />,
  },
  {
    label: 'Blocked Users',
    value: '249',
    gradient: 'linear-gradient(90deg, #f85032, #e73827)',
    icon: <RemoveCircleIcon sx={{ color: 'white' }} />,
  },
];

const SummaryCard = ({ item }) => (
  <Paper
    elevation={3}
    sx={{
      flex: 1,
      p: 3,
      minWidth: 250,
      borderRadius: 3,
      color: 'white',
      background: item.gradient,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 120,
    }}
  >
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {item.value}
      </Typography>
      <Typography variant="body2">{item.label}</Typography>
    </Box>
    <Box
      sx={{
        bgcolor: 'rgba(255,255,255,0.2)',
        p: 1.2,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {item.icon}
    </Box>
  </Paper>
);

/* ────────────────────────────────  TABLE DATA  ──────────────────────────────── */

const users = [
  {
    uid: 1,
    name: 'mahmud …',
    role: 'member',
    email: 'miron@gmail.com',
    password: '$2a$06$4Ou…',
    phone: '01838288389',
    status: 'Approved',
    created: '15/06/2022 1…',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    uid: 2,
    name: 'labonno k…',
    role: 'admin',
    email: 'labonno@gmail.com',
    password: '$2a$06$4Ou…',
    phone: '01838288389',
    status: 'Pending',
    created: '15/06/2022 1…',
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
  },
  {
    uid: 3,
    name: 'tahmina …',
    role: 'member',
    email: 'tahmina@gmail.com',
    password: '$2a$06$4Ou…',
    phone: '01838288389',
    status: 'Blocked',
    created: '15/06/2022 1…',
    avatar: 'https://randomuser.me/api/portraits/women/31.jpg',
  },
  {
    uid: 4,
    name: 'shariful k…',
    role: 'vendor',
    email: 'shariful@gmail.com',
    password: '$2a$06$4Ou…',
    phone: '01838288389',
    status: 'Approved',
    created: '15/06/2022 1…',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    uid: 5,
    name: 'farzana d…',
    role: 'admin',
    email: 'farzana@gmail.com',
    password: '$2a$06$4Ou…',
    phone: '01838288389',
    status: 'Pending',
    created: '15/06/2022 1…',
    avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
  },
  {
    uid: 6,
    name: 'saikul az…',
    role: 'founder',
    email: 'saikul@gmail.com',
    password: '$2a$06$4Ou…',
    phone: '01838288389',
    status: 'Blocked',
    created: '15/06/2022 1…',
    avatar: 'https://randomuser.me/api/portraits/men/61.jpg',
  },
];

/* ────────────────────────────────  MAIN PAGE  ──────────────────────────────── */

const UserList = () => {
  return (
    <Box sx={{ px: 3, py: 3, minHeight: '100vh', bgcolor: '#f8f9fc' }}>
      {/* Header */}
      <Paper elevation={1} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight={600}>
          User List
        </Typography>
        <Typography variant="body2" color="primary" mt={0.5}>
          Home <span style={{ color: '#9ca3af' }}> ~ </span>
          Users <span style={{ color: '#9ca3af' }}> ~ </span>
          User List
        </Typography>
      </Paper>

      {/* Summary Cards */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
        {summaryCards.map((item, i) => (
          <SummaryCard key={i} item={item} />
        ))}
      </Box>

      {/* Registered Users Section */}
      <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="subtitle1" fontWeight={600}>
            Registered Users
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>

        {/* Filters */}
        <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
          <Select size="small" defaultValue={12} sx={{ minWidth: 140 }}>
            <MenuItem value={12}>12 Row</MenuItem>
            <MenuItem value={24}>24 Row</MenuItem>
            <MenuItem value={36}>36 Row</MenuItem>
          </Select>
          <Select size="small" defaultValue="Admin" sx={{ minWidth: 140 }}>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Member">Member</MenuItem>
            <MenuItem value="Vendor">Vendor</MenuItem>
            <MenuItem value="Founder">Founder</MenuItem>
          </Select>
          <Select size="small" defaultValue="Approved" sx={{ minWidth: 140 }}>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Blocked">Blocked</MenuItem>
          </Select>
          <TextField
            size="small"
            placeholder="id / name / email / number"
            sx={{ flex: 1, minWidth: 220 }}
          />
        </Box>

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#0d6efd' }}>
                {[
                  'UID',
                  'NAME',
                  'ROLE',
                  'EMAIL',
                  'PASSWORD',
                  'PHONE',
                  'STATUS',
                  'CREATED',
                  'ACTION',
                ].map((head) => (
                  <TableCell key={head} sx={{ color: 'white', fontWeight: 600 }}>
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((u) => (
                <TableRow key={u.uid} hover>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Checkbox size="small" />
                      #{u.uid}
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar src={u.avatar} sx={{ width: 28, height: 28 }} />
                      {u.name}
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={u.role}
                      size="small"
                      sx={{
                        bgcolor:
                          u.role === 'admin'
                            ? '#f0abfc'
                            : u.role === 'vendor'
                            ? '#fef08a'
                            : u.role === 'founder'
                            ? '#bae6fd'
                            : '#bbf7d0',
                        color: '#000',
                        textTransform: 'capitalize',
                        fontSize: 12,
                        height: 24,
                      }}
                    />
                  </TableCell>

                  <TableCell>{u.email}</TableCell>
                  <TableCell>{u.password}</TableCell>
                  <TableCell>{u.phone}</TableCell>

                  <TableCell>
                    <Chip
                      label={u.status}
                      size="small"
                      sx={{
                        bgcolor:
                          u.status === 'Approved'
                            ? '#86efac'
                            : u.status === 'Pending'
                            ? '#e9d5ff'
                            : '#fecaca',
                        color:
                          u.status === 'Approved'
                            ? '#065f46'
                            : u.status === 'Pending'
                            ? '#7e22ce'
                            : '#991b1b',
                        fontSize: 12,
                        height: 24,
                      }}
                    />
                  </TableCell>

                  <TableCell>{u.created}</TableCell>

                  <TableCell>
                    <Box display="flex" gap={1}>
                      <IconButton size="small" sx={{ color: '#d946ef' }}>
                        <VisibilityOutlinedIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: '#22c55e' }}>
                        <EditOutlinedIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: '#ef4444' }}>
                        <BlockOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Footer */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          flexWrap="wrap"
          gap={2}
        >
          <Typography variant="body2">showing 12 of 60 results</Typography>
          <Pagination count={45} page={1} shape="rounded" />
        </Box>
      </Paper>
    </Box>
  );
};

export default UserList;
