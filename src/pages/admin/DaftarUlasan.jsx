// DaftarUlasan.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultProfileImage from '../../assets/profil.png';
import LoadingInternal from '../../components/common/LoadingInternal';

const DaftarUlasan = () => {
  const [ulasan, setUlasan] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchUlasan();
  }, []);

  const fetchUlasan = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/admin/rating', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUlasan(res.data);
      setMessage('');
    } catch (err) {
      console.error('Gagal memuat ulasan:', err);
      setMessage('Gagal memuat ulasan.');
    } finally {
      setLoading(false);
    }
  };

  const handleHapus = async (ulasanId) => {
    try {
      await axios.delete(`http://localhost:3000/api/admin/rating/${ulasanId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUlasan();
      setMessage('Ulasan berhasil dihapus.');
    } catch (err) {
      console.error('Gagal menghapus ulasan:', err);
      setMessage('Gagal menghapus ulasan.');
    }
  };

  const filtered = ulasan.filter((item) =>
    (item.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.isi_ulasan?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.nama_wisata?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleConfirmDelete = async () => {
    await handleHapus(selectedId);
    setShowModal(false);
    setSelectedId(null);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: 1300,
      margin: "0 auto",
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 12,
      boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
      boxSizing: "border-box"
    }}>
      <h2 style={{
        marginBottom: 24,
        fontSize: "clamp(18px, 2vw, 22px)", // responsive
        fontWeight: 600,
        textAlign: 'center',
        color: '#333'
      }}>
        📝 Daftar Ulasan Pengguna
      </h2>

      {message && (
        <p style={{
          backgroundColor: '#ffdddd',
          color: '#a00',
          padding: 10,
          borderRadius: 8,
          marginBottom: 16,
          textAlign: 'center',
          fontWeight: 500
        }}>{message}</p>
      )}

      <input
        type="text"
        placeholder="🔍 Cari nama pengguna, wisata, atau isi ulasan"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '7px',
          marginBottom: 24,
          width: '100%',
          borderRadius: 8,
          border: '1px solid #ccc',
          fontSize: 16,
          outline: 'none'
        }}
      />

      {loading ? <LoadingInternal/> : (
        <div style={{ overflowX: 'auto', borderRadius: 8 }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 800 }}>
            <thead>
              <tr>
                <th style={th}>User</th>
                <th style={th}>Wisata</th>
                <th style={th}>Rating</th>
                <th style={th}>Ulasan</th>
                <th style={th}>Gambar</th>
                <th style={th}>Tanggal</th>
                <th style={th}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? filtered.map((item) => {
                const gambar = item.images && JSON.parse(item.images);
                return (
                  <tr key={item.id}>
                    <td style={td}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <img
                          src={item.photoURL || defaultProfileImage}
                          alt="profil"
                          style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: '50%' }}
                        />
                        <div>
                          <div style={{ fontWeight: 600 }}>{item.username || '-'}</div>
                        </div>
                      </div>
                    </td>
                    <td style={td}>{item.nama_wisata || '-'}</td>
                    <td style={td}>
                      {item.rating ? (
                        <>{item.rating} <span style={{ color: 'orange' }}>★</span></>
                      ) : '-'}
                    </td>
                    <td style={td}>{item.review || '-'}</td>
                   <td style={td}>
  {gambar?.length ? (
    <img
      src={`https://ksjglnabyjehcodgvssp.supabase.co/storage/v1/object/public/images/ulasan/${gambar[0]}`}
      alt="gambar ulasan"
      style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 6 }}
    />
  ) : (
    <span style={{ color: '#aaa', fontStyle: 'italic' }}>Tidak ada</span>
  )}
</td>

                    <td style={td}>{new Date(item.created_at).toLocaleDateString('id-ID')}</td>
                    <td style={td}>
                      <button
                        onClick={() => {
                          setSelectedId(item.id);
                          setShowModal(true);
                        }}
                        style={buttonStyle('#ff4d4f')}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                );
              }) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: 16, fontStyle: 'italic', color: '#888' }}>
                    Tidak ada ulasan ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1300 }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="card shadow p-4"
            style={{ maxWidth: 400, width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="mb-3 text-center">Konfirmasi Hapus</h5>
            <p className="text-center">Yakin ingin menghapus ulasan ini?</p>
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-secondary w-50 me-2" onClick={() => setShowModal(false)}>Batal</button>
              <button className="btn btn-danger w-50 ms-2" onClick={handleConfirmDelete}>Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const th = {
  padding: '6px',
  backgroundColor: '#015E78',
  color: '#fff',
  fontSize: 17,
  textAlign: 'center'
};

const td = {
  padding: '14px 18px',
  textAlign: 'center',
  fontSize: 15,
  borderBottom: '1px solid #eaeaea',
  backgroundColor: '#fff',
  color: '#444',
};

const buttonStyle = (bg) => ({
  backgroundColor: bg,
  color: '#fff',
  border: 'none',
  padding: '8px 12px',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 500,
});

export default DaftarUlasan;
