import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import HapusKomentarModal from '../KomentarComponents/HapusKomentarModal';
import LaporKomentarModal from './LaporKomentarModal';
import profilePlaceholder from '../../../../assets/profil.png';
import { useNotifikasi } from '../../../common/Notifikasi';
import { formatWaktu } from '../../../common/FormatWaktu';

const KomentarModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { showNotif } = useNotifikasi();
  const [searchParams] = useSearchParams();
  const komentarDariQuery = searchParams.get('komentar');

  const [komentar, setKomentar] = useState('');
  const [daftarKomentar, setDaftarKomentar] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [hapusId, setHapusId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserRole, setCurrentUserRole] = useState(null);
  const [laporId, setLaporId] = useState(null);
  const [showLaporModal, setShowLaporModal] = useState(false);
  const [alasanLapor, setAlasanLapor] = useState([]);
  const [alasanLainnya, setAlasanLainnya] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCurrentUserId(res.data.id);
        setCurrentUserRole(res.data.role);
      } catch (err) {
        console.error('Gagal fetch user:', err);
      }
    };

    if (token) fetchUser();
  }, [token]);

  const fetchKomentar = async () => {
    try {
      const res = await axios.get(`/api/user/komentar/${id}`);
      setDaftarKomentar(res.data);
    } catch (err) {
      console.error('Gagal ambil komentar:', err);
    }
  };

  useEffect(() => {
    fetchKomentar();
  }, [id]);

  useEffect(() => {
  if (komentarDariQuery) {
    setTimeout(() => {
      const target = document.getElementById(`komentar-${komentarDariQuery}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('bg-yellow-100');
        setTimeout(() => {
          target.classList.remove('bg-yellow-100');
        }, 2500);
      }
    }, 600);
  }
}, [daftarKomentar, komentarDariQuery]);

const toggleDropdown = (id) => {
  setDropdownOpen(prev => (prev === id ? null : id));
};

const closeDropdown = () => setDropdownOpen(null);


useEffect(() => {
  const handleClickOutside = (event) => {
    const isClickInside = Object.values(dropdownRefs.current).some((ref) => ref?.contains(event.target));
    if (!isClickInside) {
      closeDropdown();
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  const handleKomentar = async () => {
    if (!token) 
      return showNotif('Login untuk berkomentar', 'error');
    if (!komentar.trim()) return showNotif('Komentar tidak boleh kosong', 'error');

    try {
      await axios.post('/api/user/komentar', {
        id_wisata: id,
        isi: komentar,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setKomentar('');
      fetchKomentar();
    } catch (err) {
      console.error('Gagal kirim komentar:', err);
    }
  };

  const simpanEditKomentar = async () => {
    try {
      await axios.put(`/api/user/komentar/${editId}`, {
        isi: editText,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setEditId(null);
      setEditText('');
      fetchKomentar();
    } catch (err) {
      console.error('Gagal edit komentar:', err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/user/komentar/${hapusId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setShowModal(false);
      setHapusId(null);
      fetchKomentar();
    } catch (err) {
      console.error('Gagal hapus komentar:', err);
    }
  };

 const handleBalasKomentar = async (parentId) => {
   if (!token) 
      return showNotif('Login untuk balas komentar', 'error');
  if (!replyText.trim())
  return showNotif('Isi balasan tidak boleh kosong', 'error');

  try {
    const res = await axios.post('/api/user/komentar', {
      id_wisata: id,
      isi: replyText,
      parent_id: parentId
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const newId = res.data.komentar_id;

    setReplyText('');
    setReplyTo(null);
    await fetchKomentar();

    setTimeout(() => {
      const el = document.getElementById(`komentar-${newId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  } catch (err) {
    console.error('Gagal balas komentar:', err);
  }
};


const handleLaporkanKomentar = async () => {
  const alasanFinal = alasanLapor.includes('Lainnya')
    ? `${alasanLapor.join(', ')} (${alasanLainnya})`
    : alasanLapor.join(', ');

  if (alasanLapor.includes('Lainnya') && !alasanLainnya.trim()) {
    showNotif('Silakan isi alasan lainnya!', 'error');
    return;
  }

  if (alasanLapor.length === 0) {
    showNotif('Pilih setidaknya satu alasan!', 'error');
    return;
  }

  try {
    const res = await axios.post('/api/user/laporkan-komentar', {
      komentar_id: laporId,
      alasan: alasanFinal,
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    resetLaporModal();

    if (res.data.message?.includes('sudah')) {
      showNotif(res.data.message, 'info');
    } else {
      showNotif(res.data.message, 'success');
    }

  } catch (err) {
    console.error('Gagal lapor komentar:', err);
    const msg = err.response?.data?.message || 'Gagal melaporkan komentar';
    if (msg.includes('sudah')) {
      showNotif(msg, 'info');
    } else {
      showNotif( msg, 'error');
    }
  }
};

const resetLaporModal = () => {
  setShowLaporModal(false);
  setAlasanLapor([]);
  setAlasanLainnya('');
  setLaporId(null);
};

 const handleProfileClick = (userId) => {
  if (!currentUserId) {
    navigate(`/lihatprofil/${userId}`);
    return;
  }

  if (currentUserId === userId) {
    navigate('/profiluser');
  } else {
    navigate(`/lihatprofil/${userId}`);
  }
};

  const renderKomentarUtama = (komentar) => {
  const isOwner = komentar.user_id === currentUserId;
  const isAdmin = komentar.role === 'admin';
  const balasan = daftarKomentar.filter(b => b.parent_id === komentar.komentar_id);

  return (
    <div
      key={komentar.komentar_id}
      id={`komentar-${komentar.komentar_id}`}
      ref={(el) => (dropdownRefs.current[komentar.komentar_id] = el)}
    >
      <div className="flex items-start justify-between gap-2 relative">
        <div style={{ position: 'relative', paddingRight: '32px'}}>
          <div 
            onClick={() => handleProfileClick(komentar.user_id)}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor:'pointer' }}>
            <img
              src={komentar.photoURL?.trim() ? komentar.photoURL : profilePlaceholder}
              width={40}
              height={40}
              style={{ width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0
               }}
              alt="Foto Profil"
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <b style={{ color: '#015E78', fontSize: 16 }}>@{komentar.username}</b>
              
            </div>
          </div>
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <button
              onClick={(e) => { e.stopPropagation(); toggleDropdown(komentar.komentar_id); }}
              style={{ fontSize: '20px', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px' }}
            >
              ⋮
            </button>
            {dropdownOpen === komentar.komentar_id && (
              <div style={{ position: 'absolute', top: '28px', right: 0, zIndex: 99 }}>
                {isOwner && <button onClick={() => { setEditId(komentar.komentar_id); setEditText(komentar.isi); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', cursor: 'pointer' }}>✏️ Edit</button>}
                {(isOwner || currentUserRole === 'admin') && <button onClick={() => { setHapusId(komentar.komentar_id); setShowModal(true); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>🗑️ Hapus</button>}
                {token && !isOwner && komentar.role !== 'admin' && currentUserRole !== 'admin' && <button onClick={() => { setLaporId(komentar.komentar_id); setShowLaporModal(true); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>🛑 Laporkan</button>}
              </div>
            )}
          </div>
        </div>
      </div>



      {editId === komentar.komentar_id ? (
        <div>
          <textarea value={editText} onChange={(e) => setEditText(e.target.value)} className="w-full border p-1 rounded mt-2" />
          <div className="mt-2 flex gap-2">
            <button onClick={() => setEditId(null)} className="bg-gray-200 px-3 py-1 rounded">Batal</button>
             <button onClick={simpanEditKomentar} className=" text-white px-3 py-1 rounded"
              style={{ backgroundColor: '#015E78', color: 'white',  padding: '2px 5px' }}>Simpan</button>
          </div>
        </div>

      ) : (

        <p style={{ 
            marginBottom: 5,
            wordWrap: 'break-word', 
            whiteSpace: 'pre-wrap', 
            overflowWrap: 'break-word',
            maxWidth: '100%', 
            marginLeft: 50 }}>
          {komentar.isi}
          </p>
      )}

 <div style={{ marginBottom:'10px',display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginLeft:50 }}>

  <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>
    {formatWaktu(komentar.created_at)}
  </p>
<button onClick={() => setReplyTo(komentar.komentar_id)}
 className="text-blue-500 text-xs"
    style={{
      background: 'none',
      border: 'none',
      padding: 0,
      fontSize: '14px',
      cursor: 'pointer'
    }}
  >
  Balas
</button>

</div>

      {replyTo === komentar.komentar_id && (
        <div className="mt-2 ms-5">
          <textarea className="w-full border rounded p-2" rows={1} value={replyText} onChange={(e) => setReplyText(e.target.value)} />
         <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
  
  <button
    onClick={() => {
      setReplyTo(null);
      setReplyText('');
    }}
    style={{
      backgroundColor: '#e5e7eb',
      color: '#111',
      padding: '6px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Batal
  </button>

  <button
    onClick={() => handleBalasKomentar(komentar.komentar_id)}
    style={{
      backgroundColor: '#2563EB',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Kirim Balasan
  </button>
</div>

        </div>
      )}
    

      {balasan.map(child => renderBalasan(child, komentar))}
    </div>
  );
};

const renderBalasan = (komentar, parentKomentar) => {
  const isOwner = komentar.user_id === currentUserId;
  const isAdmin = komentar.role === 'admin';
  const balasan = daftarKomentar.filter(b => b.parent_id === komentar.komentar_id);

  return (
    <div
      key={komentar.komentar_id}
      id={`komentar-${komentar.komentar_id}`}
      // style={{ marginLeft: 40 }}
      ref={(el) => (dropdownRefs.current[komentar.komentar_id] = el)}
    >
      <div className="flex items-start justify-between gap-2 relative">
          <div style={{ marginLeft: 50 }}>
        <div style={{ position: 'relative', paddingRight: '32px', marginBottom: '8px', marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src={komentar.photoURL?.trim() ? komentar.photoURL : profilePlaceholder}
              width={25}
              height={25}
              style={{ 
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0
               }}
              alt="Foto Profil"
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <b style={{ color: '#015E78', fontSize: 14 }}>
                @{komentar.username} <i className="bi bi-caret-right-fill" style={{ color: '#ccc' }}></i>
                {parentKomentar && <span> @{parentKomentar.username}</span>}
              </b>
              
            </div>
          </div>
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <button
              onClick={(e) => { e.stopPropagation(); toggleDropdown(komentar.komentar_id); }}
              style={{ fontSize: '20px', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px' }}
            >
              ⋮
            </button>
            {dropdownOpen === komentar.komentar_id && (
              <div style={{ position: 'absolute', top: '28px', right: 0, zIndex: 99 }}>
                {isOwner && <button onClick={() => { setEditId(komentar.komentar_id); setEditText(komentar.isi); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', cursor: 'pointer' }}>✏️ Edit</button>}
                {(isOwner || currentUserRole === 'admin') && <button onClick={() => { setHapusId(komentar.komentar_id); setShowModal(true); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>🗑️ Hapus</button>}
                {token && !isOwner && komentar.role !== 'admin' && currentUserRole !== 'admin' && <button onClick={() => { setLaporId(komentar.komentar_id); setShowLaporModal(true); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>🛑 Laporkan</button>}
              </div>
            )}
          </div>
        </div>

      {editId === komentar.komentar_id ? (
        <div>
          <textarea value={editText} onChange={(e) => setEditText(e.target.value)} className="w-full border p-1 rounded mt-2" />
          <div className="mt-1 flex gap-2">
            <button onClick={() => setEditId(null)} className="bg-gray-200 px-3 py-1 rounded">Batal</button>
            <button onClick={simpanEditKomentar} className=" text-white px-3 py-1 rounded"
            style={{ backgroundColor: '#015E78',
              color: 'white',  padding: '2px 5px'
             }}
            >Simpan</button>
          </div>
        </div>

      ) : (

        <p className="mt-1" 
          style={{ 
            marginBottom:5,
            wordWrap: 'break-word', 
            whiteSpace: 'pre-wrap', 
            overflowWrap: 'break-word', 
            maxWidth: '100%', 
            marginLeft: 35 }}>
            {komentar.isi}
        </p>
      )}

    <div 
      style={{ 
      display: 'flex',
      alignItems: 'center',
      gap: '10px', 
      flexWrap: 'wrap',
      marginLeft: 35
      }}>

  <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>
    {formatWaktu(komentar.created_at)}
  </p>
  <button
    onClick={() => setReplyTo(komentar.komentar_id)}
    className="text-blue-500 text-xs"
    style={{
      background: 'none',
      border: 'none',
      padding: 0,
      fontSize: '14px',
      cursor: 'pointer'
    }}
  >
    Balas
  </button>

</div>
      {replyTo === komentar.komentar_id && (
        <div className="mt-2" style={{marginLeft:30}}>
          <textarea className="w-full border rounded p-2" 
          rows={2}
           value={replyText} 
           onChange={(e) => setReplyText(e.target.value)} 
           />

 <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
  <button
    onClick={() => {
      setReplyTo(null);
      setReplyText('');
    }}
    style={{
      backgroundColor: '#e5e7eb',
      color: '#111',
      padding: '6px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Batal
  </button>
   <button
    onClick={() => handleBalasKomentar(komentar.komentar_id)}
    style={{
      backgroundColor: '#2563EB',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Kirim Balasan
  </button>
</div>

        
        </div>
      )}

 </div>
      {balasan.map(child => renderBalasan(child, komentar))}
    </div>
    </div>
    
  );
};


return (
 <div className="mt-3 p-3" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
  <h4 className="text-lg font-semibold mb-3" 
  style={{
    fontSize:'clamp(18px, 2.5vw, 22px', 
     borderBottom: '1px solid #ccc' 
    }}>Komentar</h4>

  {daftarKomentar.filter(k => !k.parent_id).map(k => renderKomentarUtama(k))}

  <div className="flex items-center gap-2 mt-3 ms-2">
    <input
      type="text"
      placeholder="Tulis komentar..."
      className="flex-1 border rounded px-2 py-1 text-sm"
      value={komentar}
      style={{
          fontSize:'clamp(16px, 2.5vw, 17px',
          width: '60%',
          borderRadius: '15px',
      }}
      onChange={(e) => setKomentar(e.target.value)}
    />
    <button
      onClick={handleKomentar}
      className="ms-3 px-3 py-1 rounded"
    style={{color: '#fff',
      backgroundColor:'#015E78'
    }}>
      Kirim
    </button>
  </div>

      {/* Modal konfirmasi hapus */}
      {showModal && (
        <HapusKomentarModal
    onClose={() => setShowModal(false)}
    onConfirm={handleDelete}
  />
)}

      {/* Modal laporan */}
    {showLaporModal && (
  <LaporKomentarModal
    onClose={resetLaporModal}
    onSubmit={handleLaporkanKomentar}
    alasanLapor={alasanLapor}
    setAlasanLapor={setAlasanLapor}
    alasanLainnya={alasanLainnya}
    setAlasanLainnya={setAlasanLainnya}
  />
)}

    </div>
  );
};

export default KomentarModal;
