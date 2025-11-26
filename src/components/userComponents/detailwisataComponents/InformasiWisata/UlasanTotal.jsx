// src/components/common/UlasanTotal.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UlasanTotal() {
  const { id } = useParams();
  const [ulasan, setUlasan] = useState([]);

  useEffect(() => {
    const fetchUlasan = async () => {
      try {
        const response = await axios.get(`/api/rating/${id}`);
        setUlasan(response.data);
      } catch (error) {
        console.error('Gagal memuat ulasan:', error);
      }
    };

    fetchUlasan();
  }, [id]);

  const rataRata = ulasan.length > 0
    ? (ulasan.reduce((sum, u) => sum + u.rating, 0) / ulasan.length).toFixed(1)
    : null;

  return (
    <div style={{ fontSize: 'clamp(17px, 2.5vw, 20px)', display: 'flex', alignItems: 'center' }}>
      {ulasan.length > 0 ? (
        <>
          <span style={{marginTop:'3px', fontSize: 'clamp(13px, 2.5vw, 16px)', color: '#333', marginRight: 4 }}>{rataRata}</span>
          {[1, 2, 3, 4, 5].map(i => (
            <span
              key={i}
              style={{
                color: rataRata >= i ? 'orange' : '#ccc',
              }}
            >
              ★
            </span>
          ))}
          <span style={{ fontSize: 'clamp(13px, 2.5vw, 16px)', color: '#333', marginLeft: 5, marginTop:2}}>
                    ({ulasan.length} ulasan)
                  </span>
        </>
      ) : (
        <span style={{ fontSize: 'clamp(13px, 2.5vw, 16px)', color: '#999' }}>Belum ada ulasan</span>
      )}
    </div>
  );
}

export default UlasanTotal;
