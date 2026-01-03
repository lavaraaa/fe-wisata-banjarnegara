import React, { useState, useContext } from 'react';
import { AuthContext } from '../../pages/auth/AuthContext';
import NavbarChatbot from '../../components/chatbotComponents/NavbarChatbot';
import PopupChatbot from '../../components/chatbotComponents/PopupChatbot';

const Chatbot = ({ buttonRight }) => {

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '105px',
        right: buttonRight,
        width: '320px',
        height: '560px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1099,
        overflow: 'hidden',
      }}
    >
      <NavbarChatbot />
      <PopupChatbot/>
    </div>
  );
};

export default Chatbot;
