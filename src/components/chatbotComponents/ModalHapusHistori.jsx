import React from 'react';

const ModalHapusHistori = ({ onClose, onConfirm }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300,
      }}
    >
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', minWidth: '280px' }}>
        <p>Apakah Anda yakin ingin menghapus histori?</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button onClick={onClose}>Batal</button>
          <button onClick={onConfirm} style={{ backgroundColor: '#015E78', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '8px' }}>Hapus</button>
        </div>
      </div>
    </div>
  );
};

export default ModalHapusHistori;
