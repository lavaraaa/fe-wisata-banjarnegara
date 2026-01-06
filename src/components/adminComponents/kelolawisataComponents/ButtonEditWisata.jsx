// File: ButtonEditWisata.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Icon } from "@iconify/react";
import { AuthContext } from '../../../pages/auth/AuthContext';
import { useParams } from 'react-router-dom';
import ModalEditWisata from '../../adminComponents/kelolawisataComponents/ModalEditWisata';

const ButtonEditWisata = ({ fetchDetailDanLainnya }) => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [showEditModal, setShowEditModal] = useState(false);
  const [buttonRight, setButtonRight] = useState('20px');
  const [dataWisata, setDataWisata] = useState(null);

  if (!user || user.role !== 'admin') return null;

  // Posisi tombol responsive
  useEffect(() => {
    const updateButtonPosition = () => {
      const screenWidth = window.innerWidth;
      const contentWidth = 1200;
      const marginSide = (screenWidth - contentWidth) / 2;
      setButtonRight(screenWidth <= contentWidth ? '16px' : `${marginSide + 20}px`);
    };
    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    return () => window.removeEventListener('resize', updateButtonPosition);
  }, []);

  // Ambil data wisata saat modal dibuka
  useEffect(() => {
    if (showEditModal && id) {
      fetch(`/api/wisata/${id}`)
        .then(res => res.json())
        .then(data => setDataWisata(data))
        .catch(err => console.error("Gagal ambil data wisata:", err));
    }
  }, [showEditModal, id]);

  // Handle edit sukses → update DetailWisata
  const handleEditSuccess = async () => {
    try {
      if (!id) return;
      const res = await fetch(`/api/wisata/${id}`);
      const updatedData = await res.json();
      setDataWisata(updatedData);
      if (fetchDetailDanLainnya) await fetchDetailDanLainnya(); // update state DetailWisata
      setShowEditModal(false);
    } catch (err) {
      console.error("Gagal update detail setelah edit:", err);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowEditModal(true)}
        className="btn"
        style={{
          position: 'fixed',
          bottom: '80px',
          right: buttonRight,
          backgroundColor: '#015E78',
          color: '#fff',
          fontSize: '17px',
          padding: '10px 10px',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 1099,
        }}
      >
         <i className="bi bi-pencil me-1"></i>
        Perbarui Wisata
      </button>

      {dataWisata && (
        <ModalEditWisata
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          dataWisata={dataWisata}
          onEditSuccess={handleEditSuccess}
        />
      )}
    </>
  );
};

export default ButtonEditWisata;
