import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Avatar,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Visibility as ViewIcon,
  Star,
} from '@mui/icons-material';

const rows = [
  {
    id: 1,
    name: 'Gucci Hoodie',
    subtitle: 'Cozy designer hoodie',
    image: 'https://via.placeholder.com/40x40',
    category: 'MEN',
    brand: 'gucci',
    price: '$220.00',
    discount: '$199.00',
    stock: 14,
    rating: 4.8,
    ratingCount: 32,
    order: 480,
    sales: '$45k',
  },
  {
    id: 2,
    name: 'Zara Blazer',
    subtitle: 'Elegant women’s wear',
    image: 'https://via.placeholder.com/40x40',
    category: 'WOMEN',
    brand: 'zara',
    price: '$150.00',
    discount: '$130.00',
    stock: 22,
    rating: 4.6,
    ratingCount: 29,
    order: 290,
    sales: '$32k',
  },
  {
    id: 3,
    name: 'H&M Kids Shirt',
    subtitle: 'Casual children shirt',
    image: 'https://via.placeholder.com/40x40',
    category: 'CHILDREN',
    brand: 'h&m',
    price: '$25.00',
    discount: '$19.00',
    stock: 48,
    rating: 4.2,
    ratingCount: 17,
    order: 160,
    sales: '$5k',
  },
  {
    id: 4,
    name: 'Gucci Belt',
    subtitle: 'Luxury leather belt',
    image: 'https://via.placeholder.com/40x40',
    category: 'MEN',
    brand: 'gucci',
    price: '$180.00',
    discount: '$160.00',
    stock: 10,
    rating: 4.7,
    ratingCount: 21,
    order: 130,
    sales: '$22k',
  },
  {
    id: 5,
    name: 'Zara Dress',
    subtitle: 'Trendy summer dress',
    image: 'https://via.placeholder.com/40x40',
    category: 'WOMEN',
    brand: 'zara',
    price: '$95.00',
    discount: '$82.00',
    stock: 20,
    rating: 4.4,
    ratingCount: 18,
    order: 120,
    sales: '$11k',
  },
  {
    id: 6,
    name: 'H&M Jeans',
    subtitle: 'Stretch denim fit',
    image: 'https://via.placeholder.com/40x40',
    category: 'MEN',
    brand: 'h&m',
    price: '$40.00',
    discount: '$35.00',
    stock: 35,
    rating: 4.3,
    ratingCount: 14,
    order: 145,
    sales: '$6k',
  },
  {
    id: 7,
    name: 'Gucci Slides',
    subtitle: 'Beach wear sandals',
    image: 'https://via.placeholder.com/40x40',
    category: 'WOMEN',
    brand: 'gucci',
    price: '$110.00',
    discount: '$95.00',
    stock: 17,
    rating: 4.5,
    ratingCount: 20,
    order: 95,
    sales: '$9k',
  },
  {
    id: 8,
    name: 'Zara Kids Jacket',
    subtitle: 'Winter wear children',
    image: 'https://via.placeholder.com/40x40',
    category: 'CHILDREN',
    brand: 'zara',
    price: '$60.00',
    discount: '$50.00',
    stock: 28,
    rating: 4.0,
    ratingCount: 10,
    order: 85,
    sales: '$4k',
  },
  {
    id: 9,
    name: 'H&M Sweatshirt',
    subtitle: 'Comfort winter wear',
    image: 'https://via.placeholder.com/40x40',
    category: 'MEN',
    brand: 'h&m',
    price: '$55.00',
    discount: '$49.00',
    stock: 30,
    rating: 4.1,
    ratingCount: 19,
    order: 105,
    sales: '$7k',
  },
  {
    id: 10,
    name: 'Gucci Kids Tee',
    subtitle: 'Premium cotton t-shirt',
    image: 'https://via.placeholder.com/40x40',
    category: 'CHILDREN',
    brand: 'gucci',
    price: '$90.00',
    discount: '$75.00',
    stock: 12,
    rating: 4.6,
    ratingCount: 16,
    order: 70,
    sales: '$6k',
  },
];

const ProductTable = () => {
  return (
    <Box mt={5}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Best Selling Products
      </Typography>

      {/* Filters */}
      <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
        <Select defaultValue="12" sx={{ minWidth: 150 }}>
          <MenuItem value="12">12 Row</MenuItem>
          <MenuItem value="24">24 Row</MenuItem>
          <MenuItem value="48">48 Row</MenuItem>
        </Select>

        <Select defaultValue="MEN" sx={{ minWidth: 150 }}>
          <MenuItem value="MEN">MEN</MenuItem>
          <MenuItem value="WOMEN">WOMEN</MenuItem>
          <MenuItem value="CHILDREN">CHILDREN</MenuItem>
        </Select>

        <Select defaultValue="gucci" sx={{ minWidth: 150 }}>
          <MenuItem value="gucci">gucci</MenuItem>
          <MenuItem value="h&m">h&m</MenuItem>
          <MenuItem value="zara">zara</MenuItem>
        </Select>

        <TextField
          variant="outlined"
          size="small"
          placeholder="id / name / category / brand"
          sx={{ minWidth: 250 }}
        />
      </Box>

      {/* Table */}
      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead sx={{ bgcolor: '#2563eb' }}>
            <TableRow>
              {[
                'UID',
                'Product',
                'Category',
                'Brand',
                'Price',
                'Stock',
                'Rating',
                'Order',
                'Sales',
                'Action',
              ].map((header, i) => (
                <TableCell key={i} sx={{ color: '#fff', fontWeight: 600 }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((item) => (
              <TableRow key={item.id}>
                <TableCell># {item.id}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar src={item.image} alt={item.name} />
                    <Box>
                      <Typography fontWeight={500}>{item.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>
                  <Box>
                    {item.price && (
                      <Typography
                        sx={{ textDecoration: 'line-through', color: '#9ca3af' }}
                        variant="body2"
                      >
                        {item.price}
                      </Typography>
                    )}
                    <Typography color="error" fontWeight={600}>
                      {item.discount}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <Star sx={{ color: '#facc15', fontSize: 18 }} />
                    <Typography fontWeight={500}>
                      {item.rating} ({item.ratingCount})
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{item.order}</TableCell>
                <TableCell>{item.sales}</TableCell>
                <TableCell>
                  <Box display="flex" gap={1}>
                    <IconButton size="small" sx={{ bgcolor: '#e0f2fe' }}>
                      <ViewIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ bgcolor: '#d1fae5' }}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ bgcolor: '#fee2e2' }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
