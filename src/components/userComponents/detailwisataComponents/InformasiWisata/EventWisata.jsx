// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const EventWisata = () => {
//   const { id } = useParams();
//   const [wisata, setWisata] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/api/wisata/${id}`);
//         setWisata(res.data);
//       } catch (err) {
//         console.error('Gagal mengambil data wisata:', err);
//       }
//     };

//     fetchData();
//   }, [id]);

//   // Jika event kosong → jangan tampilkan apa-apa
//   if (!wisata.event || wisata.event.trim() === "") {
//     return null;
//   }

//   // Seluruh blok hanya tampil jika ada event
//   return (
//     <div
//       className="container px-2"
//       style={{
//         paddingTop: '10px',
//         borderBottom: '1px solid #ccc',
//       }}
//     >
//       <div className="row text-center g-1">
//         <div className="container px-2 pb-2">
//           <div className="d-flex align-items-center">
//             <i
//               className="bi bi-info-circle-fill me-2"
//               style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
//             ></i>
//             <div className="d-flex flex-wrap">
//               <span
//                 className="fw-semibold"
//                 style={{
//                   fontSize: 'clamp(14px, 2vw, 17px)',
//                   color: '#fd0000ff',
//                 }}
//               >
//                 {wisata.event}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventWisata;
