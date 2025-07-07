import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Grid,
  InputAdornment,
  Paper,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { User } from 'lucide-react';

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
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        px: 3,
        py: 3,
        bgcolor: '#f8f9fc',
        minHeight: '100vh',
      }}
    >
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
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor: '#f8f9fa', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            {/* Public Info Section */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '30px', marginBottom: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ margin: '0 0 25px 0', fontSize: '18px', fontWeight: '600', color: '#333' }}>Public Information</h3>
              <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '4px solid #007bff', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', marginBottom: '15px', overflow: 'hidden' }}>
                    <User size={40} style={{ color: '#6c757d' }} />
                  </div>
                  <button style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', fontSize: '12px', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    📁 UPLOAD
                  </button>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#555', marginBottom: '8px' }}>Fullname</label>
                      <input type="text" value="miron mahmud" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box', backgroundColor: '#f8f9fa' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#555', marginBottom: '8px' }}>Username</label>
                      <input type="text" value="@mironcoder" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box', backgroundColor: '#f8f9fa' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#555', marginBottom: '8px' }}>Biography</label>
                    <textarea value="I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '14px', height: '100px', resize: 'vertical', boxSizing: 'border-box', backgroundColor: '#f8f9fa', fontFamily: 'inherit' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Private Info */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '30px', marginBottom: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ margin: '0 0 25px 0', fontSize: '18px', fontWeight: '600', color: '#333' }}>Private Information</h3>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label>Unique Id</label>
                  <input type="text" value="#783404edff97e3445" readOnly style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f8f9fa' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Role</label>
                  <select style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f8f9fa' }}>
                    <option>Select Option</option>
                    <option>Admin</option>
                    <option>User</option>
                    <option>Moderator</option>
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label>Status</label>
                  <select style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f8f9fa' }}>
                    <option>Select Option</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Pending</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label>Email</label>
                  <input type="email" value="demo@example.com" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f8f9fa' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Phone</label>
                  <input type="tel" value="+8801838288389" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f8f9fa' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Website</label>
                  <input type="url" value="https://mironmahmud.com/" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f8f9fa' }} />
                </div>
              </div>
              <div>
                <label>Address</label>
                <textarea value="3379_Monroe Avenue, Fort Myers, Florida(33912)" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', height: '80px', backgroundColor: '#f8f9fa', fontFamily: 'inherit' }} />
              </div>
            </div>

            {/* Social Info */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '30px', marginBottom: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '25px', fontSize: '18px', fontWeight: '600', color: '#333' }}>Social Information</h3>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <input style={{ flex: 1, padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px' }} placeholder="Facebook URL" />
                <input style={{ flex: 1, padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px' }} placeholder="Twitter URL" />
              </div>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <input style={{ flex: 1, padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px' }} placeholder="LinkedIn URL" />
                <input style={{ flex: 1, padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px' }} placeholder="Instagram URL" />
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <input style={{ flex: 1, padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px' }} placeholder="YouTube URL" />
                <input style={{ flex: 1, padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px' }} placeholder="Pinterest URL" />
              </div>
            </div>

            {/* Save Button */}
            <div style={{ textAlign: 'left' }}>
              <button style={{ padding: '12px 30px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                💾 SAVE CHANGES
              </button>
            </div>
          </div>
        )}

        {/* ----------- TAB 1: CHANGE PASSWORD ----------- */}
       {tab === 1 && (
  <Box sx={{ maxWidth: '700px', mx: 'auto' }}>
    <Typography fontWeight={600} fontSize={16} mb={3}>
      Generate Password
    </Typography>

    <Box display="flex" flexDirection="column" gap={2}>
      {/* Current Password */}
      <TextField
        fullWidth
        placeholder="current password"
        type="password"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon sx={{ color: '#6c757d' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          backgroundColor: '#f8f9fa',
          '& input::placeholder': { fontSize: 14, color: '#6c757d' },
        }}
      />

      {/* New + Confirm side-by-side */}
      <Box display="flex" gap={2}>
        <TextField
          fullWidth
          placeholder="new password"
          type="password"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyOutlinedIcon sx={{ color: '#6c757d' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: '#f8f9fa',
            '& input::placeholder': { fontSize: 14, color: '#6c757d' },
          }}
        />

        <TextField
          fullWidth
          placeholder="confirm password"
          type="password"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VerifiedUserOutlinedIcon sx={{ color: '#6c757d' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: '#f8f9fa',
            '& input::placeholder': { fontSize: 14, color: '#6c757d' },
          }}
        />
      </Box>

      {/* Save Changes Button */}
      <Box textAlign="left" mt={1}>
        <Button
          variant="contained"
          sx={{
            textTransform: 'none',
            px: 4,
            py: 1.5,
            fontWeight: 600,
            borderRadius: 2,
            bgcolor: '#0d6efd',
            boxShadow: 'none',
            '&:hover': {
              bgcolor: '#0b5ed7',
            },
          }}
        >
          SAVE CHANGES
        </Button>
      </Box>
    </Box>
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
                  {Object.entries(activitySettings).map(([key, value]) => (
                    <Box key={key} display="flex" alignItems="center">
                      <Switch checked={value} />
                      <Typography>{key}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography fontWeight={600} mb={2}>
                  Product Email Settings
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  {Object.entries(productSettings).map(([key, value]) => (
                    <Box key={key}>
                      <Checkbox checked={value} />
                      <Typography display="inline">{key}</Typography>
                    </Box>
                  ))}
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
