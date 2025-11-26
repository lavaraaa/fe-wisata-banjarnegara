import React from 'react';
import { useNavigate } from 'react-router-dom';

const TombolWisataLainnya = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mb-3 mt-2">
      <button
        className="btn btn-primary"
        style={{
          backgroundColor: '#015E78',
          color: 'white',
          fontSize: 'clamp(13px, 2.5vw, 16px)',
        }}
        onClick={() => navigate('/daftarwisata')}
      >
        <b>Lihat wisata menarik lainnya</b>
      </button>
    </div>
  );
};

export default TombolWisataLainnya;
