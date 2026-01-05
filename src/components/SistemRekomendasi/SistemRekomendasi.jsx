import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CardWisata from '../common/cardComponents/CardWisata';
import { AuthContext } from '../../pages/auth/AuthContext';

const SistemRekomendasi = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [wisata, setWisata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return; // tunggu AuthContext load

    const fetchRekomendasi = async () => {
      try {
        let url = '';
        const headers = user ? { Authorization: `Bearer ${localStorage.getItem('token')}` } : {};

        const hasInteraction =
          (Array.isArray(user?.rating) && user.rating.length > 0) ||
          (Array.isArray(user?.likes) && user.likes.length > 0) ||
          (Array.isArray(user?.favorit) && user.favorit.length > 0);

        if (user && user.id) {
          url = hasInteraction
            ? `/api/rekomendasi/cf/${user.id}`
            : `/api/rekomendasi/cbf/${user.id}`;
        } else {
          url = '/api/rekomendasi/cf';
        }

        const res = await axios.get(url, { headers });
        setWisata(Array.isArray(res.data) ? res.data.slice(0, 4) : []);
      } catch (err) {
        console.error('Gagal fetch rekomendasi:', err);
        setWisata([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRekomendasi();
  }, [user, authLoading]);

  // Jangan render apapun sampai data siap
  if (loading || authLoading || !wisata.length) return null;

  return (
    <div className="row d-flex flex-wrap justify-content-start">
      <h5 className="mb-3 text-left" style={{ marginTop: '20px' }}>
        <b style={{ fontSize: 'clamp(16px, 2.5vw, 20px)' }}>Direkomendasikan Untuk Kamu</b>
      </h5>
      {wisata.map((item) => (
        <CardWisata key={item.id} item={item} showOptionsMenu={false} />
      ))}
    </div>
  );
};

export default SistemRekomendasi;
