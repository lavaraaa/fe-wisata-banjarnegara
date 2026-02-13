import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Diengcategory from '../../../assets/banner/1.png';
import Wisatalamcategory from '../../../assets/category/Telaga Dringo.jpg'
import Mricacategory from '../../../assets/category/MricaCategory.jpeg'
import CurugCategory from '../../../assets/category/CurugCategory.jpeg'

// Mapping gambar khusus untuk kategori tertentu (fallback ke gambar default)
const gambarKategoriMap = {
  'Dieng': Diengcategory,
  'Wisata Alam': Wisatalamcategory,
  'Curug/Air Terjun': CurugCategory,
  'Waduk': Mricacategory,
};

const defaultGambar = Diengcategory;

const CategoryCard = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [moved, setMoved] = useState(false);
  const [kategoriList, setKategoriList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch kategori dari data wisata
  useEffect(() => {
    const fetchKategori = async () => {
      try {
        const res = await fetch('/api/wisata');
        const wisataData = await res.json();
        const semuaKategori = new Set();
        (Array.isArray(wisataData) ? wisataData : []).forEach((item) => {
          let kat = [];
          try {
            if (Array.isArray(item.kategori)) {
              kat = item.kategori;
            } else if (typeof item.kategori === 'string') {
              kat = JSON.parse(item.kategori);
            }
          } catch { /* ignore */ }
          kat.forEach((k) => semuaKategori.add(k));
        });
        const list = [...semuaKategori].sort().map((nama) => ({
          nama,
          gambar: gambarKategoriMap[nama] || defaultGambar,
        }));
        setKategoriList(list);
      } catch (err) {
        console.error('Gagal memuat kategori:', err);
        setKategoriList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchKategori();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setMoved(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) setMoved(true);
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleClick = (kategori) => {
    if (!moved) {
      navigate(`/daftarwisata?kategori=${encodeURIComponent(kategori)}`);
    }
  };

  if (loading) {
    return <div className="text-center py-3 text-muted">Memuat kategori...</div>;
  }

  if (kategoriList.length === 0) {
    return null;
  }

  return (
    <div
      ref={scrollRef}
      className="d-flex px-3"
      style={{
        gap: 'clamp(1px, 2vw, 12px)',
        margin: '10px',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        msOverflowStyle: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {kategoriList.map(({ nama, gambar }, idx) => (
        <div
          key={idx}
          onClick={() => handleClick(nama)}
          style={{
            flex: '0 0 auto',
            width: 'clamp(100px, 8vw, 130px)',
            height: 'clamp(100px, 8vw, 130px)',
            position: 'relative',
            scrollSnapAlign: 'start',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <img
            src={gambar}
            alt={nama}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          />
          <div
            className="position-absolute top-50 start-50 translate-middle text-white fw-bold text-center"
            style={{
              padding: '5px 10px',
              borderRadius: '8px',
              fontSize: 'clamp(14px, 2vw, 20px)',
              width: '80%',
            }}
          >
            {nama}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
