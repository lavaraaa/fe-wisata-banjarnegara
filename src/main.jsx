import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { BrowserRouter } from "react-router-dom";
import { NotifikasiProvider } from '../src/components/common/Notifikasi';
import { AuthProvider } from './pages/auth/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotifikasiProvider>
          <App />
        </NotifikasiProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
