// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ThemeContextProvider from './context/ThemeContext'; // ✅ Import the Theme context

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeContextProvider> {/* ✅ Wrap App in the Theme Provider */}
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
