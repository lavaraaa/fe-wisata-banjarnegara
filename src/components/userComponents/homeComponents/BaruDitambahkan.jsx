// src/pages/home/BaruDitambahkan.jsx
import React, { useEffect, useState } from 'react';
import CardWisata from '../../common/cardComponents/CardWisata';

const BaruDitambahkan = () => {
  const [wisataBaru, setWisataBaru] = useState([]);

  useEffect(() => {
    const fetchWisata = async () => {
      try {
        const res = await fetch('/api/wisata');
        const data = await res.json();
        if (!Array.isArray(data)) return;
        const sorted = [...data]
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 8);
        setWisataBaru(sorted);
      } catch (err) {
        console.error('Gagal fetch wisata:', err);
      }
    };

    fetchWisata();
  }, []);

  return (
    <div className="row d-flex flex-wrap justify-content-start">
      <h5 className="mb-3 text-left" style={{ marginTop: '20px' }}>
        <b style={{ fontSize: 'clamp(16px, 2.5vw, 20px)' }}>Baru Ditambahkan</b>
      </h5>
      {wisataBaru.map((item) => (
        <CardWisata key={item.id} item={item} showOptionsMenu={false} />
      ))}
    </div>
  );
};

export default BaruDitambahkan;
