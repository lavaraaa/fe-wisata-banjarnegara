import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Loading from '../../components/common/Loading';

const Login = ({ show, onClose, toRegister }) => {
const [formData, setFormData] = useState({ identifier: '', password: '' });
const [message, setMessage] = useState('');
const [loading, setLoading] = useState(false);
const { login } = useContext(AuthContext);
const navigate = useNavigate();
const handleChange = (e) => {
  setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
    const res = await axios.post('http://localhost:3000/api/login', formData);
    setMessage('Login berhasil!');
    setTimeout(async () => {
    await login(res.data.token); 
    onClose();
    if (res.data.role === 'admin') {navigate('/dashboard');} }, 1500); } catch (err) 
      {
      setMessage(err.response?.data?.message || 'Login gagal. Coba lagi.');
      }
      finally {
      setLoading(false);
      }
  };
  if (!show) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className="btn-close float-end mt-1" onClick={onClose}></button>
        <h4 className="text-center mb-3">Login</h4>
        {message && <div className="alert alert-info">{message}
      </div>}
        <form onSubmit={handleSubmit}>

      <div className="mb-1">
        <label className="form-label">Email atau Username</label>
          <input name="identifier" type="text" className="form-control"
              value={formData.identifier} onChange={handleChange}
              required
              placeholder="Masukkan Username/Email" style={{fontSize:'15px'}}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Kata Sandi</label>
        <input name="password" type="password" className="form-control" 
         value={formData.password} onChange={handleChange}
         required
         placeholder="Masukkan Kata Sandi" style={{fontSize:'15px'}}/>
      </div>
          
        <button className="btn btn-dark w-100" type="submit">Login</button></form>
          <p className="text-center mt-2"> Belum punya akun?{' '}
          <button type="button" onClick={() => {
              onClose();
              toRegister();
            }}
            className="btn btn-link p-0 mb-1"
            style={{ fontWeight: 600 }}>Daftar
          </button>
        </p>
      </div>
    </div>
  );
};

const styles = {
  overlay: { 
    position: 'fixed', 
    top: 0, left: 0, 
    width: '100vw', 
    height: '100vh', 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    display: 'flex', justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 9999},

  card: { background: '#fff', 
    padding: '20px', 
    borderRadius: '10px', 
    width: '100%',
    maxWidth: '370px', 
    position: 'relative', 
    boxShadow: '0 0 20px rgba(0,0,0,0.3)'}};

export default Login;
