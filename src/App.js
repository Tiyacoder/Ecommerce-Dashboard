import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import EcommerceDashboard from './pages/EcommerceDashboard';
import Analytics from './pages/Analytics';
import Crm from './pages/Crm'; 
import Login from './pages/Login'; 
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import UserProfile from './pages/UserProfile';
import MyAccount from './pages/MyAccount';
import ProductView from './pages/ProductView';
import ProductUpload from './pages/ProductUpload';
import OrdersPage from './pages/OrdersPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import BlankPage from './pages/BlankPage';






const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Routes>
          <Route
            path="/login"
            element={
              <Box sx={{ flexGrow: 1, bgcolor: '#f4f7fe', minHeight: '100vh' }}>
                <Login />
              </Box>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Sidebar />
                <Box sx={{ flexGrow: 1, bgcolor: '#f4f7fe', minHeight: '100vh' }}>
                  <Navbar />
                  <Routes>
                    <Route path="/ecommerce" element={<EcommerceDashboard />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/crm" element={<Crm />} /> {/* ✅ CRM Route */}
                    <Route path="*" element={<EcommerceDashboard />} /> {/* default route */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/product-view" element={<ProductView />} />
                    <Route path="/product-upload" element={<ProductUpload />} />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/messages" element={<MessagesPage />} />
                    <Route path="/notifications" element={<NotificationsPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/blank-page" element={<BlankPage />} />











                  </Routes>
                </Box>
              </>
            }
          />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
