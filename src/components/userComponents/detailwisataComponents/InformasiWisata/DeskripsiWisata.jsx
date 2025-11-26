import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from 'axios';

function DeskripsiWisata() {
  const { id } = useParams();
  const [deskripsi, setDeskripsi] = useState('');
  const [lihatLengkap, setLihatLengkap] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeskripsi = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/wisata/${id}`);
        setDeskripsi(res.data.deskripsi || 'Deskripsi tidak tersedia');
      } catch (err) {
        console.error('Gagal memuat deskripsi', err);
        setDeskripsi('Gagal memuat deskripsi');
      } finally {
        setLoading(false);
      }
    };

    fetchDeskripsi();
  }, [id]);

  if (loading) return <p>Memuat deskripsi...</p>;

  return (
    <div style={{ marginTop: '3px', padding: 5 }}>
      <p
        style={{
          fontSize:'clamp(14px, 2.5vw, 17px)',
          color: '#374151',
          whiteSpace: 'pre-line',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: lihatLengkap ? 'none' : 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {deskripsi}
      </p>

      <div
        style={{
          borderBottom: '1px solid #ccc',
          borderTop: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={() => setLihatLengkap(prev => !prev)}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            color: '#dc2626',
            fontSize: 'clamp(13px, 2.5vw, 16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            zIndex: 998,
          }}
        >
          {lihatLengkap ? 'Sembunyikan' : 'Lihat Selengkapnya'}
          <Icon
            icon={lihatLengkap ? 'mdi:chevron-up' : 'mdi:chevron-down'}
            width={20}
            height={20}
            style={{ color: '#dc2626' }}
          />
        </button>
      </div>
    </div>
  );
}

export default DeskripsiWisata;
