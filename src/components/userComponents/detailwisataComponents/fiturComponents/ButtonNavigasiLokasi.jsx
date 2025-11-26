import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ButtonNavigasiLokasi = () => {
  const { id } = useParams(); // ambil ID wisata dari URL
  const [linkGmaps, setLinkGmaps] = useState('');
  const [buttonRight, setButtonRight] = useState('20px');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/wisata/${id}`);
        setLinkGmaps(res.data.link_gmaps);
      } catch (err) {
        console.error('Gagal fetch data wisata:', err);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const updateButtonPosition = () => {
      const screenWidth = window.innerWidth;
      const contentWidth = 1200;
      const marginSide = (screenWidth - contentWidth) / 2;
  
      // Jika layar lebih kecil dari konten, jangan terlalu ke kiri
     setButtonRight(screenWidth <= contentWidth ? '16px' : `${marginSide + 20}px`);
    };

  
    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    return () => window.removeEventListener('resize', updateButtonPosition);
  }, []);
  
  if (!linkGmaps) return null;

  return (
    <a
      href={linkGmaps}
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: buttonRight,
        backgroundColor: '#015E78',
        color: '#fff',
        fontSize: '15px',
        padding: '6px 10px',
        border: 'none',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1099,
      }}
    >
      <i className="bi bi-geo-alt-fill" style={{ marginRight: '8px' }}></i>
      Navigasi ke Google Maps
    </a>
  );
};

export default ButtonNavigasiLokasi;
