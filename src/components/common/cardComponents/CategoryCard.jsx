import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Diengcategory from '../../../assets/banner/1.png';
import Wisatalamcategory from '../../../assets/category/Telaga Dringo.jpg'
import Mricacategory from '../../../assets/category/MricaCategory.jpeg'
import CurugCategory from '../../../assets/category/CurugCategory.jpeg'

const kategoriList = [
  { nama: 'Dieng', gambar: Diengcategory },
  { nama: 'Wisata Alam', gambar: Wisatalamcategory },
  { nama: 'Curug/Air Terjun', gambar: CurugCategory },
  { nama: 'Wisata Budaya', gambar: Diengcategory },
  { nama: 'Wisata Rekreasi', gambar: Diengcategory },
  { nama: 'Wisata Kuliner', gambar: Diengcategory },
  { nama: 'Wisata Edukasi', gambar: Diengcategory },
  { nama: 'Wisata Religi', gambar: Diengcategory },
  { nama: 'Waduk', gambar: Mricacategory },
  { nama: 'Desa Wisata', gambar: Diengcategory },
];

const CategoryCard = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [moved, setMoved] = useState(false);

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

  return (
    <div
      ref={scrollRef}
      className="d-flex px-3"
      style={{
        gap:'clamp(1px, 2vw, 12px)',
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
