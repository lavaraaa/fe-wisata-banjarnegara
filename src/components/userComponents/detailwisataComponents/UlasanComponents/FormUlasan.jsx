import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNotifikasi } from '../../../common/Notifikasi';

const FormUlasan = ({ wisataId, editingData, onCancel, onSuccess }) => {
  const { showNotif } = useNotifikasi();

  const [rating, setRating] = useState(editingData?.rating || 0);
  const [review, setReview] = useState(editingData?.review || '');
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState(editingData?.images || []);
  const [isEditing, setIsEditing] = useState(!!editingData);

  const inputFileRef = useRef();

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      showNotif('Harap login terlebih dahulu', 'error');
      return;
    }

    if (rating < 1 || rating > 5) {
      showNotif('Pilih rating terlebih dahulu', 'error');
      return;
    }

    if ((preview.length + images.length) < 1) {
      showNotif('Minimal sertakan 1 gambar dalam ulasan', 'error');
      return;
    }

    const form = new FormData();
    form.append('rating', rating);
    form.append('review', review);
    form.append('wisata_id', wisataId);
    preview.forEach(p => form.append('keepImages', p));
    images.forEach(i => form.append('images', i));

    const config = { headers: { Authorization: 'Bearer ' + token } };

    try {
      if (isEditing && editingData?.id) {
        await axios.put(`/api/user/rating/${editingData.id}`, form, config);
        showNotif('Ulasan diperbarui', 'success');
      } else {
        await axios.post(`/api/user/rating`, form, config);
        showNotif('Ulasan ditambahkan', 'success');
      }
      onSuccess();
      setRating(0);
      setReview('');
      setImages([]);
      setPreview([]);
      setIsEditing(false);
    } catch (err) {
      showNotif(err?.response?.data?.message || 'Gagal mengirim ulasan', 'error');
    }
  };

  return (
    <div style={{ borderBottom: '1px solid #ccc', padding: 20 }}>
      <p style={{ fontSize: 'clamp(18px,2.5vw,16px)', margin: 0 }}>
        {isEditing ? 'Edit Ulasan Anda' : 'Berikan Ulasan'}
      </p>

      {/* Rating */}
      <div>
        {[1,2,3,4,5].map(i => (
          <span 
            key={i} 
            onClick={() => setRating(i)}
            style={{ cursor:'pointer', color: rating >= i ? 'orange' : '#ccc', fontSize:24 }}
          >★</span>
        ))}
      </div>

      {/* Input file hidden */}
      <input
        type="file"
        accept="image/*"
        multiple
        ref={inputFileRef}
        style={{ display: 'none' }}
        onChange={(e) => {
          const selected = Array.from(e.target.files);
          setImages(prev => {
            const combined = [...prev, ...selected];
            return combined.slice(0, 3 - preview.length);
          });
          e.target.value = '';
        }}
      />

      {/* Preview + tambah */}
      <div style={{ display:'flex', gap:10, marginTop:10 }}>
        {[0,1,2].map(idx => {
          const total = [...preview, ...images];
          const file = total[idx];
          return file ? (
            <div key={idx} style={{ width:80, height:80, borderRadius:8, overflow:'hidden', position:'relative' }}>
              <img
                src={typeof file === 'string' ? `http://localhost:3000/uploads/ulasan/${file}` : URL.createObjectURL(file)}
                style={{ width:'100%', height:'100%', objectFit:'cover' }}
              />
              <span
                onClick={() => {
                  if(typeof file === 'string') setPreview(prev => prev.filter(p=>p!==file));
                  else setImages(prev => prev.filter((_,i)=>i!==idx - preview.length));
                }}
                style={{ position:'absolute', top:2, right:2, cursor:'pointer', color:'white', backgroundColor:'rgba(0,0,0,0.5)', borderRadius:'50%', padding:'2px 4px' }}
              >
                ✕
              </span>
            </div>
          ) : (
            <div key={idx} onClick={()=>inputFileRef.current.click()} style={{ width:80, height:80, border:'2px dashed #aaa', borderRadius:8, display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer', color:'#777' }}>
              +
            </div>
          )
        })}
      </div>

      {/* Textarea + tombol */}
      <div style={{ display:'flex', alignItems:'flex-end', marginTop:10 }}>
        <textarea
          placeholder="Tulis ulasan (opsional)"
          value={review}
          rows={2}
          onChange={e => setReview(e.target.value)}
          style={{ maxWidth:260, flexGrow:1, marginRight:10 }}
        />
        {!isEditing && (
          <button style={{ color:'#fff', backgroundColor:'#015E78' }} onClick={handleSubmit}>Kirim</button>
        )}
      </div>

      {isEditing && (
        <div style={{ marginTop:10, display:'flex', gap:10, marginLeft:70 }}>
          <button onClick={() => { setIsEditing(false); onCancel?.(); }}>Batal</button>
          <button style={{ color:'#fff', backgroundColor:'#015E78' }} onClick={handleSubmit}>Perbarui Ulasan</button>
        </div>
      )}
    </div>
  );
};

export default FormUlasan;
