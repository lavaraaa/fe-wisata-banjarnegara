// D:\website-wisata-banjarnegara\frontend\src\components\common\detailwisataComponents\JudulWisata.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JudulWisata = () => {
  const { id } = useParams();
  const [judul, setJudul] = useState('');

  useEffect(() => {
    const fetchJudul = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/wisata/${id}`);
        const data = await res.json();
        setJudul(data.judul);
      } catch (error) {
        console.error('Gagal mengambil judul wisata:', error);
      }
    };

    fetchJudul();
  }, [id]);

  if (!judul) return null;

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <b
        style={{
          wordBreak: 'break-word',
          display: 'block',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.3rem)', // min 16px, ideal 2.5% layar, max 32px
          lineHeight: 1.3,
          marginRight: 10,
        }}
      >
        {judul}
      </b>
    </div>
  );
};

export default JudulWisata;
