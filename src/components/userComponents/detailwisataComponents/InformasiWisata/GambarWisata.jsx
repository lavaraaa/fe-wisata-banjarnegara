// D:\website-wisata-banjarnegara\frontend\src\components\common\detailwisataComponents\GambarWisata.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GambarWisata = () => {
  const { id } = useParams();
  const [gambar, setGambar] = useState('');
  const [judul, setJudul] = useState('');

  useEffect(() => {
    const fetchGambar = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/wisata/${id}`);
        const data = await res.json();
        setGambar(data.gambar);
        setJudul(data.judul);
      } catch (error) {
        console.error('Gagal mengambil gambar wisata:', error);
      }
    };

    fetchGambar();
  }, [id]);

  if (!gambar) return null;

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '800px',
        margin: '20px auto',
      }}
    >
      <img
        src={`http://localhost:3000/uploads/${gambar}`}
        alt={judul}
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '400px',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          borderRadius: '15px',
        }}
      />
    
    </div>
  );
};

export default GambarWisata;
