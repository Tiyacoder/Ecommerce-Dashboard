import React from 'react';
import { Box, Typography } from '@mui/material';
import CRMOverview from '../components/CRMOverview';
import DealsPerformance from '../components/DealsPerformance';
import ClientActivitySection from '../components/ClientActivitySection'; // ✅ New import

const Crm = () => {
  return (
    <Box sx={{ px: 3, py: 2 }}>
      {/* Page Title */}
      <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
        CRM
      </Typography>

      {/* Overview Cards */}
      <CRMOverview />

      {/* Deals Performance Section */}
      <DealsPerformance />

      {/* Client Activity Section */}
      <ClientActivitySection />
    </Box>
  );
};

export default Crm;
