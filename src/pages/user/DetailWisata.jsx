import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Icon } from "@iconify/react";
import KomentarModal from '../../components/userComponents/detailwisataComponents/KomentarComponents/KomentarModal';
import GalleryWisata from '../../components/userComponents/detailwisataComponents/InformasiWisata/GalleryWisata';
import DeskripsiWisata from '../../components/userComponents/detailwisataComponents/InformasiWisata/DeskripsiWisata';
import ButtonNavigasiLokasi from '../../components/userComponents/detailwisataComponents/fiturComponents/ButtonNavigasiLokasi';

import UlasanPreview from '../../components/userComponents/detailwisataComponents/UlasanComponents/UlasanPreview';
import UlasanTotal from '../../components/userComponents/detailwisataComponents/InformasiWisata/UlasanTotal';
import LikeSaveBagikan from '../../components/userComponents/detailwisataComponents/fiturComponents/LikeSaveBagikan';
import GambarWisata from '../../components/userComponents/detailwisataComponents/InformasiWisata/GambarWisata';
import JudulWisata from '../../components/userComponents/detailwisataComponents/InformasiWisata/JudulWisata';
import JamTiketNoTelepon from '../../components/userComponents/detailwisataComponents/InformasiWisata/JamTiketNoTelepon';
import KategoriFasilitasAlamat from '../../components/userComponents/detailwisataComponents/InformasiWisata/KategoriFasilitasAlamat';
import EventWisata from '../../components/userComponents/detailwisataComponents/InformasiWisata/EventWisata';
import { AuthContext } from '../auth/AuthContext';
import ButtonEditWisata from '../../components/adminComponents/kelolawisataComponents/ButtonEditWisata';
import WisataLainnya from '../../components/SistemRekomendasi/WisataLainnya';
import WisataLainnyaSidebar from '../../components/SistemRekomendasi/WisataLainnyaSidebar';

const DetailWisata = () => {
const { id } = useParams();
const location = useLocation();
const [wisata, setWisata] = useState(null);
const [loading, setLoading] = useState(true);
const navigate = useNavigate();
const { user } = useContext(AuthContext);

useEffect(() => {
if (location.hash) {
  setTimeout(() => {
    const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  }, [location]);

const fetchDetailDanLainnya = async () => {
  try {
    const resDetail = await fetch(`/api/wisata/${id}`);
    const dataDetail = await resDetail.json();
    setWisata(dataDetail);

    setLoading(false);
  } catch (error) {
    console.error('Gagal mengambil data wisata:', error);
    setLoading(false);
  }
};

useEffect(() => {
  if (id) {
    setLoading(true);
    fetchDetailDanLainnya();
  }
}, [id]);

  if (loading) {
  return <Loading />;}

  const formatTanggalLengkap = (tanggal) => {
    return new Date(tanggal).toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

 if (loading) return <Loading />;


  return (
   <main className="mx-auto my-2 px-4" style={{ maxWidth: '1180px' }}>
      <div className="main-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 0', minWidth: '0', maxWidth:'1180px' }}>
          <GambarWisata />
          <div className="mt-4" style={{ borderBottom: '1px solid #ccc', borderTop: '1px solid #ccc' }}>
            <div className="d-flex justify-content-between align-items-start mt-2">
              <div style={{ flex: 1, minWidth: 0 }}>
                <JudulWisata/>
                <UlasanTotal />

              </div> <LikeSaveBagikan/> </div>

            <p style={{ fontSize: 'clamp(13px, 2.5vw, 16px)', color: '#000', marginBottom: 0 }}>
              Diunggah pada : {formatTanggalLengkap(wisata.created_at)}
            </p>
          </div>
          <EventWisata/>
          <JamTiketNoTelepon/>
          <KategoriFasilitasAlamat />
          <DeskripsiWisata />
          <GalleryWisata />
          <UlasanPreview />
          <ButtonNavigasiLokasi />
          <KomentarModal />
        </div>

        <div className="sidebar" style={{ flex: '0 0 350px', minWidth: '300px'  }}>
          <div className="d-none d-lg-block">
            <h5 className=" mb-3 mt-1" style={{ paddingTop: '10px', marginLeft:'114px' }}>Wisata Lainnya</h5>
           <WisataLainnyaSidebar/>
          </div>

          <div className="d-lg-none row d-flex flex-wrap justify-content-start">
            <p className=" mb-3" 
            style={{ paddingTop: '10px',
              fontSize:'clamp(17px, 2.5vw, 20px',
              fontWeight:500
             }}>
              Wisata Lainnya
            </p>
           <WisataLainnya/>
          </div>
        </div>
      </div>

      {user?.role === 'admin' && (
      <ButtonEditWisata/>)}
      <style>
        {`
          @media (max-width: 991.98px) {
            .main-container {
              display: block !important;
            }
            .sidebar {
              width: 100% !important;
              flex: none !important;
              margin-top: 20px;
            }
          }
        `}
      </style>
    </main>
  );
};

export default DetailWisata;
