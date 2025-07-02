import React from 'react';
import { Box, Typography } from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';

const BlankPage = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <ExtensionIcon sx={{ fontSize: 120, color: '#d3d3d3' }} />
      <Typography variant="h6" color="textSecondary" mt={1}>
        Blank This Page
      </Typography>
      <Typography variant="caption" mt={4} color="textSecondary">
        © All Rights Reserved by ♥ Mironcoder
      </Typography>
    </Box>
  );
};

export default BlankPage;
