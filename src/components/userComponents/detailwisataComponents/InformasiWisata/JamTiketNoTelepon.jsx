import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const KeteranganWisata = () => {
  const { id } = useParams();
  const [wisata, setWisata] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/wisata/${id}`);
        setWisata(res.data);
      } catch (err) {
        console.error('Gagal mengambil data wisata:', err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div
      className="container px-2"
      style={{
        paddingTop: '10px',
        paddingBottom: '10px',
        borderBottom: '1px solid #ccc',
      }}
    >
      <div className="row text-center g-1">
        {/* Jam */}
        <div className="col-4">
          <i
            className="bi bi-clock text-success d-block"
            style={{ fontSize: 'clamp(13px, 2.5vw, 20px)' }}
          ></i>
          <div className="text-muted" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
            Buka
          </div>
          <div className="fw-semibold" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
            {(!wisata.jam_buka && !wisata.jam_tutup) || (wisata.jam_buka?.startsWith('00:00') && wisata.jam_tutup?.startsWith('00:00'))
            ? '24 Jam'
            : `${wisata.jam_buka} - ${wisata.jam_tutup}`}
          </div>
        </div>

        {/* Tiket */}
        <div className="col-4">
          <i
            className="bi bi-cash-coin text-info d-block"
            style={{ fontSize: 'clamp(13px, 2.5vw, 20px)' }}
          ></i>
          <div className="text-muted" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
            Tiket
          </div>
          <div className="fw-semibold" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
           {Number(wisata.harga_tiket) === 0
    ? 'Gratis'
    : wisata.harga_tiket
      ? `Rp. ${Number(wisata.harga_tiket).toLocaleString('id-ID')}`
      : 'N/A'}
          </div>
        </div>

         {/* Telepon */}
        <div
          className="col-4"
          style={{ cursor: 'pointer' }}
          onClick={() => window.open(`https://wa.me/${wisata.no_telepon}`, '_blank')}
        >
          <i
            className="bi bi-whatsapp d-block"
            style={{ fontSize: 'clamp(13px, 2.5vw, 20px)', color: '#25D366' }}
          ></i>
          <div className="text-muted" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
            Reservasi
          </div>
          <div className="fw-semibold" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
            {wisata.no_telepon || 'N/A'}
          </div>
        </div>

      </div>
    </div>
  );
};

export default KeteranganWisata;
