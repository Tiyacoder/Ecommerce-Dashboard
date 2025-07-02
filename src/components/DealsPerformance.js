import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Select,
  MenuItem,
  TextField,
  IconButton,
  InputLabel,
  FormControl,
  Avatar,
  Chip
} from '@mui/material';
import { Visibility, Delete, Download } from '@mui/icons-material';

const deals = [
  {
    id: 1,
    name: 'miron mahmud',
    email: 'miron@gmail.com',
    amount: '$5,689.00',
    status: 'Won Leads',
    statusColor: 'success',
    date: '15/06/2022 14:02',
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    id: 2,
    name: 'tahmina bonny',
    email: 'tahmina@gmail.com',
    amount: '$4,578.00',
    status: 'New Leads',
    statusColor: 'info',
    date: '15/06/2022 14:02',
    avatar: 'https://i.pravatar.cc/40?img=2',
  },
  {
    id: 3,
    name: 'labonno khan',
    email: 'labonno@gmail.com',
    amount: '$6,872.00',
    status: 'Open Leads',
    statusColor: 'secondary',
    date: '15/06/2022 14:02',
    avatar: 'https://i.pravatar.cc/40?img=3',
  },
  {
    id: 4,
    name: 'sheikh adabali',
    email: 'sheikh@gmail.com',
    amount: '$6,890.00',
    status: 'Won Leads',
    statusColor: 'success',
    date: '15/06/2022 14:02',
    avatar: 'https://i.pravatar.cc/40?img=4',
  },
  {
    id: 5,
    name: 'johara khatun',
    email: 'johara@gmail.com',
    amount: '$5,347.00',
    status: 'New Leads',
    statusColor: 'info',
    date: '15/06/2022 14:02',
    avatar: 'https://i.pravatar.cc/40?img=5',
  },
  {
    id: 6,
    name: 'kurulus osman',
    email: 'kurulus@gmail.com',
    amount: '$7,920.00',
    status: 'Lost Leads',
    statusColor: 'error',
    date: '15/06/2022 14:02',
    avatar: 'https://i.pravatar.cc/40?img=6',
  },
];

const DealsPerformance = () => {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, mt: 4 }}>
      <Typography variant="h6" fontWeight="600" mb={3}>
        Deals_performance
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={2} mb={3}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Show by</InputLabel>
          <Select defaultValue="12 Row" label="Show by">
            <MenuItem value="12 Row">12 Row</MenuItem>
            <MenuItem value="24 Row">24 Row</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Status by</InputLabel>
          <Select defaultValue="Won Leads" label="Status by">
            <MenuItem value="Won Leads">Won Leads</MenuItem>
            <MenuItem value="New Leads">New Leads</MenuItem>
            <MenuItem value="Open Leads">Open Leads</MenuItem>
            <MenuItem value="Lost Leads">Lost Leads</MenuItem>
          </Select>
        </FormControl>

        <TextField type="date" label="Brand by" InputLabelProps={{ shrink: true }} />
        <TextField label="Search by" placeholder="id / name / email" />
      </Box>

      <Box component="table" width="100%" sx={{ fontSize: 14 }}>
        <Box component="thead" sx={{ bgcolor: '#1d4ed8', color: 'white' }}>
          <Box
            component="tr"
            display="grid"
            gridTemplateColumns="1fr 1fr 3fr 3fr 2fr 2fr 2fr 2fr"
            py={1}
            alignItems="center"
            fontWeight="bold"
          >
            <Box component="th"><input type="checkbox" /></Box>
            <Box component="th">S.L</Box>
            <Box component="th">REPRESENTER</Box>
            <Box component="th">EMAIL</Box>
            <Box component="th">AMOUNT</Box>
            <Box component="th">STATUS</Box>
            <Box component="th">ISSUE DATE</Box>
            <Box component="th">ACTION</Box>
          </Box>
        </Box>

        <Box component="tbody">
          {deals.map((deal, i) => (
            <Box
              key={deal.id}
              component="tr"
              display="grid"
              gridTemplateColumns="1fr 1fr 3fr 3fr 2fr 2fr 2fr 2fr"
              alignItems="center"
              py={2}
              sx={{
                borderBottom: '1px solid #e5e7eb',
                '&:last-child': { borderBottom: 0 },
              }}
            >
              <Box component="td"><input type="checkbox" /></Box>
              <Box component="td">{deal.id}</Box>
              <Box component="td" display="flex" alignItems="center" gap={1}>
                <Avatar src={deal.avatar} sx={{ width: 30, height: 30 }} />
                {deal.name}
              </Box>
              <Box component="td">{deal.email}</Box>
              <Box component="td">{deal.amount}</Box>
              <Box component="td">
                <Chip label={deal.status} color={deal.statusColor} size="small" />
              </Box>
              <Box component="td">{deal.date}</Box>
              <Box component="td" display="flex" gap={1}>
                <IconButton size="small" sx={{ bgcolor: '#fce7f3' }}>
                  <Visibility sx={{ fontSize: 16, color: '#be185d' }} />
                </IconButton>
                <IconButton size="small" sx={{ bgcolor: '#e0f2fe' }}>
                  <Download sx={{ fontSize: 16, color: '#0284c7' }} />
                </IconButton>
                <IconButton size="small" sx={{ bgcolor: '#fee2e2' }}>
                  <Delete sx={{ fontSize: 16, color: '#dc2626' }} />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default DealsPerformance;
