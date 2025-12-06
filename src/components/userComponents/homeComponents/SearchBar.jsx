import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('/api/wisata');
      const data = await res.json();

      if (!Array.isArray(data)) {
  console.error('Respon bukan array:', data);
  return;
}
    } catch (err) {
      console.error('Gagal mengambil data wisata:', err);
    }
  };

  fetchData();

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 992);
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

 
 const handleSearch = () => {
  if (search.trim() !== "") {
    navigate(`/daftarwisata?search=${encodeURIComponent(search)}`);
  }
};

  return (
    <main
      className="my-3 mx-auto"
      style={{
        width: '100%',
        maxWidth: '1180px',
        paddingLeft: isDesktop ? '32px' : '12px',
        paddingRight: isDesktop ? '32px' : '12px',
      }}
    >
      {/* SEARCH BAR SECTION */}
  <section className="my-4">
      <div className="container d-flex justify-content-center align-items-center gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Cari destinasi wisata..."
          style={{
            maxWidth: '500px',
            borderRadius: '20px',
            padding: '6px 20px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <button className="btn btn-primary rounded-pill px-4"
         style={{
          backgroundColor:'#015E78'
          }}
        onClick={handleSearch}>
          Cari
        </button>
      </div>
    </section>
    </main>
  );
};

export default Home;
