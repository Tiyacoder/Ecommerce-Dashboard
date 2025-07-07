import React, { useState } from 'react';
import {
  Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Collapse, Typography, Divider, Box
} from '@mui/material';

import {
  Dashboard, ExpandLess, ExpandMore, BarChart, Group, Lock,
  ShoppingCart, Mail, Notifications, Settings, InsertDriveFile, Storefront
} from '@mui/icons-material';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    dashboard: true,
    authentication: false,
    users: false,
    products: false,
    invoice: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          borderRight: '1px solid #e0e0e0',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold" color="primary">
          HOTASH
        </Typography>
      </Box>
      <Divider />
      <Typography variant="caption" sx={{ pl: 2, color: '#888' }}>
        MAIN PAGES
      </Typography>

      <List>
        {/* Dashboard */}
        <ListItemButton onClick={() => toggleMenu('dashboard')}>
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
          {openMenus.dashboard ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenus.dashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/ecommerce" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon><BarChart fontSize="small" /></ListItemIcon>
                <ListItemText primary="Ecommerce" />
              </ListItemButton>
            </Link>
            <Link to="/analytics" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon><BarChart fontSize="small" /></ListItemIcon>
                <ListItemText primary="Analytics" />
              </ListItemButton>
            </Link>
            <Link to="/crm" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon><BarChart fontSize="small" /></ListItemIcon>
                <ListItemText primary="CRM" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        {/* Authentication */}
        <ListItemButton onClick={() => toggleMenu('authentication')}>
          <ListItemIcon><Lock /></ListItemIcon>
          <ListItemText primary="Authentication" />
          {openMenus.authentication ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenus.authentication} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Login" />
              </ListItemButton>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Registration" />
              </ListItemButton>
            </Link>
            <Link to="/forgot-password" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Forget Password" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        {/* Users */}
        <ListItemButton onClick={() => toggleMenu('users')}>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                Users
                <Box
                  sx={{
                    fontSize: '10px',
                    fontWeight: 600,
                    backgroundColor: '#f44336',
                    color: 'white',
                    px: 1,
                    borderRadius: '6px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    lineHeight: 1
                  }}
                >
                  HOT
                </Box>
              </Box>
            }
          />
          {openMenus.users ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenus.users} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/user-list" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="User List" />
              </ListItemButton>
            </Link>
            <Link to="/user-profile" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </Link>
            <Link to="/my-account" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="My Account" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        {/* Products */}
        <ListItemButton onClick={() => toggleMenu('products')}>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                Products
                <Box
                  sx={{
                    fontSize: '10px',
                    fontWeight: 600,
                    backgroundColor: '#9c27b0',
                    color: 'white',
                    px: 1,
                    borderRadius: '6px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    lineHeight: 1
                  }}
                >
                  NEW
                </Box>
              </Box>
            }
          />
          {openMenus.products ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenus.products} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/product-view" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Product View" />
              </ListItemButton>
            </Link>
            <Link to="/product-upload" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Product Upload" />
              </ListItemButton>
            </Link>
            <Link to="/product-list" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Product List" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        {/* Invoice */}
        <ListItemButton onClick={() => toggleMenu('invoice')}>
          <ListItemIcon><InsertDriveFile /></ListItemIcon>
          <ListItemText primary="Invoice" />
          {openMenus.invoice ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenus.invoice} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/invoice-list" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Invoice List" />
              </ListItemButton>
            </Link>
            <Link to="/invoice-details" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Invoice Details" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        {/* Orders */}
        <Link to="/orders" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
            <ListItemIcon><ShoppingCart /></ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </Link>

        {/* Messages */}
        <Link to="/messages" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
            <ListItemIcon><Mail /></ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
        </Link>

        {/* Notifications */}
        <Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
            <ListItemIcon><Notifications /></ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </Link>

        {/* Settings */}
        <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </Link>

        {/* Blank Page */}
        <Link to="/blank-page" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
            <ListItemIcon><InsertDriveFile /></ListItemIcon>
            <ListItemText primary="Blank Page" />
          </ListItemButton>
        </Link>
      </List>
    </Drawer>
  );
};

export default Sidebar;
