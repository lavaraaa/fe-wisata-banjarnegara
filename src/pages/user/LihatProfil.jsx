import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import profilePlaceholder from '../../assets/profil.png';
import CardWisata from '../../components/common/cardComponents/CardWisata';
import { Icon } from '@iconify/react';
import Loading from '../../components/common/Loading';
import { AuthContext } from '../../pages/auth/AuthContext';

const LihatProfil = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [disukai, setDisukai] = useState([]);
  const [disimpan, setDisimpan] = useState([]);
  const [activeTab, setActiveTab] = useState('disukai');
  const [showPreview, setShowPreview] = useState(false);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfil = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`/api/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error('Gagal ambil data user:', err);
        } finally {
      setLoading(false);
    }
  };
    fetchProfil();
  }, [id]);

  useEffect(() => {
    const fetchWisataUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:3000/api/user-wisata-lain?id=${id}`,
           {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDisukai(res.data.disukai || []);
        setDisimpan(res.data.disimpan || []);
      } catch (err) {
        console.error('Gagal ambil wisata:', err);
      }
    };

    fetchWisataUser();
  }, [id]);

  if (!user) return <Loading />;

  return (
    <div className="container mt-3 text-center">
      <img
        src={user.photoURL || profilePlaceholder}
        alt="Foto Profil"
        className="rounded-circle"
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'cover',
          border: '2px solid #ccc',
          cursor: user.photoURL ? 'pointer' : 'default',
        }}
        onClick={() => user.photoURL && setShowPreview(true)}
      />

      <h5 className="mt-2">{user.username}</h5>
    <div
  className="text-muted"
  style={{
    borderBottom: '1px solid #ccc',
    paddingBottom: '4px'
  }}>
</div>


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


      <div className="row d-flex flex-wrap justify-content-start mt-4">
        {(activeTab === 'disukai' ? disukai : disimpan).length > 0 ? (
          (activeTab === 'disukai' ? disukai : disimpan).map((item) => (
            <CardWisata key={item.id} item={item} showOptionsMenu={false} />
          ))
        ) : (
          <p className="mb-5 mt-3 d-flex flex-column align-items-center text-muted" style={{minHeight:'203px'}}>
                      <Icon icon="hugeicons:album-not-found-01" width={60} />
            Belum ada wisata yang {activeTab === 'disukai' ? 'disukai' : 'disimpan'}.
          </p>
        )}
      </div>

      {/* Modal Preview Foto */}
      {showPreview && (
          <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1250 }}
          onClick={() => setShowPreview(false)}
        >
            <div className="position-relative" onClick={(e) => e.stopPropagation()} 
          style={{
            backgroundColor:'white',
            padding:'5px'
          }}>
                 <img
              src={user.photoURL}
              alt="Preview"
              className="img-fluid"
              style={{
                width: 'min(80vw, 500px)',
                height: 'min(80vw, 500px)',
                 borderRadius: '50%' }}
            />
              </div>
            </div>
        
      )}
    </div>
  );
};

export default LihatProfil;
