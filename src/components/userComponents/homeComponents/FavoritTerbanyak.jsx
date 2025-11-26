// src/pages/home/WisataTerpopuler.jsx
import React, { useEffect, useState } from 'react';
import CardWisata from '../../common/cardComponents/CardWisata';

const FavoritTerbanyak = () => {
  const [wisataFavorit, setWisataFavorit] = useState([]);

  useEffect(() => {
    const fetchWisata = async () => {
      try {
        const res = await fetch('/api/wisata');
        const data = await res.json();
        if (!Array.isArray(data)) return;
        const withFavorit = data.filter(item => Number(item.total_favorit) > 0);
        const sorted = [...withFavorit]
          .sort((a, b) => b.total_favorit - a.total_favorit)
          .slice(0, 4);
        setWisataFavorit(sorted);
      } catch (err) {
        console.error('Gagal fetch wisata:', err);
      }
    };

    fetchWisata();
  }, []);

  return (
    <div className="row d-flex flex-wrap justify-content-start">
           <h5 className="mb-3 text-left" style={{ marginTop: '20px' }}>
          <b style={{fontSize:'clamp(16px, 2.5vw, 20px)'}}>Paling Banyak Disimpan</b>
        </h5>
      {wisataFavorit.map((item) => (
        <CardWisata key={item.id} item={item} showOptionsMenu={false} />
      ))}
    </div>
  );
};

export default FavoritTerbanyak;
