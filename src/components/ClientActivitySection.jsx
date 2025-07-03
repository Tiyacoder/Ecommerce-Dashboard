import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  ChatBubbleOutline,
  Visibility,
  FiberManualRecord,
} from '@mui/icons-material';

const clients = [
  { name: 'miron mahmud', orders: 648, amount: '$5500', img: '/avatars/miron.png' },
  { name: 'tahmina bonny', orders: 590, amount: '$4400', img: '/avatars/tahmina.png' },
  { name: 'labonno khan', orders: 408, amount: '$3300', img: '/avatars/labonno.png' },
  { name: 'sheikh adabali', orders: 357, amount: '$2200', img: '/avatars/sheikh.png' },
  { name: 'johara khatun', orders: 289, amount: '$1100', img: '/avatars/johara.png' },
  { name: 'kurulus osman', orders: 194, amount: '$789', img: '/avatars/kurulus.png' },
];

const activities = [
  {
    title: 'Your account is logged in',
    desc: 'User logged in successfully using two-factor authentication.',
    time: '45 min ago',
    icon: <Avatar src="/avatars/miron.png" sx={{ width: 20, height: 20 }} />,
  },
  {
    title: 'Language setting updated',
    desc: 'Language changed from English to Bangla.',
    time: '24 hr ago',
    icon: <Avatar src="https://flagcdn.com/w40/bd.png" variant="rounded" sx={{ width: 20, height: 14 }} />,
  },
  {
    title: 'Asked about a product',
    desc: 'User asked a question about the “Formal Blazer Jacket.”',
    time: 'Yesterday',
    icon: <FiberManualRecord sx={{ fontSize: 12 }} />,
  },
];

const ClientActivitySection = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 5, flexWrap: 'wrap' }}>
      {/* Popular Clients */}
      <Paper elevation={0} sx={{ flex: 1, p: 2, borderRadius: 2, minWidth: 400 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Popular Clients</Typography>

        {/* Table Header */}
        <Box sx={{
          display: 'flex',
          fontWeight: 600,
          mb: 1,
          px: 1,
        }}>
          <Box sx={{ flex: 1.8 }}><Typography variant="body2">CLIENTS</Typography></Box>
          <Box sx={{ flex: 1 }}><Typography variant="body2">ORDERS</Typography></Box>
          <Box sx={{ flex: 1, pl: 2 }}><Typography variant="body2">AMOUNT</Typography></Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}><Typography variant="body2">ACTION</Typography></Box>
        </Box>

        {/* Table Rows */}
        {clients.map((client, idx) => (
          <Box key={idx} sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            px: 1,
          }}>
            {/* Client Info */}
            <Box sx={{ flex: 1.8, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar src={client.img} sx={{ width: 28, height: 28 }} />
              <Typography variant="body2" noWrap>{client.name}</Typography>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="body2">{client.orders}</Typography>
            </Box>

            <Box sx={{ flex: 1, pl: 2 }}>
              <Typography variant="body2">{client.amount}</Typography>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 1 }}>
              <Tooltip title="Message">
                <IconButton size="small" sx={{ bgcolor: '#bbf7d0' }}>
                  <ChatBubbleOutline fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="View">
                <IconButton size="small" sx={{ bgcolor: '#f0abfc' }}>
                  <Visibility fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        ))}
      </Paper>

      {/* Recent Activities */}
      <Paper elevation={0} sx={{ flex: 1, p: 2, borderRadius: 2, minWidth: 400 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Recent Activities</Typography>
        <Box>
          {activities.map((act, i) => (
            <Box key={i} sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'flex-start',
              mb: 4
            }}>
              <Box>{act.icon}</Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>{act.title}</Typography>
                <Typography variant="caption" color="text.secondary">{act.desc}</Typography>
                <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>{act.time}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default ClientActivitySection;
