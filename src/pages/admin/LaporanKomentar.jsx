import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultProfileImage from '../../assets/profil.png';
import { useNavigate } from 'react-router-dom';
import { useNotifikasi } from '../../components/common/Notifikasi';

const LaporanKomentar = () => {
  const [laporan, setLaporan] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { showNotif } = useNotifikasi();

  const fetchLaporan = async () => {
    try {
      const res = await axios.get('/api/admin/laporan-komentar', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLaporan(res.data);
    } catch (err) {
      setMessage('Gagal memuat laporan komentar.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLaporan();
  }, []);

  const hapusLaporan = async (laporanId) => {
    try {
      await axios.delete(`/api/admin/laporan-komentar/${laporanId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchLaporan();
      showNotif('Laporan berhasil dihapus', 'success');
    } catch (err) {
      showNotif('Gagal menghapus laporan', 'error');
    }
  };

  const hapusKomentar = async (komentarId) => {
    try {
      await axios.delete(`/api/admin/laporan-komentar/komentar/${komentarId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchLaporan();
      showNotif('Komentar berhasil dihapus', 'success');
    } catch (err) {
      showNotif('Gagal menghapus komentar', 'error');
    }
  };

  const handleConfirm = async () => {
    if (modalType === 'laporan') {
      await hapusLaporan(selectedId);
    } else if (modalType === 'komentar') {
      await hapusKomentar(selectedId);
    }
    setShowModal(false);
    setSelectedId(null);
  };

  const filtered = laporan.filter((item) =>
    item.pelapor_username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.pemilik_username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.isi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.alasan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.judul_wisata.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{
        width: '100%',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
      }}>
        <h2 style={{ marginBottom: '24px', fontSize: '25px', fontWeight: '600', textAlign: 'center', color: '#333' }}>
          📢 Daftar Laporan Komentar
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
          placeholder="🔍 Cari komentar, pelapor, alasan, atau wisata"
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
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666' }}>⏳ Memuat laporan...</p>
        ) : (
          <div style={{ overflowX: 'auto', borderRadius: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                   <th style={th}>terlapor</th>
                  <th style={th}>komentar</th>
                  <th style={th}>wisata</th>
                  <th style={th}>pelapor</th>
                  <th style={th}>alasan</th>
                  <th style={th}>aksi</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((item) => (
                    <tr key={item.laporan_id}>
                      <td style={td}>
                        <img
                          src={item.foto_komentar || defaultProfileImage}
                          alt="profil"
                          style={{
                            width: '48px',
                            height: '48px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                          }}
                        />
                        <div>
            <strong>{item.pemilik_username}</strong>
            <br />
            {/* <span className="text-sm text-gray-600">
              {item.pemilik_email}</span> */}
          </div>
                      </td>
                      <td style={td}>{item.isi}</td>
                      <td style={td}>
                        {item.judul_wisata}
                        <br />
                        <button
                         onClick={() => navigate(`/wisata/${item.id_wisata}#komentar-${item.komentar_id}`)}
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
                      <td style={td}>
                        <strong>{item.pelapor_username}</strong><br />
                        <span style={{ fontSize: '12px', color: '#666' }}>
                          {item.pelapor_email}</span>
                      </td>
                      <td style={td}>{item.alasan}</td>
                      <td style={td}>
                        <button
                      onClick={() => {
                            setSelectedId(item.laporan_id);
                            setModalType('laporan');
                            setShowModal(true);
                                   }}
                          style={buttonStyle('#015E78')}
                        >
                          Hapus Laporan
                        </button>
                        <br />
                        <button
                     onClick={() => {
                      setSelectedId(item.komentar_id);
                                   setModalType('komentar');
                                   setShowModal(true);
                                 }}
                          style={{ ...buttonStyle('#ff4d4f'), marginTop: '6px' }}
                        >
                          Hapus Komentar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '16px', fontStyle: 'italic', color: '#888' }}>
                      Tidak ada laporan ditemukan.
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
      <p className="text-center">
        {modalType === 'laporan'
          ? 'Yakin ingin menghapus laporan ini?'
          : 'Yakin ingin menghapus komentar ini?'}
      </p>
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
  textAlign: 'center'
};

const td = {
  padding: '14px 18px',
  textAlign: 'center',
  fontSize: '15px',
  borderBottom: '1px solid #eaeaea',
  backgroundColor: '#fff',
  color: '#444',
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

export default LaporanKomentar;
