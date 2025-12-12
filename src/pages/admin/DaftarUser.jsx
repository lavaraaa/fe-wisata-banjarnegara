import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultProfileImage from "../../assets/profil.png";
import { useNotifikasi } from '../../components/common/Notifikasi';

const DaftarUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { showNotif } = useNotifikasi();

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return console.log('Token tidak ditemukan');

     const response = await axios.get(
  `${import.meta.env.VITE_BASE_URL}/users`,
  {
    headers: { Authorization: `Bearer ${token}` },
  }
);

      setUsers(response.data);
    } catch (error) {
      console.error('Error detail:', error);
      setMessage('Gagal mengambil data user: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  
 const confirmDelete = (userId) => {
    setSelectedUserId(userId);
    setShowModal(true);
  };

  const handleConfirm = async () => {
    if (!selectedUserId) return;

    try {
      const token = localStorage.getItem('token');
      if (!token) return console.log('Token tidak ditemukan');

      await axios.delete(`/api/users/${selectedUserId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== selectedUserId));
      showNotif('Akun pengguna berhasil dihapus.');
    } catch (error) {
      console.error('Error hapus user:', error);
      showNotif('Gagal menghapus akun pengguna: ' + (error.response?.data?.message || error.message));
    } finally {
      setShowModal(false);
      setSelectedUserId(null);
    }
  };

  const getProfileImage = (photoURL) => {
    return photoURL && photoURL.trim() !== "" ? photoURL : defaultProfileImage;
  };

  const filteredUsers = users.filter((user) =>
    user.id.toString().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h3 style={styles.title}>📋 Daftar Pengguna</h3>
 {message && <p style={styles.message}>{message}</p>}
        <input
          type="text"
          placeholder="🔍 Cari Berdasarkan ID, Username atau Email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />

        {loading ? (
          <p style={styles.loading}>⏳ Memuat data...</p>
        ) : (
          <>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>ID</th>
                    <th style={styles.th}>Foto</th>
                    <th style={styles.th}>Username</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user.id} style={styles.trHover}>
                        <td style={styles.td}>{user.id}</td>
                        <td style={styles.td}>
                          <img
                            src={getProfileImage(user.photoURL)}
                            alt={user.username}
                            style={styles.image}
                          />
                        </td>
                        <td style={styles.td}>{user.username}</td>
                          <td style={styles.td}>{user.email}</td>
                       <td style={styles.td}>
  <button style={styles.button} onClick={() => confirmDelete(user.id)}>
    Hapus
  </button>
</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" style={styles.noUser}>
                        Tidak ada user ditemukan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
           {/* Modal Konfirmasi */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 9999 }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="card shadow p-4"
            style={{ maxWidth: '400px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="mb-3 text-center">Konfirmasi</h5>
            <p className="text-center">Yakin ingin menghapus user ini?</p>
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-secondary w-50 me-2" onClick={() => setShowModal(false)}>Batal</button>
              <button className="btn btn-danger w-50 ms-2" onClick={handleConfirm}>Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    // backgroundColor: '#f9fbfd',

  },
  container: {
    width: '100%',
    maxWidth: '1280px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
  },
  title: {
    marginBottom: '24px',
    fontSize: '26px',
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  searchInput: {
    padding: '12px 16px',
    marginBottom: '24px',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  loading: {
    textAlign: 'center',
    fontSize: '16px',
    color: '#666',
  },
  message: {
    backgroundColor: '#ffdddd',
    color: '#a00',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '16px',
    textAlign: 'center',
    fontWeight: '500',
  },
  tableWrapper: {
    overflowX: 'auto',
    borderRadius: '8px',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
    borderRadius: '8px',
    overflow: 'hidden',
  },
  th: {
    padding: '14px 18px',
    backgroundColor: '#015E78',
    color: '#fff',
    fontSize: '17px',
    textAlign: 'center',
  },
  trHover: {
    transition: 'background 0.2s',
    cursor: 'pointer',
  },
  td: {
    padding: '14px 18px',
    borderBottom: '1px solid #eaeaea',
    fontSize: '15px',
    color: '#444',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  image: {
    width: '48px',
    height: '48px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
  },
  button: {
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.3s',
  },
  noUser: {
    textAlign: 'center',
    padding: '16px',
    fontStyle: 'italic',
    color: '#888',
  },
};

export default DaftarUser;
