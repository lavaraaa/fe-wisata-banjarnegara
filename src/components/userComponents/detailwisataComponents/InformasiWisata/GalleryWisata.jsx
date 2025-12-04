import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const GalleryModal = ({ onUpdate }) => {
  const location = useLocation();
  const [wisata, setWisata] = useState({});
  const [ulasan, setUlasan] = useState([]);
  const [preview, setPreview] = useState({
    show: false,
    img: null
  });

  const fetchData = async () => {
    const id = location.pathname.split('/').pop();

    try {
      const resWisata = await axios.get(`http://localhost:3000/api/wisata/${id}`);
      setWisata(resWisata.data);

      const resUlasan = await axios.get(`/api/rating/${id}`);
      setUlasan(resUlasan.data || []);
    } catch (err) {
      console.error("Gagal memuat data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location, onUpdate]);

  const openPreview = (imgUrl) => {
    setPreview({ show: true, img: imgUrl });
  };

  const closePreview = () => {
    setPreview({ show: false, img: null });
  };

  return (
    <>
      <div className="my-1">
        <h5 className="mb-2" style={{ fontSize: "clamp(17px,2.5vw,20px)" }}>
          Galeri
        </h5>

        <div
          className="d-flex gap-3 overflow-auto"
          style={{
            whiteSpace: "nowrap",
            paddingBottom: "8px",
            borderBottom: "1px solid #ccc"
          }}
        >
          {/* Gambar wisata */}
        {wisata.galeri &&
  Array.isArray(JSON.parse(wisata.galeri)) &&
  JSON.parse(wisata.galeri).map((img, idx) => (
    <img
      key={idx}
      src={`https://ksjglnabyjehcodgvssp.supabase.co/storage/v1/object/public/images/${img}`}
      alt="galeri"
      style={{
        width: "clamp(100px,2.5vw,130px)",
        height: "clamp(100px,2.5vw,130px)",
        objectFit: "cover",
        borderRadius: "10px",
        cursor: "pointer"
      }}
      onClick={() =>
        openPreview(`https://ksjglnabyjehcodgvssp.supabase.co/storage/v1/object/public/images/${img}`)
      }
    />
  ))}


          {/* Gambar ulasan */}
         {ulasan.map((u) =>
  JSON.parse(u.images || "[]").map((f, i) => (
    <img
      key={`${u.id}-${i}`}
      src={`https://ksjglnabyjehcodgvssp.supabase.co/storage/v1/object/public/images/ulasan/${f}`}
      alt="ulasan"
      style={{
        width: "clamp(100px,5vw,180px)",
        height: "clamp(100px,5vw,180px)",
        objectFit: "cover",
        borderRadius: "10px",
        cursor: "pointer"
      }}
      onClick={() =>
        openPreview(`https://ksjglnabyjehcodgvssp.supabase.co/storage/v1/object/public/images/ulasan/${f}`)
      }
    />
  ))
)}

        </div>
      </div>

      {preview.show && (
        <div
          onClick={closePreview}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}
        >
          <img
            src={preview.img}
            alt="preview"
            style={{
              maxWidth: "95%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 10
            }}
          />
        </div>
      )}
    </>
  );
};

export default GalleryModal;
