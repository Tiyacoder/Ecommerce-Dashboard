import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Stack,
  Avatar,
  LinearProgress,
  Button,
  TextField,
  IconButton,
  Rating,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const colors = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE'];
const sizes = ['SM', 'MD', 'LG', 'XL', 'XXL'];
const tags = ['SUITE', 'PARTY', 'DRESS', 'SMART', 'MAN', 'STYLES'];

const imageUrls = [
  'https://mironcoder-hotash.netlify.app/images/product/single/01.webp',
  'https://mironcoder-hotash.netlify.app/images/product/single/02.webp',
  'https://mironcoder-hotash.netlify.app/images/product/single/03.webp',
  'https://mironcoder-hotash.netlify.app/images/product/single/04.webp',
  'https://mironcoder-hotash.netlify.app/images/product/single/05.webp',
];

const ratingData = [
  { star: 5, count: 22 },
  { star: 4, count: 6 },
  { star: 3, count: 5 },
  { star: 2, count: 3 },
  { star: 1, count: 2 },
];

const reviewData = [
  {
    id: 1,
    name: 'Miron Mahmud',
    avatar: 'https://mironcoder-hotash.netlify.app/images/avatar/01.webp',
    timeAgo: '25 minutes ago!',
    stars: 4,
    text: 'I was pleasantly surprised by how good this suit looks and feels. The fit is nearly perfect, and the fabric feels high quality for the price. I wore it to a wedding last weekend and received a few compliments too!',
  },
  {
    id: 2,
    name: 'Tahmina Bonny',
    avatar: 'https://mironcoder-hotash.netlify.app/images/avatar/02.webp',
    timeAgo: '3 weeks ago!',
    stars: 5,
    text: 'This suit exceeded my expectations! The stitching is neat, the material feels premium, and it arrived exactly as shown in the pictures. It gave me a very polished and confident look at a formal dinner event.',
  },
  {
    id: 3,
    name: 'Labonno Khan',
    avatar: 'https://mironcoder-hotash.netlify.app/images/avatar/03.webp',
    timeAgo: '15 days ago!',
    stars: 4,
    text: 'Really good value for money. The delivery was fast, and the size was spot on. The only reason I’m giving it 4 stars instead of 5 is that I wish there were more color options available. Still, highly recommended!',
  },
];

const ProductView = () => {
  const [mainImage, setMainImage] = useState(imageUrls[0]);

  const totalReviews = ratingData.reduce((sum, r) => sum + r.count, 0);
  const avgRating = (
    ratingData.reduce((sum, r) => sum + r.star * r.count, 0) / totalReviews
  ).toFixed(1);

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ borderRadius: 3, p: 4, maxWidth: 1100, mx: 'auto' }}>
        <Grid container spacing={4} alignItems="flex-start" wrap="nowrap">
          {/* Left – Images */}
          <Grid item xs={5}>
            <Box
              sx={{
                border: '2px dashed #eee',
                borderRadius: 2,
                p: 2,
                textAlign: 'center',
              }}
            >
              <img src={mainImage} alt="Product" style={{ width: '90%', borderRadius: 10 }} />
            </Box>

            <Stack direction="row" spacing={1.5} mt={2} justifyContent="center" flexWrap="wrap">
              {imageUrls.map((url, i) => (
                <Avatar
                  key={i}
                  variant="rounded"
                  src={url}
                  onClick={() => setMainImage(url)}
                  sx={{
                    width: 50,
                    height: 50,
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                    transition: '0.2s',
                    '&:hover': { border: '2px solid #1976d2' },
                  }}
                />
              ))}
            </Stack>
          </Grid>

          {/* Right – Info */}
          <Grid item xs={7}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Formal suits for men wedding slim fit 3 piece dress business party jacket
            </Typography>

            <Stack spacing={1.5}>
              <Info label="Brand" value="Ecstasy" />
              <Info label="Category" value="Man's" />
              <Info label="Tags" chips={tags} />
              <Info label="Color" chips={colors} />
              <Info label="Size" chips={sizes} />
              <Info
                label="Price"
                value={
                  <>
                    <Typography component="span" fontWeight={600} mr={1}>
                      $37.00
                    </Typography>
                    <Typography component="span" sx={{ color: 'red', textDecoration: 'line-through' }}>
                      $42.00
                    </Typography>
                  </>
                }
              />
              <Info label="Stock" value="(68) Piece" />
              <Info label="Review" value="(03) Review" />
              <Info label="Published" value="02 Feb 2020" />
            </Stack>
          </Grid>
        </Grid>

        {/* Product Description */}
        <Box mt={5}>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Product Description
          </Typography>
          <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
            Elevate your formalwear with this slim‑fit 3‑piece suit jacket — perfect for weddings,
            business events, and elegant parties. Crafted from a premium blend of breathable and
            durable fabric, it offers a sleek silhouette without compromising comfort. The inner
            paisley lining adds a touch of sophistication and luxury. Designed for the modern man
            who values both style and confidence, this jacket pairs well with both trousers and
            jeans for a versatile look. Available in multiple colors and sizes to suit your personal
            taste.
          </Typography>
        </Box>

        {/* Rating Analytics */}
        <Box mt={5}>
          <Box display="flex" alignItems="center" mb={3}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ mr: 1 }}>
              Rating Analytics
            </Typography>
            <Box flexGrow={1} height={1} bgcolor="#e0e0e0" />
          </Box>

          <Grid container spacing={4} alignItems="center" justifyContent="center" textAlign="center">
            {/* Rating Breakdown */}
            <Grid item xs={12} md={6}>
              <Stack spacing={1.8}>
                {ratingData.map(({ star, count }) => {
                  const percentage = (count / totalReviews) * 100;
                  return (
                    <Box key={star} display="flex" alignItems="center" gap={1.5}>
                      <Typography sx={{ minWidth: 60, fontSize: 14 }} textAlign="left">
                        {star} Star
                      </Typography>

                      <Box sx={{ flexGrow: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={percentage}
                          sx={{
                            height: 8,
                            borderRadius: 10,
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': { backgroundColor: '#fbc02d' },
                          }}
                        />
                      </Box>

                      <Typography sx={{ minWidth: 34, fontSize: 14 }} textAlign="right">
                        ({String(count).padStart(2, '0')})
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Grid>

            {/* Average Rating */}
            <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
              <Typography fontWeight={600} mb={1}>
                Total Review ({totalReviews})
              </Typography>
              <Typography variant="h2" fontWeight={700} color="#2c2e43">
                {avgRating}
              </Typography>
              <Stack direction="row" spacing={0.5} mt={1}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} fontSize="medium" sx={{ color: '#fbc02d' }} />
                ))}
              </Stack>
              <Typography variant="body2" color="text.secondary" mt={0.5}>
                Your Average Rating Star
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Customer Reviews */}
        <Box mt={5}>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Customer Reviews
          </Typography>

          <Stack spacing={3}>
            {reviewData.map((r) => (
              <Paper key={r.id} elevation={0} sx={{ bgcolor: '#f8f9fb', borderRadius: 3, p: 3 }}>
                <Grid container spacing={2} alignItems="flex-start">
                  <Grid item>
                    <Avatar src={r.avatar} sx={{ width: 56, height: 56, border: '3px solid #1976d2' }} />
                  </Grid>
                  <Grid item xs>
                    <Typography fontWeight={600}>{r.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {r.timeAgo}
                    </Typography>
                    <Rating value={r.stars} readOnly size="small" sx={{ mt: 1, mb: 1 }} precision={0.5} />
                    <Typography variant="body2" color="text.secondary">
                      {r.text}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Button
                        variant="contained"
                        startIcon={<ReplyIcon />}
                        sx={{ textTransform: 'uppercase', fontWeight: 600, px: 2.5, minWidth: 95 }}
                      >
                        Reply
                      </Button>
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Stack>
        </Box>

        {/* Review Form */}
        <Box mt={6}>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Review Reply Form
          </Typography>
          <TextField
            placeholder="write here"
            multiline
            rows={7}
            fullWidth
            variant="outlined"
            sx={{
              bgcolor: '#e9ecef',
              borderRadius: 2,
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.5, fontWeight: 600, textTransform: 'uppercase' }}
          >
            Drop Your Replies
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

const Info = ({ label, value, chips }) => (
  <Box display="flex" alignItems="flex-start" gap={1}>
    <Typography width={100} fontWeight={500} sx={{ color: 'text.secondary' }}>
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
