import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardSidebar from '../common/cardComponents/CardSidebar';
import { useParams } from 'react-router-dom'; // ambil ID dari URL detail
import Loading from '../common/Loading';

const WisataLainnyaSidebar = () => {
  const { id: wisataId } = useParams(); // pastikan route /wisata/:id
  const [wisata, setWisata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!wisataId) {
      setWisata([]);
      setLoading(false);
      return;
    }

    const fetchWisataLainnya = async () => {
      setLoading(true);
      try {
       const url = `/api/rekomendasi/cbf/wisata/${wisataId}`;
        const res = await axios.get(url);
        const data = Array.isArray(res.data) ? res.data : [];
        setWisata(data.slice(0, 5));
      } catch (err) {
        console.error('Gagal fetch wisata lainnya:', err);
        setWisata([]);
       } finally {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    };

    fetchWisataLainnya();
  }, [wisataId]);

  if (loading) return <Loading />;

  return (
    <div className="row d-flex flex-wrap justify-content-start">
      {wisata.map(item => (
        <CardSidebar key={item.id} item={item} showOptionsMenu={false} />
      ))}
    </div>
  );
};

export default WisataLainnyaSidebar;
