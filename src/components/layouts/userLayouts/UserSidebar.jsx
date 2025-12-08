import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../pages/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import profilePlaceholder from '../../../assets/profil.png';
import logo from '../../../assets/logoputih.png';
import Login from '../../../pages/auth/Login';
import Register from '../../../pages/auth/Register';
import LogoutModal from '../../common/LogoutModal';
import {useNotifikasi} from '../../common/Notifikasi';

const UserSidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
   const { showNotif } = useNotifikasi();

  useEffect(() => {
    const handleClickOutsideSidebar = (e) => {
      const sidebar = document.getElementById('sidebarMenu');
      if (sidebar?.classList.contains('show') && !sidebar.contains(e.target)) {
        const closeBtn = sidebar.querySelector('[data-bs-dismiss="offcanvas"]');
        if (closeBtn) closeBtn.click();
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) backdrop.remove();
      }
    };
    document.addEventListener('click', handleClickOutsideSidebar);
    return () => document.removeEventListener('click', handleClickOutsideSidebar);
  }, []);

  const closeSidebar = () => {
    const sidebar = document.getElementById('sidebarMenu');
    const closeBtn = sidebar?.querySelector('[data-bs-dismiss="offcanvas"]');
    if (closeBtn) closeBtn.click();
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) backdrop.remove();
  };

  const handleNavigate = (path) => {
    closeSidebar();
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => navigate(path), 300);
    }
  };

  const handleLogout = async () => {
  const success = await logout();

  setShowLogoutModal(false);
  closeSidebar();

  if (success) {
    showNotif('Berhasil keluar dari akun', 'success');
    setTimeout(() => {
      navigate('/');
    }, 1200);
  } else {
    showNotif('Logout gagal, coba lagi', 'error');
  }
};



  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
    setShowLupaSandi(false);
  };

  return (
    <>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel" style={{ width: '70%', zIndex: '1260' }}>
        <div className="offcanvas-header d-flex flex-column align-items-start" style={{ background: '#015E78' }}>
          <div className="d-flex justify-content-between w-100 align-items-center">
            <img src={logo} alt="Logo" width="30" height="30" className="me-2" />
            <h6 className="offcanvas-title text-white" id="sidebarMenuLabel">WisataBanjarnegara</h6>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          {user && (
            <div className="mt-3 d-flex flex-column align-items-start w-100" 
            style={{ 
              cursor: 'pointer',
              marginLeft:5 }}
              onClick={() => handleNavigate('/profiluser')}>
              <img 
              src={user.photoURL?.trim() ? user.photoURL : profilePlaceholder} 
              alt="Profile" className="rounded-circle me-2" width="50" height="50"
               style={{  
                width: '65px',
                height: '65px',
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0  }} 
              />
              <div className="d-flex flex-column" style={{marginLeft:12}}>
                <span className="text-white fw-bold">{user.username}</span>
                <span className="text-white fw-bold">{user.email}</span>
              </div>
            </div>
          )}
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">
           <li className="nav-item">
  <button className="nav-link btn text-start" onClick={() => handleNavigate('/')}>
    <i className="bi bi-house-door-fill me-2"></i>Home
  </button>
</li>
<li className="nav-item">
  <button className="nav-link btn text-start" onClick={() => handleNavigate('/daftarwisata')}>
    <i className="bi bi-map-fill me-2"></i>Daftar Wisata
  </button>
</li>
            {!user ? (
              <>
                <li className="nav-item mt-3">
                  <button onClick={() => setShowRegister(true)} className="btn btn-outline-secondary w-100 mb-2" data-bs-dismiss="offcanvas">Daftar</button>
                </li>
                <li className="nav-item">
                  <button onClick={() => setShowLogin(true)} className="btn w-100" style={{ backgroundColor: '#015E78', color: 'white' }} data-bs-dismiss="offcanvas">Masuk</button>
                </li>
              </>
            ) : (
              <li className="nav-item mt-3">
                <button
                  className="btn btn-outline-danger w-100"
                  onClick={() => {
                    closeSidebar();
                    setTimeout(() => 
                    setShowLogoutModal(true), 300);
                  }}
                >
                  <i className="bi bi-box-arrow-right" style={{marginRight: 5, fontSize:20}}></i>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* MODAL AUTH */}
      {showLogin && <Login show={showLogin} onClose={() => setShowLogin(false)} toRegister={switchToRegister} />}
      {showRegister && <Register show={showRegister} onClose={() => setShowRegister(false)} toLogin={switchToLogin} />}

      {/* MODAL LOGOUT */}
      <LogoutModal
        show={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default UserSidebar;
