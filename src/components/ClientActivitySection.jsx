// components/ClientActivitySection.jsx
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
    desc: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula.',
    time: '45 min ago',
    icon: <Avatar src="/avatars/miron.png" sx={{ width: 20, height: 20 }} />,
  },
  {
    title: 'Current language has been changed',
    desc: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula.',
    time: '24 hr ago',
    icon: <Avatar src="https://flagcdn.com/w40/bd.png" variant="rounded" sx={{ width: 20, height: 14 }} />,
  },
  {
    title: 'Asked about this product',
    desc: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula.',
    time: 'Yesterday',
    icon: <FiberManualRecord sx={{ fontSize: 12 }} />,
  },
];

const ClientActivitySection = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 5 }}>
      {/* Popular Clients */}
      <Paper elevation={0} sx={{ flex: 1, p: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Popular Clients</Typography>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, mb: 1 }}>
            <Typography variant="body2">CLIENTS</Typography>
            <Typography variant="body2">ORDERS</Typography>
            <Typography variant="body2">AMOUNT</Typography>
            <Typography variant="body2">ACTION</Typography>
          </Box>
          {clients.map((client, idx) => (
            <Box key={idx} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 3 // Increased spacing between rows
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '25%' }}>
                <Avatar src={client.img} sx={{ width: 28, height: 28 }} />
                <Typography variant="body2">{client.name}</Typography>
              </Box>
              <Typography variant="body2" sx={{ width: '15%' }}>{client.orders}</Typography>
              <Typography variant="body2" sx={{ width: '15%' }}>{client.amount}</Typography>
              <Box sx={{ display: 'flex', gap: 1, width: '25%' }}>
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
        </Box>
      </Paper>

      {/* Recent Activities */}
      <Paper elevation={0} sx={{ flex: 1, p: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Recent Activities</Typography>
        <Box>
          {activities.map((act, i) => (
            <Box key={i} sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'flex-start',
              mb: 4 // Increased spacing between rows
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
