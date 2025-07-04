import React from 'react';
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  Chip
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const rows = [
  {
    id: '#5768',
    product: 'modern summer short',
    image: 'https://mironcoder-hotash.netlify.app/images/product/01.webp',
    price: '$20',
    discount: '20%',
    quantity: '03',
    amount: '$15',
  },
  {
    id: '#6489',
    product: 'stylish official suites',
    image: 'https://mironcoder-hotash.netlify.app/images/product/02.webp',
    price: '$129',
    discount: '10%',
    quantity: '01',
    amount: '$120',
  },
  {
    id: '#2086',
    product: 'party footwear grooming',
    image: 'https://mironcoder-hotash.netlify.app/images/product/03.webp',
    price: '$84',
    discount: '25%',
    quantity: '02',
    amount: '$64',
  },
  {
    id: '#9834',
    product: 'wedding red bubble dress',
    image: 'https://mironcoder-hotash.netlify.app/images/product/04.webp',
    price: '$405',
    discount: '08%',
    quantity: '01',
    amount: '$308',
  },
  {
    id: '#3908',
    product: 'children take care pack',
    image: 'https://mironcoder-hotash.netlify.app/images/product/05.webp',
    price: '$370',
    discount: '15%',
    quantity: '04',
    amount: '$270',
  },
];

const InvoiceDetails = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Invoice Details
        </Typography>
        <Breadcrumbs separator="~" sx={{ mt: 1 }}>
          <Link underline="hover" color="inherit" href="#">Home</Link>
          <Link underline="hover" color="inherit" href="#">Invoices</Link>
          <Typography color="text.primary">Invoice Details</Typography>
        </Breadcrumbs>
      </Box>

      <Paper sx={{ p: 4 }}>
        {/* Invoice header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <img src="https://mironcoder-hotash.netlify.app/images/logo.webp" alt="logo" width={50} />
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
            INVOICE #985466
          </Typography>
        </Box>

        {/* Address section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 4 }}>
          <Box>
            <Typography fontWeight="bold" mb={1}>Order Recieved</Typography>
            <Typography>Office 25/B, Road 30, West jalkuri,</Typography>
            <Typography>Fatullah, Narayanganj 1265.</Typography>
            <Typography>+8801838288389,</Typography>
            <Typography>support@miron.com</Typography>
          </Box>
          <Box textAlign="right">
            <Typography fontWeight="bold" mb={1}>Shipment details</Typography>
            <Typography>House 17/A, Road 09, West jalkuri,</Typography>
            <Typography>Fatullah, Narayanganj 1265.</Typography>
            <Typography>+8801838288389,</Typography>
            <Typography>support@miron.com</Typography>
          </Box>
        </Box>

        {/* Product table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>UID</TableCell>
                <TableCell>PRODUCT</TableCell>
                <TableCell>PRICE</TableCell>
                <TableCell>DISCOUNT</TableCell>
                <TableCell>QUANTITY</TableCell>
                <TableCell>AMOUNT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={row.image} variant="rounded" />
                      <Typography>{row.product}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.discount}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Summary */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Box sx={{ minWidth: 300 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Subtotal</Typography>
              <Typography fontWeight="bold">$2,749.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Discount</Typography>
              <Typography fontWeight="bold">$134.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Shipping</Typography>
              <Typography fontWeight="bold">$60.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
              <Typography>Total</Typography>
              <Typography fontWeight="bold" fontSize="18px">$2,878.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>Status</Typography>
              <Chip label="COD" sx={{ background: '#fce7f3', color: '#db2777', fontWeight: 600 }} />
            </Box>
          </Box>
        </Box>

        {/* Footer note */}
        <Box sx={{ mt: 4 }}>
          <Typography fontSize="13px" color="gray">
            Thank you for ordering greeny. We offer a 7-day return policy on all products. If you have any
            complaint about this order, please call or email us. (VAT has been calculated as per GO
            02/Mushak/2019). This is a system generated invoice and no signature or seal is required.
          </Typography>
        </Box>

        {/* Buttons */}
        <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button variant="contained" startIcon={<PrintIcon />} sx={{ bgcolor: '#000', color: '#fff' }}>
            Print this receipt
          </Button>
          <Button variant="contained" startIcon={<PictureAsPdfIcon />} sx={{ bgcolor: '#059669' }}>
            Download as PDF
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default InvoiceDetails;
