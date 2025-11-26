import React, { useState, useContext } from 'react';
import { AuthContext } from '../../pages/auth/AuthContext';
import SidebarChatbot from './SidebarChatbot';

const NavbarChatbot = () => {
  const { user } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: '#015E78',
          color: '#fff',
          padding: '12px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1300,
        }}
      >
        {user && (
          <span
            style={{ cursor: 'pointer', fontSize: '20px' }}
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </span>
        )}
        <p style={{ margin: 0, marginRight: '70%' }}>Chatbot</p>
     
      </div>

      {sidebarOpen && user && (
        <SidebarChatbot onClose={() => setSidebarOpen(false)} />
      )}
    </>
  );
};

export default NavbarChatbot;
