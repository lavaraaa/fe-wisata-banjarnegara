// // // {/* Kategori */}
// // //     {/* <div className="col-3">
// // //       <i
// // //         className="bi bi-tags-fill text-warning d-block"
// // //         style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}
// // //       ></i>
// // //       <div className="text-muted" style={{ fontSize: 'clamp(10px, 2vw, 15px)' }}>Kategori</div>
// // //       <div className="fw-semibold" style={{ fontSize: 'clamp(9px, 2vw, 15px)' }}>
// // //         {wisata.fasilitas
// // //           ? JSON.parse(wisata.kategori).join(', ')
// // //           : '-'}
// // //       </div>
// // //     </div> */}

// // //     {/* Google Maps
// // //         <h4 className="mt-4 mb-3">Lokasi di Google Maps</h4>
// // //         <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
// // //           <div
// // //             style={{
// // //               position: 'relative',
// // //               paddingBottom: '56.25%',
// // //               height: 0,
// // //               overflow: 'hidden',
// // //               borderRadius: '8px',
// // //             }}
// // //           >
// // //             <iframe
// // //               src={wisata.link_gmaps}
// // //               title={`Lokasi ${wisata.judul}`}
// // //               style={{
// // //                 position: 'absolute',
// // //                 width: '100%',
// // //                 height: '100%',
// // //                 border: 0,
// // //               }}
// // //               allowFullScreen=""
// // //               loading="lazy"
// // //               referrerPolicy="no-referrer-when-downgrade"
// // //             ></iframe>
// // //           </div>
// // //         </div> */}

// // //         // const promos = [
// // //   //   {
// // //   //     id: 1,
// // //   //      image: PromoImage,
// // //   //     text: 'Diskon 50% untuk wisata air!',
// // //   //   },
// // //   //   {
// // //   //     id: 2,
// // //   //     image: PromoImage,
// // //   //     text: 'Gratis tiket masuk untuk anak di bawah 5 tahun.',
// // //   //   },
// // //   //   {
// // //   //     id: 3,
// // //   //    image: PromoImage,
// // //   //     text: 'Paket hemat keluarga hanya Rp99.000!',
// // //   //   },
// // //   //    {
// // //   //   id: 4,
// // //   //   image: PromoImage,
// // //   //   text: 'Souvenir menarik menanti di setiap kunjungan Anda!',
// // //   // },
// // //   // {
// // //   //   id: 5,
// // //   //   image: PromoImage,
// // //   //   text: 'Kunjungi sekarang dan bawa pulang souvenir spesial!',
// // //   // },
// // //   // {
// // //   //   id: 6,
// // //   //   image: PromoImage,
// // //   //   text: 'Nikmati kunjungan Anda dengan hadiah souvenir eksklusif!',
// // //   // },
// // //   // ];
// // //     {/* PROMO / IKLAN SECTION
// // //     <section className="mb-5">
// // //   {isDesktop ? (
// // //     <div className="container d-flex flex-wrap justify-content-center gap-3" style={{ maxWidth: '1280px' }}>
// // //       {promos.map((promo) => (
// // //         <div
// // //           key={promo.id}
// // //           className="d-flex flex-column align-items-center justify-content-center"
// // //           style={{
// // //             color: 'black',
// // //             width: '140px',
// // //             height: 'auto',  // Biarkan tinggi otomatis agar menyesuaikan konten
// // //             borderRadius: '10px',
// // //             textAlign: 'center',
// // //             padding: '10px',
// // //             marginTop: '20px',
// // //             display: 'flex',  // Menyusun gambar dan teks secara vertikal
// // //             flexDirection: 'column',
// // //             alignItems: 'center', // Menyusun gambar dan teks secara horizontal di tengah
// // //             justifyContent: 'space-between', // Menjaga jarak antar elemen
// // //              boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
// // //           }}
// // //         >
// // //           <img
// // //             src={promo.image}
// // //             alt={`Promo ${promo.id}`}
// // //             style={{
// // //               height: '50px',
// // //               width: '50px',
// // //               objectFit: 'cover',
// // //               borderRadius: '8px',
// // //               marginBottom: '8px',
// // //               maxHeight: '50px',
// // //               objectFit: 'contain',
// // //             }}
// // //           />
// // //           <p className="small m-0" style={{ flexGrow: 1, marginTop: '8px',fontSize:'13px' }}>
// // //             {promo.text}
// // //           </p>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   ) : (
// // //     <div style={{ maxWidth: '400px', margin: '0 auto' }}>
// // //       <Carousel
// // //         showThumbs={false}
// // //         infiniteLoop
// // //         showStatus={false}
// // //         showIndicators={false}
// // //         emulateTouch
// // //         swipeable
// // //       >
// // //         {chunkArray(promos, 3).map((group, index) => (
// // //           <div key={index} className="d-flex justify-content-center gap-3">
// // //             {group.map((promo) => (
// // //               <div
// // //                 key={promo.id}
// // //                 className="d-flex flex-column align-items-center justify-content-center"
// // //                 style={{
                 
// // //                   color: 'black',
// // //                   width: '130px',
// // //                   height: '130px',
// // //                   borderRadius: '12px',
// // //                   textAlign: 'center',
// // //                   padding: '10px',
// // //                   fontSize: '10px',
// // //                   display: 'flex',
// // //                   flexDirection: 'column',
// // //                   alignItems: 'center',
// // //                   justifyContent: 'center',
// // //                 }}
// // //               >
// // //                 <img
// // //                   src={promo.image}
// // //                   alt={`Promo ${promo.id}`}
// // //                   style={{
// // //                     height: '50px',
// // //                     width: '50px',
// // //                     objectFit: 'cover',
// // //                     borderRadius: '8px',
// // //                     marginBottom: '8px',
                  
// // //                   }}
// // //                 />
// // //                 <p className="small m-0" style={{ flexGrow: 1 }}>
// // //                   {promo.text}
// // //                 </p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         ))}
// // //       </Carousel>
// // //     </div>
// // //   )}
// // // </section> */}

// // //     {/* <a
// // //   href={wisata.link_gmaps}
// // //   target="_blank"
// // //   rel="noopener noreferrer"
// // //   className="btn"
// // //   style={{
// // //     position: 'fixed',
// // //     bottom: '30px',
// // //     right: buttonRight,
// // //     backgroundColor: '#015E78',
// // //     color: '#fff',
// // //     fontSize: '15px',
// // //     padding: '10px 10px',
// // //     border: 'none',
// // //     borderRadius: '8px',
// // //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
// // //     zIndex: 1099,
// // //   }}
// // // >
// // //   <i className="bi bi-geo-alt-fill" style={{ marginRight: '8px' }}></i>
// // //   Navigasi ke Google Maps
// // // </a> */}


// // //  BAGIAN RATING & TOMBOL LIHAT ULASAN
// // //     <div className="mt-4"  style={{
// // //           paddingTop:'10px',
// // //           // borderTop: '1px solid #ccc'
// // //     }}>
   
// // //      <div style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)',  }}>
// // // <div style={{ position: 'relative', marginBottom: 8, borderBottom: '1px solid #ccc' }}>
// // //   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // //   <h5 style={{ marginLeft: 10,
// // //                marginTop: 10,
// // //                marginBottom: 0 
// // //                }}>Ulasan Terbaru</h5>
// // //       <button
      
// // //     onClick={() => setShowUlasanModal(true)}
// // //     style={{
// // //        marginTop: 10,
// // //       background: 'none',
// // //       border: 'none',
// // //       color: '#dc2626',
// // //       cursor: 'pointer',
// // //       fontSize: 15,
// // //       display: 'flex',
// // //       alignItems: 'center',
// // //     }}
// // //   >
// // //     Lihat Semua 
// // //     <span style={{ fontSize: 16 }}>
// // //       <Icon
// // //           icon={'mdi:chevron-right'}
// // //           width={22}
// // //         /></span>
// // //   </button>
// // //   </div>

// // //   <div style={{ fontSize: 20, display: 'flex', alignItems: 'center', marginLeft: 10 }}>
// // //     {ulasan.length > 0 ? (
// // //       <>
// // //       <div>
// // //          {[1, 2, 3, 4, 5].map(i => (
// // //           <span key={i} style={{ color: (ulasan.reduce((sum, u) => sum + u.rating, 0) / ulasan.length) >= i ? 'orange' : '#ccc' }}>
// // //             ★
// // //           </span>
// // //         ))}
// // //         <span style={{ fontSize: 16, color: '#333', marginLeft: 5 }}>
// // //           (    {ulasan.length} ulasan )
// // //         </span>
        
// // //         {/* <span style={{ fontSize: 16, color: '#555' }}>
// // //            {ulasan.length} ulasan
// // //         </span> */}
// // //         </div>

       
        
// // //       </>
// // //     ) : (
// // //       <span style={{ fontSize: 16, color: '#999' }}>Belum ada ulasan</span>
// // //     )}
// // //   </div>
  
// // // </div>

// // // {/* 3 ULASAN TERBARU */}

// // // <div >
// // //   {/* <h6 onClick={() => setShowUlasanModal(true)}>Ulasan Terbaru</h6> */}
// // //   {ulasan.length === 0 ? (
// // //    <div style={{ borderBottom: '1px solid #ccc',
          
// // //           display: 'flex',
// // //           justifyContent: 'center',}}>
// // //    <button
// // //     style={{ background: 'none',
// // //             border: 'none',
// // //             padding: 0,
// // //             color: '#dc2626', // red-600
// // //             fontSize: '16px',
// // //             cursor: 'pointer',
// // //             display: 'flex',
// // //             alignItems: 'center',
// // //             gap: '4px',
// // //             zIndex:999,
// // //             marginBottom: 4
        
// // //       }}
// // //     onClick={() => setShowUlasanModal(true)}
// // //   >
// // //     Tambah Ulasan
// // //     <i className="bi bi-plus-circle"></i>
// // //   </button>
// // //     </div>
// // //   ) : (
// // //     ulasan.slice(0, 2).map(u => (
// // //       <div key={u.id} style={{ borderBottom: '1px solid #ccc', marginLeft: 10 }} onClick={() => setShowUlasanModal(true)}>
// // //           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
// // //                <img
// // //                  src={u.photoURL?.trim() ? u.photoURL : profilePlaceholder}
// // //                  width={40}
// // //                  height={40}
// // //                  style={{ borderRadius: '50%' }}
// // //                  alt="Foto Profil"
// // //                />
// // //                <div style={{ display: 'flex', flexDirection: 'column' }}>
// // //                  <b style={{color: '#015E78'}}>
// // //                    @{u.username}</b>
// // //                    <p style={{ fontSize: '12px', color: '#888', marginBottom: 0 }}>
// // //         {formatWaktu(u.created_at)}
// // //       </p>
// // //                  {/* <span> {formatWaktu(u.created_at)}</span> */}
// // //                   <div>
// // //                {[1, 2, 3, 4, 5].map(i => (
// // //                  <span key={i} style={{ color: u.rating >= i ? 'orange' : '#ccc' }}>★</span>
// // //                ))}
// // //              </div>
// // //                </div>
// // //              </div>
// // //              <p style={{marginLeft:50}}>{u.review}</p>
// // //              <div style={{marginLeft:50}}>
// // //       {JSON.parse(u.images || '[]').map(f => (
// // //         <img
// // //           key={f}
// // //           src={`http://localhost:3000/uploads/ulasan/${f}`}
// // //           width={80}
// // //           height={80}
// // //           style={{ marginRight: 6, 
// // //             marginBottom:'8px',
// // //             borderRadius:'5px'
// // //            }}
// // //           alt=""
// // //         />
// // //       ))}
// // //     </div>
// // //       </div>
// // //     ))
// // //   )}
// // // </div>
// // // </div>

// // // {/* POPUP ULASAN MODAL */}
// // // {showUlasanModal && (
// // //   <UlasanModal 
// // //   onClose={() => 
// // //     setShowUlasanModal(false)} 
// // //     onUpdate={fetchDetailDanLainnya} />
// // // )}

// // <div className="container px-2" 
// //    style={{
// //     paddingTop:'10px',
// //     paddingBottom:'10px',
// //     borderBottom: '1px solid #ccc'
// //     }}>
       
// //   <div className="row text-center g-1">

// //  {/* Jam */}
// //     <div className="col-4">
// //       <i
// //         className="bi bi-clock text-success d-block"
// //         style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}
// //       ></i>
// //       <div className="text-muted" style={{ fontSize: 'clamp(10px, 2vw, 15px)' }}>Buka</div>
// //       <div className="fw-semibold" style={{ fontSize: 'clamp(9px, 2vw, 15px)' }}>
// //         {wisata.jam_buka || 'N/A'} - {wisata.jam_tutup || 'N/A'}
// //       </div>
// //     </div>

// //     {/* Telepon */}
// //     <div className="col-4"  
// //     style={{cursor:'pointer'}}
// //     onClick={() => window.open(`https://wa.me/${wisata.no_telepon}`, '_blank')}>
// //       <i
// //         className="bi bi-whatsapp d-block"
// //         style={{ fontSize: 'clamp(12px, 2.5vw, 20px)',color: '#25D366',  }}
// //       ></i>
// //       <div className="text-muted" style={{ fontSize: 'clamp(10px, 2vw, 15px)' }}>Reservasi</div>
// //       <div className="fw-semibold" style={{ fontSize: 'clamp(9px, 2vw, 15px)' }}>
// //         {wisata.no_telepon || 'N/A'}
// //       </div>
// //     </div>

// //     {/* Tiket */}
// //     <div className="col-4">
// //       <i
// //         className="bi bi-cash-coin text-info d-block"
// //         style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}
// //       ></i>
// //       <div className="text-muted" style={{ fontSize: 'clamp(10px, 2vw, 15px)' }}>Tiket</div>
// //       <div className="fw-semibold" style={{ fontSize: 'clamp(9px, 2vw, 15px)' }}>
// //         Rp. {wisata.harga_tiket || 'N/A'}
// //       </div>
// //     </div>

// //   </div>
// // </div>

// {/* KATEGORI */}
// <div
//   className="container px-2 mt-3 pb-2"
//   style={{ borderBottom: '1px solid #ccc' }}
// >
//   <div className="d-flex align-items-center">
//     <i
//       className="bi bi-building-check text-primary me-2"
//       style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
//     ></i>
//     <div className="d-flex flex-wrap">
//       <span
//         className="text-muted me-1"
//         style={{ fontSize: 'clamp(12px, 2vw, 17px)' }}
//       >
//         Kategori :
//       </span>
//       <span
//         className="fw-semibold"
//         style={{ fontSize: 'clamp(12px, 2vw, 17px)', color: '#333' }}
//       >
//         {wisata.fasilitas
//           ? JSON.parse(wisata.kategori).join(', ')
//           : '-'}
//       </span>
//     </div>
//   </div>
// </div>

// {/* FASILITAS */}
// <div
//   className="container px-2 mt-3 pb-2"
//   style={{ borderBottom: '1px solid #ccc' }}
// >
//   <div className="d-flex align-items-center">
//     <i
//       className="bi bi-building-check text-primary me-2"
//       style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
//     ></i>
//     <div className="d-flex flex-wrap">
//       <span
//         className="fw-semibold me-1 "
//         style={{ fontSize: 'clamp(12px, 2vw, 17px)' }}
//       >
//         Fasilitas :
//       </span>
//       <span
//         className="fw-semibold"
//         style={{ fontSize: 'clamp(12px, 2vw, 17px)', color: '#333' }}
//       >
//         {wisata.fasilitas
//           ? JSON.parse(wisata.fasilitas).join(', ')
//           : 'Parkir, Toilet'}
//       </span>
//     </div>
//   </div>
// </div>

// {/* ALAMAT */}
// <div
//   className="container px-2 mt-3 pb-2"
//   style={{ borderBottom: '1px solid #ccc', cursor: 'pointer' }}
// >
//   <div className="d-flex align-items-center">
//     <i
//       className="bi bi-geo-alt text-danger me-2"
//       style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
//     ></i>
//     <div className="d-flex flex-wrap">
//       <span
//         className="fw-semibold"
//         style={{ fontSize: 'clamp(12px, 2vw, 17px)', color: '#333' }}
//         onClick={() => window.open(wisata.link_gmaps, '_blank')}
//       >
//         {wisata.alamat || 'Alamat belum tersedia'}
//       </span>
      
//     </div>
//   </div>
// </div>

//Footerrr
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../../assets/logoputih.png';

// const Footer = () => {
//   const navigate = useNavigate();

//   const handleNavigate = (path) => {
//     // Scroll to top smoothly
//     window.scrollTo({ top: 0, behavior: 'smooth' });

//     // Tunggu 300ms sebelum navigate supaya scroll terlihat
//     setTimeout(() => {
//       navigate(path);
//     }, 300);
//   };

//   return (
//     <footer className="bg-dark text-light pt-4 border-top" style={{ position: 'relative', zIndex: 1100, fontSize: '15px', paddingBottom:'30px' }}>
//       <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
//         <div className="row text-center text-md-start">
//           {/* Kolom 1: Logo dan alamat */}
//           <div className="col-12 col-md-4 d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center align-items-md-start mb-3 mb-md-0">
//             <img
//               src={logo}
//               alt="Logo"
//               width="80"
//               height="80"
//               className="mb-2 mb-md-0 me-md-3"
//               style={{ objectFit: 'contain' }}
//             />
//             <div className="text-center text-md-start">
//               <h5 className="mb-1 text-light">WisataBanjarnegara</h5>
//               <p className="mb-0 small text-light">
//                 Dapatkan pengalaman yang tak terlupakan dengan berbagai pilihan tempat wisata di Banjarnegara
//               </p>
//             </div>
//           </div>

//           {/* Kolom 2: Informasi & Layanan */}
//           <div className="col-6 col-md-4 d-flex flex-column align-items-center">
//             <h6 className="fw-bold mb-2 text-light">Informasi & Layanan</h6>
//             <ul className="list-unstyled mb-0 text-center text-md-center">
//               <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('/profilbanjarnegara'); }} className="text-decoration-none text-light">Profil Banjarnegara</a></li>
//               <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('/tentangkami'); }} className="text-decoration-none text-light">Tentang Kami</a></li>
//               <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('/hubungikami'); }} className="text-decoration-none text-light">Hubungi Kami</a></li>
//               <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('/kebijakanprivasi'); }} className="text-decoration-none text-light">Kebijakan Privasi</a></li>
//             </ul>
//           </div>

//           {/* Kolom 3: Sosial Media */}
//           <div className="col-6 col-md-4 d-flex flex-column align-items-center align-center-md-end mt-0 mt-md-0">
//             <h6 className="fw-bold mb-2 text-light">Sosial Media</h6>
//             <ul className="list-unstyled mb-0 text-center text-md-center">
//               <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">YouTube</a></li>
//               <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">Facebook</a></li>
//               <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">Instagram</a></li>
//               <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">Twitter</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import profilePlaceholder from '../../../../assets/profil.png';
import { useNotifikasi } from '../../../common/Notifikasi';
import { formatWaktu } from '../../../common/FormatWaktu';
import UlasanTotal from '../InformasiWisata/UlasanTotal';

const UlasanModal = ({ onClose, onUpdate }) => {
  const { showNotif } = useNotifikasi();

  const { id: wisataId } = useParams();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [ulasan, setUlasan] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [hasRated, setHasRated] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUlasanId, setSelectedUlasanId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const inputFileRef = useRef();
  const formRef = useRef(null);

  useEffect(() => {
    if (wisataId) fetchAll();
  }, [wisataId]);

 const fetchAll = async () => {
  try {
    const token = localStorage.getItem('token');
    const resUlasan = await axios.get(`/api/rating/${wisataId}`);
    setUlasan(resUlasan.data);

    if (token) {
      try {
        const resUser = await axios.get('/api/me', {
          headers: { Authorization: 'Bearer ' + token }
        });
        setCurrentUser(resUser.data);

        const myReview = resUlasan.data.find(r => r.user_id === resUser.data.id);
        if (myReview) {
          setHasRated(true);
          setEditingId(myReview.id); // hanya simpan id-nya dulu
        } else {
          setHasRated(false);
          setEditingId(null);
        }
      } catch (e) {
        setCurrentUser(null);
      }
    } else {
      setCurrentUser(null);
    }
  } catch (err) {
    console.error(err);
  }
};

  const handleSubmit = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    showNotif('Harap login terlebih dahulu', 'error');
    return;
  }

  if (rating < 1 || rating > 5) {
    showNotif('Pilih rating terlebih dahulu', 'error');
    return;
  }
  if ((preview.length + images.length) < 1) {
  showNotif('Minimal sertakan 1 gambar dalam ulasan', 'error');
  return;
}

  const form = new FormData();
  form.append('rating', rating);
  form.append('review', review);
  form.append('wisata_id', wisataId);
  preview.forEach(p => form.append('keepImages', p));
  images.forEach(i => form.append('images', i));

  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };

  try {
    if (isEditing && editingId) {
      await axios.put(`/api/user/rating/${editingId}`, form, config);
      showNotif('Ulasan diperbarui', 'success');
    } else {
      await axios.post('/api/user/rating', form, config);
      showNotif('Ulasan ditambahkan', 'success');
    }
    
    if (onUpdate) onUpdate();
    
    // reset
    setIsEditing(false);
    setEditingId(null);
    setRating(0);
    setReview('');
    setImages([]);
    setPreview([]);
    fetchAll();
  } catch (err) {
    showNotif(err?.response?.data?.message || 'Gagal mengirim ulasan', 'error');
  }
};

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (preview.length + files.length > 3) return alert('Maksimal 3 gambar');
    setImages(prev => [...prev, ...files]);
    e.target.value = null;
  };

  const handleRemovePreview = (name) => {
    setPreview(preview.filter(p => p !== name));
  };

  const handleRemoveNew = (index) => {
    const copy = [...images];
    copy.splice(index, 1);
    setImages(copy);
  };
const handleDeleteUlasan = async (id) => {
  
  try {
    await axios.delete(`/api/admin/rating/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
    setUlasan(prev => prev.filter(u => u.id !== id));
    if (onUpdate) onUpdate(); 
    showNotif('✅ Ulasan berhasil dihapus');
    
  } catch (err) {
    console.error('Gagal menghapus ulasan:', err);
    showNotif('Gagal menghapus ulasan', 'error');
  }
};

  
  const handleRatingClick = (val) => {
  setRating(val);
};
 

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        ref={formRef}
        style={{
          backgroundColor: 'white',
          width: '100%',
          maxWidth: 800,
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 8,
          padding: 20,
          paddingTop:10,
          position: 'relative'
        }}
      >
        <button onClick={onClose} style={{
          position: 'absolute',
          top: 7, right: 10,
          background: 'transparent',
          border: 'none',
          fontSize: 'clamp(21px, 2.5vw, 20px)',
          cursor: 'pointer',
          fontWeight:550
        }}>
          ✕
        </button>

        <p style={{fontSize:'clamp(20px, 2.5vw, 16px)', 
            margin:0
        }}>
        Semua Ulasan
          </p>
          
<div style={{ position: 'relative', borderBottom: '1px solid #ccc' }}>
  
  {/* <span>Rating Wisata</span> */}
  <UlasanTotal/>
</div>


      {(!currentUser || !hasRated || isEditing) && (
<div style={{borderBottom: '1px solid #ccc', paddingBottom: 10}}>
  <p style={{fontSize:'clamp(18px, 2.5vw, 16px)', margin:0}}>
    {isEditing ? 'Edit Ulasan Anda' : 'Berikan Ulasan'}
  </p>

  {/* Rating */}
  <div>
    {[1,2,3,4,5].map(i => (
      <span 
        key={i} 
        onClick={() => handleRatingClick(i)} 
        style={{
          cursor: 'pointer',
          color: rating >= i ? 'orange' : '#ccc',
          fontSize: 24
        }}>★</span>
    ))}
  </div>

  {/* Input file (hidden) */}
  <input
    type="file"
    accept="image/*"
    multiple
    ref={inputFileRef}
    style={{ display: 'none'}}
    onChange={(e) => {
      const selected = Array.from(e.target.files);
      setImages(prev => {
        const combined = [...prev, ...selected];
        return combined.slice(0, 3 - preview.length); // total max 3
      });
      e.target.value = '';
    }}
  />

  {/* PREVIEW + KOTAK TAMBAH 3 SLOT */}
  <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
    {[0,1,2].map((idx) => {
      const total = [...preview, ...images];
      const file = total[idx];
      return file ? (
        <div key={idx} style={{
          width: 80,
          height: 80,
          borderRadius: 8,
          overflow: 'hidden',
          position: 'relative'
        }}>
          <img src={typeof file === 'string' 
                    ? `http://localhost:3000/uploads/ulasan/${file}` 
                    : URL.createObjectURL(file)}
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <span onClick={() => {
            if(typeof file === 'string') {
              setPreview(prev => prev.filter(p => p !== file));
            } else {
              setImages(prev => prev.filter((_, i) => i !== (idx - preview.length)));
            }
          }} style={{
            position: 'absolute', top: 2, right: 2, cursor: 'pointer',
            color:'white', backgroundColor:'rgba(0,0,0,0.5)',
            borderRadius:'50%', padding:'2px 4px'
          }}>
            <i className="bi bi-x-lg" style={{ fontSize: 12 }}></i>
          </span>
        </div>
      ) : (
        <div key={idx} onClick={() => inputFileRef.current.click()} style={{
          width: 80,
          height: 80,
          border: '2px dashed #aaa',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#777'
        }}>
          <i className="bi bi-plus-lg" style={{ fontSize: 28 }}></i>
        </div>
      )
    })}
  </div>

  {/* TEXTAREA + Tombol Kirim (ulasan baru) */}
  <div style={{ display:'flex', alignItems:'flex-end', marginTop:10 }}>
    <textarea
      placeholder="Tulis ulasan (opsional)"
      value={review}
      rows={2}
      onChange={e => setReview(e.target.value)}
      style={{maxWidth:260, flexGrow:1, marginRight:10}}
    />

    {/* Tombol Kirim */}
    {!isEditing && (
      <button 
        style={{
          color: '#fff',
          backgroundColor:'#015E78'
        }}
        onClick={handleSubmit}
      >
        Kirim
      </button>
    )}
  </div>

  {/* Tombol Perbarui/Batal (hanya edit, di bawah textarea) */}
  {isEditing && (
    <div style={{ marginTop:10, display:'flex', gap:10, marginLeft:70 }}>
      <button onClick={() => {
        setIsEditing(false);
        setRating(0);
        setReview('');
        setPreview([]);
        setImages([]);
      }}>Batal</button>
      <button 
        style={{
          color: '#fff',
          backgroundColor:'#015E78'
        }}
        onClick={handleSubmit}
      >
        Perbarui Ulasan
      </button>
    </div>
  )}
</div>



)}


    {/* <h5>Daftar Ulasan</h5> */}
{[...ulasan]
  .sort((a, b) => {
    if(a.user_id === currentUser?.id) return -1; // owner ke atas
    if(b.user_id === currentUser?.id) return 1;
    return 0;
  })
  .map(u => (
  <div key={u.id} style={{ borderBottom: '1px solid #ccc', marginBottom: 5, position: 'relative' }}>
    <div key={u.id} style={{ position: 'relative' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    {/* FOTO PROFIL */}
    <img
      src={u.photoURL?.trim() ? u.photoURL : profilePlaceholder}
      width={40}
      height={40}
      style={{ borderRadius: '50%', objectFit: 'cover' }}
      alt="Foto Profil"
    />

    {/* USERNAME & TANGGAL */}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <b style={{ color: '#015E78', fontSize: 16 }}>@{u.username}</b>
      <p style={{ fontSize: '12px', color: '#888', marginBottom: 0 }}>
        {formatWaktu(u.created_at)}
      </p>
    </div>
  </div>

  {/* RATING BINTANG */}
  <div style={{ marginLeft: 50 }}>
    {[1, 2, 3, 4, 5].map(i => (
      <span key={i} style={{ color: u.rating >= i ? 'orange' : '#ccc', fontSize: 16 }}>★</span>
    ))}
  </div>
</div>


   <div style={{ position: 'absolute', right: 10, top: 10, display: 'flex', gap: '8px' }}>
  {currentUser?.id === u.user_id && (
    <button
      className="btn btn-sm btn-warning"
      onClick={() => {
        setIsEditing(true);
        setRating(u.rating);
        setReview(u.review || '');
        setPreview(JSON.parse(u.images || '[]'));
        setImages([]);
        if (formRef.current) {
          formRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}
    >
      Edit
    </button>
  )}

  {currentUser?.role === 'admin' && (
    <button
  className="btn btn-sm btn-danger"
  onClick={() => {
    setSelectedUlasanId(u.id);
    setShowDeleteModal(true);
  }}
>
  Hapus
</button>
  )}
</div>

   <p style={{ 
  wordWrap: 'break-word', 
  whiteSpace: 'pre-wrap', 
  overflowWrap: 'break-word', 
  maxWidth: '100%', 
  marginLeft: 50
}}>
  {u.review}
</p>


    <div style={{ marginLeft: 50,}}>
      {JSON.parse(u.images || '[]').map(f => (
        <img
          key={f}
          src={`http://localhost:3000/uploads/ulasan/${f}`}
          width={80}
          height={80}
          style={{ marginRight: 6, 
            marginBottom:'8px',
            borderRadius:'5px'
           }}
          alt=""
        />
      ))}
    </div>
  </div>
))}

     {showDeleteModal && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}
  >
    <div
      style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '5px',
        minWidth: '300px',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}
    >
      <p>Apakah Anda ingin menghapus ulasan ini?</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px' }}>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDeleteUlasan(selectedUlasanId);
            setShowDeleteModal(false);
          }}
        >
          Ya
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setShowDeleteModal(false)}
        >
          Batal
        </button>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default UlasanModal;