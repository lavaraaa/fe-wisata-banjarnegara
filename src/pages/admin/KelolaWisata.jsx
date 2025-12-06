import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DaftarWisata from '../user/DaftarWisata';
import ButtonTambahWisata from '../../components/adminComponents/kelolawisataComponents/ButtonTambahWisata';

const KelolaWisata = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [wisataList, setWisataList] = useState([]);

  const fetchWisataData = async () => {
    try {
      const res = await fetch('/api/wisata');
      const data = await res.json();
      setWisataList(data);
      setFilteredList(data);
    } catch (err) {
      console.error('Gagal mengambil data:', err);
    }
  };

  useEffect(() => {
    fetchWisataData();
  }, []);

  return (
    <>
      <div className="container" style={{ minHeight: '100vh' }}>
        <div className="bg-white p-4 rounded shadow" style={{ marginTop: '20px',  }}>
          <h3 className="text-center mb-2">Kelola Wisata</h3>

          <DaftarWisata data={filteredList} onActionSuccess={fetchWisataData} />
        </div>
      </div>

      <ButtonTambahWisata onActionSuccess={fetchWisataData} />
    </>
  );
};

export default KelolaWisata;
