import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Paper,
  Select,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const MyAccount = () => {
  const [tab, setTab] = useState(0);
  const handleTab = (_, v) => setTab(v);

  const [activitySettings, setActivitySettings] = useState({
    connection: false,
    directMsg: true,
    approval: true,
    copy: true,
    tips: false,
  });

  const [productSettings, setProductSettings] = useState({
    connection: true,
    directMsg: true,
    approval: true,
    copy: false,
    tips: false,
  });

  return (
    <Box sx={{ px: 3, py: 3, minHeight: '100vh', bgcolor: '#f8f9fc' }}>
      <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          My Account
        </Typography>

        <Tabs
          value={tab}
          onChange={handleTab}
          textColor="inherit"
          indicatorColor="primary"
          sx={{
            mb: 3,
            '& .MuiTab-root': { textTransform: 'none', fontWeight: 600 },
            '& .Mui-selected': {
              bgcolor: '#0d6efd',
              color: '#fff !important',
              borderRadius: 2,
            },
          }}
        >
          <Tab label="Edit Profile" />
          <Tab label="Change Password" />
          <Tab label="Other Settings" />
        </Tabs>

        {/* ----------- TAB 0: EDIT PROFILE ----------- */}
        {tab === 0 && (
          <>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
              Public Information
            </Typography>

            <Grid container spacing={3} alignItems="flex-start">
              <Grid item xs={12} md={3}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Avatar
                    src="https://randomuser.me/api/portraits/men/64.jpg"
                    sx={{
                      width: 148,
                      height: 148,
                      border: '4px solid #0d6efd',
                    }}
                  />
                  <Button
                    variant="outlined"
                    startIcon={<CloudUploadOutlinedIcon />}
                    sx={{ mt: 2, textTransform: 'none' }}
                  >
                    Upload
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} md={9}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Fullname"
                      fullWidth
                      value="miron mahmud"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Username"
                      fullWidth
                      value="@mironcoder"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Biography"
                      fullWidth
                      multiline
                      minRows={4}
                      value="I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style"
                      disabled
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Typography variant="subtitle1" fontWeight={600} mt={5} mb={2}>
              Private Information
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Unique Id"
                  fullWidth
                  value="#783404edff97e3445"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Select fullWidth defaultValue="" displayEmpty>
                  <MenuItem value="" disabled>
                    Select Option
                  </MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="member">Member</MenuItem>
                  <MenuItem value="vendor">Vendor</MenuItem>
                  <MenuItem value="founder">Founder</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={4}>
                <Select fullWidth defaultValue="" displayEmpty>
                  <MenuItem value="" disabled>
                    Select Option
                  </MenuItem>
                  <MenuItem value="approved">Approved</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="blocked">Blocked</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  label="Email"
                  fullWidth
                  value="demo@example.com"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Phone"
                  fullWidth
                  value="+8801838288389"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Website"
                  fullWidth
                  value="https://mironmahmud.com/"
                  disabled
                />
              </Grid>
            </Grid>
          </>
        )}

        {/* ----------- TAB 1: CHANGE PASSWORD ----------- */}
        {tab === 1 && (
          <Box>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
              Generate Password
            </Typography>

            <Grid container spacing={3} mb={3}>
              <Grid item xs={12}>
                <TextField
                  placeholder="current password"
                  fullWidth
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  placeholder="new password"
                  fullWidth
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  placeholder="confirm password"
                  fullWidth
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VerifiedUserOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              startIcon={<SettingsOutlinedIcon />}
              sx={{
                textTransform: 'none',
                px: 4,
                py: 1.5,
                bgcolor: '#0d6efd',
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Save Changes
            </Button>
          </Box>
        )}

        {/* ----------- TAB 2: OTHER SETTINGS ----------- */}
        {tab === 2 && (
          <Box display="flex" flexDirection="column" minHeight="60vh">
            <Grid container spacing={4} py={4}>
              <Grid item xs={12} md={6}>
                <Typography fontWeight={600} mb={2}>
                  Activity Email Settings
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Box display="flex" alignItems="center">
                    <Switch checked={activitySettings.connection} />
                    <Typography>Someone adds you as a connection</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Switch checked={activitySettings.directMsg} />
                    <Typography>you're sent a direct message</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Switch checked={activitySettings.approval} />
                    <Typography>New membership approval</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Switch checked={activitySettings.copy} />
                    <Typography>Send Copy To Personal Email</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Switch checked={activitySettings.tips} />
                    <Typography>Tips on getting more out of PCT-themes</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography fontWeight={600} mb={2}>
                  Product Email Settings
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Box>
                    <Checkbox checked={productSettings.connection} />
                    <Typography display="inline">Someone adds you as a connection</Typography>
                  </Box>
                  <Box>
                    <Checkbox checked={productSettings.directMsg} />
                    <Typography display="inline">you're sent a direct message</Typography>
                  </Box>
                  <Box>
                    <Checkbox checked={productSettings.approval} />
                    <Typography display="inline">New membership approval</Typography>
                  </Box>
                  <Box>
                    <Checkbox checked={productSettings.copy} />
                    <Typography display="inline">Send Copy To Personal Email</Typography>
                  </Box>
                  <Box>
                    <Checkbox checked={productSettings.tips} />
                    <Typography display="inline">Tips on getting more out of PCT-themes</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Box mt="auto" textAlign="center" pb={3}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#0d6efd',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                Update Changes
              </Button>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default MyAccount;
