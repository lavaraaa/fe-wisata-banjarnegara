import React, { useEffect, useState } from 'react';
import ModalTambahWisata from './ModalTambahWisata';

const ButtonTambahWisata = ({ onActionSuccess }) => {
  const [buttonRight, setButtonRight] = useState('5vw');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const updateButtonPosition = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1240) {
        setButtonRight('50px');
      } else if (screenWidth >= 768) {
        setButtonRight('20px');
      } else {
        setButtonRight('16px');
      }
    };

    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    return () => window.removeEventListener('resize', updateButtonPosition);
  }, []);

  return (
    <>
      <button
        className="btn"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: buttonRight,
          backgroundColor: '#015E78',
          color: '#fff',
          fontSize: '17px',
          padding: '10px 10px',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
        }}
        onClick={() => setShowModal(true)}
      >
        <i className="bi bi-pencil me-1"></i>
        Tambah Wisata Baru
      </button>

      <ModalTambahWisata
        show={showModal}
        handleClose={() => setShowModal(false)}
        onActionSuccess={onActionSuccess}
      />
    </>
  );
};

export default ButtonTambahWisata;
