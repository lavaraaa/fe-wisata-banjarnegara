import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { BrowserRouter } from "react-router-dom";
import { NotifikasiProvider } from '../src/components/common/Notifikasi';
import { AuthProvider } from './pages/auth/AuthContext';
import logoputih from './assets/logoputih.png';

// Configure axios base URL
axios.defaults.baseURL = 'https://be-wisata-banjarnegara.vercel.app/';

const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = logoputih;
document.head.appendChild(link);

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
