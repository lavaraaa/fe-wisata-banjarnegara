import React, { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../../pages/auth/AuthContext';
import ModalHapusHistori from './ModalHapusHistori';

const SidebarChatbot = ({ onClose }) => {
  const { user } = useContext(AuthContext);
  const [showHapusModal, setShowHapusModal] = useState(false);
  const sidebarRef = useRef(null);

  if (!user) return null;

  // Tutup sidebar jika klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%', // overlay menutupi seluruh popup
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        zIndex: 99990,
        display: 'flex',
      }}
    >
      <div
        ref={sidebarRef}
        style={{
          width: '50%', // separuh popup
          height: '100%', // tutup semua dari atas sampai bawah popup
          backgroundColor: '#f5f5f5',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >

        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '10px' }}>
          {/* Histori chat user */}
          <p>Histori Chat...</p>
        </div>

          <button
          onClick={() => console.log('New Chat clicked')}
          style={{ 
          marginBottom: '10px',     
          backgroundColor: '#015E78',
          color: 'white',
          }}
        >
          New Chat
        </button>

        {showHapusModal && (
          <ModalHapusHistori
            onClose={() => setShowHapusModal(false)}
            onConfirm={() => {
              console.log('Histori dihapus');
              setShowHapusModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SidebarChatbot;
