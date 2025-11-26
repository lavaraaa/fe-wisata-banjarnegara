import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const KeteranganWisata = () => {
  const { id } = useParams();
  const [wisata, setWisata] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/wisata/${id}`);
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
            {wisata.jam_buka || 'N/A'} - {wisata.jam_tutup || 'N/A'}
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
            Rp. {wisata.harga_tiket || 'N/A'}
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
