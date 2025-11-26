// src/pages/home/RatingTertinggi.jsx
import React, { useEffect, useState } from 'react';
import CardWisata from '../../common/cardComponents/CardWisata';

const RatingTertinggi = () => {
  const [wisataRating, setWisataRating] = useState([]);

  useEffect(() => {
    const fetchWisata = async () => {
      try {
        const res = await fetch('/api/wisata');
        const data = await res.json();
        if (!Array.isArray(data)) return;

        // Filter yang punya rating >= 3
        const withGoodRating = data.filter(item => Number(item.average_rating) >= 4);

        // Sort berdasarkan average_rating tertinggi dan ambil 8 teratas
        const sorted = [...withGoodRating]
          .sort((a, b) => b.average_rating - a.average_rating)
          .slice(0, 4);

        setWisataRating(sorted);
      } catch (err) {
        console.error('Gagal fetch wisata:', err);
      }
    };

    fetchWisata();
  }, []);

  return (
    
    <div className="row d-flex flex-wrap justify-content-start">
        <h5 className="mb-3 text-left" style={{ marginTop: '20px' }}>
          <b style={{fontSize:'clamp(16px, 2.5vw, 20px)'}}>Rating Tertinggi</b>
        </h5>
      {wisataRating.map((item) => (
        <CardWisata key={item.id} item={item} showOptionsMenu={false} />
      ))}
    </div>
  );
};

export default RatingTertinggi;
