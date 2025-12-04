import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate  } from 'react-router-dom';
import profilePlaceholder from '../../../../assets/profil.png';
import { useNotifikasi } from '../../../common/Notifikasi';
import { formatWaktu } from '../../../common/FormatWaktu';
import UlasanTotal from '../InformasiWisata/UlasanTotal';
import FormUlasan from './FormUlasan';
import ModalHapusUlasan from './ModalHapusUlasan';

const UlasanModal = ({ onClose, onUpdate }) => {
  const { showNotif } = useNotifikasi();
  const { id: wisataId } = useParams();
  const navigate = useNavigate();
  const [ulasan, setUlasan] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [hasRated, setHasRated] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUlasanId, setSelectedUlasanId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [preview, setPreview] = useState({
      show: false,
      img: null
    });
  
 useEffect(() => {
  const scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  // document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  setTimeout(() => setVisible(true), 100);
  return () => {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
  };
}, []);


  useEffect(() => { if(wisataId) fetchAll(); }, [wisataId]);

  const fetchAll = async () => {
    try {
      const token = localStorage.getItem('token');
      const resUlasan = await axios.get(`/api/rating/${wisataId}`);
      setUlasan(resUlasan.data);

      if(token) {
        const resUser = await axios.get('/api/me', { headers:{Authorization:'Bearer '+token}});
        setCurrentUser(resUser.data);

        const myReview = resUlasan.data.find(r=>r.user_id===resUser.data.id);
        setHasRated(!!myReview);
      } else setCurrentUser(null);
    } catch(err){ console.error(err); }
  };

  const handleDeleteUlasan = async (id) => {
    try {
      await axios.delete(`/api/admin/rating/${id}`, { headers:{ Authorization: 'Bearer ' + localStorage.getItem('token') }});
      setUlasan(prev => prev.filter(u=>u.id!==id));
      onUpdate?.();
      showNotif('✅ Ulasan berhasil dihapus');
      setShowDeleteModal(false);
    } catch(err){ showNotif('Gagal menghapus ulasan','error'); }
  };

const openPreview = (imgUrl) => {
    setPreview({ show: true, img: imgUrl });
  };

  const closePreview = () => {
    setPreview({ show: false, img: null });
  };

  const handleProfileClick = (userId) => {
  if (!currentUser) {
    navigate(`/lihatprofil/${userId}`);
    return;
  }

  if (currentUser.id === userId) {
    navigate('/profiluser');
  } else {
    navigate(`/lihatprofil/${userId}`);
  }
};

  return (
  <div className="modal-overlay"
  onClick={() => {
    if (!preview.show) onClose();
  }}
  style={{
    position:'fixed', top:0,left:0,right:0,bottom:0, 
    backgroundColor:'rgba(0,0,0,0.6)', 
    display:'flex', justifyContent:'center', alignItems:'center', 
    zIndex:9999,
    opacity: visible ? 1 : 0,
    transition: 'opacity 0.5s ease'
  }}
>
  <div className="modal-content"
    onClick={e => e.stopPropagation()}
    style={{ 
      backgroundColor:'white', width:'100%', maxWidth:800, maxHeight:'100vh', overflowY:'auto', 
      borderRadius:8, padding:0, paddingTop:0, position:'relative',
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'transform 0.5s ease'
    }}
  >
<div className=' shadow-sm py-1'
  style={{ 
    position: 'sticky', 
    top: 0,              
    backgroundColor: 'white', 
    zIndex: 10,   
    padding:20,
    paddingRight:0 
  }}
>
        <button onClick={onClose} style={{ position:'absolute', top:7,right:10, background:'transparent', border:'none', fontSize:'clamp(21px,2.5vw,20px)', cursor:'pointer', fontWeight:550 }}>✕</button>
        <p style={{ fontSize:'clamp(20px,2.5vw,16px)', margin:0 }}>Semua Ulasan</p>
        <div style={{ position:'relative', 
          // borderBottom:'1px solid #ccc' 
          }}>
            <UlasanTotal/></div>
</div>
        {(!hasRated || editingData) && (
          <FormUlasan
            wisataId={wisataId}
            editingData={editingData}
            onCancel={()=>setEditingData(null)}
            onSuccess={()=>{ setEditingData(null); fetchAll(); onUpdate?.(); }}
          />
        )}

        {[...ulasan].sort((a,b)=>{
          if(a.user_id===currentUser?.id) return -1;
          if(b.user_id===currentUser?.id) return 1;
          return 0;
        }).map(u=>(
          <div key={u.id} style={{ borderBottom:'1px solid #ccc', marginBottom:5, position:'relative', padding:10 }}>
            <div 
            onClick={() => handleProfileClick(u.user_id)}
            style={{ 
              display:'flex',
               alignItems:'center', 
               gap:10 }}>
              
              <img 
              src={u.photoURL?.trim()?u.photoURL:profilePlaceholder} 
              width={40} 
              height={40} 
              style={{  
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0  }} 
                alt=""/>
              
              <div style={{ display:'flex', flexDirection:'column' }}>
                <b style={{ color:'#015E78', fontSize:16 }}>@{u.username}</b>
                <p style={{ fontSize:'12px', color:'#888', marginBottom:0 }}>{formatWaktu(u.created_at)}</p>
              </div>
            </div>

            <div style={{ marginLeft:50 }}>
              {[1,2,3,4,5].map(i=><span key={i} style={{ color:u.rating>=i?'orange':'#ccc', fontSize:16 }}>★</span>)}
            </div>

            <div style={{ position:'absolute', right:10, top:10, display:'flex', gap:8 }}>
              {currentUser?.id===u.user_id && <button className="btn btn-sm btn-warning" onClick={()=>setEditingData({ ...u, images:JSON.parse(u.images||'[]') })}>Edit</button>}
              {currentUser?.role==='admin' && <button className="btn btn-sm btn-danger" onClick={()=>{ setSelectedUlasanId(u.id); setShowDeleteModal(true); }}>Hapus</button>}
            </div>

            <p style={{ wordWrap:'break-word', whiteSpace:'pre-wrap', overflowWrap:'break-word', maxWidth:'100%', marginLeft:50 }}>{u.review}</p>
           <div style={{ marginLeft: 50 }}>
  {JSON.parse(u.images || '[]').map(f => (
    <img
      key={f}
      src={`https://ksjglnabyjehcodgvssp.supabase.co/storage/v1/object/public/images/ulasan/${f}`}
      width={80}
      height={80}
      style={{ 
        width: '80px',
        height: '80px',
        marginRight: 6,
        marginBottom: 8,
        borderRadius: 5 }}
      onClick={() =>
        openPreview(`https://ksjglnabyjehcodgvssp.supabase.co/storage/v1/object/public/images/ulasan/${f}`)
      }
      alt=""
    />
  ))}
</div>

          </div>
        ))}

        <ModalHapusUlasan
          show={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => handleDeleteUlasan(selectedUlasanId)}
        />
      </div>
        {preview.show && (
        <div
          onClick={closePreview}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}
        >
          <img
            src={preview.img}
            alt="preview"
            style={{
              maxWidth: "95%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 10
            }}
          />
        </div>
      )}
    </div>
    
  );
};

export default UlasanModal;
