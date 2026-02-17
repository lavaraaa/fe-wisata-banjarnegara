import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Palet warna gradient untuk kategori (berputar jika kategori lebih banyak)
const gradientPalette = [
  { from: '#11998e', to: '#38ef7d' },  // hijau tropis
  { from: '#2193b0', to: '#6dd5ed' },  // biru laut
  { from: '#cc2b5e', to: '#753a88' },  // ungu-pink
  { from: '#ee9ca7', to: '#ffdde1' },  // pink pastel
  { from: '#f7971e', to: '#ffd200' },  // emas sunset
  { from: '#654ea3', to: '#eaafc8' },  // lavender
  { from: '#00b4db', to: '#0083b0' },  // biru langit
  { from: '#f953c6', to: '#b91d73' },  // magenta
];

const CategoryCard = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [moved, setMoved] = useState(false);
  const [kategoriList, setKategoriList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch kategori dari endpoint public (tanpa token)
  useEffect(() => {
    const fetchKategori = async () => {
      try {
        const res = await fetch('/api/kategori');
        const data = await res.json();
        const list = (Array.isArray(data) ? data : []).map((item) => ({
          nama: item.nama,
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
      {kategoriList.map(({ nama }, idx) => {
        const gradient = gradientPalette[idx % gradientPalette.length];
        return (
          <div
            key={idx}
            onClick={() => handleClick(nama)}
            style={{
              flex: '0 0 auto',
              width: 'clamp(100px, 8vw, 130px)',
              height: 'clamp(100px, 8vw, 130px)',
              position: 'relative',
              scrollSnapAlign: 'start',
              borderRadius: '14px',
              overflow: 'hidden',
              background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!isDragging) {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}
          >
            {/* Elemen dekoratif lingkaran */}
            <div
              style={{
                position: 'absolute',
                top: '-20%',
                right: '-20%',
                width: '70%',
                height: '70%',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-15%',
                left: '-15%',
                width: '50%',
                height: '50%',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                pointerEvents: 'none',
              }}
            />
            {/* Nama kategori */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                color: '#fff',
                fontWeight: 700,
                fontSize: 'clamp(12px, 1.8vw, 16px)',
                textAlign: 'center',
                padding: '5px 8px',
                lineHeight: 1.3,
                textShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
            >
              {nama}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;
