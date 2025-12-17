import React, { useEffect, useState, useContext } from 'react';
import { useSwipeable } from "react-swipeable";

import axios from 'axios';
import profilePlaceholder from '../../assets/profil.png';
import CardWisata from '../../components/common/cardComponents/CardWisata';
import { Icon } from '@iconify/react';
import { AuthContext } from '../auth/AuthContext';
import { useNotifikasi } from '../../components/common/Notifikasi';
import Loading from '../../components/common/Loading';

const ProfilUser = () => {
  const { user, setUser, fetchUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('disukai');
  const [disukai, setDisukai] = useState([]);
  const [disimpan, setDisimpan] = useState([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { showNotif } = useNotifikasi();
  const [loading, setLoading] = useState(true);

  const handlers = useSwipeable({
  onSwipedLeft: () => setActiveTab("disimpan"),
  onSwipedRight: () => setActiveTab("disukai"),
});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (error) {
        console.error('Gagal mengambil data user:', error);
       } finally {
      setLoading(false);
    }
  };
    fetchUser();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('/api/user-wisata', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setDisukai(res.data.disukai || []);
        setDisimpan(res.data.disimpan || []);
      })
      .catch((err) => {
        console.error('GAGAL AMBIL:', err.response?.data || err.message);
      });
  }, []);

  const handleFotoChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('photo', file);

  try {
    const token = localStorage.getItem('token');
    const res = await axios.post('/api/update-photo', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    // Pakai URL baru dari BE + cache-busting
    const newPhotoURL = res.data.photoURL + '?t=' + Date.now();

    setUser((prev) => ({
      ...prev,
      photoURL: newPhotoURL,
    }));

    showNotif('Foto Profil Berhasil Diperbarui', 'success');
  } catch (err) {
    console.error('Gagal upload foto:', err.response?.data || err.message);
  }
};

const handleDeletePhoto = async () => {
  try {
    const token = localStorage.getItem('token');
    await axios.post('/api/delete-photo', {}, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // langsung update state
    setUser((prev) => ({
      ...prev,
      photoURL: null,
    }));

    setShowConfirmDelete(false);
    setShowPreview(false);

    showNotif('Foto Profil Berhasil Dihapus', 'success');
  } catch (err) {
    console.error('Gagal hapus foto:', err);
  }
};

if (loading) return <Loading />;
if (!user) return null;

const isDefaultPhoto = !user.photoURL;


  return (
    <main
        className="my-3 mx-auto"
        style={{
          width: '100%',
          maxWidth: '1100px',
        }}
      >
    <div className="container mt-3 text-center">
      {/* FOTO PROFIL */}
      <div
        className="position-relative d-inline-block"
        style={{ width: '100px', height: '100px' }}
      >
       <img
  src={user.photoURL ? `${user.photoURL}?t=${Date.now()}` : profilePlaceholder}
  alt="Foto Profil"
  className="rounded-circle"
  style={{
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    cursor: 'pointer',
  }}
  onClick={() => {
    if (!isDefaultPhoto) setShowPreview(true);
  }}
/>


        {/* OVERLAY “+” jika foto masih default */}
        {isDefaultPhoto && (
          <>
           <div
  className="position-absolute top-50 start-50 translate-middle rounded-circle d-flex justify-content-center align-items-center"
  style={{
    width: '100px',
    height: '100px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
  }}
  onClick={() => document.getElementById('uploadFotoBaru').click()}
>
  <span
    style={{
      color: 'white',
      fontSize: '3.5rem',
      fontWeight: 300,
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1,
    }}
  >
    +
  </span>
</div>


            <input
              type="file"
              accept="image/*"
              id="uploadFotoBaru"
              style={{ display: 'none' }}
              onChange={handleFotoChange}
            />
          </>
        )}
      </div>

      <h5 className="mt-2">{user.username}</h5>
      <p className="mt-1">{user.email}</p>
      <div
        className="text-muted"
        style={{
          borderBottom: '1px solid #ccc',
        }}
      ></div>

     {/* TAB BUTTON */}
<div className="d-flex justify-content-center" >
  <button
    onClick={() => setActiveTab('disukai')}
    className={`w-44 border-bottom-2 py-3 ${activeTab === 'disukai' ? 'border-accent-1' : ''}`}
    style={{
      border: 'none',
      borderBottom: activeTab === 'disukai' ? '2px solid #0d6efd' : '2px solid transparent',
      background: 'transparent',
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      fontWeight: activeTab === 'disukai' ? '600' : '400',
    }}
  >
    Wisata Disukai
  </button>

  <button
    onClick={() => setActiveTab('disimpan')}
    className={`w-44 border-bottom-2 py-3 ${activeTab === 'disimpan' ? 'border-accent-1' : ''}`}
    style={{
    
      border: 'none',
      borderBottom: activeTab === 'disimpan' ? '2px solid #0d6efd' : '2px solid transparent',
      background: 'transparent',
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      fontWeight: activeTab === 'disimpan' ? '600' : '400',
    }}
  >
    Wisata Disimpan
  </button>
</div>


   {/* LIST WISATA (BUNGKUS DENGAN SWIPE) */}
<div {...handlers}>
  <div className="row d-flex flex-wrap justify-content-start mt-4">
    {(activeTab === 'disukai' ? disukai : disimpan).length > 0 ? (
      (activeTab === 'disukai' ? disukai : disimpan).map((item) => (
        <CardWisata key={item.id} item={item} showOptionsMenu={false} />
      ))
    ) : (
      <p
        className="mb-5 mt-3 d-flex flex-column align-items-center text-muted"
        style={{ minHeight: '203px' }}
      >
        <Icon icon="hugeicons:album-not-found-01" width={60} />
        Belum ada wisata yang {activeTab === 'disukai' ? 'disukai' : 'disimpan'}
      </p>
    )}
  </div>
</div>

      {/* MODAL PREVIEW */}
      {showPreview && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1250 }}
          onClick={() => setShowPreview(false)}
        >
          <div
            className="position-relative"
            onClick={(e) => e.stopPropagation()}
            style={{
              // backgroundColor: 'white',
              padding: '5px',
            }}
          >
            <img
              src={user.photoURL}
              alt="Preview"
              className="img-fluid"
              style={{
                width: 'min(80vw, 500px)',
                height: 'min(80vw, 500px)',
                borderRadius: '50%',
              }}
            />

 {/* Tombol Aksi di kanan bawah */}
<div
  className="position-absolute bottom-0 end-0 m-2 d-flex gap-2"
  style={{
    zIndex: 20,
    borderRadius: '8px',
    padding: '6px 6px',
  }}
>
  {/* Tombol Ubah */}
  <input
    type="file"
    accept="image/*"
    id="uploadFotoUbah"
    style={{ display: 'none' }}
    onChange={handleFotoChange}
  />
  <label
    htmlFor="uploadFotoUbah"
    className="btn"
    style={{
      backgroundColor: '#015E78',
      color: 'white',
      border: 'none',
    }}
  >
    <i className="bi bi-pencil"></i>
  </label>

  {/* Tombol Hapus */}
  <button
    className="btn btn-danger"
    style={{ border: 'none' }}
    onClick={() => setShowConfirmDelete(true)}
  >
    <i className="bi bi-trash"></i>
  </button>
</div>

          </div>
        </div>
      )}

      {/* KONFIRMASI HAPUS */}
      {showConfirmDelete && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1260 }}
        >
          <div className="bg-white p-4 rounded text-center" style={{ maxWidth: '300px' }}>
            <p>Apakah Anda yakin ingin menghapus foto profil?</p>
            <div className="d-flex justify-content-between mt-3">
              
              <button className="btn btn-secondary" onClick={() => setShowConfirmDelete(false)}>
                Batal
              </button>
              <button className="btn btn-danger" onClick={handleDeletePhoto}>
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </main>
  );
};

export default ProfilUser;
