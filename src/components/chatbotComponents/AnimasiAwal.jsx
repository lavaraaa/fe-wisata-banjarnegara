// src/components/common/AnimasiAwal.jsx
import React from 'react';
import logo from '../../assets/logoputih.png';

const AnimasiAwal = () => {
  return (
    <div
      style={{
        backgroundColor: '#888787ff',
        padding: '10px',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '90%',
        maxWidth: '250px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        margin: '0 auto',
      }}
    >
      {/* Logo */}
      <img src={logo} alt="Logo" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />

      {/* Teks intro */}
      <p style={{ fontSize: '14px', color: '#fff', lineHeight: '1.5' }}>
        Chat untuk memulai, saya bisa membantu kamu dengan:
      </p>

      {/* Daftar fitur */}
      <div style={{ textAlign: 'left', fontSize: '14px', color: '#fff', lineHeight: '1.5' }}>
        <div>1. Rekomendasi destinasi wisata</div>
        <div>2. Informasi destinasi wisata</div>
        <div>3. Info cuaca di lokasi</div>
        <div>4. Jarak antar destinasi wisata</div>
      </div>
    </div>
  );
};

export default AnimasiAwal;
