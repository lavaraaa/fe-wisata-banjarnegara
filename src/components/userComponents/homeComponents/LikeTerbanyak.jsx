// src/pages/home/WisataTerpopuler.jsx
import React, { useEffect, useState } from 'react';
import CardWisata from '../../common/cardComponents/CardWisata';

const LikeTerbanyak = () => {
  const [wisataPopuler, setWisataPopuler] = useState([]);

  useEffect(() => {
    const fetchWisata = async () => {
      try {
        const res = await fetch('/api/wisata');
        const data = await res.json();
        if (!Array.isArray(data)) return;

        // Filter yang punya total_likes >= 1 (opsional)
        const withLikes = data.filter(item => Number(item.total_likes) > 0);

        // Sort berdasarkan total_likes tertinggi dan ambil 8 teratas
        const sorted = [...withLikes]
          .sort((a, b) => b.total_likes - a.total_likes)
          .slice(0, 4);

        setWisataPopuler(sorted);
      } catch (err) {
        console.error('Gagal fetch wisata:', err);
      }
    };

    fetchWisata();
  }, []);

  return (
    <div className="row d-flex flex-wrap justify-content-start">
           <h5 className="mb-3 text-left" style={{ marginTop: '20px' }}>
          <b style={{fontSize:'clamp(16px, 2.5vw, 20px)'}}>Paling Banyak Disukai</b>
        </h5>
      {wisataPopuler.map((item) => (
        <CardWisata key={item.id} item={item} showOptionsMenu={false} />
      ))}
    </div>
  );
};

export default LikeTerbanyak;
