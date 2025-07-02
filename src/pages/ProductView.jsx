import React, { useState } from 'react';
import {
  Box, Typography, Grid, Paper, Chip, Stack, Avatar, LinearProgress
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const colors = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE'];
const sizes = ['SM', 'MD', 'LG', 'XL', 'XXL'];
const tags = ['SUITE', 'PARTY', 'DRESS', 'SMART', 'MAN', 'STYLES'];

const imageUrls = [
  "https://mironcoder-hotash.netlify.app/images/product/single/01.webp",
  "https://mironcoder-hotash.netlify.app/images/product/single/02.webp",
  "https://mironcoder-hotash.netlify.app/images/product/single/03.webp",
  "https://mironcoder-hotash.netlify.app/images/product/single/04.webp",
  "https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
];

const ratingData = [
  { star: 5, count: 22 },
  { star: 4, count: 6 },
  { star: 3, count: 5 },
  { star: 2, count: 3 },
  { star: 1, count: 2 },
];

const ProductView = () => {
  const [mainImage, setMainImage] = useState(imageUrls[0]);
  const totalReviews = ratingData.reduce((sum, r) => sum + r.count, 0);
  const avgRating = (ratingData.reduce((sum, r) => sum + r.star * r.count, 0) / totalReviews).toFixed(1);

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ borderRadius: 3, p: 4, maxWidth: 1100, mx: 'auto' }}>
        <Grid container spacing={4}>
          {/* Left - Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: '2px dashed #eee',
                borderRadius: 2,
                p: 3,
                textAlign: 'center',
              }}
            >
              <img
                src={mainImage}
                alt="Product"
                style={{ width: '60%', borderRadius: 10 }}
              />
            </Box>

            {/* Thumbnail images */}
            <Stack direction="row" spacing={2} mt={2} justifyContent="center">
              {imageUrls.map((url, i) => (
                <Avatar
                  key={i}
                  variant="rounded"
                  src={url}
                  onClick={() => setMainImage(url)}
                  sx={{
                    width: 60,
                    height: 60,
                    border: '1px solid #eee',
                    cursor: 'pointer',
                    transition: '0.2s',
                    '&:hover': {
                      border: '2px solid #1976d2'
                    }
                  }}
                />
              ))}
            </Stack>
          </Grid>

          {/* Right - Product Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Formal suits for men wedding slim fit 3 piece dress business party jacket
            </Typography>

            <Stack spacing={1}>
              <Info label="Brand" value="Ecstasy" />
              <Info label="Category" value="Man's" />
              <Info label="Tags" chips={tags} />
              <Info label="Color" chips={colors} />
              <Info label="Size" chips={sizes} />
              <Info
                label="Price"
                value={
                  <>
                    <Typography component="span" fontWeight={600}>$37.00</Typography>{' '}
                    <Typography component="span" sx={{ color: 'red', textDecoration: 'line-through' }}>
                      $42.00
                    </Typography>
                  </>
                }
              />
              <Info label="Stock" value="(68) Piece" />
              <Info label="Review" value="(03) Review" />
              <Info label="Published" value="02 Feb 2020" />
            </Stack>
          </Grid>
        </Grid>

        {/* Product Description */}
        <Box mt={5}>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Product Description
          </Typography>
          <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
            Elevate your formalwear with this slim-fit 3-piece suit jacket — perfect for weddings, business events, and elegant parties. 
  Crafted from a premium blend of breathable and durable fabric, it offers a sleek silhouette without compromising comfort. 
  The inner paisley lining adds a touch of sophistication and luxury. Designed for the modern man who values both style and confidence, 
  this jacket pairs well with both trousers and jeans for a versatile look. Available in multiple colors and sizes to suit your personal taste.
          </Typography>
        </Box>

        {/* Rating Analytics */}
        <Box mt={5}>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Rating Analytics
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                {ratingData.map(({ star, count }) => {
                  const percentage = (count / totalReviews) * 100;
                  return (
                    <Box key={star} display="flex" alignItems="center" gap={2}>
                      <Typography sx={{ minWidth: 50 }}>{star} Star</Typography>
                      <Box sx={{ flexGrow: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={percentage}
                          sx={{
                            height: 8,
                            borderRadius: 5,
                            backgroundColor: '#eee',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: '#fbc02d',
                            },
                          }}
                        />
                      </Box>
                      <Typography sx={{ minWidth: 30 }}>({String(count).padStart(2, '0')})</Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Grid>

            <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Typography fontWeight={600}>Total Review ({totalReviews})</Typography>
              <Typography variant="h2" fontWeight={700}>{avgRating}</Typography>
              <Stack direction="row" spacing={0.5} mt={1}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} fontSize="small" sx={{ color: '#fbc02d' }} />
                ))}
              </Stack>
              <Typography variant="body2" color="text.secondary" mt={0.5}>
                Your Average Rating Star
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

const Info = ({ label, value, chips }) => (
  <Box display="flex" alignItems="flex-start" gap={1}>
    <Typography
      width={90}
      fontWeight={500}
      sx={{ color: 'text.secondary' }}
    >
      {label}:
    </Typography>
    {chips ? (
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {chips.map((item) => (
          <Chip key={item} label={item} variant="outlined" size="small" />
        ))}
      </Stack>
    ) : (
      <Typography>{value}</Typography>
    )}
  </Box>
);

export default ProductView;
