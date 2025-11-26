import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/logoputih.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate(path), 300);
  };

  return (
    <footer className="bg-dark text-light pt-2 pb-3 border-top" style={{ fontSize: '15px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center justify-content-md-start gap-2">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            style={{ objectFit: 'contain' }}
          />
          <div className="text-center text-md-start">
            <h5 className="mb-1">WisataBanjarnegara</h5>
            <p className="mb-0 small">
              Dapatkan pengalaman yang tak terlupakan dengan berbagai pilihan tempat wisata di Banjarnegara
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
