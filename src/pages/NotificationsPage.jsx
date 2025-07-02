import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const notifications = [
  {
    id: 1,
    user: 'Mahmudul',
    action: 'added to his favorite list',
    target: 'Leather belt steve madden',
    avatar: '/assets/images/avatar1.jpg',
    iconColor: 'error',
  },
  {
    id: 2,
    user: 'labonno',
    action: 'leave her comment to',
    target: 'Dressni Breathable female Dress',
    avatar: '/assets/images/avatar3.jpg',
    iconColor: 'warning',
  },
  {
    id: 3,
    user: 'tahmina',
    action: 'announce to 50% discount',
    target: 'New Exclusive long kurti',
    avatar: '/assets/images/avatar2.jpg',
    iconColor: 'success',
  },
  {
    id: 4,
    user: 'jubayer',
    action: 'write to his latest blog',
    target: 'Best fashion outfit this winter',
    avatar: '/assets/images/avatar4.jpg',
    iconColor: 'primary',
  },
  {
    id: 5,
    user: 'rebeka',
    action: 'give a review to',
    target: 'Exclusive Designed Multicolor long Kaptan',
    avatar: '/assets/images/avatar5.jpg',
    iconColor: 'secondary',
  },
  {
    id: 6,
    user: 'hotash',
    action: 'privacy updated and secure all',
    target: 'this multitask platform',
    avatar: '/assets/images/logo.png',
    iconColor: 'info',
  },
];

const NotificationsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        All Notification
      </Typography>

      <Paper sx={{ mt: 2 }}>
        <List>
          {notifications.map((noti, index) => (
            <React.Fragment key={noti.id}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <CloseIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar src={noti.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" fontWeight="bold">
                        {noti.user}
                      </Typography>{' '}
                      {noti.action}{' '}
                      <Typography component="span" fontWeight="bold" color="primary">
                        {noti.target}
                      </Typography>
                    </>
                  }
                  secondary="about few minutes ago!"
                />
              </ListItem>
              {index < notifications.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default NotificationsPage;
