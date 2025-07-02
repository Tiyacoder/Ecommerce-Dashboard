import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const ProductUpload = () => {
  const categories = ['Mans', 'Womens', 'Kids'];
  const brands = ['Richman', 'Ecstasy', 'Aarong'];

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {/* Left: Basic Info */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Basic Information
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Title" placeholder="type here" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Description"
                  placeholder="Type here..."
                />
              </Grid>

              <Grid item xs={6}>
                <TextField fullWidth select label="Category" value="Mans">
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={6}>
                <TextField fullWidth select label="Brand" value="Richman">
                  {brands.map((b) => (
                    <MenuItem key={b} value={b}>
                      {b}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={6}>
                <TextField fullWidth label="Regular Price" placeholder="type here" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Discount Price" placeholder="type here" />
              </Grid>

              <Grid item xs={6}>
                <TextField fullWidth label="Shipping Fee" placeholder="type here" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Tax Rate" placeholder="type here" />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Tags" placeholder="type here" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Right: Organization */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Organization
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Add Category" placeholder="type here" />
                <Button fullWidth variant="contained" sx={{ mt: 1 }}>
                  ADD
                </Button>
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Add Brand" placeholder="type here" />
                <Button fullWidth variant="contained" sx={{ mt: 1 }}>
                  ADD
                </Button>
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Add Color" placeholder="type here" />
                <Button fullWidth variant="contained" sx={{ mt: 1 }}>
                  ADD
                </Button>
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Add Size" placeholder="type here" />
                <Button fullWidth variant="contained" sx={{ mt: 1 }}>
                  ADD
                </Button>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Specification
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography fontSize={14} fontWeight={500} mb={1}>
                  Size
                </Typography>
                <List dense sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
                  {['Sm', 'Md', 'Lg', 'Xl', 'Xxl'].map((size) => (
                    <ListItem key={size} sx={{ py: 0.5 }}>
                      <ListItemText primary={size} />
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid item xs={6}>
                <Typography fontSize={14} fontWeight={500} mb={1}>
                  Color
                </Typography>
                <List dense sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
                  {['Red', 'Green', 'Blue', 'Pink', 'Black'].map((color) => (
                    <ListItem key={color} sx={{ py: 0.5 }}>
                      <ListItemText primary={color} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductUpload;
