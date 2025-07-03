import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const notifications = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Mahmudul',
    action: 'added to his favorite list',
    item: 'Leather belt steve madden'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'labonno',
    action: 'leave her comment to',
    item: 'Dressni Breathable female Dress'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/66.jpg',
    name: 'tahmina',
    action: 'announce to 50% discount',
    item: 'New Exclusive long kurti'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
    name: 'jubayer',
    action: 'write to his latest blog',
    item: 'Best fashion outfit this winter'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    name: 'rebeka',
    action: 'give a review to',
    item: 'Exclusive Designed Multicolor long Kaptan'
  },
  {
    avatar: '/favicon.ico',
    name: 'hotash',
    action: 'privacy updated and secure all',
    item: 'this multitask platform'
  }
];

const NotificationItem = ({ avatar, name, action, item }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      py: 1.5,
      px: 2
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={avatar} sx={{ mr: 2 }} />
      <Box>
        <Typography variant="body1" fontWeight={500}>
          {name}{' '}
          <Typography component="span" fontWeight={400}>
            {action}
          </Typography>{' '}
          <Typography component="span" fontWeight={500}>
            {item}
          </Typography>
        </Typography>
        <Typography variant="caption" color="text.secondary">
          about few minutes ago!
        </Typography>
      </Box>
    </Box>
    <IconButton size="small">
      <CloseIcon fontSize="small" />
    </IconButton>
  </Box>
);

const NotificationsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
          All Notification
        </Typography>

        {notifications.map((notif, index) => (
          <React.Fragment key={index}>
            <NotificationItem {...notif} />
            {index < notifications.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Paper>
    </Box>
  );
};

export default NotificationsPage;
