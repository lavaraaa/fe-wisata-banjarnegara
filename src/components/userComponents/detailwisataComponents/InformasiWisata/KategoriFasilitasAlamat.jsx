import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const KolomDetailWisata = () => {
  const { id } = useParams();
  const [wisata, setWisata] = useState(null);

  useEffect(() => {
    const fetchDetailWisata = async () => {
      try {
        const res = await axios.get(`/api/wisata/${id}`);
        setWisata(res.data);
      } catch (error) {
        console.error('Gagal memuat detail wisata:', error);
      }
    };

    fetchDetailWisata();
  }, [id]);

  if (!wisata) {
    return <div className="text-center py-4">Memuat detail wisata...</div>;
  }

  return (
    <>
      {/* KATEGORI */}
      <div
        className="container px-2 mt-3 pb-2"
        style={{ borderBottom: '1px solid #ccc' }}
      >
        <div className="d-flex align-items-center">
          <i
            className="bi bi-tags text-success me-2"
            style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
          ></i>
          <div className="d-flex flex-wrap">
            <span
              className="fw-semibold me-1"
              style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
            >
              Kategori :
            </span>
            <span
              className="fw-semibold"
              style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: '#333' }}
            >
              {wisata.kategori
                ? JSON.parse(wisata.kategori).join(', ')
                : '-'}
            </span>
          </div>
        </div>
      </div>

      {/* FASILITAS */}
      <div
        className="container px-2 mt-3 pb-2"
        style={{ borderBottom: '1px solid #ccc' }}
      >
        <div className="d-flex align-items-center">
          <i
            className="bi bi-building-check text-primary me-2"
            style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
          ></i>
          <div className="d-flex flex-wrap">
            <span
              className="fw-semibold me-1"
              style={{ fontSize: 'clamp(14px, 2vw, 17px)' }}
            >
              Fasilitas :
            </span>
            <span
              className="fw-semibold"
              style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: '#333' }}
            >
              {wisata.fasilitas
                ? JSON.parse(wisata.fasilitas).join(', ')
                : 'Parkir, Toilet'}
            </span>
          </div>
        </div>
      </div>

      {/* ALAMAT */}
      <div
        className="container px-2 mt-3 pb-2"
        style={{ borderBottom: '1px solid #ccc', cursor: 'pointer' }}
        onClick={() => window.open(wisata.link_gmaps, '_blank')}
      >
        <div className="d-flex align-items-center">
          <i
            className="bi bi-geo-alt text-danger me-2"
            style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
          ></i>
          <div className="d-flex flex-wrap">
            <span
              className="fw-semibold"
              style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: '#333' }}
            >
              {wisata.alamat || 'Alamat belum tersedia'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default KolomDetailWisata;
