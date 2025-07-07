import React, { useState } from 'react';
import {
  Box, Paper, Typography, Avatar, TextField,
  IconButton, InputAdornment, List, ListItem, ListItemAvatar,
  ListItemText, Badge, Divider
} from '@mui/material';
import { Search, MoreVert, Send } from '@mui/icons-material';

const chatUsers = [
  { id: 1, name: 'Miron Mahmud', time: 'Now', message: 'whats your current career opportunity...', avatar: 'https://i.pravatar.cc/150?img=1', unread: 3, online: true },
  { id: 2, name: 'Tahmina Bonny', time: '~3m', message: 'whats your current career opportunity...', avatar: 'https://i.pravatar.cc/150?img=2', unread: 0, online: false },
  { id: 3, name: 'Labonno Khan', time: '~5h', message: 'whats your current career opportunity...', avatar: 'https://i.pravatar.cc/150?img=3', unread: 1, online: true },
  { id: 4, name: 'Shipon Ahmed', time: '~7d', message: 'whats your current career opportunity...', avatar: 'https://i.pravatar.cc/150?img=4', unread: 0, online: true },
  { id: 5, name: 'Rabeya Akter', time: '~9s', message: 'whats your current career opportunity...', avatar: 'https://i.pravatar.cc/150?img=5', unread: 0, online: false },
  { id: 6, name: 'Shah Nasrullah', time: '~4w', message: 'whats your current career opportunity...', avatar: 'https://i.pravatar.cc/150?img=6', unread: 0, online: false },
  { id: 7, name: 'Hotash Admin', time: 'Now', message: 'whats your current career opportunity...', avatar: 'https://i.pravatar.cc/150?img=7', unread: 0, online: true },
];

const messages = [
  { from: 'them', text: 'Hey! Just wanted to check in on the project status.', time: '2 minutes ago' },
  { from: 'them', text: 'Also, are you free for a quick call later?', time: '2 minutes ago' },
  { from: 'me', text: 'Hey! The project is almost ready. I’ll send the final files today.', time: '1 minute ago' },
  { from: 'me', text: 'Yes, I’m available after 4 PM. Let me know what works for you.', time: 'Just now' },
  { from: 'them', text: 'Perfect. Let’s do a quick sync at 4:30 then.', time: 'Just now' },
];

const MessagesPage = () => {
  const [selectedUser, setSelectedUser] = useState(chatUsers[0]);
  const [input, setInput] = useState('');

  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', width: '1200px', height: '100%' }}>
        
        {/* Left Sidebar - 4/12 width */}
        <Box sx={{ width: '33.33%', height: '100%', borderRight: '1px solid #eee' }}>
          <Paper sx={{ height: '100%', p: 2, borderRadius: 0, display: 'flex', flexDirection: 'column' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="search username"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <List sx={{ mt: 2, overflowY: 'auto', flex: 1 }}>
              {chatUsers.map(user => (
                <React.Fragment key={user.id}>
                  <ListItem
                    button
                    selected={selectedUser.id === user.id}
                    onClick={() => setSelectedUser(user)}
                    sx={{
                      mb: 1,
                      borderRadius: 2,
                      backgroundColor: selectedUser.id === user.id ? '#eef4ff' : 'transparent',
                    }}
                  >
                    <ListItemAvatar>
                      <Badge
                        variant="dot"
                        overlap="circular"
                        color="success"
                        invisible={!user.online}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      >
                        <Avatar src={user.avatar} />
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography fontWeight="bold">
                          {user.name} <Typography component="span" variant="caption" sx={{ color: '#777', fontWeight: 'normal' }}>{user.time}</Typography>
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="textSecondary" noWrap>
                          {user.message}
                        </Typography>
                      }
                    />
                    {user.unread > 0 && (
                      <Badge badgeContent={user.unread} color="primary" />
                    )}
                    <IconButton size="small">
                      <MoreVert />
                    </IconButton>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>

        {/* Right Chat Window - 8/12 width */}
        <Box sx={{ width: '66.66%', height: '100%' }}>
          <Paper sx={{ height: '100%', p: 2, borderRadius: 0, display: 'flex', flexDirection: 'column' }}>
            {/* Chat Header */}
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar src={selectedUser.avatar} sx={{ mr: 1 }} />
              <Box>
                <Typography fontWeight="bold">{selectedUser.name}</Typography>
                <Typography variant="caption" color="green">active now</Typography>
              </Box>
            </Box>

            {/* Chat Messages */}
            <Box flexGrow={1} px={2} py={1} sx={{ overflowY: 'auto' }}>
              {messages.map((msg, idx) => (
                <Box key={idx} display="flex" justifyContent={msg.from === 'me' ? 'flex-end' : 'flex-start'} mb={1}>
                  <Box
                    sx={{
                      backgroundColor: msg.from === 'me' ? '#d6e4ff' : '#f0f0f0',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      maxWidth: '70%',
                    }}
                  >
                    <Typography variant="body2">{msg.text}</Typography>
                    <Typography variant="caption" sx={{ color: '#888' }}>
                      {msg.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Chat Input */}
            <Box mt={2}>
              <TextField
                fullWidth
                placeholder="type a message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setInput('')}>
                        <Send sx={{ color: '#0d6efd' }} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
          </Paper>
        </Box>

      </Box>
    </Box>
  );
};

export default MessagesPage;
