import React, { useEffect, useState, useRef, useContext } from 'react';
import { AuthContext } from '../../../pages/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import Register from '../../../pages/auth/Register';
import Login from '../../../pages/auth/Login';
import ProfilModal from './ProfilNavbarModal';
import UserSidebar from './UserSidebar';
import { useNotifikasi } from '../../common/Notifikasi';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const UserNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { showNotif } = useNotifikasi();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfilModal, setShowProfilModal] = useState(false);
  
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideSidebar = (e) => {
      const sidebar = sidebarRef.current;
      const isSidebarOpen = sidebar?.classList.contains('show');
      if (isSidebarOpen && sidebar && !sidebar.contains(e.target)) {
        const closeBtn = sidebar.querySelector('[data-bs-dismiss="offcanvas"]');
        if (closeBtn) closeBtn.click();
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) backdrop.remove();
      }
    };
    document.addEventListener('click', handleClickOutsideSidebar);
    return () => document.removeEventListener('click', handleClickOutsideSidebar);
  }, []);

  useEffect(() => {
    if (user) {
      setShowProfilModal(true); 
    }
  }, [user]);

  const handleNavigate = (path) => {
    const sidebar = sidebarRef.current;
    const closeBtn = sidebar?.querySelector('[data-bs-dismiss="offcanvas"]');
    if (closeBtn) closeBtn.click();
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) backdrop.remove();
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => navigate(path), 300);
    }
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };
  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm py-3 sticky-top" style={{ borderBottom: '1px solid #ccc' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center" style={{ maxWidth: '1150px' }}>
          <button className="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <button className="navbar-brand btn d-lg-none position-absolute top-50 start-50 translate-middle d-flex align-items-center" 
          onClick={() => handleNavigate('/')}>
            WisataBanjarnegara
          </button>

          <button className="navbar-brand btn d-none d-lg-flex align-items-center p-0"
           onClick={() => handleNavigate('/')}>
            <img src={logo} alt="Logo" width="50" height="50" className="me-2" />
            <b>WisataBanjarnegara</b>
          </button>

          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav flex-row me-4" style={{ fontWeight: 500, fontSize: 17 }}>
  {[
    { label: 'Beranda', path: '/' },
    { label: 'Cari Wisata', path: '/daftarwisata' },
  ].map(({ label, path }) => {
    const isActive = window.location.pathname === path;

    return (
      <li className="nav-item me-2" key={path}>
        <button
          className="nav-link btn"
          onClick={() => handleNavigate(path)}
          style={{
          fontWeight: isActive ? 'bold' : 'normal',
          borderRadius: 0,
          }}

        >
          {label}
        </button>
      </li>
    );
  })}
</ul>

 {user && showProfilModal && (
    <div style={{ position: 'relative', zIndex: 1050 }}>
      <ProfilModal
        inline
        onClose={() => setShowProfilModal(false)}
      />
    </div>
  )}
           
            {!user && (
              <>
                <button className="btn btn-outline-secondary me-2" onClick={() => setShowLogin(true)} style={{ color: '#015E78' }}>Masuk</button>
                <button className="btn" onClick={() => setShowRegister(true)} style={{ backgroundColor: '#015E78', color: 'white' }}>Daftar</button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <UserSidebar
        ref={sidebarRef}
        onNavigate={handleNavigate}
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
        onLogout={() => setShowLogoutModal(true)}
      />


      {/* MODAL AUTH */}
      {showRegister && <Register show={showRegister} onClose={() => setShowRegister(false)} toLogin={switchToLogin} />}
      {showLogin && <Login show={showLogin} onClose={() => setShowLogin(false)} toRegister={switchToRegister} />}

    </>
  );
};

export default UserNavbar;
