import React, { useState, useEffect } from 'react';
import Chatbot from '../../pages/Chatbot/Chatbot';

const ButtonChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(true);
  const [buttonRight, setButtonRight] = useState('20px');

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

  useEffect(() => {
    const timer = setTimeout(() => setShowText(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '70px',
          right: buttonRight,
          backgroundColor: '#015E78', // tetap biru tombol
          color: '#fff',
          fontSize: '15px',
          padding: showText ? '6px 14px' : '10px',
          border: 'none',
          borderRadius: '40px', // capsule
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 1099,
          display: 'flex',
          alignItems: 'center',
          justifyContent: showText ? 'space-between' : 'center',
          cursor: 'pointer',
          minWidth: showText ? '130px' : '50px',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Teks kiri dengan background berbeda */}
        {showText && (
          <span
            style={{
              fontWeight: 500,
              backgroundColor: 'rgba(255,255,255,0.2)', // ganti sesuai selera
              padding: '2px 6px',
              borderRadius: '12px',
            }}
          >
            Tanya Kami
          </span>
        )}

        {/* Icon kanan */}
        <i
          className="bi bi-chat-text"
          style={{
            marginLeft: showText ? '8px' : '0',
            fontSize: '20px',
          }}
        ></i>
      </button>

      {isOpen && <Chatbot onClose={() => setIsOpen(false)} buttonRight={buttonRight} />}
    </>
  );
};

export default ButtonChatbot;
