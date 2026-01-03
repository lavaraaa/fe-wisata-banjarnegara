import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../pages/auth/AuthContext";
import LogoutModal from '../../common/LogoutModal';
import logo from '../../../assets/logoputih.png';
import { useNotifikasi } from '../../common/Notifikasi';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const { logout, user } = useContext(AuthContext);
 const { showNotif } = useNotifikasi();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: "bi bi-house-door-fill" },
    { label: "Kelola Wisata", path: "/kelolawisata", icon: "bi-map-fill" },
    //  { label: "Daftar Pengumuman", path: "/daftarevent", icon: "bi-chat-left-text-fill" },
    { label: "Daftar Pengguna", path: "/daftaruser", icon: "bi-people-fill" },
    { label: "Daftar Ulasan", path: "/daftarulasan", icon: "bi bi-chat-left-heart-fill" },
    { label: "Daftar Komentar", path: "/daftarkomentar", icon: "bi-chat-left-text-fill" },
    { label: "Laporan Komentar", path: "/laporankomentar", icon: "bi bi-exclamation-octagon-fill" },
  ];

  const handleLogout = () => {
  setShowLogoutModal(false); 
  showNotif('Berhasil keluar dari akun', 'success', 1500);
  setTimeout(() => {
    logout();
    if (window.location.pathname !== '/') {
      navigate('/');  
    }
  }, 800);
};


  return (
    <div
      className="text-black d-none d-lg-block"
      style={{
        backgroundColor:'#015E78',
        width: "210px",
        height: "100vh",
        position: "fixed",
        left: 0,
        overflowY: "auto",
        zIndex: 1,
        boxShadow: "1px 0 5px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{
        marginTop:14
      }}>
      <button className="brand btn d-none d-lg-flex align-items-center"
       style={{
        fontSize:20,
        
        marginBottom:15,
        fontWeight:600,
        color:'#fff'
      }}
       onClick={() => handleNavigate('/dashboard')}
       >
                  <img src={logo} alt="Logo" width="45" height="45" className="me-2" />
                  Portal Admin
                </button>
</div>

      <h5 style={{marginLeft:8,
         paddingTop: 10, 
         borderTop:'1px solid #ccc',
         color:'#fff'
         }}>Menu</h5>
      
      <ul className="nav flex-column">
        {menuItems.map((item) => {
          const isActive = currentPath === item.path;

          return (
            <li className="nav-item" key={item.path}>
              <button
                className="d-flex align-items-center w-100 border-0 bg-transparent"
                onClick={() => navigate(item.path)}
                style={{
                  borderRadius: '4px',
                  padding: '8px',
                  marginBottom: '5px',
                  transition: 'background-color 0.2s, color 0.2s',
                  backgroundColor: isActive ? '#015E78' : 'transparent',
                  color: isActive ? '#00b2f8ff' : '#fff',
                  fontWeight: isActive ? 'bold' : 'normal',
                  textDecoration: 'none',
                  fontSize: '17px',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#015E78';
                    e.currentTarget.style.color = '#666';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#fff';
                  }
                }}
              >
                <i className={`bi ${item.icon} me-2`}></i>
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    {/* Tombol Logout */}
      <div className="px-4">
        <button
          className="btn btn-danger w-100"
          onClick={() => setShowLogoutModal(true)}>
          <i className="bi bi-box-arrow-right" 
          style=
          {{marginRight: 5,
           fontSize:20}}>
           </i>
          Logout
        </button>
      </div>

      {/* Modal Logout */}
      <LogoutModal
        show={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default AdminSidebar;
