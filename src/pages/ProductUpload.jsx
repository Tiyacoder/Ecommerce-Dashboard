import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  List,
  ListItem
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const ProductUpload = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', gap: 3 }}>
        {/* Left Panel: Basic Information */}
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              Basic Information
            </Typography>

            <Typography fontSize={12} fontWeight={600} sx={{ mb: 0.5 }}>
              TITLE
            </Typography>
            <TextField fullWidth placeholder="type here" size="small" sx={{ mb: 2 }} />

            <Typography fontSize={12} fontWeight={600} sx={{ mb: 0.5 }}>
              DESCRIPTION
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={5}
              placeholder="Type here..."
              size="small"
              sx={{ mb: 2 }}
            />

            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography fontSize={12} fontWeight={600} sx={{ mb: 0.5 }}>
                  CATEGORY
                </Typography>
                <TextField fullWidth select size="small" value="Mans">
                  <MenuItem value="Mans">Mans</MenuItem>
                  <MenuItem value="Womens">Womens</MenuItem>
                </TextField>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography fontSize={12} fontWeight={600} sx={{ mb: 0.5 }}>
                  BRAND
                </Typography>
                <TextField fullWidth select size="small" value="Richman">
                  <MenuItem value="Richman">Richman</MenuItem>
                  <MenuItem value="Apex">Apex</MenuItem>
                </TextField>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography fontSize={12} fontWeight={600} sx={{ mb: 0.5 }}>
                  REGULAR PRICE
                </Typography>
                <TextField fullWidth placeholder="type here" size="small" />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography fontSize={12} fontWeight={600} sx={{ mb: 0.5 }}>
                  DISCOUNT PRICE
                </Typography>
                <TextField fullWidth placeholder="type here" size="small" />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography fontSize={12} fontWeight={600} sx={{ mb: 0.5 }}>
                  SHIPPING FEE
                </Typography>
                <TextField fullWidth placeholder="type here" size="small" />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography fontSize={12} fontWeight={600} sx={{ mb: 0.5 }}>
                  TAX RATE
                </Typography>
                <TextField fullWidth placeholder="type here" size="small" />
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Right Panel: Organization and Specification */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              Organization
            </Typography>

            {['CATEGORY', 'BRAND', 'COLOR', 'SIZE'].map((label) => (
              <Box key={label} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TextField
                  placeholder={`type here`}
                  fullWidth
                  size="small"
                  sx={{ mr: 2 }}
                />
                <Button variant="contained" sx={{ backgroundColor: '#0066FF' }}>
                  ADD
                </Button>
              </Box>
            ))}
          </Paper>

          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              Specification
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography fontSize={12} fontWeight={600} sx={{ mb: 1 }}>
                  SIZE
                </Typography>
                <List
                  dense
                  sx={{
                    maxHeight: 120,
                    overflowY: 'auto',
                    border: '1px solid #ccc',
                    borderRadius: 1,
                  }}
                >
                  {['Sm', 'Md', 'Lg', 'Xl', 'Xxl'].map((size) => (
                    <ListItem key={size} sx={{ py: 0.5 }}>
                      {size}
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography fontSize={12} fontWeight={600} sx={{ mb: 1 }}>
                  COLOR
                </Typography>
                <List
                  dense
                  sx={{
                    maxHeight: 120,
                    overflowY: 'auto',
                    border: '1px solid #ccc',
                    borderRadius: 1,
                  }}
                >
                  {['Red', 'Green', 'Blue', 'Pink', 'Black'].map((color) => (
                    <ListItem key={color} sx={{ py: 0.5 }}>
                      {color}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Media and Published Section */}
      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
            Media And Published
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {[
              'https://mironcoder-hotash.netlify.app/images/product/single/01.webp',
              'https://mironcoder-hotash.netlify.app/images/product/single/02.webp',
              'https://mironcoder-hotash.netlify.app/images/product/single/03.webp',
              'https://mironcoder-hotash.netlify.app/images/product/single/04.webp'
            ].map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img}
                alt={`upload-${index}`}
                sx={{
                  width: 120,
                  height: 120,
                  objectFit: 'contain',
                  border: '2px dashed #ddd',
                  borderRadius: 2,
                  p: 1
                }}
              />
            ))}

            <Box
              sx={{
                width: 120,
                height: 120,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                border: '2px dashed #ccc',
                borderRadius: 2,
                cursor: 'pointer',
                color: '#999',
                '&:hover': { borderColor: '#0066ff', color: '#0066ff' }
              }}
            >
              <CloudUpload sx={{ fontSize: 30, mb: 1 }} />
              <Typography fontSize={12}>image upload</Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: '#0066FF',
              color: '#fff',
              py: 1.5,
              fontWeight: 600,
              '&:hover': { backgroundColor: '#0055cc' }
            }}
          >
            PUBLISH AND VIEW
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default ProductUpload;
