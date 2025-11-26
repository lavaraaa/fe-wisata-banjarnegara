import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardWisata from '../common/cardComponents/CardWisata';
import { useParams } from 'react-router-dom'; // ambil ID dari URL detail
import Loading from '../common/Loading';

  const WisataLainnya = () => {
  const { id: wisataId } = useParams(); // pastikan route /wisata/:id
  const [wisata, setWisata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!wisataId) {
      setLoading(false);
      setErrorMsg('Wisata referensi tidak tersedia.');
      setWisata([]);
      return;
    }

    const fetchWisataLainnya = async () => {
      setLoading(true);
      try {
       const url = `http://localhost:3000/api/rekomendasi/cbf/wisata/${wisataId}`;
        const res = await axios.get(url);
        const data = Array.isArray(res.data) ? res.data : [];
        if (!data.length) setErrorMsg('Tidak ada wisata lainnya yang relevan.');
        setWisata(data.slice(0, 6));
      } catch (err) {
        console.error('Gagal fetch wisata lainnya:', err);
        setWisata([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWisataLainnya();
  }, [wisataId]);

 if (loading) return <Loading />;

  return (
    <div className="row d-flex flex-wrap justify-content-start">
      {wisata.map(item => (
        <CardWisata key={item.id} item={item} showOptionsMenu={false} />
      ))}
    </div>
  );
};

export default WisataLainnya;
