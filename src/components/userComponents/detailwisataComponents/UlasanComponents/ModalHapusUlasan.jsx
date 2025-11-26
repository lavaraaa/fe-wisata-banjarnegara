import React from 'react';

const ModalHapusUlasan = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div style={{
      position:'fixed', top:0, left:0, width:'100vw', height:'100vh',
      background:'rgba(0,0,0,0.5)', display:'flex', justifyContent:'center', alignItems:'center', zIndex:1000
    }}>
      <div style={{
        background:'#fff', padding:20, borderRadius:5, minWidth:300,
        boxShadow:'0 0 10px rgba(0,0,0,0.3)', textAlign:'center'
      }}>
        <p>Apakah Anda ingin menghapus ulasan ini?</p>
        <div style={{ display:'flex', justifyContent:'center', gap:10, marginTop:15 }}>
          <button className="btn btn-danger" onClick={onConfirm}>Ya</button>
          <button className="btn btn-secondary" onClick={onClose}>Batal</button>
        </div>
      </div>
    </div>
  );
};

export default ModalHapusUlasan;
