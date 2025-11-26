import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultProfileImage from '../../assets/profil.png'; // pastikan path sudah benar
import { useNavigate } from 'react-router-dom';
import { useNotifikasi } from '../../components/common/Notifikasi';

const DaftarKomentar = () => {
  const [komentar, setKomentar] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { showNotif } = useNotifikasi();

  const fetchKomentar = async () => {
    try {
      const res = await axios.get('/api/admin/komentar', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setKomentar(res.data);
    } catch (err) {
      setMessage('Gagal memuat daftar komentar.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKomentar();
  }, []);

  // Hapus komentar
  const hapusKomentar = async (id) => {
    try {
      await axios.delete(`/api/admin/komentar/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchKomentar();
      showNotif('Komentar berhasil dihapus', 'success');
    } catch (err) {
      setMessage('Gagal menghapus komentar.');
      console.error(err);
    }
  };

  const handleConfirm = () => {
    if (selectedId) {
      hapusKomentar(selectedId);
      setShowModal(false);
      setSelectedId(null);
    }
  };

  const filteredKomentar = komentar.filter(k =>
    k.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.judul_wisata.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.isi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
      <div style={{
        width: '100%',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
      }}>
        <h2 style={{ marginBottom: '24px', fontSize: '25px', fontWeight: '600', textAlign: 'center', color: '#333' }}>
          📝 Daftar Komentar Wisata
        </h2>

        {message && (
          <p style={{
            backgroundColor: '#ffdddd',
            color: '#a00',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '16px',
            textAlign: 'center',
            fontWeight: '500',
          }}>{message}</p>
        )}

        <input
          type="text"
          placeholder="🔍 Cari username, wisata, atau isi komentar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '12px 16px',
            marginBottom: '24px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            outline: 'none',
          }}
        />

        {loading ? (
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666' }}>⏳ Memuat komentar...</p>
        ) : (
          <div style={{ overflowX: 'auto', borderRadius: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th style={th}>User</th>
                  <th style={th}>Wisata</th>
                  <th style={th}>Komentar</th>
                  <th style={th}>Tanggal</th>
                  <th style={th}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredKomentar.length > 0 ? (
                  filteredKomentar.map(k => (
                    <tr key={k.komentar_id}>
                      <td style={td}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <img
                                          src={k.photoURL || defaultProfileImage}
                                          alt="profil"
                                          style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: '50%' }}
                                        />
                                        <div>
                                          <div style={{ fontWeight: 600 }}>{k.username || '-'}</div>
                                        </div>
                                      </div>
                      </td>
                      <td style={td}>{k.judul_wisata}
                         <br />
                        <button
                         onClick={() => navigate(`/wisata/${k.id_wisata}#komentar-${k.komentar_id}`)}
                          style={{
                            marginTop: '6px',
                            padding: '6px 10px',
                            fontSize: '13px',
                            backgroundColor: '#015E78',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                          }}
                        >
                          Cek Komentar
                        </button>
                      </td>
                      <td style={td}>{k.isi}</td>
                      <td style={td}>{new Date(k.created_at).toLocaleString()}</td>
                      <td style={td}>
                        <button
                          onClick={() => {
                            setSelectedId(k.komentar_id);
                            setShowModal(true);
                          }}
                          style={buttonStyle('#ff4d4f')}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '16px', fontStyle: 'italic', color: '#888' }}>
                      Tidak ada komentar ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1300 }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="card shadow p-4"
            style={{ maxWidth: '400px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="mb-3 text-center">Konfirmasi</h5>
            <p className="text-center">Yakin ingin menghapus komentar ini?</p>
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

const th = {
  padding: '14px 18px',
  backgroundColor: '#015E78',
  color: '#fff',
  fontSize: '17px',
  textAlign: 'center',
};

const td = {
  padding: '14px 18px',
  textAlign: 'center',
  fontSize: '15px',
  borderBottom: '1px solid #eaeaea',
  backgroundColor: '#fff',
  color: '#444',
  verticalAlign: 'middle',
};

const buttonStyle = (bg) => ({
  backgroundColor: bg,
  color: '#fff',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
});

export default DaftarKomentar;
