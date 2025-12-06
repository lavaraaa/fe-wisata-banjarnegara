import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async (token) => {
    try {
      const res = await axios.get('/api/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      localStorage.setItem('role', res.data.role);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (token) => {
    localStorage.setItem('token', token);
    await fetchUser(token);
  };

 const logout = async () => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setUser(null); // pastikan ini ada
    return true;   // ⬅️ Tambahkan return true
  } catch (error) {
    console.error('Logout error:', error);
    return false;  // ⬅️ Tambahkan return false jika error
  }
};


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) fetchUser(token);
    else setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, setUser, fetchUser}}>
      {children}
    </AuthContext.Provider>
  );
};
