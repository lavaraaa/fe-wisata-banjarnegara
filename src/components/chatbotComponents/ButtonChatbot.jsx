import React, { useState, useEffect } from 'react';
import Chatbot from'../../pages/Chatbot/Chatbot';

const ButtonChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '70px',
          right: buttonRight,
          backgroundColor: '#015E78',
          color: '#fff',
          fontSize: '15px',
          padding: '6px 14px',
          border: 'none',
          borderRadius: '40px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 1099,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <i className="bi bi-chat-dots-fill" style={{ marginRight: '8px' }}></i>
        Chat dengan Kami
      </button>
      {isOpen && <Chatbot onClose={() => setIsOpen(false)} buttonRight={buttonRight} />}
    </>
  );
};

export default ButtonChatbot;
