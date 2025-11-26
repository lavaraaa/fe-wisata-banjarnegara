# .aigitignore

```
package-lock.json

```

# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    
    <link rel="icon"  type="image" href="../frontend/src/assets/profil.png" />
   <!-- index.html -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wisata Banjarnegara</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@iconify/react": "^6.0.0",
    "@tailwindcss/vite": "^4.1.5",
    "axios": "^1.9.0",
    "bootstrap": "^5.3.5",
    "dayjs": "^1.11.13",
    "flowbite": "^3.1.2",
    "react": "^19.0.0",
    "react-bootstrap": "^2.10.9",
    "react-dom": "^19.0.0",
    "react-hot-toast": "^2.5.2",
    "react-responsive-carousel": "^3.2.23",
    "react-router-dom": "^7.5.3",
    "react-use-draggable-scroll": "^0.4.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.22.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.22.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^4.1.5",
    "vite": "^6.3.1"
  }
}

```

# README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

# src/App.jsx

```jsx
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";
import './dist/css/main.css';

import { AuthContext } from "./pages/auth/AuthContext";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

  // ADMIN
import AdminNavbar from "./components/layouts/adminLayouts/AdminNavbar";
import AdminLayout from "./components/layouts/adminLayouts/AdminLayout";
import ModalTambahWisata from "./components/adminComponents/kelolawisataComponents/ModalTambahWisata";
import ModalEditWisata from "./components/adminComponents/kelolawisataComponents/ModalEditWisata";
import Dashboard from "./pages/admin/Dashboard";
import KelolaWisata from "./pages/admin/KelolaWisata";
import DaftarUser from "./pages/admin/DaftarUser"; 
import LaporanKomentar from "./pages/admin/LaporanKomentar";
import DaftarUlasan from "./pages/admin/DaftarUlasan";
import DaftarKomentar from "./pages/admin/DaftarKomentar";
import DaftarEvent from "./pages/admin/DaftarEvent";

//  USER
import UserNavbar from "./components/layouts/userLayouts/UserNavbar";
import ProfilUser from "./pages/user/ProfilUser";
import Footer from "./components/layouts/userLayouts/Footer";
import Home from "./pages/user/Home";
import DetailWisata from "./pages/user/DetailWisata";
import DaftarWisata from "./pages/user/DaftarWisata";  
import LihatProfil from './pages/user/LihatProfil'
import UlasanModal from "./components/userComponents/detailwisataComponents/UlasanComponents/UlasanModal";
import ButtonChatbot from "./components/chatbotComponents/ButtonChatbot";


function App() {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <Loading />;
  const role = user?.role;
  if (role === 'admin') {
    return (
      <>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="kelolawisata" element={<KelolaWisata />} />
            <Route path="tambahwisata" element={<ModalTambahWisata />} />
            <Route path="daftarevent" element={<DaftarEvent/>} />
            <Route path="editwisata" element={<ModalEditWisata />} />
            <Route path="/wisata/:id" element={<DetailWisata />} />
            <Route path="/daftarwisata" element={<DaftarWisata />} />
            <Route path="/laporankomentar" element={<LaporanKomentar />} />
            <Route path="daftaruser" element={<DaftarUser />} />
            <Route path="/profiluser" element={<ProfilUser />} />
            <Route path="/lihatprofil/:id" element={<LihatProfil />} />
            <Route path="daftarulasan" element={<DaftarUlasan />} />
            <Route path="daftarkomentar" element={<DaftarKomentar />} />
          </Route>
        </Routes>
      </>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <UserNavbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profiluser" element={<ProfilUser />} />
          <Route path="/daftarwisata" element={<DaftarWisata />} />
          <Route path="/wisata/:id" element={<DetailWisata />} />
          <Route path="/lihatprofil/:id" element={<LihatProfil />} />
          <Route path="/ulasanmodal/:id" element={<UlasanModal />} />
        </Routes>
      </div>
      <ButtonChatbot/>
      <Footer />
    </div>
  );
}


export default App;

```

# src/assets/banner/1.png

This is a binary file of the type: Image

# src/assets/banner/2.png

This is a binary file of the type: Image

# src/assets/banner/3.png

This is a binary file of the type: Image

# src/assets/banner/4.png

This is a binary file of the type: Image

# src/assets/banner/5.png

This is a binary file of the type: Image

# src/assets/banner/10.png

This is a binary file of the type: Image

# src/assets/banner/11.png

This is a binary file of the type: Image

# src/assets/blank_profile.webp

This is a binary file of the type: Image

# src/assets/category/CurugCategory.jpeg

This is a binary file of the type: Image

# src/assets/category/MricaCategory.jpeg

This is a binary file of the type: Image

# src/assets/category/Telaga Dringo.jpg

This is a binary file of the type: Image

# src/assets/logo kabupaten banjarnegara.png

This is a binary file of the type: Image

# src/assets/logo.png

This is a binary file of the type: Image

# src/assets/logoputih.png

This is a binary file of the type: Image

# src/assets/pngtree-tourists-travel-tourist-guide-person-picture-image_8727144.png

This is a binary file of the type: Image

# src/assets/profil.png

This is a binary file of the type: Image

# src/assets/react.svg

This is a file of the type: SVG Image

# src/components/adminComponents/DashboardComponents/CardDashboard.jsx

```jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../pages/auth/AuthContext";
import { useNavigate } from "react-router-dom";

const CardDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [jumlahUser, setJumlahUser] = useState(0);
  const [jumlahWisata, setJumlahWisata] = useState(0);
  const [jumlahUlasan, setJumlahUlasan] = useState(0);
  const [jumlahKomentar, setJumlahKomentar] = useState(0);
  const [jumlahLaporanKomentar, setJumlahLaporanKomentar] = useState(0);
  const [jumlahevent, setJumlahEvent] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchBasicData = async () => {
    try {
      const token = localStorage.getItem("token");
     const [userRes, wisataRes] = await Promise.all([
  axios.get("http://localhost:3000/api/users", {
    headers: { Authorization: `Bearer ${token}` },
  }),
  axios.get("http://localhost:3000/api/wisata"),
]);

setJumlahUser(userRes.data.length);
setJumlahWisata(wisataRes.data.length);

// HITUNG EVENT DARI DATA WISATA
const eventCount = wisataRes.data.filter(w => w.event && w.event.trim() !== "").length;
setJumlahEvent(eventCount);

    } catch (err) {
      console.error("Gagal mengambil data user/wisata:", err);
    }
  };

 const fetchAdditionalData = async () => {
  const token = localStorage.getItem("token");
  try {
    const ulasanRes = await axios.get(
      "http://localhost:3000/api/admin/rating",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setJumlahUlasan(Array.isArray(ulasanRes.data) ? ulasanRes.data.length : 0);

    const komentarRes = await axios.get(
      "http://localhost:3000/api/admin/komentar",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setJumlahKomentar(Array.isArray(komentarRes.data) ? komentarRes.data.length : 0);

    const laporankomentarRes = await axios.get(
      "http://localhost:3000/api/admin/laporan-komentar",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setJumlahLaporanKomentar(
      Array.isArray(laporankomentarRes.data) ? laporankomentarRes.data.length : 0
    );

  } catch (err) {
    console.error("Gagal mengambil data tambahan:", err);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    if (user?.role === "admin") {
      fetchBasicData().then(fetchAdditionalData);
    }
  }, [user]);

  if (loading)
    return <div className="text-center mt-5">⏳ Memuat data dashboard...</div>;

  const goToPage = (path) => {
    navigate(path);
  };

  const boxStyle = {
    position: "relative",
    color: "#fff",
    padding: "15px",
    overflow: "hidden",
    borderRadius: "4px",
    minHeight: "140px",
  };

  const iconStyle = {
    position: "absolute",
    top: "5px",
    right: "10px",
    fontSize: "70px",
    opacity: "0.2",
  };

  const footerStyle = {
    background: "rgba(0,0,0,0.1)",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 10px",
    fontSize: "14px",
    marginTop: "25px",
    cursor: "pointer",
  };

  return (
    <div className="row g-3" >
      {/* BOX 1 - Total Wisata */}
      <div className="col-md-4 col-sm-6 col-12">
        <div style={{ ...boxStyle, backgroundColor: "#00703cff" }}>
          <div>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>{jumlahWisata}</h3>
            <p style={{ margin: 0 }}>Total Wisata</p>
          </div>
          <div style={iconStyle}>
            <i className="fas fa-shopping-bag"></i>
          </div>
          {/* <div style={footerStyle} onClick={() => goToPage("/daftarwisata")}>
            More info <i className="fas fa-arrow-circle-right"></i>
          </div> */}
        </div>
      </div>

      {/* BOX 2 - Pengguna */}
      <div className="col-md-4 col-sm-6 col-12">
        <div style={{ ...boxStyle, backgroundColor: "#00929cff" }}>
          <div>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>{jumlahUser}</h3>
            <p style={{ margin: 0 }}>Pengguna</p>
          </div>
          <div style={iconStyle}>
            <i className="fas fa-user-plus"></i>
          </div>
        </div>
      </div>

        {/* BOX 3 - Total Acara */}
      <div className="col-md-4 col-sm-6 col-12">
        <div style={{ ...boxStyle, backgroundColor: "#b80000ff" }}>
          <div>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>{jumlahevent}</h3>
            <p style={{ margin: 0 }}>Total Acara</p>
          </div>
          <div style={iconStyle}>
            <i className="fas fa-shopping-bag"></i>
          </div>
          {/* <div style={footerStyle} onClick={() => goToPage("/daftarwisata")}>
            More info <i className="fas fa-arrow-circle-right"></i>
          </div> */}
        </div>
      </div>
      {/* BOX 4 - Komentar */}
      <div className="col-md-4 col-sm-6 col-12">
        <div style={{ ...boxStyle, backgroundColor: "#008db1ff" }}>
          <div>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>{jumlahKomentar}</h3>
            <p style={{ margin: 0 }}>Jumlah Komentar</p>
          </div>
          <div style={iconStyle}>
            <i className="fas fa-pie-chart"></i>
          </div>
        </div>
      </div>

      {/* BOX 5 - Ulasan */}
      <div className="col-md-4 col-sm-6 col-12">
        <div style={{ ...boxStyle, backgroundColor: "#b39800ff" }}>
          <div>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>{jumlahUlasan}</h3>
            <p style={{ margin: 0 }}>Jumlah Ulasan</p>
          </div>
          <div style={iconStyle}>
            <i className="fas fa-pie-chart"></i>
          </div>
        </div>
      </div>

      {/* BOX 6 - Laporan Komentar */}
      <div className="col-md-4 col-sm-6 col-12">
        <div style={{ ...boxStyle, backgroundColor: "#83006dff" }}>
          <div>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>
              {jumlahLaporanKomentar}
            </h3>
            <p style={{ margin: 0 }}>Laporan Komentar</p>
          </div>
          <div style={iconStyle}>
            <i className="fas fa-pie-chart"></i>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CardDashboard;

```

# src/components/adminComponents/kelolawisataComponents/ButtonEditWisata.jsx

```jsx
// File: ButtonEditWisata.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Icon } from "@iconify/react";
import { AuthContext } from '../../../pages/auth/AuthContext';
import { useParams } from 'react-router-dom';
import ModalEditWisata from '../../adminComponents/kelolawisataComponents/ModalEditWisata';

const ButtonEditWisata = ({ fetchDetailDanLainnya }) => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [showEditModal, setShowEditModal] = useState(false);
  const [buttonRight, setButtonRight] = useState('20px');
  const [dataWisata, setDataWisata] = useState(null);

  if (!user || user.role !== 'admin') return null;

  // Posisi tombol responsive
  useEffect(() => {
    const updateButtonPosition = () => {
      const screenWidth = window.innerWidth;
      const contentWidth = 1200;
      const marginSide = (screenWidth - contentWidth) / 2;
      setButtonRight(screenWidth <= contentWidth ? '16px' : `${marginSide + 20}px`);
    };
    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    return () => window.removeEventListener('resize', updateButtonPosition);
  }, []);

  // Ambil data wisata saat modal dibuka
  useEffect(() => {
    if (showEditModal && id) {
      fetch(`http://localhost:3000/api/wisata/${id}`)
        .then(res => res.json())
        .then(data => setDataWisata(data))
        .catch(err => console.error("Gagal ambil data wisata:", err));
    }
  }, [showEditModal, id]);

  // Handle edit sukses → update DetailWisata
  const handleEditSuccess = async () => {
    try {
      if (!id) return;
      const res = await fetch(`http://localhost:3000/api/wisata/${id}`);
      const updatedData = await res.json();
      setDataWisata(updatedData);
      if (fetchDetailDanLainnya) await fetchDetailDanLainnya(); // update state DetailWisata
      setShowEditModal(false);
    } catch (err) {
      console.error("Gagal update detail setelah edit:", err);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowEditModal(true)}
        className="btn"
        style={{
          position: 'fixed',
          bottom: '80px',
          right: buttonRight,
          backgroundColor: '#015E78',
          color: '#fff',
          fontSize: '15px',
          padding: '10px 10px',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 1099,
        }}
      >
        <Icon icon="mdi:pencil" />
        Edit Wisata
      </button>

      {dataWisata && (
        <ModalEditWisata
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          dataWisata={dataWisata}
          onEditSuccess={handleEditSuccess}
        />
      )}
    </>
  );
};

export default ButtonEditWisata;

```

# src/components/adminComponents/kelolawisataComponents/ButtonTambahWisata.jsx

```jsx
import React, { useEffect, useState } from 'react';
import ModalTambahWisata from './ModalTambahWisata';

const ButtonTambahWisata = ({ onActionSuccess }) => {
  const [buttonRight, setButtonRight] = useState('5vw');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const updateButtonPosition = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1240) {
        setButtonRight('50px');
      } else if (screenWidth >= 768) {
        setButtonRight('20px');
      } else {
        setButtonRight('16px');
      }
    };

    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    return () => window.removeEventListener('resize', updateButtonPosition);
  }, []);

  return (
    <>
      <button
        className="btn"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: buttonRight,
          backgroundColor: '#015E78',
          color: '#fff',
          fontSize: '17px',
          padding: '10px 10px',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
        }}
        onClick={() => setShowModal(true)}
      >
        <i className="bi bi-pencil me-1"></i>
        Tambah wisata baru
      </button>

      <ModalTambahWisata
        show={showModal}
        handleClose={() => setShowModal(false)}
        onActionSuccess={onActionSuccess}
      />
    </>
  );
};

export default ButtonTambahWisata;

```

# src/components/adminComponents/kelolawisataComponents/ModalEditWisata.jsx

```jsx
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNotifikasi } from '../../common/Notifikasi';

function ModalEditWisata({ show, handleClose, dataWisata, onEditSuccess }) {
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState(null);
  const [gambarLama, setGambarLama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [waktuBuka, setWaktuBuka] = useState('');
  const [waktuTutup, setWaktuTutup] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [fasilitasInput, setFasilitasInput] = useState('');
  const [fasilitas, setFasilitas] = useState([]);
  const [hargaTiket, setHargaTiket] = useState('');
  const [linkGmaps, setLinkGmaps] = useState('');
  const [kategoriTerpilih, setKategoriTerpilih] = useState([]);
  const [galeriFiles, setGaleriFiles] = useState([]);
  const [galeriLama, setGaleriLama] = useState([]);
  const [event, setEvent] = useState('');

  const { showNotif } = useNotifikasi();
  const modalRef = useRef(null);

  const daftarKategori = [
    'Dieng',
    'Wisata Alam',
    'Curug/Air Terjun',
    'Wisata Budaya',
    'Wisata Rekreasi',
    'Wisata Kuliner',
    'Wisata Edukasi',
    'Waduk',
    'Desa Wisata',
    'Wisata Religi',
  ];

  useEffect(() => {
    if (show && dataWisata) {
      setJudul(dataWisata.judul || '');
      setDeskripsi(dataWisata.deskripsi || '');
      setAlamat(dataWisata.alamat || '');
      setWaktuBuka(dataWisata.jam_buka || '');
      setWaktuTutup(dataWisata.jam_tutup || '');
      setNomorTelepon(dataWisata.no_telepon || '');
      setHargaTiket(dataWisata.harga_tiket || '');
      setLinkGmaps(dataWisata.link_gmaps || '');
      setGambarLama(dataWisata.gambar || '');
      setEvent(dataWisata.event || '');

      try {
        setFasilitas(dataWisata.fasilitas ? JSON.parse(dataWisata.fasilitas) : []);
      } catch {
        setFasilitas([]);
      }
      try {
        setKategoriTerpilih(dataWisata.kategori ? JSON.parse(dataWisata.kategori) : []);
      } catch {
        setKategoriTerpilih([]);
      }
      try {
        setGaleriLama(dataWisata.galeri ? JSON.parse(dataWisata.galeri) : []);
      } catch {
        setGaleriLama([]);
      }
      setGambar(null);
      setGaleriFiles([]);
      setFasilitasInput('');
    }
  }, [show, dataWisata]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, handleClose]);

  const handleKategoriChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setKategoriTerpilih([...kategoriTerpilih, value]);
    } else {
      setKategoriTerpilih(kategoriTerpilih.filter((k) => k !== value));
    }
  };

  const handleGaleriChange = (e) => {
    const selected = Array.from(e.target.files);
    setGaleriFiles((prev) => [...prev, ...selected]);
    e.target.value = '';
  };

  const handleHapusGaleriLama = (file) => {
    setGaleriLama(galeriLama.filter((f) => f !== file));
  };

  const handleHapusGaleriBaru = (index) => {
    setGaleriFiles(galeriFiles.filter((_, i) => i !== index));
  };

  const tambahFasilitas = () => {
    if (fasilitasInput.trim() && !fasilitas.includes(fasilitasInput.trim())) {
      setFasilitas([...fasilitas, fasilitasInput.trim()]);
      setFasilitasInput('');
    }
  };

  const hapusFasilitas = (index) => {
    setFasilitas(fasilitas.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (kategoriTerpilih.length === 0) {
      showNotif('Pilih minimal satu kategori', 'error');
      return;
    }

    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('deskripsi', deskripsi);
   if (gambar) {
    formData.append('gambar', gambar);}
    formData.append('event', event);
    formData.append('alamat', alamat);
    formData.append('jam_buka', waktuBuka);
    formData.append('jam_tutup', waktuTutup);
    formData.append('no_telepon', nomorTelepon);
    formData.append('fasilitas', JSON.stringify(fasilitas));
    formData.append('harga_tiket', hargaTiket);
    formData.append('link_gmaps', linkGmaps);
    formData.append('kategori', JSON.stringify(kategoriTerpilih));
    formData.append('galeri_lama', JSON.stringify(galeriLama));
    galeriFiles.forEach((file) => formData.append('galeri', file));

    try {
      await axios.put(`/api/wisata/${dataWisata.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      showNotif('Wisata berhasil diedit!', 'success');
      handleClose();
      if (onEditSuccess) onEditSuccess();
    } catch (error) {
      showNotif('Gagal mengedit wisata.', 'error');
    }
  };

  if (!show) return null;

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 9999 }}
    >
      <div
        className="modal-dialog"
        ref={modalRef}
        style={{
          maxWidth: '600px',
          margin: 'auto',
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease-out',
          transform: show ? 'scale(1)' : 'scale(0.8)',
        }}
      >
        <div className="modal-content">
          <div
            className="modal-header"
            style={{ borderBottom: '1px solid #ddd', backgroundColor: '#015E78' }}
          >
            <h5
              className="modal-title"
              style={{
                fontWeight: '600',
                fontSize: '20px',
                color: '#fff',
                flexGrow: 1,
                textAlign: 'center',
              }}
            >
              Edit Wisata
            </h5>
            <button
              type="button"
              onClick={handleClose}
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              &#10005;
            </button>
          </div>
          <form onSubmit={handleSubmit}>

             {/* Informasi/Event */}
              <div className="mb-3">
                <label htmlFor="event" className="form-label">
                  Informasi / Event (jika ada)
                </label>
                <input
                  type="text"
                  id="event"
                  className="form-control"
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
            <div className="modal-body">
              {/* Judul */}
              <div className="mb-3">
                <label htmlFor="judul" className="form-label">
                  Judul Wisata
                </label>
                <input
                  type="text"
                  id="judul"
                  className="form-control"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
              
            {/* Alamat */}
              <div className="mb-3">
                <label htmlFor="alamat" className="form-label">
                  Alamat wisata lengkap
                </label>
                <input
                  type="text"
                  id="alamat"
                  className="form-control"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Kategori */}
              <div className="mb-3">
                <label className="form-label">Kategori (minimal 1)</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {daftarKategori.map((kategori, idx) => (
                    <div
                      key={idx}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <input
                        type="checkbox"
                        id={`kategori-${idx}`}
                        value={kategori}
                        checked={kategoriTerpilih.includes(kategori)}
                        onChange={handleKategoriChange}
                        style={{ marginRight: '5px' }}
                      />
                      <label htmlFor={`kategori-${idx}`}>{kategori}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deskripsi */}
              <div className="mb-3">
                <label htmlFor="deskripsi" className="form-label">
                  Deskripsi
                </label>
                <textarea
                  id="deskripsi"
                  className="form-control"
                  rows={4}
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Gambar Utama */}
              <div className="mb-3">
                <label htmlFor="gambar" className="form-label">
                  Gambar Wisata
                </label>
                {gambarLama && (
                  <div
                    style={{
                      marginBottom: '10px',
                      fontStyle: 'italic',
                      color: '#555',
                    }}
                  >
                    Gambar lama: {gambarLama}
                  </div>
                )}
                <input
                  type="file"
                  id="gambar"
                  className="form-control"
                  onChange={(e) => setGambar(e.target.files[0])}
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Galeri */}
              <div className="mb-3">
                <label htmlFor="galeri" className="form-label">
                  Galeri (bisa pilih banyak gambar)
                </label>
                <input
                  type="file"
                  id="galeri"
                  name="galeri"
                  className="form-control"
                  multiple
                  accept="image/*"
                  onChange={handleGaleriChange}
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* List file galeri lama */}
              {galeriLama.length > 0 && (
                <ul className="list-group mb-3">
                  {galeriLama.map((file, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {file}
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleHapusGaleriLama(file)}
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* List file galeri baru */}
              {galeriFiles.length > 0 && (
                <ul className="list-group mb-3">
                  {galeriFiles.map((file, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {file.name}
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleHapusGaleriBaru(index)}
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* Waktu Buka */}
              <div className="mb-3">
                <label htmlFor="waktu_buka" className="form-label">
                  Waktu Buka
                </label>
                <input
                  type="time"
                  id="waktu_buka"
                  className="form-control"
                  value={waktuBuka}
                  onChange={(e) => setWaktuBuka(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Waktu Tutup */}
              <div className="mb-3">
                <label htmlFor="waktu_tutup" className="form-label">
                  Waktu Tutup
                </label>
                <input
                  type="time"
                  id="waktu_tutup"
                  className="form-control"
                  value={waktuTutup}
                  onChange={(e) => setWaktuTutup(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Nomor Telepon */}
              <div className="mb-3">
                <label htmlFor="nomor_telepon" className="form-label">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  id="nomor_telepon"
                  className="form-control"
                  value={nomorTelepon}
                  onChange={(e) => setNomorTelepon(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Fasilitas */}
              <div className="mb-3">
                <label htmlFor="fasilitas" className="form-label">
                  Fasilitas
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    id="fasilitas"
                    className="form-control"
                    value={fasilitasInput}
                    onChange={(e) => setFasilitasInput(e.target.value)}
                    placeholder="Masukkan fasilitas yang tersedia"
                    style={{
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      padding: '12px',
                      fontSize: '16px',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                      flexGrow: 1,
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && fasilitasInput.trim()) {
                        e.preventDefault();
                        tambahFasilitas();
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={tambahFasilitas}
                    style={{
                      backgroundColor: '#015E78',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                      transition: 'background-color 0.3s ease',
                      alignSelf: 'center',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#01455B')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#015E78')}
                  >
                    Tambah
                  </button>
                </div>
                <div
                  style={{
                    marginTop: '10px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}
                >
                  {fasilitas.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#e0f7fa',
                        padding: '6px 10px',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ marginRight: '8px' }}>{item}</span>
                      <button
                        type="button"
                        onClick={() => hapusFasilitas(idx)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#007b8a',
                          fontWeight: 'bold',
                          fontSize: '18px',
                          lineHeight: '1',
                        }}
                        aria-label={`Hapus fasilitas ${item}`}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Harga Tiket */}
              <div className="mb-3">
                <label htmlFor="harga_tiket" className="form-label">
                  Harga Tiket
                </label>
                <input
                  type="number"
                  id="harga_tiket"
                  className="form-control"
                  value={hargaTiket}
                  onChange={(e) => setHargaTiket(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Link Google Maps */}
              <div className="mb-3">
                <label htmlFor="link_gmaps" className="form-label">
                  Link Google Maps
                </label>
                <input
                  type="text"
                  id="link_gmaps"
                  className="form-control"
                  value={linkGmaps}
                  onChange={(e) => setLinkGmaps(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <button
                type="button"
                className="btn"
                onClick={handleClose}
                style={{
                  backgroundColor: '#E4080A',
                  border: '1px solid #ddd',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  marginRight: '10px',
                }}
              >
                Batal
              </button>
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: '#015E78',
                  color: '#fff',
                  padding: '8px 12px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#01455B')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#015E78')}
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalEditWisata;

```

# src/components/adminComponents/kelolawisataComponents/ModalTambahWisata.jsx

```jsx
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNotifikasi } from '../../common/Notifikasi';

function ModalTambahWisata({ show, handleClose, onActionSuccess }) {
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState(null);
  const [alamat, setAlamat] = useState('');
  const [waktuBuka, setWaktuBuka] = useState('');
  const [waktuTutup, setWaktuTutup] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [fasilitasInput, setFasilitasInput] = useState('');
  const [fasilitas, setFasilitas] = useState([]);
  const [hargaTiket, setHargaTiket] = useState('');
  const [linkGmaps, setLinkGmaps] = useState('');

  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [kodewilayah, setKodewilayah] = useState('');

  const [kategoriTerpilih, setKategoriTerpilih] = useState([]);
  const [galeriFiles, setGaleriFiles] = useState([]);
  const { showNotif } = useNotifikasi();
  const daftarKategori = [
    'Dieng',
    'Wisata Alam',
    'Curug/Air Terjun',
    'Wisata Budaya',
    'Wisata Rekreasi',
    'Wisata Kuliner',
    'Wisata Edukasi',
    'Waduk',
    'Desa Wisata',
    'Wisata Religi',
  ];

  const handleKategoriChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setKategoriTerpilih([...kategoriTerpilih, value]);
    } else {
      setKategoriTerpilih(kategoriTerpilih.filter((item) => item !== value));
    }
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, handleClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (kategoriTerpilih.length === 0) {
      alert('Pilih minimal satu kategori.');
      return;
    }

    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('deskripsi', deskripsi);
    formData.append('gambar', gambar);
    formData.append('alamat', alamat);
    formData.append('jam_buka', waktuBuka);
    formData.append('jam_tutup', waktuTutup);
    formData.append('no_telepon', nomorTelepon);
    formData.append('fasilitas', JSON.stringify(fasilitas));
    formData.append('harga_tiket', hargaTiket);
    formData.append('link_gmaps', linkGmaps);

     formData.append('longitude', longitude);
     formData.append('latitude', latitude);
     formData.append('kode_wilayah', kodewilayah);

    formData.append('kategori', JSON.stringify(kategoriTerpilih));
  galeriFiles.forEach((file) => {
    formData.append('galeri', file);
  });
    try {
      await axios.post('http://localhost:3000/api/wisata', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
     });
  showNotif('Wisata berhasil ditambahkan!', 'success');
  if (onActionSuccess) onActionSuccess();
  handleClose();
} catch (error) {
  console.error('Error adding wisata: ', error);
  showNotif('Gagal menambahkan wisata.', 'error');
}
  };

  return (
    <div
      className={`modal ${show ? 'd-block' : 'd-none'}`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 9999,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div
        className="modal-dialog"
        ref={modalRef}
        style={{
          maxWidth: '550px',
          margin: 'auto',
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '15px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease-out',
          transform: show ? 'scale(1)' : 'scale(0.8)',
        }}
      >
        <div className="modal-content">
          <div className="modal-header" style={{ borderBottom: '1px solid #ddd', backgroundColor: '#015E78', padding:10 }}>
            <h5 className="modal-title" style={{ fontWeight: '600', fontSize: '18px', color: '#fff', flexGrow: 1, textAlign: 'center' }}>
              Tambah Destinasi Wisata
            </h5>
            <button
              type="button"
              onClick={handleClose}
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                fontWeight:'800'
              }}
            >
              &#10005;
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-2">
                <label htmlFor="judul" className="form-label">Nama Destinasi Wisata</label>
                <input
                  type="text"
                  className="form-control"
                  id="judul"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '6px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                  placeholder="Masukkan Nama Destinasi Wisata"
                />
              </div>

              {/* Checkbox Kategori Wisata */}
              <div className="mb-2">
                <label className="form-label">Kategori (minimal 1)</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {daftarKategori.map((kategori, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type="checkbox"
                        id={`kategori-${index}`}
                        value={kategori}
                        checked={kategoriTerpilih.includes(kategori)}
                        onChange={handleKategoriChange}
                        style={{ marginRight: '5px' }}
                      />
                      <label htmlFor={`kategori-${index}`}>{kategori}</label>
                    </div>
                  ))}
                </div>
              </div>


              <div className="mb-2">
                <label htmlFor="deskripsi" className="form-label">
                  Deskripsi
                </label>
                <textarea
                  className="form-control"
                  id="deskripsi"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  required
                  rows="3"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 8px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                  placeholder="Masukkan deskripsi wisata"
                ></textarea>
              </div>

              <div className="mb-2">
                <label htmlFor="gambar" className="form-label">
                  Gambar Wisata
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="gambar"
                  onChange={(e) => setGambar(e.target.files[0])}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
{/* Input Galeri */}
<div className="mb-2">
  <label htmlFor="galeri" className="form-label">Galeri (Maksimal 10 Gambar)</label>
  <input
    type="file"
    id="galeri"
    name="galeri"
    className="form-control"
    multiple
    accept="image/*"
    onChange={(e) => {
      const selected = Array.from(e.target.files);
      setGaleriFiles((prev) => [...prev, ...selected]);
      e.target.value = '';
    }}
    style={{
    borderRadius: '8px',
    border: '1px solid #ddd',
    padding: '5px 10px',
    fontSize: '16px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    }}
  />
</div>

{/* List file galeri yang dipilih */}
{galeriFiles.length > 0 && (
  <ul className="list-group mb-3">
    {galeriFiles.map((file, index) => (
      <li
        key={index}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {file.name}
        <button
          type="button"
          className="btn btn-sm btn-outline-danger"
          onClick={() =>
            setGaleriFiles((prev) => prev.filter((_, i) => i !== index))
          }
        >
          ❌
        </button>
      </li>
    ))}
  </ul>
)}

            {/* Alamat wisata lengkap */}
            <div className="mb-2">
                <label htmlFor="alamat" className="form-label">Alamat wisata lengkap</label>
                <input
                  type="text"
                  className="form-control"
                  id="alamat"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                  placeholder="Masukkan alamat wisata lengkap"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="waktu_buka" className="form-label">
                  Waktu Buka
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="waktu_buka"
                  value={waktuBuka}
                  onChange={(e) => setWaktuBuka(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="waktu_tutup" className="form-label">
                  Waktu Tutup
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="waktu_tutup"
                  value={waktuTutup}
                  onChange={(e) => setWaktuTutup(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="nomor_telepon" className="form-label">
                  Nomor Telepon Pengelola
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nomor_telepon"
                  value={nomorTelepon}
                  onChange={(e) => setNomorTelepon(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

   <div className="mb-1">
      <label htmlFor="fasilitas" className="form-label">Fasilitas</label>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          className="form-control"
          id="fasilitas"
          value={fasilitasInput}
          onChange={(e) => setFasilitasInput(e.target.value)}
          placeholder="Masukkan fasilitas yang tersedia"
          style={{
            borderRadius: '8px',
            border: '1px solid #ddd',
            padding: '5px 10px',
            fontSize: '16px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            flexGrow: 1,
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && fasilitasInput.trim()) {
              e.preventDefault();
              if (!fasilitas.includes(fasilitasInput.trim())) {
                setFasilitas([...fasilitas, fasilitasInput.trim()]);
              }
              setFasilitasInput('');
            }
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (fasilitasInput.trim() && !fasilitas.includes(fasilitasInput.trim())) {
              setFasilitas([...fasilitas, fasilitasInput.trim()]);
              setFasilitasInput('');
            }
          }}
          style={{
            backgroundColor: '#015E78',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 10px',
            fontSize: '14px',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
            alignSelf: 'center',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#01455B')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#015E78')}
        >
          Tambah
        </button>
      </div>

      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {fasilitas.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#e0f7fa',
              padding: '6px 10px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '8px' }}>{item}</span>
            <button
              type="button"
              onClick={() =>
                setFasilitas(fasilitas.filter((_, i) => i !== index))
              }
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#007b8a',
                fontWeight: 'bold',
                fontSize: '18px',
                lineHeight: '1',
              }}
              aria-label={`Hapus fasilitas ${item}`}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>

              <div className="mb-2">
                <label htmlFor="harga_tiket" className="form-label">
                  Harga Tiket Masuk
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="harga_tiket"
                  value={hargaTiket}
                  onChange={(e) => setHargaTiket(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="link_gmaps" className="form-label">
                  Link Google Maps
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="link_gmaps"
                  value={linkGmaps}
                  onChange={(e) => setLinkGmaps(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>


              {/* coba */}
                 <div className="mb-2">
                <label htmlFor="longitude" className="form-label">
                 Longitude
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
                 <div className="mb-2">
                <label htmlFor="latitude" className="form-label">
                  Latitude
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />

              </div>
                 <div className="mb-2">
                <label htmlFor="kode_wilayah" className="form-label">
                  Kode Wilayah
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="kode_wilayah"
                  value={kodewilayah}
                  onChange={(e) => setKodewilayah(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
            </div>
            <div className="modal-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="btn"
                onClick={handleClose}
                style={{
                  backgroundColor: '#E4080A',
                  border: '1px solid #ddd',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  marginRight: '10px',
                }}
              >
                Batal
              </button>
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: '#015E78',
                  color: '#fff',
                  padding: '8px 12px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#01455B'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#015E78'}
              >
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalTambahWisata;
```

# src/components/chatbotComponents/AnimasiAwal.jsx

```jsx
// src/components/common/AnimasiAwal.jsx
import React from 'react';
import logo from '../../assets/logoputih.png';

const AnimasiAwal = () => {
  return (
    <div
      style={{
        backgroundColor: '#888787ff',
        padding: '10px',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '90%',
        maxWidth: '250px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        margin: '0 auto',
      }}
    >
      {/* Logo */}
      <img src={logo} alt="Logo" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />

      {/* Teks intro */}
      <p style={{ fontSize: '14px', color: '#fff', lineHeight: '1.5' }}>
        Chat untuk memulai, saya bisa membantu kamu dengan:
      </p>

      {/* Daftar fitur */}
      <div style={{ textAlign: 'left', fontSize: '14px', color: '#fff', lineHeight: '1.5' }}>
        <div>1. Rekomendasi destinasi wisata</div>
        <div>2. Informasi destinasi wisata</div>
        <div>3. Info cuaca di lokasi</div>
        <div>4. Jarak antar destinasi wisata</div>
      </div>
    </div>
  );
};

export default AnimasiAwal;

```

# src/components/chatbotComponents/ButtonChatbot.jsx

```jsx
import React, { useState, useEffect } from 'react';
import Chatbot from'../../pages/Chatbot/Chatbot';

const ButtonChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonRight, setButtonRight] = useState('20px');

  useEffect(() => {
    const updateButtonPosition = () => {
      const screenWidth = window.innerWidth;
      const contentWidth = 1200;
      const marginSide = (screenWidth - contentWidth) / 2;

      setButtonRight(screenWidth <= contentWidth ? '16px' : `${marginSide + 20}px`);
    };

    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    return () => window.removeEventListener('resize', updateButtonPosition);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '70px',
          right: buttonRight,
          backgroundColor: '#015E78',
          color: '#fff',
          fontSize: '15px',
          padding: '6px 14px',
          border: 'none',
          borderRadius: '40px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 1099,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <i className="bi bi-chat-dots-fill" style={{ marginRight: '8px' }}></i>
        Chat dengan Kami
      </button>
      {isOpen && <Chatbot onClose={() => setIsOpen(false)} buttonRight={buttonRight} />}
    </>
  );
};

export default ButtonChatbot;

```

# src/components/chatbotComponents/ModalHapusHistori.jsx

```jsx
import React from 'react';

const ModalHapusHistori = ({ onClose, onConfirm }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300,
      }}
    >
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', minWidth: '280px' }}>
        <p>Apakah Anda yakin ingin menghapus histori?</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button onClick={onClose}>Batal</button>
          <button onClick={onConfirm} style={{ backgroundColor: '#015E78', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '8px' }}>Hapus</button>
        </div>
      </div>
    </div>
  );
};

export default ModalHapusHistori;

```

# src/components/chatbotComponents/NavbarChatbot.jsx

```jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../pages/auth/AuthContext';
import SidebarChatbot from './SidebarChatbot';

const NavbarChatbot = () => {
  const { user } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: '#015E78',
          color: '#fff',
          padding: '12px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1300,
        }}
      >
        {user && (
          <span
            style={{ cursor: 'pointer', fontSize: '20px' }}
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </span>
        )}
        <p style={{ margin: 0, marginRight: '70%' }}>Chatbot</p>
     
      </div>

      {sidebarOpen && user && (
        <SidebarChatbot onClose={() => setSidebarOpen(false)} />
      )}
    </>
  );
};

export default NavbarChatbot;

```

# src/components/chatbotComponents/PopupChatbot.jsx

```jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../pages/auth/AuthContext';
import AnimasiAwal from './AnimasiAwal';
import axios from 'axios';

const Chatbot = ({ buttonRight }) => {
const { user } = useContext(AuthContext);
const [messages, setMessages] = useState([]);
const [started, setStarted] = useState(false);
const [input, setInput] = useState('');

const handleSend = async () => {
  if (!input.trim()) return;
    setMessages([...messages, { text: input.trim(), user: true }]);
    setStarted(true);    
    const userMessage = input.trim();
    setInput('');
    try {
      const res = await axios.post('http://localhost:3000/chat/query', {
        query: userMessage
      });
      const botResponse = res.data.data.response;
      setMessages((prev) => [...prev, { text: botResponse, user: false }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { text: 'Koneksi gagal', user: false },
      ]);
    }
  };
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '105px',
        right: buttonRight,
        width: '320px',
        height: '500px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1299,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: started ? 'flex-start' : 'center',
          alignItems: 'center',
          position: 'relative',
          overflowY: 'auto',
          padding: '8px',
        }}
      >
        {!started && <AnimasiAwal />}
        {started &&
          messages.map((msg, i) => (
            <div
              key={i}
              style={{
                alignSelf: msg.user ? 'flex-end' : 'flex-start',
                backgroundColor: msg.user ? '#015E78' : '#e0e0e0',
                color: msg.user ? '#fff' : '#000',
                padding: '5px 10px',
                borderRadius: '13px',
                margin: '4px 2px',
                maxWidth: '80%',
                wordBreak: 'break-word',
              }}
            >
              {msg.text}
            </div>
          ))}
      </div>

      <div style={{ display: 'flex', padding: '10px', gap: '6px' }}>
        <input
          type="text"
          placeholder="Ketik pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
          style={{
            flex: 1,
            padding: '8px',
            border: '1px solid #ccc',
            outline: 'none',
            borderRadius: 10,
          }}
        />
        <button
          onClick={handleSend}
          style={{
            backgroundColor: '#015E78',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: '18px',
          }}
        >
          <i className="bi bi-send-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

```

# src/components/chatbotComponents/SidebarChatbot.jsx

```jsx
import React, { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../../pages/auth/AuthContext';
import ModalHapusHistori from './ModalHapusHistori';

const SidebarChatbot = ({ onClose }) => {
  const { user } = useContext(AuthContext);
  const [showHapusModal, setShowHapusModal] = useState(false);
  const sidebarRef = useRef(null);

  if (!user) return null;

  // Tutup sidebar jika klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%', // overlay menutupi seluruh popup
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        zIndex: 99990,
        display: 'flex',
      }}
    >
      <div
        ref={sidebarRef}
        style={{
          width: '50%', // separuh popup
          height: '100%', // tutup semua dari atas sampai bawah popup
          backgroundColor: '#f5f5f5',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >

        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '10px' }}>
          {/* Histori chat user */}
          <p>Histori Chat...</p>
        </div>

          <button
          onClick={() => console.log('New Chat clicked')}
          style={{ 
          marginBottom: '10px',     
          backgroundColor: '#015E78',
          color: 'white',
          }}
        >
          New Chat
        </button>

        {showHapusModal && (
          <ModalHapusHistori
            onClose={() => setShowHapusModal(false)}
            onConfirm={() => {
              console.log('Histori dihapus');
              setShowHapusModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SidebarChatbot;

```

# src/components/common/cardComponents/CardSidebar.jsx

```jsx
import React, { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ModalEditWisata from '../../adminComponents/kelolawisataComponents/ModalEditWisata';
import { AuthContext } from '../../../pages/auth/AuthContext';

const WisataLainnya = ({ item, onActionSuccess }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const optionsRef = useRef();
  const [showOptions, setShowOptions] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);


  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/api/wisata/${item.id}`, {
        method: 'DELETE',
      });
      
      setShowDeleteModal(false);
      setShowOptions(false);
      if (onActionSuccess) onActionSuccess(); // panggil ulang data kalau ada
    } catch (err) {
      console.error('Gagal menghapus:', err);
      alert('Gagal menghapus.');
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showOptions && optionsRef.current && !optionsRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showOptions]);

  const handleEdit = () => {
  setShowOptions(false);
  setShowEditModal(true);
};


  return (
    <>
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 d-flex justify-content-center"
        style={{ cursor: 'pointer', width:'300px', marginLeft:60}}
      >
        <div
          style={{
            width: '100%',
            borderRadius: '5px',
            overflow: 'hidden',
            background: '#fff',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
            position: 'relative',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onClick={() => navigate(`/wisata/${item.id}`)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src={`http://localhost:3000/uploads/${item.gambar}`}
              alt={item.judul}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                background: '#fff',
                borderRadius: '20px',
                padding: '3px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                fontSize: 15,
                fontWeight: 500,
                color: '#000',
              }}
            >
              <Icon icon="icon-park-outline:like" />
              <span>{item.total_likes || 0}</span>
            </div>
          </div>

          <div
            style={{
              padding: '12px 12px 0px 12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <h5
              title={item.judul}
              style={{
                margin: 0,
                // marginBottom: 10,
                fontWeight: '600',
                color: '#000',
                fontSize: '16px',
                flex: 1,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.judul}
            </h5>

            {user?.role === 'admin' && (
              <div style={{ position: 'relative' }} ref={optionsRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOptions();
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '20px',
                    // padding: '0px',
                    // marginBottom: 10,
                  }}
                >
                  ⋮
                </button>

                {showOptions && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-50px',
                      left: '-120px',
                      width: '100px',
                      background: 'white',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                      zIndex: 1,
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit();
                      }}
                      style={{
                        padding: '8px 12px',
                        width: '100%',
                        border: 'none',
                        background: 'white',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f0f0')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
                    >
                      Edit
                    </button>
                   <button
  onClick={(e) => {
    e.stopPropagation();
    setShowOptions(false);       // ⬅️ TUTUP DROPDOWN DULU
    setShowDeleteModal(true);   // ⬅️ Lalu munculin modal hapus
  }}
  style={{
    padding: '8px 12px',
    width: '100%',
    border: 'none',
    background: 'white',
    cursor: 'pointer',
    color: 'red',
    textAlign: 'left',
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f0f0')}
  onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
>
  Hapus
</button>

                  </div>
                )}
              </div>
            )}
          </div>

          <div style={{ marginLeft: 11 }}>
            {item.average_rating > 0 ? (
              <>
                <span style={{ fontSize: 14, color: '#333', fontWeight: 500 }}>
                  {Number(item.average_rating).toFixed(1)}
                </span>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    style={{
                      color: Number(item.average_rating) >= i ? 'orange' : '#ccc',
                      fontSize: 17,
                    }}
                  >
                    ★
                  </span>
                ))}
              </>
            ) : (
              <span style={{ fontSize: 15, color: '#999' }}>Belum ada ulasan</span>
            )}
          </div>
        </div>
      </div>
{showEditModal && (
  <ModalEditWisata
    show={showEditModal}
    handleClose={() => setShowEditModal(false)}
    dataWisata={item}
    onEditSuccess={() => {
      if (onActionSuccess) onActionSuccess();
      setShowEditModal(false);
    }}
  />
)}

      {/* Modal Hapus */}
      {showDeleteModal && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1300 }}
    onClick={() => setShowDeleteModal(false)}
  >
    <div
      className="card shadow p-4"
      style={{ maxWidth: '400px', width: '100%', zIndex: 1301 }}
      onClick={(e) => e.stopPropagation()}
    >
      <h5 className="mb-3 text-center">Konfirmasi Hapus</h5>
      <p className="text-center">Apakah Anda yakin ingin menghapus wisata ini?</p>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary w-50 me-2" onClick={() => setShowDeleteModal(false)}>
          Batal
        </button>
        <button className="btn btn-danger w-50 ms-2" onClick={handleDelete}>
          Ya, Hapus
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default WisataLainnya;

```

# src/components/common/cardComponents/CardWisata.jsx

```jsx
import React, { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ModalEditWisata from '../../adminComponents/kelolawisataComponents/ModalEditWisata';
import { AuthContext } from '../../../pages/auth/AuthContext';

const CardWisata = ({ item, onActionSuccess }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const optionsRef = useRef();
  const [showOptions, setShowOptions] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);


  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/api/wisata/${item.id}`, {
        method: 'DELETE',
      });
      
      setShowDeleteModal(false);
      setShowOptions(false);
      if (onActionSuccess) onActionSuccess(); // panggil ulang data kalau ada
    } catch (err) {
      console.error('Gagal menghapus:', err);
      alert('Gagal menghapus.');
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showOptions && optionsRef.current && !optionsRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showOptions]);

  const handleEdit = () => {
  setShowOptions(false);
  setShowEditModal(true);
};


  return (
    <>
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 d-flex justify-content-center"
        style={{ cursor: 'pointer' }}
      >
        <div
          style={{
            width: '100%',
            borderRadius: '5px',
            overflow: 'hidden',
            background: '#fff',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
            position: 'relative',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onClick={() => navigate(`/wisata/${item.id}`)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src={`http://localhost:3000/uploads/${item.gambar}`}
              alt={item.judul}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                background: '#fff',
                borderRadius: '20px',
                padding: '3px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                fontSize: 15,
                fontWeight: 500,
                color: '#000',
              }}
            >
              <Icon icon="icon-park-outline:like" />
              <span>{item.total_likes || 0}</span>
            </div>
          </div>

          <div
            style={{
              padding: '12px 12px 0px 12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <h5
              title={item.judul}
              style={{
                margin: 0,
                // marginBottom: 10,
                fontWeight: '600',
                color: '#000',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                flex: 1,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.judul}
            </h5>

            {user?.role === 'admin' && (
              <div style={{ position: 'relative' }} ref={optionsRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOptions();
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '20px',
                    // padding: '0px',
                    // marginBottom: 10,
                  }}
                >
                  ⋮
                </button>

                {showOptions && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-50px',
                      left: '-120px',
                      width: '100px',
                      background: 'white',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                      zIndex: 1,
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit();
                      }}
                      style={{
                        padding: '8px 12px',
                        width: '100%',
                        border: 'none',
                        background: 'white',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f0f0')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
                    >
                      Edit
                    </button>
                   <button
  onClick={(e) => {
    e.stopPropagation();
    setShowOptions(false);       // ⬅️ TUTUP DROPDOWN DULU
    setShowDeleteModal(true);   // ⬅️ Lalu munculin modal hapus
  }}
  style={{
    padding: '8px 12px',
    width: '100%',
    border: 'none',
    background: 'white',
    cursor: 'pointer',
    color: 'red',
    textAlign: 'left',
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f0f0')}
  onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
>
  Hapus
</button>

                  </div>
                )}
              </div>
            )}
          </div>

          <div style={{ marginLeft: 11 }}>
            {item.average_rating > 0 ? (
              <>
                <span style={{ fontSize: 'clamp(13px, 2.5vw, 14px)', color: '#333', fontWeight: 500 }}>
                  {Number(item.average_rating).toFixed(1)}
                </span>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    style={{
                      color: Number(item.average_rating) >= i ? 'orange' : '#ccc',
                      fontSize: 17,
                    }}
                  >
                    ★
                  </span>
                ))}
              </>
            ) : (
              <span style={{ fontSize: 'clamp(13px, 2.5vw, 15px)', color: '#999' }}>Belum ada ulasan</span>
            )}
          </div>
        </div>
      </div>
{showEditModal && (
  <ModalEditWisata
    show={showEditModal}
    handleClose={() => setShowEditModal(false)}
    dataWisata={item}
    onEditSuccess={() => {
      if (onActionSuccess) onActionSuccess();
      setShowEditModal(false);
    }}
  />
)}

      {/* Modal Hapus */}
      {showDeleteModal && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1300 }}
    onClick={() => setShowDeleteModal(false)}
  >
    <div
      className="card shadow p-4"
      style={{ maxWidth: '400px', width: '100%', zIndex: 1301 }}
      onClick={(e) => e.stopPropagation()}
    >
      <h5 className="mb-3 text-center">Konfirmasi Hapus</h5>
      <p className="text-center">Apakah Anda yakin ingin menghapus wisata ini?</p>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary w-50 me-2" onClick={() => setShowDeleteModal(false)}>
          Batal
        </button>
        <button className="btn btn-danger w-50 ms-2" onClick={handleDelete}>
          Ya, Hapus
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default CardWisata;

```

# src/components/common/cardComponents/CategoryCard.jsx

```jsx
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Diengcategory from '../../../assets/banner/1.png';
import Wisatalamcategory from '../../../assets/category/Telaga Dringo.jpg'
import Mricacategory from '../../../assets/category/Mricacategory.jpeg'
import CurugCategory from '../../../assets/category/CurugCategory.jpeg'

const kategoriList = [
  { nama: 'Dieng', gambar: Diengcategory },
  { nama: 'Wisata Alam', gambar: Wisatalamcategory },
  { nama: 'Curug/Air Terjun', gambar: CurugCategory },
  { nama: 'Wisata Budaya', gambar: Diengcategory },
  { nama: 'Wisata Rekreasi', gambar: Diengcategory },
  { nama: 'Wisata Kuliner', gambar: Diengcategory },
  { nama: 'Wisata Edukasi', gambar: Diengcategory },
  { nama: 'Wisata Religi', gambar: Diengcategory },
  { nama: 'Waduk', gambar: Mricacategory },
  { nama: 'Desa Wisata', gambar: Diengcategory },
];

const CategoryCard = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [moved, setMoved] = useState(false);

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

  return (
    <div
      ref={scrollRef}
      className="d-flex px-3"
      style={{
        gap:'clamp(1px, 2vw, 12px)',
        margin: '10px',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        msOverflowStyle: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        cursor: 'pointer',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {kategoriList.map(({ nama, gambar }, idx) => (
        <div
          key={idx}
          onClick={() => handleClick(nama)}
          style={{
            flex: '0 0 auto',
            width: 'clamp(100px, 8vw, 130px)',
            height: 'clamp(100px, 8vw, 130px)',
            position: 'relative',
            scrollSnapAlign: 'start',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <img
            src={gambar}
            alt={nama}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          />
          <div
            className="position-absolute top-50 start-50 translate-middle text-white fw-bold text-center"
            style={{
              padding: '5px 10px',
              borderRadius: '8px',
              fontSize: 'clamp(14px, 2vw, 20px)',
              width: '80%',
            }}
          >
            {nama}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;

```

# src/components/common/FormatWaktu.jsx

```jsx
export const formatWaktu = (createdAt) => {
  const now = new Date();
  const waktu = new Date(createdAt);
  const selisih = Math.floor((now - waktu) / 1000); // dalam detik

  if (selisih < 60) return `${selisih} detik yang lalu`;
  const menit = Math.floor(selisih / 60);
  if (menit < 60) return `${menit} menit yang lalu`;
  const jam = Math.floor(menit / 60);
  if (jam < 24) return `${jam} jam yang lalu`;
  const hari = Math.floor(jam / 24);
  if (hari < 7) return `${hari} hari yang lalu`;
  const minggu = Math.floor(hari / 7);
  if (minggu < 4) return `${minggu} minggu yang lalu`;
  const bulan = Math.floor(hari / 30);
  if (bulan < 12) return `${bulan} bulan yang lalu`;
  const tahun = Math.floor(hari / 365);
  return `${tahun} tahun yang lalu`;
};

```

# src/components/common/Loading.jsx

```jsx
import React from "react";

const Loading = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      background: "f3f3f3"
    }}>
      <div style={{
        width: "50px",
        height: "50px",
        border: "5px solid #f3f3f3",
        borderTop: "5px solid #015E78",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />
      <style>
        {`@keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }`}
      </style>
    </div>
  );
};

export default Loading;

```

# src/components/common/LoadingInternal.jsx

```jsx
const Loading = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: 40, // jarak dari header
    }}>
      <div style={{
        width: "50px",
        height: "50px",
        border: "5px solid #f3f3f3",
        borderTop: "5px solid #015E78",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;

```

# src/components/common/LogoutModal.jsx

```jsx
import React from 'react';

const LogoutModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1300 }}
      onClick={onClose}
    >
      <div
        className="card shadow p-4"
        style={{ maxWidth: '400px', width: '100%', zIndex: 9999 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h5 className="mb-3 text-center">Konfirmasi Logout</h5>
        <p className="text-center">Apakah Anda yakin ingin keluar?</p>
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-secondary w-50 me-2" onClick={onClose}>Batal</button>
          <button className="btn btn-danger w-50 ms-2" onClick={onConfirm}>Ya, Keluar</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;

```

# src/components/common/Notifikasi.jsx

```jsx
import React, { createContext, useContext, useState } from 'react';

const NotifikasiContext = createContext();

export const useNotifikasi = () => useContext(NotifikasiContext);

export const NotifikasiProvider = ({ children }) => {
  const [notifs, setNotifs] = useState([]);

  const showNotif = (message, type = 'success') => {
    const id = Date.now();
    setNotifs((prev) => [...prev, { id, message, type, visible: false }]);

    // Delay sedikit supaya animasi bisa dipicu
    setTimeout(() => {
      setNotifs((prev) =>
        prev.map((n) => (n.id === id ? { ...n, visible: true } : n))
      );
    }, 50);

    // Auto-hapus setelah 3 detik
    setTimeout(() => {
      setNotifs((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  return (
    <NotifikasiContext.Provider value={{ showNotif }}>
      {children}

      <div
        style={{
          position: 'fixed',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          zIndex: 9999,
        }}
      >
        {notifs.map((notif) => (
          <div
            key={notif.id}
            style={{
              background: '#fff',
              border: `1px solid ${notif.type === 'success' ? 'black' : 'black'}`,
              color: '#2c2c2cff',
              padding: '8px 12px',
              borderRadius: 5,
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
              fontWeight: 400,
              fontSize: 'clamp(18px, 17px, 16px)',
              maxWidth: '90vw',

              // Animasi
              transition: 'transform 0.4s ease, opacity 0.4s ease',
              transform: notif.visible ? 'translateY(0)' : 'translateY(-30px)',
              opacity: notif.visible ? 1 : 0,
            }}
          >
            <span style={{ fontSize: 'clamp(18px, 17px, 16px)', marginRight: 5 }}>
              {notif.type === 'success' ? '✔️' : '❌'}
            </span>
            {notif.message}
          </div>
        ))}
      </div>
    </NotifikasiContext.Provider>
  );
};

```

# src/components/layouts/adminLayouts/AdminLayout.jsx

```jsx
// AdminLayout.jsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {isLargeScreen && (
        <div
          style={{
            position: "fixed",
            height: "100vh",
            zIndex: 9999,
          }}
        >
          <AdminSidebar />
        </div>
      )}

      <div
        style={{
          flex: 1,
          minHeight: "100vh",
          paddingLeft: isLargeScreen ? "200px" : "0", // hanya untuk layar besar
          boxSizing: "border-box",
        }}
      >
        <AdminNavbar isShifted={isLargeScreen} />
        <div style={{ width: "100%", boxSizing: "border-box", padding: 20 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

```

# src/components/layouts/adminLayouts/AdminNavbar.jsx

```jsx
import React, { useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../pages/auth/AuthContext'; // sesuaikan path
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../../../assets/logo.png';
import LogoutModal from '../../common/LogoutModal';
import ProfilModal from '../userLayouts/ProfilNavbarModal';

const AdminNavbar = ({ isShifted }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const offcanvasRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext); // ⬅️ pakai AuthContext

   const handleLogout = () => {
  closeSidebar();
  setShowDropdown(false);
  setTimeout(() => {
    logout();
    navigate('/');
  }, 200);
};

  const closeSidebar = () => {
    const sidebar = offcanvasRef.current;
    const closeBtn = sidebar?.querySelector('[data-bs-dismiss="offcanvas"]');
    if (closeBtn) closeBtn.click();
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) backdrop.remove();
  };

  const handleNavigate = (path) => {
    closeSidebar();
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => navigate(path), 300);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const sidebar = offcanvasRef.current;
      const isSidebarOpen = sidebar?.classList.contains('show');
      if (isSidebarOpen && sidebar && !sidebar.contains(e.target)) {
        closeSidebar();
      }
      if (!e.target.closest('.admin-profile')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: "bi bi-house-door-fill" },
    { label: "Kelola Wisata", path: "/kelolawisata", icon: "bi-map-fill" },
     { label: "Kelola Event", path: "/daftarevent", icon: "bi-chat-left-text-fill" },
    { label: "Daftar Pengguna", path: "/daftaruser", icon: "bi-people-fill" },
    { label: "Daftar Ulasan", path: "/daftarulasan", icon: "bi bi-chat-left-heart-fill" },
    { label: "Daftar Komentar", path: "/daftarkomentar", icon: "bi-chat-left-text-fill" },
    { label: "Laporan Komentar", path: "/laporankomentar", icon: "bi bi-exclamation-octagon-fill" },
  ];

  const currentPath = window.location.pathname;

  return (
    <>
      <nav className="bg-white navbar navbar-light shadow-sm py-3 sticky-top" 
      style={{ 
        // height:70,
        borderBottom: '2px solid #ccc',
         zIndex: 999,
          marginLeft: isShifted ? "10px" : "0",
           transition: "margin-left 0.3s",
         }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <button className="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

  <div className="d-none d-lg-block text-muted ms-3 mt-3">
      <p>
        Portal Admin / {menuItems.find((item) => item.path === currentPath)?.label || currentPath}
      </p>
    </div>

          <button className="navbar-brand btn d-lg-none position-absolute top-50 start-50 translate-middle d-flex align-items-center" onClick={() => handleNavigate('/dashboard')}>
            <img src={logo} alt="Logo" width="30" height="30" className="me-2" />
            Portal Admin
          </button>

<div className="d-none d-lg-block" 
style={{ position: 'relative',
 zIndex: 1050, 
 right:25 }}>
  <ProfilModal
    inline
    onClose={() => setShowProfilModal(false)}
  />
</div>

          <LogoutModal
        show={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
        </div>
      </nav>

      <div
        ref={offcanvasRef}
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
        style={{ width: '60%' }}
      >
        <div className="offcanvas-header flex-column align-items-start" style={{ paddingBottom: '0', background: '#015E78' }}>
          <p className="ms-1 mb-3 fw-semibold" style={{ marginTop: 2, fontSize: '18px', color: '#fff' }}>Portal Admin</p>
          <div
            className="rounded-circle bg-secondary d-flex justify-content-center align-items-center"
            style={{ width: '50px', height: '50px', color: '#fff', marginBottom: '8px' }}
          >
            <i className="bi bi-person-fill fs-4"></i>
          </div>
          <p className="ms-2 mb-1 fw-bold" style={{ fontSize: '12px', color: '#fff' }}>{user?.username}</p>
          <p className="mb-2 fw-semibold" style={{ fontSize: '0.7rem', color: '#fff' }}>Anda login sebagai {user?.role}</p>
          <button type="button" className="btn-close btn-close-white position-absolute end-0 top-0 m-3" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>

        <div className="offcanvas-body" style={{ paddingTop: '0' }}>
          <ul className="navbar-nav">
            {menuItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <li className="nav-item" key={item.path}>
                  <button
                    className="d-flex align-items-center w-100 border-0 bg-transparent"
                    onClick={() => handleNavigate(item.path)}
                    style={{
                  
                  borderRadius: '4px',
                  padding: '8px',
                  marginBottom: '5px',
                  transition: 'background-color 0.2s, color 0.2s',
                  backgroundColor: isActive ? '#015E78' : 'transparent',
                  color: isActive ? '#015E78' : '#000',
                  fontWeight: isActive ? 'bold' : 'normal',
                  textDecoration: 'none',
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#015E78';
                    e.currentTarget.style.color = '#666';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#000';
                  }
                }}
              >
                <i className={`bi ${item.icon} me-2`}></i>
                    {item.label}
                  </button>
                </li>
              );
            })}
            
            
            <li className="nav-item mt-3 d-lg-none">
           <button
  className="btn btn-outline-danger w-100"
  onClick={() => {
    closeSidebar();
    setShowLogoutModal(true);
  }}
>
  <i className="bi bi-box-arrow-right" style={{marginRight: 5, fontSize:20}}></i>
  Logout
</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;

```

# src/components/layouts/adminLayouts/AdminSidebar.jsx

```jsx
import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../pages/auth/AuthContext";
import LogoutModal from '../../common/LogoutModal';
import logo from '../../../assets/logoputih.png';
import { useNotifikasi } from '../../common/Notifikasi';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const { logout, user } = useContext(AuthContext);
 const { showNotif } = useNotifikasi();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: "bi bi-house-door-fill" },
    { label: "Kelola Wisata", path: "/kelolawisata", icon: "bi-map-fill" },
     { label: "Daftar Pengumuman", path: "/daftarevent", icon: "bi-chat-left-text-fill" },
    { label: "Daftar Pengguna", path: "/daftaruser", icon: "bi-people-fill" },
    { label: "Daftar Ulasan", path: "/daftarulasan", icon: "bi bi-chat-left-heart-fill" },
    { label: "Daftar Komentar", path: "/daftarkomentar", icon: "bi-chat-left-text-fill" },
    { label: "Laporan Komentar", path: "/laporankomentar", icon: "bi bi-exclamation-octagon-fill" },
  ];

  const handleLogout = () => {
  setShowLogoutModal(false); 
  showNotif('Berhasil keluar dari akun', 'success', 1500);
  setTimeout(() => {
    logout();
    if (window.location.pathname !== '/') {
      navigate('/');  
    }
  }, 800);
};


  return (
    <div
      className="text-black d-none d-lg-block"
      style={{
        backgroundColor:'#015E78',
        width: "210px",
        height: "100vh",
        position: "fixed",
        left: 0,
        overflowY: "auto",
        zIndex: 1,
        boxShadow: "1px 0 5px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{
        marginTop:14
      }}>
      <button className="brand btn d-none d-lg-flex align-items-center"
       style={{
        fontSize:20,
        
        marginBottom:15,
        fontWeight:600,
        color:'#fff'
      }}
       onClick={() => handleNavigate('/dashboard')}
       >
                  <img src={logo} alt="Logo" width="45" height="45" className="me-2" />
                  Portal Admin
                </button>
</div>

      <h5 style={{marginLeft:8,
         paddingTop: 10, 
         borderTop:'1px solid #ccc',
         color:'#fff'
         }}>Menu</h5>
      
      <ul className="nav flex-column">
        {menuItems.map((item) => {
          const isActive = currentPath === item.path;

          return (
            <li className="nav-item" key={item.path}>
              <button
                className="d-flex align-items-center w-100 border-0 bg-transparent"
                onClick={() => navigate(item.path)}
                style={{
                  borderRadius: '4px',
                  padding: '8px',
                  marginBottom: '5px',
                  transition: 'background-color 0.2s, color 0.2s',
                  backgroundColor: isActive ? '#015E78' : 'transparent',
                  color: isActive ? '#00b2f8ff' : '#fff',
                  fontWeight: isActive ? 'bold' : 'normal',
                  textDecoration: 'none',
                  fontSize: '17px',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#015E78';
                    e.currentTarget.style.color = '#666';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#fff';
                  }
                }}
              >
                <i className={`bi ${item.icon} me-2`}></i>
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    {/* Tombol Logout */}
      <div className="px-4">
        <button
          className="btn btn-danger w-100"
          onClick={() => setShowLogoutModal(true)}>
          <i className="bi bi-box-arrow-right" 
          style=
          {{marginRight: 5,
           fontSize:20}}>
           </i>
          Logout
        </button>
      </div>

      {/* Modal Logout */}
      <LogoutModal
        show={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default AdminSidebar;

```

# src/components/layouts/userLayouts/Footer.jsx

```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/logoputih.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate(path), 300);
  };

  return (
    <footer className="bg-dark text-light pt-2 pb-3 border-top" style={{ fontSize: '15px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center justify-content-md-start gap-2">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            style={{ objectFit: 'contain' }}
          />
          <div className="text-center text-md-start">
            <h5 className="mb-1">WisataBanjarnegara</h5>
            <p className="mb-0 small">
              Dapatkan pengalaman yang tak terlupakan dengan berbagai pilihan tempat wisata di Banjarnegara
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

# src/components/layouts/userLayouts/ProfilNavbarModal.jsx

```jsx
import React, { useContext, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../pages/auth/AuthContext';
import profilePlaceholder from '../../../assets/profil.png';
import LogoutModal from '../../common/LogoutModal';
import { useNotifikasi } from '../../common/Notifikasi';

const ProfilModal = () => {
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { showNotif } = useNotifikasi();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

 const handleLogout = () => {
  setShowLogoutModal(false); 
  showNotif('Berhasil keluar dari akun', 'success');
  setTimeout(() => {
    logout();
    if (window.location.pathname !== '/') {
      navigate('/');  
    }
  }, 800);
};


   const sensorEmail = (email) => {
  const [username, domain] = email.split('@');
  if (!username || !domain) return email;

  const firstChar = username[0];
  const lastChar = username[username.length - 1];

  return `${firstChar}******@${domain}`;
};

  if (!user) return null;

  return (
    <>
      <div
        className="position-relative d-flex align-items-center"
        ref={dropdownRef}
        style={{ cursor: 'pointer' }}
        onClick={(e) => {
          e.stopPropagation();
          setShowDropdown(!showDropdown);
        }}
      >
        <img
          src={user.photoURL?.trim() ? user.photoURL : profilePlaceholder}
          alt="Profile"
          className="rounded-circle me-2"
          width="50"
          height="50"
        />
        {/* <div className="d-flex flex-column">
          <span style={{ fontWeight: '700', color: '#015E78' }}>{user.username}</span>
          <small className="text-muted">{sensorEmail(user.email)}</small>
        </div> */}

        {showDropdown && (
          <ul
            className="dropdown-menu show"
            style={{ position: 'absolute', top: '50px', right: 0, minWidth: '160px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setShowDropdown(false);
                  navigate('/profiluser');
                }}
              >
                Profil
              </button>
            </li>
            <li>
              <button
                className="dropdown-item text-danger"
               onClick={() => setShowLogoutModal(true)}>Logout</button>
                <LogoutModal
                  show={showLogoutModal}
                   onClose={() => setShowLogoutModal(false)}
                    onConfirm={handleLogout}
                  />
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ProfilModal;

```

# src/components/layouts/userLayouts/UserNavbar.jsx

```jsx
import React, { useEffect, useState, useRef, useContext } from 'react';
import { AuthContext } from '../../../pages/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import Register from '../../../pages/auth/Register';
import Login from '../../../pages/auth/Login';
import ProfilModal from './ProfilNavbarModal';
import UserSidebar from './UserSidebar';
import { useNotifikasi } from '../../common/Notifikasi';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const UserNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { showNotif } = useNotifikasi();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfilModal, setShowProfilModal] = useState(false);
  
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideSidebar = (e) => {
      const sidebar = sidebarRef.current;
      const isSidebarOpen = sidebar?.classList.contains('show');
      if (isSidebarOpen && sidebar && !sidebar.contains(e.target)) {
        const closeBtn = sidebar.querySelector('[data-bs-dismiss="offcanvas"]');
        if (closeBtn) closeBtn.click();
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) backdrop.remove();
      }
    };
    document.addEventListener('click', handleClickOutsideSidebar);
    return () => document.removeEventListener('click', handleClickOutsideSidebar);
  }, []);

  useEffect(() => {
    if (user) {
      setShowProfilModal(true); 
    }
  }, [user]);

  const handleNavigate = (path) => {
    const sidebar = sidebarRef.current;
    const closeBtn = sidebar?.querySelector('[data-bs-dismiss="offcanvas"]');
    if (closeBtn) closeBtn.click();
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) backdrop.remove();
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => navigate(path), 300);
    }
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };
  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm py-3 sticky-top" style={{ borderBottom: '1px solid #ccc' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center" style={{ maxWidth: '1150px' }}>
          <button className="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <button className="navbar-brand btn d-lg-none position-absolute top-50 start-50 translate-middle d-flex align-items-center" 
          onClick={() => handleNavigate('/')}>
            WisataBanjarnegara
          </button>

          <button className="navbar-brand btn d-none d-lg-flex align-items-center p-0"
           onClick={() => handleNavigate('/')}>
            <img src={logo} alt="Logo" width="50" height="50" className="me-2" />
            <b>WisataBanjarnegara</b>
          </button>

          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav flex-row me-4" style={{ fontWeight: 500, fontSize: 17 }}>
  {[
    { label: 'Beranda', path: '/' },
    { label: 'Cari Wisata', path: '/daftarwisata' },
  ].map(({ label, path }) => {
    const isActive = window.location.pathname === path;

    return (
      <li className="nav-item me-2" key={path}>
        <button
          className="nav-link btn"
          onClick={() => handleNavigate(path)}
          style={{
          fontWeight: isActive ? 'bold' : 'normal',
          borderRadius: 0,
          }}

        >
          {label}
        </button>
      </li>
    );
  })}
</ul>

 {user && showProfilModal && (
    <div style={{ position: 'relative', zIndex: 1050 }}>
      <ProfilModal
        inline
        onClose={() => setShowProfilModal(false)}
      />
    </div>
  )}
           
            {!user && (
              <>
                <button className="btn btn-outline-secondary me-2" onClick={() => setShowLogin(true)} style={{ color: '#015E78' }}>Masuk</button>
                <button className="btn" onClick={() => setShowRegister(true)} style={{ backgroundColor: '#015E78', color: 'white' }}>Daftar</button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <UserSidebar
        ref={sidebarRef}
        onNavigate={handleNavigate}
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
        onLogout={() => setShowLogoutModal(true)}
      />


      {/* MODAL AUTH */}
      {showRegister && <Register show={showRegister} onClose={() => setShowRegister(false)} toLogin={switchToLogin} />}
      {showLogin && <Login show={showLogin} onClose={() => setShowLogin(false)} toRegister={switchToRegister} />}

    </>
  );
};

export default UserNavbar;

```

# src/components/layouts/userLayouts/UserSidebar.jsx

```jsx
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../pages/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import profilePlaceholder from '../../../assets/profil.png';
import logo from '../../../assets/logoputih.png';
import Login from '../../../pages/auth/Login';
import Register from '../../../pages/auth/Register';
import LogoutModal from '../../common/LogoutModal';
import {useNotifikasi} from '../../common/Notifikasi';

const UserSidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
   const { showNotif } = useNotifikasi();

  useEffect(() => {
    const handleClickOutsideSidebar = (e) => {
      const sidebar = document.getElementById('sidebarMenu');
      if (sidebar?.classList.contains('show') && !sidebar.contains(e.target)) {
        const closeBtn = sidebar.querySelector('[data-bs-dismiss="offcanvas"]');
        if (closeBtn) closeBtn.click();
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) backdrop.remove();
      }
    };
    document.addEventListener('click', handleClickOutsideSidebar);
    return () => document.removeEventListener('click', handleClickOutsideSidebar);
  }, []);

  const closeSidebar = () => {
    const sidebar = document.getElementById('sidebarMenu');
    const closeBtn = sidebar?.querySelector('[data-bs-dismiss="offcanvas"]');
    if (closeBtn) closeBtn.click();
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) backdrop.remove();
  };

  const handleNavigate = (path) => {
    closeSidebar();
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => navigate(path), 300);
    }
  };

  const handleLogout = async () => {
  const success = await logout();

  setShowLogoutModal(false);
  closeSidebar();

  if (success) {
    showNotif('Berhasil keluar dari akun', 'success');
    setTimeout(() => {
      navigate('/');
    }, 1200);
  } else {
    showNotif('Logout gagal, coba lagi', 'error');
  }
};



  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
    setShowLupaSandi(false);
  };

  return (
    <>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel" style={{ width: '70%', zIndex: '1260' }}>
        <div className="offcanvas-header d-flex flex-column align-items-start" style={{ background: '#015E78' }}>
          <div className="d-flex justify-content-between w-100 align-items-center">
            <img src={logo} alt="Logo" width="30" height="30" className="me-2" />
            <h6 className="offcanvas-title text-white" id="sidebarMenuLabel">WisataBanjarnegara</h6>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          {user && (
            <div className="mt-3 d-flex flex-column align-items-start w-100" style={{ cursor: 'pointer',marginLeft:5 }} onClick={() => handleNavigate('/profiluser')}>
              <img src={user.photoURL?.trim() ? user.photoURL : profilePlaceholder} alt="Profile" className="rounded-circle me-2" width="50" height="50" />
              <div className="d-flex flex-column" style={{marginLeft:12}}>
                <span className="text-white fw-bold">{user.username}</span>
              </div>
            </div>
          )}
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">
           <li className="nav-item">
  <button className="nav-link btn text-start" onClick={() => handleNavigate('/')}>
    <i className="bi bi-house-door-fill me-2"></i>Home
  </button>
</li>
<li className="nav-item">
  <button className="nav-link btn text-start" onClick={() => handleNavigate('/daftarwisata')}>
    <i className="bi bi-map-fill me-2"></i>Daftar Wisata
  </button>
</li>
            {!user ? (
              <>
                <li className="nav-item mt-3">
                  <button onClick={() => setShowRegister(true)} className="btn btn-outline-secondary w-100 mb-2" data-bs-dismiss="offcanvas">Daftar</button>
                </li>
                <li className="nav-item">
                  <button onClick={() => setShowLogin(true)} className="btn w-100" style={{ backgroundColor: '#015E78', color: 'white' }} data-bs-dismiss="offcanvas">Masuk</button>
                </li>
              </>
            ) : (
              <li className="nav-item mt-3">
                <button
                  className="btn btn-outline-danger w-100"
                  onClick={() => {
                    closeSidebar();
                    setTimeout(() => 
                    setShowLogoutModal(true), 300);
                  }}
                >
                  <i className="bi bi-box-arrow-right" style={{marginRight: 5, fontSize:20}}></i>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* MODAL AUTH */}
      {showLogin && <Login show={showLogin} onClose={() => setShowLogin(false)} toRegister={switchToRegister} />}
      {showRegister && <Register show={showRegister} onClose={() => setShowRegister(false)} toLogin={switchToLogin} />}

      {/* MODAL LOGOUT */}
      <LogoutModal
        show={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default UserSidebar;

```

# src/components/SistemRekomendasi/SistemRekomendasi.jsx

```jsx
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CardWisata from '../common/cardComponents/CardWisata';
import { AuthContext } from '../../pages/auth/AuthContext';

const SistemRekomendasi = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [wisata, setWisata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return; // tunggu AuthContext load

    const fetchRekomendasi = async () => {
      try {
        let url = '';
        const headers = user ? { Authorization: `Bearer ${localStorage.getItem('token')}` } : {};

        const hasInteraction =
          (Array.isArray(user?.rating) && user.rating.length > 0) ||
          (Array.isArray(user?.likes) && user.likes.length > 0) ||
          (Array.isArray(user?.favorit) && user.favorit.length > 0);

        if (user && user.id) {
          url = hasInteraction
            ? `http://localhost:3000/api/rekomendasi/cf/${user.id}`
            : `http://localhost:3000/api/rekomendasi/cbf/${user.id}`;
        } else {
          url = 'http://localhost:3000/api/rekomendasi/hybrid/0';
        }

        const res = await axios.get(url, { headers });
        setWisata(Array.isArray(res.data) ? res.data.slice(0, 4) : []);
      } catch (err) {
        console.error('Gagal fetch rekomendasi:', err);
        setWisata([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRekomendasi();
  }, [user, authLoading]);

  // Jangan render apapun sampai data siap
  if (loading || authLoading || !wisata.length) return null;

  return (
    <div className="row d-flex flex-wrap justify-content-start">
      <h5 className="mb-3 text-left" style={{ marginTop: '20px' }}>
        <b style={{ fontSize: 'clamp(16px, 2.5vw, 20px)' }}>Direkomendasikan Untuk Kamu</b>
      </h5>
      {wisata.map((item) => (
        <CardWisata key={item.id} item={item} showOptionsMenu={false} />
      ))}
    </div>
  );
};

export default SistemRekomendasi;

```

# src/components/SistemRekomendasi/WisataLainnya.jsx

```jsx
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

```

# src/components/SistemRekomendasi/WisataLainnyaSidebar.jsx

```jsx
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
       const url = `http://localhost:3000/api/rekomendasi/cbf/wisata/${wisataId}`;
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

```

# src/components/temp.jsx

```jsx
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
```

# src/components/userComponents/detailwisataComponents/fiturComponents/ButtonNavigasiLokasi.jsx

```jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ButtonNavigasiLokasi = () => {
  const { id } = useParams(); // ambil ID wisata dari URL
  const [linkGmaps, setLinkGmaps] = useState('');
  const [buttonRight, setButtonRight] = useState('20px');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/wisata/${id}`);
        setLinkGmaps(res.data.link_gmaps);
      } catch (err) {
        console.error('Gagal fetch data wisata:', err);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const updateButtonPosition = () => {
      const screenWidth = window.innerWidth;
      const contentWidth = 1200;
      const marginSide = (screenWidth - contentWidth) / 2;
  
      // Jika layar lebih kecil dari konten, jangan terlalu ke kiri
     setButtonRight(screenWidth <= contentWidth ? '16px' : `${marginSide + 20}px`);
    };

  
    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    return () => window.removeEventListener('resize', updateButtonPosition);
  }, []);
  
  if (!linkGmaps) return null;

  return (
    <a
      href={linkGmaps}
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: buttonRight,
        backgroundColor: '#015E78',
        color: '#fff',
        fontSize: '15px',
        padding: '6px 10px',
        border: 'none',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1099,
      }}
    >
      <i className="bi bi-geo-alt-fill" style={{ marginRight: '8px' }}></i>
      Navigasi ke Google Maps
    </a>
  );
};

export default ButtonNavigasiLokasi;

```

# src/components/userComponents/detailwisataComponents/fiturComponents/LikeSaveBagikan.jsx

```jsx
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import { useNotifikasi } from '../../../common/Notifikasi';

const LikeSaveBagikan = ({ setTotalLike, setTotalFavorit }) => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const { showNotif } = useNotifikasi();
  const [totalLike, setLocalTotalLike] = useState(0);
  const [totalFavorit, setLocalTotalFavorit] = useState(0);
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const handleLike = async () => {
    if (!token) {
      return showNotif('Login terlebih dahulu untuk menyukai', 'error');
    }

    const endpoint = liked
      ? 'http://localhost:3000/api/user/unlike'
      : 'http://localhost:3000/api/user/like';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id_wisata: id }),
      });
      const data = await res.json();

      setLiked(!liked);
      // update jumlah like di komponen induk (jika diberikan)
      if (setTotalLike) {
        setTotalLike((prev) => (liked ? prev - 1 : prev + 1));
      }
      // update tampilan lokal juga
      setLocalTotalLike((prev) => (liked ? prev - 1 : prev + 1));
    } catch (err) {
      console.error(err);
    }
  };

  const handleFavorit = async () => {
    if (!token) {
      return showNotif('Login terlebih dahulu untuk simpan', 'error');
    }

    const endpoint = favorited
      ? 'http://localhost:3000/api/user/unfavorit'
      : 'http://localhost:3000/api/user/favorit';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id_wisata: id }),
      });
      const data = await res.json();
    setFavorited(!favorited);

    // update jumlah favorit langsung tanpa reload
    if (setTotalFavorit) {
      setTotalFavorit((prev) => (favorited ? prev - 1 : prev + 1));
    }
    setLocalTotalFavorit((prev) => (favorited ? prev - 1 : prev + 1));
    } catch (err) {
      console.error(err);
    }
  };

  const handleShare = () => {
    const url = window.location.href;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        showNotif('Wisata berhasil disalin ke clipboard, bagikan ke teman anda!');
      })
      .catch(() => {
        showNotif('Gagal menyalin URL', 'error');
      });
  };

  useEffect(() => {
    const fetchStatus = async () => {
      if (!token) return;
      try {
        const res = await fetch(`http://localhost:3000/api/user/status/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setLiked(data.liked);
        setFavorited(data.favorited);
      } catch (err) {
        console.error('Gagal fetch status:', err);
      }
    };

    const fetchTotalLike = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/total-like/${id}`);
        const data = await res.json();
        if (setTotalLike) setTotalLike(data.totalLikes);
        setLocalTotalLike(data.totalLikes);
      } catch (err) {
        console.error('Gagal ambil total like:', err);
      }
    };

        const fetchTotalFavorit = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/total-favorit/${id}`);
        const data = await res.json();
        if (setTotalFavorit) setTotalFavorit(data.totalFavorit);
        setLocalTotalFavorit(data.totalFavorit);
      } catch (err) {
        console.error('Gagal ambil total like:', err);
      }
    };

    fetchStatus();
    fetchTotalLike();
    fetchTotalFavorit();
  }, [id, token, setTotalLike, setTotalFavorit]);

  const formatLikeFavoritCount = (number) => {
    if (number >= 1000000) return (number / 1000000).toFixed(1).replace('.0', '') + ' jt';
    if (number >= 1000) return (number / 1000).toFixed(1).replace('.0', '') + ' k';
    return number;
  };

  
  return (
   <div style={{ display: 'flex', gap: '12px', flexShrink: 0, paddingLeft: '8px' }}>
  {/* LIKE */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
    <div
      style={{ cursor: 'pointer' }}
      onClick={handleLike}
      className="group cursor-pointer flex flex-col items-center justify-center"
    >
      <Icon
        icon={liked ? 'icon-park-solid:like' : 'icon-park-outline:like'}
        width={25}
        className="transition-all group-active:scale-125"
      />
    </div>
     {totalLike > 0 && (
        <p style={{ marginBottom: 0, fontSize: 16, fontWeight: 600 }}>
          {formatLikeFavoritCount(totalLike)}
        </p>
      )}
  </div>

  {/* FAVORIT */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
    <div
      style={{ cursor: 'pointer' }}
      onClick={handleFavorit}
      className="group cursor-pointer flex flex-col items-center justify-center"
    >
      <Icon
        icon={favorited ? 'majesticons:bookmark' : 'majesticons:bookmark-line'}
        width={25}
        className="transition-all group-active:scale-125"
      />
    </div>
    {totalFavorit > 0 && (
        <p style={{ marginBottom: 0, fontSize: 16, fontWeight: 600 }}>
          {formatLikeFavoritCount(totalFavorit)}
        </p>
      )}
  </div>

  {/* SHARE */}
  <div
    style={{ cursor: 'pointer' }}
    onClick={handleShare}
    className="group flex w-fit cursor-pointer flex-col items-center justify-center font-medium"
  >
    <Icon icon="tabler:share" width={25} className="transition-all group-active:scale-125" />
  </div>
</div>

  );
};

export default LikeSaveBagikan;

```

# src/components/userComponents/detailwisataComponents/InformasiWisata/DeskripsiWisata.jsx

```jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from 'axios';

function DeskripsiWisata() {
  const { id } = useParams();
  const [deskripsi, setDeskripsi] = useState('');
  const [lihatLengkap, setLihatLengkap] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeskripsi = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/wisata/${id}`);
        setDeskripsi(res.data.deskripsi || 'Deskripsi tidak tersedia');
      } catch (err) {
        console.error('Gagal memuat deskripsi', err);
        setDeskripsi('Gagal memuat deskripsi');
      } finally {
        setLoading(false);
      }
    };

    fetchDeskripsi();
  }, [id]);

  if (loading) return <p>Memuat deskripsi...</p>;

  return (
    <div style={{ marginTop: '3px', padding: 5 }}>
      <p
        style={{
          fontSize:'clamp(14px, 2.5vw, 17px)',
          color: '#374151',
          whiteSpace: 'pre-line',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: lihatLengkap ? 'none' : 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {deskripsi}
      </p>

      <div
        style={{
          borderBottom: '1px solid #ccc',
          borderTop: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={() => setLihatLengkap(prev => !prev)}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            color: '#dc2626',
            fontSize: 'clamp(13px, 2.5vw, 16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            zIndex: 998,
          }}
        >
          {lihatLengkap ? 'Sembunyikan' : 'Lihat Selengkapnya'}
          <Icon
            icon={lihatLengkap ? 'mdi:chevron-up' : 'mdi:chevron-down'}
            width={20}
            height={20}
            style={{ color: '#dc2626' }}
          />
        </button>
      </div>
    </div>
  );
}

export default DeskripsiWisata;

```

# src/components/userComponents/detailwisataComponents/InformasiWisata/EventWisata.jsx

```jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventWisata = () => {
  const { id } = useParams();
  const [wisata, setWisata] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/wisata/${id}`);
        setWisata(res.data);
      } catch (err) {
        console.error('Gagal mengambil data wisata:', err);
      }
    };

    fetchData();
  }, [id]);

  // Jika event kosong → jangan tampilkan apa-apa
  if (!wisata.event || wisata.event.trim() === "") {
    return null;
  }

  // Seluruh blok hanya tampil jika ada event
  return (
    <div
      className="container px-2"
      style={{
        paddingTop: '10px',
        borderBottom: '1px solid #ccc',
      }}
    >
      <div className="row text-center g-1">
        <div className="container px-2 pb-2">
          <div className="d-flex align-items-center">
            <i
              className="bi bi-info-circle-fill me-2"
              style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
            ></i>
            <div className="d-flex flex-wrap">
              <span
                className="fw-semibold"
                style={{
                  fontSize: 'clamp(14px, 2vw, 17px)',
                  color: '#fd0000ff',
                }}
              >
                {wisata.event}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventWisata;

```

# src/components/userComponents/detailwisataComponents/InformasiWisata/GalleryWisata.jsx

```jsx
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
                src={`http://localhost:3000/uploads/${img}`}
                alt="galeri"
                style={{
                  width: "clamp(100px,2.5vw,130px)",
                  height: "clamp(100px,2.5vw,130px)",
                  objectFit: "cover",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
                onClick={() =>
                  openPreview(`http://localhost:3000/uploads/${img}`)
                }
              />
            ))}

          {/* Gambar ulasan */}
          {ulasan.map((u) =>
            JSON.parse(u.images || "[]").map((f, i) => (
              <img
                key={`${u.id}-${i}`}
                src={`http://localhost:3000/uploads/ulasan/${f}`}
                alt="ulasan"
                style={{
                  width: "clamp(100px,5vw,180px)",
                  height: "clamp(100px,5vw,180px)",
                  objectFit: "cover",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
                onClick={() =>
                  openPreview(`http://localhost:3000/uploads/ulasan/${f}`)
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

```

# src/components/userComponents/detailwisataComponents/InformasiWisata/GambarWisata.jsx

```jsx
// D:\website-wisata-banjarnegara\frontend\src\components\common\detailwisataComponents\GambarWisata.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GambarWisata = () => {
  const { id } = useParams();
  const [gambar, setGambar] = useState('');
  const [judul, setJudul] = useState('');

  useEffect(() => {
    const fetchGambar = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/wisata/${id}`);
        const data = await res.json();
        setGambar(data.gambar);
        setJudul(data.judul);
      } catch (error) {
        console.error('Gagal mengambil gambar wisata:', error);
      }
    };

    fetchGambar();
  }, [id]);

  if (!gambar) return null;

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '800px',
        margin: '20px auto',
      }}
    >
      <img
        src={`http://localhost:3000/uploads/${gambar}`}
        alt={judul}
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '400px',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          borderRadius: '15px',
        }}
      />
    
    </div>
  );
};

export default GambarWisata;

```

# src/components/userComponents/detailwisataComponents/InformasiWisata/JamTiketNoTelepon.jsx

```jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const KeteranganWisata = () => {
  const { id } = useParams();
  const [wisata, setWisata] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/wisata/${id}`);
        setWisata(res.data);
      } catch (err) {
        console.error('Gagal mengambil data wisata:', err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div
      className="container px-2"
      style={{
        paddingTop: '10px',
        paddingBottom: '10px',
        borderBottom: '1px solid #ccc',
      }}
    >
      <div className="row text-center g-1">
        {/* Jam */}
        <div className="col-4">
          <i
            className="bi bi-clock text-success d-block"
            style={{ fontSize: 'clamp(13px, 2.5vw, 20px)' }}
          ></i>
          <div className="text-muted" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
            Buka
          </div>
          <div className="fw-semibold" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
            {wisata.jam_buka || 'N/A'} - {wisata.jam_tutup || 'N/A'}
          </div>
        </div>

        {/* Tiket */}
        <div className="col-4">
          <i
            className="bi bi-cash-coin text-info d-block"
            style={{ fontSize: 'clamp(13px, 2.5vw, 20px)' }}
          ></i>
          <div className="text-muted" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
            Tiket
          </div>
          <div className="fw-semibold" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
            Rp. {wisata.harga_tiket || 'N/A'}
          </div>
        </div>

         {/* Telepon */}
        <div
          className="col-4"
          style={{ cursor: 'pointer' }}
          onClick={() => window.open(`https://wa.me/${wisata.no_telepon}`, '_blank')}
        >
          <i
            className="bi bi-whatsapp d-block"
            style={{ fontSize: 'clamp(13px, 2.5vw, 20px)', color: '#25D366' }}
          ></i>
          <div className="text-muted" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
            Reservasi
          </div>
          <div className="fw-semibold" style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}>
            {wisata.no_telepon || 'N/A'}
          </div>
        </div>

      </div>
    </div>
  );
};

export default KeteranganWisata;

```

# src/components/userComponents/detailwisataComponents/InformasiWisata/JudulWisata.jsx

```jsx
// D:\website-wisata-banjarnegara\frontend\src\components\common\detailwisataComponents\JudulWisata.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JudulWisata = () => {
  const { id } = useParams();
  const [judul, setJudul] = useState('');

  useEffect(() => {
    const fetchJudul = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/wisata/${id}`);
        const data = await res.json();
        setJudul(data.judul);
      } catch (error) {
        console.error('Gagal mengambil judul wisata:', error);
      }
    };

    fetchJudul();
  }, [id]);

  if (!judul) return null;

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <b
        style={{
          wordBreak: 'break-word',
          display: 'block',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.3rem)', // min 16px, ideal 2.5% layar, max 32px
          lineHeight: 1.3,
          marginRight: 10,
        }}
      >
        {judul}
      </b>
    </div>
  );
};

export default JudulWisata;

```

# src/components/userComponents/detailwisataComponents/InformasiWisata/KategoriFasilitasAlamat.jsx

```jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const KolomDetailWisata = () => {
  const { id } = useParams();
  const [wisata, setWisata] = useState(null);

  useEffect(() => {
    const fetchDetailWisata = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/wisata/${id}`);
        setWisata(res.data);
      } catch (error) {
        console.error('Gagal memuat detail wisata:', error);
      }
    };

    fetchDetailWisata();
  }, [id]);

  if (!wisata) {
    return <div className="text-center py-4">Memuat detail wisata...</div>;
  }

  return (
    <>
      {/* KATEGORI */}
      <div
        className="container px-2 mt-3 pb-2"
        style={{ borderBottom: '1px solid #ccc' }}
      >
        <div className="d-flex align-items-center">
          <i
            className="bi bi-tags text-success me-2"
            style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
          ></i>
          <div className="d-flex flex-wrap">
            <span
              className="fw-semibold me-1"
              style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
            >
              Kategori :
            </span>
            <span
              className="fw-semibold"
              style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: '#333' }}
            >
              {wisata.kategori
                ? JSON.parse(wisata.kategori).join(', ')
                : '-'}
            </span>
          </div>
        </div>
      </div>

      {/* FASILITAS */}
      <div
        className="container px-2 mt-3 pb-2"
        style={{ borderBottom: '1px solid #ccc' }}
      >
        <div className="d-flex align-items-center">
          <i
            className="bi bi-building-check text-primary me-2"
            style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
          ></i>
          <div className="d-flex flex-wrap">
            <span
              className="fw-semibold me-1"
              style={{ fontSize: 'clamp(14px, 2vw, 17px)' }}
            >
              Fasilitas :
            </span>
            <span
              className="fw-semibold"
              style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: '#333' }}
            >
              {wisata.fasilitas
                ? JSON.parse(wisata.fasilitas).join(', ')
                : 'Parkir, Toilet'}
            </span>
          </div>
        </div>
      </div>

      {/* ALAMAT */}
      <div
        className="container px-2 mt-3 pb-2"
        style={{ borderBottom: '1px solid #ccc', cursor: 'pointer' }}
        onClick={() => window.open(wisata.link_gmaps, '_blank')}
      >
        <div className="d-flex align-items-center">
          <i
            className="bi bi-geo-alt text-danger me-2"
            style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
          ></i>
          <div className="d-flex flex-wrap">
            <span
              className="fw-semibold"
              style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: '#333' }}
            >
              {wisata.alamat || 'Alamat belum tersedia'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default KolomDetailWisata;

```

# src/components/userComponents/detailwisataComponents/InformasiWisata/UlasanTotal.jsx

```jsx
// src/components/common/UlasanTotal.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UlasanTotal() {
  const { id } = useParams();
  const [ulasan, setUlasan] = useState([]);

  useEffect(() => {
    const fetchUlasan = async () => {
      try {
        const response = await axios.get(`/api/rating/${id}`);
        setUlasan(response.data);
      } catch (error) {
        console.error('Gagal memuat ulasan:', error);
      }
    };

    fetchUlasan();
  }, [id]);

  const rataRata = ulasan.length > 0
    ? (ulasan.reduce((sum, u) => sum + u.rating, 0) / ulasan.length).toFixed(1)
    : null;

  return (
    <div style={{ fontSize: 'clamp(17px, 2.5vw, 20px)', display: 'flex', alignItems: 'center' }}>
      {ulasan.length > 0 ? (
        <>
          <span style={{marginTop:'3px', fontSize: 'clamp(13px, 2.5vw, 16px)', color: '#333', marginRight: 4 }}>{rataRata}</span>
          {[1, 2, 3, 4, 5].map(i => (
            <span
              key={i}
              style={{
                color: rataRata >= i ? 'orange' : '#ccc',
              }}
            >
              ★
            </span>
          ))}
          <span style={{ fontSize: 'clamp(13px, 2.5vw, 16px)', color: '#333', marginLeft: 5, marginTop:2}}>
                    ({ulasan.length} ulasan)
                  </span>
        </>
      ) : (
        <span style={{ fontSize: 'clamp(13px, 2.5vw, 16px)', color: '#999' }}>Belum ada ulasan</span>
      )}
    </div>
  );
}

export default UlasanTotal;

```

# src/components/userComponents/detailwisataComponents/KomentarComponents/HapusKomentarModal.jsx

```jsx
import React from 'react';

const HapusKomentarModal = ({ onClose, onConfirm }) => {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1300 }}
      onClick={onClose}
    >
      <div
        className="card shadow p-4"
        style={{ maxWidth: '400px', width: '90%', zIndex: 1300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h5 className="mb-3 text-center">Konfirmasi</h5>
        <p className="text-center">Yakin ingin menghapus komentar ini?</p>
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-secondary w-50 me-2" onClick={onClose}>
            Batal
          </button>
          <button className="btn btn-danger w-50 ms-2" onClick={onConfirm}>
            Ya, Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default HapusKomentarModal;

```

# src/components/userComponents/detailwisataComponents/KomentarComponents/KomentarModal.jsx

```jsx
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import HapusKomentarModal from '../KomentarComponents/HapusKomentarModal';
import LaporKomentarModal from './LaporKomentarModal';
import profilePlaceholder from '../../../../assets/profil.png';
import { useNotifikasi } from '../../../common/Notifikasi';
import { formatWaktu } from '../../../common/FormatWaktu';

const KomentarModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { showNotif } = useNotifikasi();
  const [searchParams] = useSearchParams();
  const komentarDariQuery = searchParams.get('komentar');

  const [komentar, setKomentar] = useState('');
  const [daftarKomentar, setDaftarKomentar] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [hapusId, setHapusId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserRole, setCurrentUserRole] = useState(null);
  const [laporId, setLaporId] = useState(null);
  const [showLaporModal, setShowLaporModal] = useState(false);
  const [alasanLapor, setAlasanLapor] = useState([]);
  const [alasanLainnya, setAlasanLainnya] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCurrentUserId(res.data.id);
        setCurrentUserRole(res.data.role);
      } catch (err) {
        console.error('Gagal fetch user:', err);
      }
    };

    if (token) fetchUser();
  }, [token]);

  const fetchKomentar = async () => {
    try {
      const res = await axios.get(`/api/user/komentar/${id}`);
      setDaftarKomentar(res.data);
    } catch (err) {
      console.error('Gagal ambil komentar:', err);
    }
  };

  useEffect(() => {
    fetchKomentar();
  }, [id]);

  useEffect(() => {
  if (komentarDariQuery) {
    setTimeout(() => {
      const target = document.getElementById(`komentar-${komentarDariQuery}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('bg-yellow-100');
        setTimeout(() => {
          target.classList.remove('bg-yellow-100');
        }, 2500);
      }
    }, 600);
  }
}, [daftarKomentar, komentarDariQuery]);

const toggleDropdown = (id) => {
  setDropdownOpen(prev => (prev === id ? null : id));
};

const closeDropdown = () => setDropdownOpen(null);


useEffect(() => {
  const handleClickOutside = (event) => {
    const isClickInside = Object.values(dropdownRefs.current).some((ref) => ref?.contains(event.target));
    if (!isClickInside) {
      closeDropdown();
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  const handleKomentar = async () => {
    if (!token) 
      return showNotif('Login untuk berkomentar', 'error');
    if (!komentar.trim()) return showNotif('Komentar tidak boleh kosong', 'error');

    try {
      await axios.post('/api/user/komentar', {
        id_wisata: id,
        isi: komentar,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setKomentar('');
      fetchKomentar();
    } catch (err) {
      console.error('Gagal kirim komentar:', err);
    }
  };

  const simpanEditKomentar = async () => {
    try {
      await axios.put(`/api/user/komentar/${editId}`, {
        isi: editText,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setEditId(null);
      setEditText('');
      fetchKomentar();
    } catch (err) {
      console.error('Gagal edit komentar:', err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/user/komentar/${hapusId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setShowModal(false);
      setHapusId(null);
      fetchKomentar();
    } catch (err) {
      console.error('Gagal hapus komentar:', err);
    }
  };

 const handleBalasKomentar = async (parentId) => {
   if (!token) 
      return showNotif('Login untuk balas komentar', 'error');
  if (!replyText.trim())
  return showNotif('Isi balasan tidak boleh kosong', 'error');

  try {
    const res = await axios.post('/api/user/komentar', {
      id_wisata: id,
      isi: replyText,
      parent_id: parentId
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const newId = res.data.komentar_id;

    setReplyText('');
    setReplyTo(null);
    await fetchKomentar();

    setTimeout(() => {
      const el = document.getElementById(`komentar-${newId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  } catch (err) {
    console.error('Gagal balas komentar:', err);
  }
};


const handleLaporkanKomentar = async () => {
  const alasanFinal = alasanLapor.includes('Lainnya')
    ? `${alasanLapor.join(', ')} (${alasanLainnya})`
    : alasanLapor.join(', ');

  if (alasanLapor.includes('Lainnya') && !alasanLainnya.trim()) {
    showNotif('Silakan isi alasan lainnya.', 'error');
    return;
  }

  if (alasanLapor.length === 0) {
    showNotif('Pilih setidaknya satu alasan pelaporan.', 'error');
    return;
  }

  try {
    const res = await axios.post('/api/user/laporkan-komentar', {
      komentar_id: laporId,
      alasan: alasanFinal,
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    resetLaporModal();

    if (res.data.message?.includes('sudah')) {
      showNotif('🚫 ' + res.data.message, 'info');
    } else {
      showNotif('✅ ' + res.data.message, 'success');
    }

  } catch (err) {
    console.error('Gagal lapor komentar:', err);
    const msg = err.response?.data?.message || 'Gagal melaporkan komentar';
    if (msg.includes('sudah')) {
      showNotif(msg, 'info');
    } else {
      showNotif('❌ ' + msg, 'error');
    }
  }
};

const resetLaporModal = () => {
  setShowLaporModal(false);
  setAlasanLapor([]);
  setAlasanLainnya('');
  setLaporId(null);
};

 const handleProfileClick = (userId) => {
  if (!currentUserId) {
    navigate(`/lihatprofil/${userId}`);
    return;
  }

  if (currentUserId === userId) {
    navigate('/profiluser');
  } else {
    navigate(`/lihatprofil/${userId}`);
  }
};

  const renderKomentarUtama = (komentar) => {
  const isOwner = komentar.user_id === currentUserId;
  const isAdmin = komentar.role === 'admin';
  const balasan = daftarKomentar.filter(b => b.parent_id === komentar.komentar_id);

  return (
    <div
      key={komentar.komentar_id}
      id={`komentar-${komentar.komentar_id}`}
      ref={(el) => (dropdownRefs.current[komentar.komentar_id] = el)}
    >
      <div className="flex items-start justify-between gap-2 relative">
        <div style={{ position: 'relative', paddingRight: '32px'}}>
          <div 
            onClick={() => handleProfileClick(komentar.user_id)}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor:'pointer' }}>
            <img
              src={komentar.photoURL?.trim() ? komentar.photoURL : profilePlaceholder}
              width={40}
              height={40}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
              alt="Foto Profil"
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <b style={{ color: '#015E78', fontSize: 16 }}>@{komentar.username}</b>
              
            </div>
          </div>
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <button
              onClick={(e) => { e.stopPropagation(); toggleDropdown(komentar.komentar_id); }}
              style={{ fontSize: '20px', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px' }}
            >
              ⋮
            </button>
            {dropdownOpen === komentar.komentar_id && (
              <div style={{ position: 'absolute', top: '28px', right: 0, zIndex: 99 }}>
                {isOwner && <button onClick={() => { setEditId(komentar.komentar_id); setEditText(komentar.isi); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', cursor: 'pointer' }}>✏️ Edit</button>}
                {(isOwner || currentUserRole === 'admin') && <button onClick={() => { setHapusId(komentar.komentar_id); setShowModal(true); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>🗑️ Hapus</button>}
                {token && !isOwner && komentar.role !== 'admin' && currentUserRole !== 'admin' && <button onClick={() => { setLaporId(komentar.komentar_id); setShowLaporModal(true); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>🛑 Laporkan</button>}
              </div>
            )}
          </div>
        </div>
      </div>



      {editId === komentar.komentar_id ? (
        <div>
          <textarea value={editText} onChange={(e) => setEditText(e.target.value)} className="w-full border p-1 rounded mt-2" />
          <div className="mt-2 flex gap-2">
            <button onClick={simpanEditKomentar} className="bg-blue-500 text-white px-3 py-1 rounded">Simpan</button>
            <button onClick={() => setEditId(null)} className="bg-gray-200 px-3 py-1 rounded">Batal</button>
          </div>
        </div>

      ) : (

        <p style={{ 
            marginBottom: 5,
            wordWrap: 'break-word', 
            whiteSpace: 'pre-wrap', 
            overflowWrap: 'break-word',
            maxWidth: '100%', 
            marginLeft: 50 }}>
          {komentar.isi}
          </p>
      )}

 <div style={{ marginBottom:'10px',display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginLeft:50 }}>

  <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>
    {formatWaktu(komentar.created_at)}
  </p>
<button onClick={() => setReplyTo(komentar.komentar_id)}
 className="text-blue-500 text-xs"
    style={{
      background: 'none',
      border: 'none',
      padding: 0,
      fontSize: '14px',
      cursor: 'pointer'
    }}
  >
  Balas
</button>

</div>

      {replyTo === komentar.komentar_id && (
        <div className="mt-2 ms-5">
          <textarea className="w-full border rounded p-2" rows={1} value={replyText} onChange={(e) => setReplyText(e.target.value)} />
         <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
  
  <button
    onClick={() => {
      setReplyTo(null);
      setReplyText('');
    }}
    style={{
      backgroundColor: '#e5e7eb',
      color: '#111',
      padding: '6px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Batal
  </button>

  <button
    onClick={() => handleBalasKomentar(komentar.komentar_id)}
    style={{
      backgroundColor: '#2563EB',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Kirim Balasan
  </button>
</div>

        </div>
      )}
    

      {balasan.map(child => renderBalasan(child, komentar))}
    </div>
  );
};

const renderBalasan = (komentar, parentKomentar) => {
  const isOwner = komentar.user_id === currentUserId;
  const isAdmin = komentar.role === 'admin';
  const balasan = daftarKomentar.filter(b => b.parent_id === komentar.komentar_id);

  return (
    <div
      key={komentar.komentar_id}
      id={`komentar-${komentar.komentar_id}`}
      // style={{ marginLeft: 40 }}
      ref={(el) => (dropdownRefs.current[komentar.komentar_id] = el)}
    >
      <div className="flex items-start justify-between gap-2 relative">
          <div style={{ marginLeft: 50 }}>
        <div style={{ position: 'relative', paddingRight: '32px', marginBottom: '8px', marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src={komentar.photoURL?.trim() ? komentar.photoURL : profilePlaceholder}
              width={25}
              height={25}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
              alt="Foto Profil"
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <b style={{ color: '#015E78', fontSize: 14 }}>
                @{komentar.username} <i className="bi bi-caret-right-fill" style={{ color: '#ccc' }}></i>
                {parentKomentar && <span> @{parentKomentar.username}</span>}
              </b>
              
            </div>
          </div>
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <button
              onClick={(e) => { e.stopPropagation(); toggleDropdown(komentar.komentar_id); }}
              style={{ fontSize: '20px', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px' }}
            >
              ⋮
            </button>
            {dropdownOpen === komentar.komentar_id && (
              <div style={{ position: 'absolute', top: '28px', right: 0, zIndex: 99 }}>
                {isOwner && <button onClick={() => { setEditId(komentar.komentar_id); setEditText(komentar.isi); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', cursor: 'pointer' }}>✏️ Edit</button>}
                {(isOwner || currentUserRole === 'admin') && <button onClick={() => { setHapusId(komentar.komentar_id); setShowModal(true); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>🗑️ Hapus</button>}
                {token && !isOwner && komentar.role !== 'admin' && currentUserRole !== 'admin' && <button onClick={() => { setLaporId(komentar.komentar_id); setShowLaporModal(true); closeDropdown(); }} style={{ display: 'block', fontSize: 13, padding: '4px 10px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>🛑 Laporkan</button>}
              </div>
            )}
          </div>
        </div>

      {editId === komentar.komentar_id ? (
        <div>
          <textarea value={editText} onChange={(e) => setEditText(e.target.value)} className="w-full border p-1 rounded mt-2" />
          <div className="mt-1 flex gap-2">
            <button onClick={simpanEditKomentar} className="bg-blue-500 text-white px-3 py-1 rounded">Simpan</button>
            <button onClick={() => setEditId(null)} className="bg-gray-200 px-3 py-1 rounded">Batal</button>
          </div>
        </div>

      ) : (

        <p className="mt-1" 
          style={{ 
            marginBottom:5,
            wordWrap: 'break-word', 
            whiteSpace: 'pre-wrap', 
            overflowWrap: 'break-word', 
            maxWidth: '100%', 
            marginLeft: 35 }}>
            {komentar.isi}
        </p>
      )}

    <div 
      style={{ 
      display: 'flex',
      alignItems: 'center',
      gap: '10px', 
      flexWrap: 'wrap',
      marginLeft: 35
      }}>

  <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>
    {formatWaktu(komentar.created_at)}
  </p>
  <button
    onClick={() => setReplyTo(komentar.komentar_id)}
    className="text-blue-500 text-xs"
    style={{
      background: 'none',
      border: 'none',
      padding: 0,
      fontSize: '14px',
      cursor: 'pointer'
    }}
  >
    Balas
  </button>

</div>
      {replyTo === komentar.komentar_id && (
        <div className="mt-2" style={{marginLeft:30}}>
          <textarea className="w-full border rounded p-2" 
          rows={2}
           value={replyText} 
           onChange={(e) => setReplyText(e.target.value)} 
           />

 <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
  <button
    onClick={() => {
      setReplyTo(null);
      setReplyText('');
    }}
    style={{
      backgroundColor: '#e5e7eb',
      color: '#111',
      padding: '6px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Batal
  </button>
   <button
    onClick={() => handleBalasKomentar(komentar.komentar_id)}
    style={{
      backgroundColor: '#2563EB',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Kirim Balasan
  </button>
</div>

        
        </div>
      )}

 </div>
      {balasan.map(child => renderBalasan(child, komentar))}
    </div>
    </div>
    
  );
};


return (
 <div className="mt-3 p-3" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
  <h4 className="text-lg font-semibold mb-3" 
  style={{
    fontSize:'clamp(18px, 2.5vw, 22px', 
     borderBottom: '1px solid #ccc' 
    }}>Komentar</h4>

  {daftarKomentar.filter(k => !k.parent_id).map(k => renderKomentarUtama(k))}

  <div className="flex items-center gap-2 mt-3 ms-2">
    <input
      type="text"
      placeholder="Tulis komentar..."
      className="flex-1 border rounded px-2 py-1 text-sm"
      value={komentar}
      style={{
          fontSize:'clamp(16px, 2.5vw, 17px',
          width: '60%',
          borderRadius: '15px',
      }}
      onChange={(e) => setKomentar(e.target.value)}
    />
    <button
      onClick={handleKomentar}
      className="ms-3 px-3 py-1 rounded"
    style={{color: '#fff',
      backgroundColor:'#015E78'
    }}>
      Kirim
    </button>
  </div>

      {/* Modal konfirmasi hapus */}
      {showModal && (
        <HapusKomentarModal
    onClose={() => setShowModal(false)}
    onConfirm={handleDelete}
  />
)}

      {/* Modal laporan */}
    {showLaporModal && (
  <LaporKomentarModal
    onClose={resetLaporModal}
    onSubmit={handleLaporkanKomentar}
    alasanLapor={alasanLapor}
    setAlasanLapor={setAlasanLapor}
    alasanLainnya={alasanLainnya}
    setAlasanLainnya={setAlasanLainnya}
  />
)}

    </div>
  );
};

export default KomentarModal;

```

# src/components/userComponents/detailwisataComponents/KomentarComponents/LaporKomentarModal.jsx

```jsx
import React from 'react';

const LaporKomentarModal = ({
  onClose,
  onSubmit,
  alasanLapor,
  setAlasanLapor,
  alasanLainnya,
  setAlasanLainnya
}) => {
  const alasanList = ['Spam', 'SARA', 'Tidak Relevan', 'Menyakiti Pihak Lain', 'Lainnya'];

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1300 }}
      onClick={onClose}
    >
      <div
        className="card shadow p-4"
        style={{ maxWidth: '400px', width: '100%', zIndex: 1300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h5 className="mb-3 text-center">Laporkan Komentar</h5>
        <div className="d-flex flex-column gap-2">
          {alasanList.map((alasan) => (
            <label key={alasan} className="d-flex align-items-center gap-2">
              <input
                type="checkbox"
                value={alasan}
                checked={alasanLapor.includes(alasan)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  if (checked) setAlasanLapor(prev => [...prev, alasan]);
                  else setAlasanLapor(prev => prev.filter(a => a !== alasan));
                }}
              />
              {alasan}
            </label>
          ))}

          {alasanLapor.includes('Lainnya') && (
            <textarea
              className="form-control mt-2"
              placeholder="Tulis alasan lainnya"
              value={alasanLainnya}
              onChange={(e) => setAlasanLainnya(e.target.value)}
            />
          )}

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-secondary w-50 me-2" onClick={onClose}>
              Batal
            </button>
            <button className="btn btn-danger w-50 ms-2" onClick={onSubmit}>
              Laporkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporKomentarModal;

```

# src/components/userComponents/detailwisataComponents/UlasanComponents/DaftarUlasan.jsx

```jsx

```

# src/components/userComponents/detailwisataComponents/UlasanComponents/FormUlasan.jsx

```jsx
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNotifikasi } from '../../../common/Notifikasi';

const FormUlasan = ({ wisataId, editingData, onCancel, onSuccess }) => {
  const { showNotif } = useNotifikasi();

  const [rating, setRating] = useState(editingData?.rating || 0);
  const [review, setReview] = useState(editingData?.review || '');
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState(editingData?.images || []);
  const [isEditing, setIsEditing] = useState(!!editingData);

  const inputFileRef = useRef();

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

    const config = { headers: { Authorization: 'Bearer ' + token } };

    try {
      if (isEditing && editingData?.id) {
        await axios.put(`/api/user/rating/${editingData.id}`, form, config);
        showNotif('Ulasan diperbarui', 'success');
      } else {
        await axios.post(`/api/user/rating`, form, config);
        showNotif('Ulasan ditambahkan', 'success');
      }
      onSuccess();
      setRating(0);
      setReview('');
      setImages([]);
      setPreview([]);
      setIsEditing(false);
    } catch (err) {
      showNotif(err?.response?.data?.message || 'Gagal mengirim ulasan', 'error');
    }
  };

  return (
    <div style={{ borderBottom: '1px solid #ccc', padding: 20 }}>
      <p style={{ fontSize: 'clamp(18px,2.5vw,16px)', margin: 0 }}>
        {isEditing ? 'Edit Ulasan Anda' : 'Berikan Ulasan'}
      </p>

      {/* Rating */}
      <div>
        {[1,2,3,4,5].map(i => (
          <span 
            key={i} 
            onClick={() => setRating(i)}
            style={{ cursor:'pointer', color: rating >= i ? 'orange' : '#ccc', fontSize:24 }}
          >★</span>
        ))}
      </div>

      {/* Input file hidden */}
      <input
        type="file"
        accept="image/*"
        multiple
        ref={inputFileRef}
        style={{ display: 'none' }}
        onChange={(e) => {
          const selected = Array.from(e.target.files);
          setImages(prev => {
            const combined = [...prev, ...selected];
            return combined.slice(0, 3 - preview.length);
          });
          e.target.value = '';
        }}
      />

      {/* Preview + tambah */}
      <div style={{ display:'flex', gap:10, marginTop:10 }}>
        {[0,1,2].map(idx => {
          const total = [...preview, ...images];
          const file = total[idx];
          return file ? (
            <div key={idx} style={{ width:80, height:80, borderRadius:8, overflow:'hidden', position:'relative' }}>
              <img
                src={typeof file === 'string' ? `http://localhost:3000/uploads/ulasan/${file}` : URL.createObjectURL(file)}
                style={{ width:'100%', height:'100%', objectFit:'cover' }}
              />
              <span
                onClick={() => {
                  if(typeof file === 'string') setPreview(prev => prev.filter(p=>p!==file));
                  else setImages(prev => prev.filter((_,i)=>i!==idx - preview.length));
                }}
                style={{ position:'absolute', top:2, right:2, cursor:'pointer', color:'white', backgroundColor:'rgba(0,0,0,0.5)', borderRadius:'50%', padding:'2px 4px' }}
              >
                ✕
              </span>
            </div>
          ) : (
            <div key={idx} onClick={()=>inputFileRef.current.click()} style={{ width:80, height:80, border:'2px dashed #aaa', borderRadius:8, display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer', color:'#777' }}>
              +
            </div>
          )
        })}
      </div>

      {/* Textarea + tombol */}
      <div style={{ display:'flex', alignItems:'flex-end', marginTop:10 }}>
        <textarea
          placeholder="Tulis ulasan (opsional)"
          value={review}
          rows={2}
          onChange={e => setReview(e.target.value)}
          style={{ maxWidth:260, flexGrow:1, marginRight:10 }}
        />
        {!isEditing && (
          <button style={{ color:'#fff', backgroundColor:'#015E78' }} onClick={handleSubmit}>Kirim</button>
        )}
      </div>

      {isEditing && (
        <div style={{ marginTop:10, display:'flex', gap:10, marginLeft:70 }}>
          <button onClick={() => { setIsEditing(false); onCancel?.(); }}>Batal</button>
          <button style={{ color:'#fff', backgroundColor:'#015E78' }} onClick={handleSubmit}>Perbarui Ulasan</button>
        </div>
      )}
    </div>
  );
};

export default FormUlasan;

```

# src/components/userComponents/detailwisataComponents/UlasanComponents/ModalHapusUlasan.jsx

```jsx
import React from 'react';

const ModalHapusUlasan = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div style={{
      position:'fixed', top:0, left:0, width:'100vw', height:'100vh',
      background:'rgba(0,0,0,0.5)', display:'flex', justifyContent:'center', alignItems:'center', zIndex:1000
    }}>
      <div style={{
        background:'#fff', padding:20, borderRadius:5, minWidth:300,
        boxShadow:'0 0 10px rgba(0,0,0,0.3)', textAlign:'center'
      }}>
        <p>Apakah Anda ingin menghapus ulasan ini?</p>
        <div style={{ display:'flex', justifyContent:'center', gap:10, marginTop:15 }}>
          <button className="btn btn-danger" onClick={onConfirm}>Ya</button>
          <button className="btn btn-secondary" onClick={onClose}>Batal</button>
        </div>
      </div>
    </div>
  );
};

export default ModalHapusUlasan;

```

# src/components/userComponents/detailwisataComponents/UlasanComponents/SmoothWrapper.jsx

```jsx
import { useEffect, useRef } from "react";

export default function SmoothWrapper({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "scale(0.97)";
    el.style.transition = "all 0.25s ease";

    requestAnimationFrame(() => {
      el.style.opacity = "1";
      el.style.transform = "scale(1)";
    });
  }, []);

  return cloneWithRef(children, ref);
}

function cloneWithRef(element, ref) {
  return {
    ...element,
    ref: ref,
  };
}

```

# src/components/userComponents/detailwisataComponents/UlasanComponents/UlasanModal.jsx

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate  } from 'react-router-dom';
import profilePlaceholder from '../../../../assets/profil.png';
import { useNotifikasi } from '../../../common/Notifikasi';
import { formatWaktu } from '../../../common/FormatWaktu';
import UlasanTotal from '../InformasiWisata/UlasanTotal';
import FormUlasan from './FormUlasan';
import ModalHapusUlasan from './ModalHapusUlasan';

const UlasanModal = ({ onClose, onUpdate }) => {
  const { showNotif } = useNotifikasi();
  const { id: wisataId } = useParams();
  const navigate = useNavigate();
  const [ulasan, setUlasan] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [hasRated, setHasRated] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUlasanId, setSelectedUlasanId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [preview, setPreview] = useState({
      show: false,
      img: null
    });
  
 useEffect(() => {
  const scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  // document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  setTimeout(() => setVisible(true), 100);
  return () => {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
  };
}, []);


  useEffect(() => { if(wisataId) fetchAll(); }, [wisataId]);

  const fetchAll = async () => {
    try {
      const token = localStorage.getItem('token');
      const resUlasan = await axios.get(`/api/rating/${wisataId}`);
      setUlasan(resUlasan.data);

      if(token) {
        const resUser = await axios.get('/api/me', { headers:{Authorization:'Bearer '+token}});
        setCurrentUser(resUser.data);

        const myReview = resUlasan.data.find(r=>r.user_id===resUser.data.id);
        setHasRated(!!myReview);
      } else setCurrentUser(null);
    } catch(err){ console.error(err); }
  };

  const handleDeleteUlasan = async (id) => {
    try {
      await axios.delete(`/api/admin/rating/${id}`, { headers:{ Authorization: 'Bearer ' + localStorage.getItem('token') }});
      setUlasan(prev => prev.filter(u=>u.id!==id));
      onUpdate?.();
      showNotif('✅ Ulasan berhasil dihapus');
      setShowDeleteModal(false);
    } catch(err){ showNotif('Gagal menghapus ulasan','error'); }
  };

const openPreview = (imgUrl) => {
    setPreview({ show: true, img: imgUrl });
  };

  const closePreview = () => {
    setPreview({ show: false, img: null });
  };

  const handleProfileClick = (userId) => {
  if (!currentUser) {
    navigate(`/lihatprofil/${userId}`);
    return;
  }

  if (currentUser.id === userId) {
    navigate('/profiluser');
  } else {
    navigate(`/lihatprofil/${userId}`);
  }
};

  return (
  <div className="modal-overlay"
  onClick={() => {
    if (!preview.show) onClose();
  }}
  style={{
    position:'fixed', top:0,left:0,right:0,bottom:0, 
    backgroundColor:'rgba(0,0,0,0.6)', 
    display:'flex', justifyContent:'center', alignItems:'center', 
    zIndex:9999,
    opacity: visible ? 1 : 0,
    transition: 'opacity 0.5s ease'
  }}
>
  <div className="modal-content"
    onClick={e => e.stopPropagation()}
    style={{ 
      backgroundColor:'white', width:'100%', maxWidth:800, maxHeight:'100vh', overflowY:'auto', 
      borderRadius:8, padding:0, paddingTop:0, position:'relative',
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'transform 0.5s ease'
    }}
  >
<div className=' shadow-sm py-1'
  style={{ 
    position: 'sticky', 
    top: 0,              
    backgroundColor: 'white', 
    zIndex: 10,   
    padding:20,
    paddingRight:0 
  }}
>
        <button onClick={onClose} style={{ position:'absolute', top:7,right:10, background:'transparent', border:'none', fontSize:'clamp(21px,2.5vw,20px)', cursor:'pointer', fontWeight:550 }}>✕</button>
        <p style={{ fontSize:'clamp(20px,2.5vw,16px)', margin:0 }}>Semua Ulasan</p>
        <div style={{ position:'relative', 
          // borderBottom:'1px solid #ccc' 
          }}>
            <UlasanTotal/></div>
</div>
        {(!hasRated || editingData) && (
          <FormUlasan
            wisataId={wisataId}
            editingData={editingData}
            onCancel={()=>setEditingData(null)}
            onSuccess={()=>{ setEditingData(null); fetchAll(); onUpdate?.(); }}
          />
        )}

        {[...ulasan].sort((a,b)=>{
          if(a.user_id===currentUser?.id) return -1;
          if(b.user_id===currentUser?.id) return 1;
          return 0;
        }).map(u=>(
          <div key={u.id} style={{ borderBottom:'1px solid #ccc', marginBottom:5, position:'relative', padding:10 }}>
            <div 
            onClick={() => handleProfileClick(u.user_id)}
            style={{ display:'flex', alignItems:'center', gap:10 }}>
              <img src={u.photoURL?.trim()?u.photoURL:profilePlaceholder} width={40} height={40} style={{ borderRadius:'50%', objectFit:'cover' }} alt=""/>
              <div style={{ display:'flex', flexDirection:'column' }}>
                <b style={{ color:'#015E78', fontSize:16 }}>@{u.username}</b>
                <p style={{ fontSize:'12px', color:'#888', marginBottom:0 }}>{formatWaktu(u.created_at)}</p>
              </div>
            </div>

            <div style={{ marginLeft:50 }}>
              {[1,2,3,4,5].map(i=><span key={i} style={{ color:u.rating>=i?'orange':'#ccc', fontSize:16 }}>★</span>)}
            </div>

            <div style={{ position:'absolute', right:10, top:10, display:'flex', gap:8 }}>
              {currentUser?.id===u.user_id && <button className="btn btn-sm btn-warning" onClick={()=>setEditingData({ ...u, images:JSON.parse(u.images||'[]') })}>Edit</button>}
              {currentUser?.role==='admin' && <button className="btn btn-sm btn-danger" onClick={()=>{ setSelectedUlasanId(u.id); setShowDeleteModal(true); }}>Hapus</button>}
            </div>

            <p style={{ wordWrap:'break-word', whiteSpace:'pre-wrap', overflowWrap:'break-word', maxWidth:'100%', marginLeft:50 }}>{u.review}</p>
            <div style={{ marginLeft:50 }}>{JSON.parse(u.images||'[]').map(f=><img key={f} src={`http://localhost:3000/uploads/ulasan/${f}`} 
            width={80} height={80} style={{ marginRight:6, marginBottom:8, borderRadius:5 }}    onClick={() =>
                  openPreview(`http://localhost:3000/uploads/ulasan/${f}`)
                } alt=""/>)}
            
            </div>
          </div>
        ))}

        <ModalHapusUlasan
          show={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => handleDeleteUlasan(selectedUlasanId)}
        />
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
    </div>
    
  );
};

export default UlasanModal;

```

# src/components/userComponents/detailwisataComponents/UlasanComponents/UlasanPreview.jsx

```jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Icon } from '@iconify/react';
import UlasanModal from './UlasanModal';
import profilePlaceholder from '../../../../assets/profil.png';
import { formatWaktu } from '../../../common/FormatWaktu';


const UlasanPreview = () => {
  const { id } = useParams();
  const [ulasan, setUlasan] = useState([]);
  const [showUlasanModal, setShowUlasanModal] = useState(false);

  const fetchUlasan = async () => {
    try {
      const res = await axios.get(`/api/rating/${id}`);
      setUlasan(res.data);
    } catch (err) {
      console.error('Gagal fetch ulasan:', err);
    }
  };

  useEffect(() => {
    fetchUlasan();
  }, [id]);

  return (
    <div className="mt-4" style={{ paddingTop: '10px' }}>
      <div style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
        <div style={{ position: 'relative', marginBottom: 8, borderBottom: '1px solid #ccc' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h5 style={{ fontSize:'clamp(17px, 2.5vw, 20px',marginLeft: 10, marginTop: 10, marginBottom: 0 }}>Ulasan Terbaru</h5>
            <button
              onClick={() => setShowUlasanModal(true)}
              style={{
                marginTop: 10,
                background: 'none',
                border: 'none',
                color: '#dc2626',
                cursor: 'pointer',
                fontSize: 'clamp(14px, 2.5vw, 16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Lihat Semua
              <span style={{ fontSize: 16 }}>
                <Icon icon={'mdi:chevron-right'} width={22} />
              </span>
            </button>
          </div>

          <div style={{ fontSize: 20, display: 'flex', alignItems: 'center', marginLeft: 10 }}>
            {ulasan.length > 0 ? (
              <>
                <div>
                  {[1, 2, 3, 4, 5].map(i => (
                    <span
                      key={i}
                      style={{
                        color:
                          ulasan.reduce((sum, u) => sum + u.rating, 0) / ulasan.length >= i
                            ? 'orange'
                            : '#ccc',
                      }}
                    >
                      ★
                    </span>
                  ))}
                  <span style={{ fontSize: 16, color: '#333', marginLeft: 5 }}>
                    ({ulasan.length} ulasan)
                  </span>
                </div>
              </>
            ) : (
              <span style={{ fontSize: 'clamp(14px, 2.5vw, 16px', color: '#999' }}>Belum ada ulasan</span>
            )}
          </div>
        </div>

        <div>
          {ulasan.length === 0 ? (
            <div
              style={{
                borderBottom: '1px solid #ccc',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#dc2626',
                  fontSize: 'clamp(14px, 2.5vw, 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  zIndex: 999,
                  marginBottom: 4,
                }}
                onClick={() => setShowUlasanModal(true)}
              >
                Tambah Ulasan
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          ) : (
            ulasan.slice(0, 1).map(u => (
              <div
                key={u.id}
                style={{ borderBottom: '1px solid #ccc', marginLeft: 10 }}
                onClick={() => setShowUlasanModal(true)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    src={u.photoURL?.trim() ? u.photoURL : profilePlaceholder}
                    width={40}
                    height={40}
                    style={{ borderRadius: '50%' }}
                    alt="Foto Profil"
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <b style={{ color: '#015E78' }}>@{u.username}</b>
                    <p style={{ fontSize: '12px', color: '#888', marginBottom: 0 }}>
                      {formatWaktu(u.created_at)}
                    </p>
                    <div>
                      {[1, 2, 3, 4, 5].map(i => (
                        <span key={i} style={{ color: u.rating >= i ? 'orange' : '#ccc' }}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ wordWrap:'break-word', whiteSpace:'pre-wrap', overflowWrap:'break-word',marginLeft: 50 }}>{u.review}</p>
                <div style={{ marginLeft: 50 }}>
                  {JSON.parse(u.images || '[]').map(f => (
                    <img
                      key={f}
                      src={`http://localhost:3000/uploads/ulasan/${f}`}
                      width={80}
                      height={80}
                      style={{
                        marginRight: 6,
                        marginBottom: '8px',
                        borderRadius: '5px',
                      }}
                      alt=""
                    />
                  ))}
                </div>
                <div
              style={{
                borderTop: '1px solid #ccc',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#dc2626',
                  fontSize: 'clamp(14px, 2.5vw, 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  zIndex: 999,
                  marginBottom: 4,
                }}
                onClick={() => setShowUlasanModal(true)}
              >
                Tambah Ulasan
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
              </div>
              
            ))
          )}
        </div>
      </div>

      {showUlasanModal && (
        <UlasanModal
          onClose={() => setShowUlasanModal(false)}
          onUpdate={fetchUlasan}
        />
      )}
    </div>
  );
};

export default UlasanPreview;

```

# src/components/userComponents/homeComponents/BannerCarrousel.jsx

```jsx
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import Banner1 from '../../../assets/banner/1.png';
import Banner2 from '../../../assets/banner/2.png';
import Banner3 from '../../../assets/banner/3.png';
import Banner4 from '../../../assets/banner/4.png';
import Banner5 from '../../../assets/banner/5.png';
import Banner6 from '../../../assets/banner/10.png';
// import gambar from '../../assets/pngtree-tourists-travel-tourist-guide-person-picture-image_8727144.png';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 992);
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
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
      {/* BANNER */}
      <section id="banner" className="my-1">
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
          showStatus={false}
          swipeable={true}
          emulateTouch
        >
          {isDesktop
            ? chunkArray(bannerImages, 2).map((group, index) => (
                <div key={index} className="row">
                  {group.map((img, idx) => (
                    <div className="col-lg-6" key={idx}>
                      <div
                        style={{
                          width: '100%',
                          height: 'auto',
                          overflow: 'hidden',
                          borderRadius: '10px'
                        }}
                      >
                        <img
                          src={img}
                          alt={`Banner ${index * 2 + idx + 1}`}
                          className="w-100 h-100"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : bannerImages.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Banner ${index + 1}`}
                    className="w-100 h-100"
                    style={{ objectFit: 'contain',
                      borderRadius: '10px'
                     }}
                  />
                </div>
              ))}
        </Carousel>
      </section>

{/* <section className="my-4">
  <div className="container">
    <div
      className="row align-items-center justify-content-center"
      style={{
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '1250px',
        margin: '0 auto'
      }}
    >
      Gambar di kiri
      <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
        <img
          src={gambar}
          alt="Description"
          className="img-fluid rounded-3"
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '200px',
          }}
        />
      </div>

      Deskripsi di kanan
      <div className="col-12 col-md-6 text-center text-md-start">
        <h5><b>Temukan Keindahan Wisata Kami</b></h5>
        <p>
          Jelajahi tempat-tempat wisata terbaik di Kabupaten Banjarnegara. Dapatkan pengalaman
          yang tak terlupakan dengan berbagai pilihan tempat wisata yang dapat
          memanjakan mata dan hati. Nikmati perjalanan yang penuh kenangan!
        </p>
        <button
          className="btn btn-primary"
          style={{
            backgroundColor: '#015E78',
            color: 'white',
          }}
          onClick={() => navigate('/daftarwisata')}
        >
          Lihat lebih banyak
        </button>
      </div>
    </div>
  </div>
</section> */}

     
    </main>
  );
};

export default Home;

```

# src/components/userComponents/homeComponents/FavoritTerbanyak.jsx

```jsx
// src/pages/home/WisataTerpopuler.jsx
import React, { useEffect, useState } from 'react';
import CardWisata from '../../common/cardComponents/CardWisata';

const FavoritTerbanyak = () => {
  const [wisataFavorit, setWisataFavorit] = useState([]);

  useEffect(() => {
    const fetchWisata = async () => {
      try {
        const res = await fetch('/api/wisata');
        const data = await res.json();
        if (!Array.isArray(data)) return;
        const withFavorit = data.filter(item => Number(item.total_favorit) > 0);
        const sorted = [...withFavorit]
          .sort((a, b) => b.total_favorit - a.total_favorit)
          .slice(0, 4);
        setWisataFavorit(sorted);
      } catch (err) {
        console.error('Gagal fetch wisata:', err);
      }
    };

    fetchWisata();
  }, []);

  return (
    <div className="row d-flex flex-wrap justify-content-start">
           <h5 className="mb-3 text-left" style={{ marginTop: '20px' }}>
          <b style={{fontSize:'clamp(16px, 2.5vw, 20px)'}}>Paling Banyak Disimpan</b>
        </h5>
      {wisataFavorit.map((item) => (
        <CardWisata key={item.id} item={item} showOptionsMenu={false} />
      ))}
    </div>
  );
};

export default FavoritTerbanyak;

```

# src/components/userComponents/homeComponents/LikeTerbanyak.jsx

```jsx
// src/pages/home/WisataTerpopuler.jsx
import React, { useEffect, useState } from 'react';
import CardWisata from '../../common/cardComponents/CardWisata';

const LikeTerbanyak = () => {
  const [wisataPopuler, setWisataPopuler] = useState([]);

  useEffect(() => {
    const fetchWisata = async () => {
      try {
        const res = await fetch('/api/wisata');
        const data = await res.json();
        if (!Array.isArray(data)) return;

        // Filter yang punya total_likes >= 1 (opsional)
        const withLikes = data.filter(item => Number(item.total_likes) > 0);

        // Sort berdasarkan total_likes tertinggi dan ambil 8 teratas
        const sorted = [...withLikes]
          .sort((a, b) => b.total_likes - a.total_likes)
          .slice(0, 4);

        setWisataPopuler(sorted);
      } catch (err) {
        console.error('Gagal fetch wisata:', err);
      }
    };

    fetchWisata();
  }, []);

  return (
    <div className="row d-flex flex-wrap justify-content-start">
           <h5 className="mb-3 text-left" style={{ marginTop: '20px' }}>
          <b style={{fontSize:'clamp(16px, 2.5vw, 20px)'}}>Paling Banyak Disukai</b>
        </h5>
      {wisataPopuler.map((item) => (
        <CardWisata key={item.id} item={item} showOptionsMenu={false} />
      ))}
    </div>
  );
};

export default LikeTerbanyak;

```

# src/components/userComponents/homeComponents/RatingTertinggi.jsx

```jsx
// src/pages/home/RatingTertinggi.jsx
import React, { useEffect, useState } from 'react';
import CardWisata from '../../common/cardComponents/CardWisata';

const RatingTertinggi = () => {
  const [wisataRating, setWisataRating] = useState([]);

  useEffect(() => {
    const fetchWisata = async () => {
      try {
        const res = await fetch('/api/wisata');
        const data = await res.json();
        if (!Array.isArray(data)) return;

        // Filter yang punya rating >= 3
        const withGoodRating = data.filter(item => Number(item.average_rating) >= 4);

        // Sort berdasarkan average_rating tertinggi dan ambil 8 teratas
        const sorted = [...withGoodRating]
          .sort((a, b) => b.average_rating - a.average_rating)
          .slice(0, 4);

        setWisataRating(sorted);
      } catch (err) {
        console.error('Gagal fetch wisata:', err);
      }
    };

    fetchWisata();
  }, []);

  return (
    
    <div className="row d-flex flex-wrap justify-content-start">
        <h5 className="mb-3 text-left" style={{ marginTop: '20px' }}>
          <b style={{fontSize:'clamp(16px, 2.5vw, 20px)'}}>Rating Tertinggi</b>
        </h5>
      {wisataRating.map((item) => (
        <CardWisata key={item.id} item={item} showOptionsMenu={false} />
      ))}
    </div>
  );
};

export default RatingTertinggi;

```

# src/components/userComponents/homeComponents/SearchBar.jsx

```jsx
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
      const res = await fetch('http://localhost:3000/api/wisata');
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

```

# src/components/userComponents/homeComponents/TombolWisataLainnya.jsx

```jsx
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

```

# src/main.jsx

```jsx
import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/main.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { BrowserRouter } from "react-router-dom";
import { NotifikasiProvider } from '../src/components/common/Notifikasi';
import { AuthProvider } from './pages/auth/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotifikasiProvider>
          <App />
        </NotifikasiProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

```

# src/pages/admin/DaftarEvent.jsx

```jsx
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNotifikasi } from '../../components/common/Notifikasi';

const DaftarEvent = () => {
  const [wisata, setWisata] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [selectedWisata, setSelectedWisata] = useState(null);
  const [eventInput, setEventInput] = useState('');
  const { showNotif } = useNotifikasi();
  const token = localStorage.getItem('token');
  const modalRef = useRef(null);

  useEffect(() => {
    fetchWisata();
  }, []);

  const fetchWisata = async () => {
    try {
      const res = await axios.get('/api/wisata', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWisata(res.data);
    } catch (err) {
      console.error(err);
      showNotif('Gagal memuat data wisata', 'error');
    }
  };

  const openModal = (item) => {
    setSelectedWisata(item);
    setEventInput(item?.event || '');
    setModalShow(true);
  };

  const openConfirm = (item) => {
    setSelectedWisata(item);
    setConfirmShow(true);
  };

  const handleSimpan = async () => {
    if (!selectedWisata) return;

    try {
      await axios.patch(
        `/api/wisata/${selectedWisata.id}/event`,
        { event: eventInput },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      showNotif('Event berhasil disimpan', 'success');
      setModalShow(false);

      setWisata((prev) =>
        prev.map((item) =>
          item.id === selectedWisata.id
            ? { ...item, event: eventInput }
            : item
        )
      );
    } catch (err) {
      console.error(err);
      showNotif('Gagal menyimpan event', 'error');
    }
  };

  const handleHapusEvent = async () => {
    if (!selectedWisata) return;

    try {
      await axios.patch(
        `/api/wisata/${selectedWisata.id}/event`,
        { event: '' },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setWisata((prev) =>
        prev.map((w) =>
          w.id === selectedWisata.id ? { ...w, event: '' } : w
        )
      );

      showNotif('Event berhasil dihapus', 'success');
      setConfirmShow(false);
    } catch (err) {
      console.error(err);
      showNotif('Gagal menghapus event', 'error');
    }
  };

 const filtered = wisata
  .filter((w) =>
    w.judul?.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    if (a.event && !b.event) return -1;
    if (!a.event && b.event) return 1;
    return 0;
  });

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>📅 Daftar Pengumuman & Acara</h2>

      <input
        type="text"
        placeholder="🔍 Cari nama destinasi"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: 20,
          borderRadius: 8,
          border: '1px solid #ccc',
          fontSize: 16,
        }}
      />

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
           <th style={{ ...th, width: 50 }}>No</th>

<th style={{ ...th, textAlign: 'left', paddingLeft: 50 }}>
  Nama Destinasi
</th>

<th style={{ ...th, textAlign: 'center' }}>
  Event
</th>

<th style={{ ...th, textAlign: 'center' }}>
  Aksi
</th>

          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <tr key={item.id}>
               <td style={td}>{index + 1}.</td>

<td style={{ ...td, textAlign: 'left', paddingLeft: 8}}>
  {item.judul}
</td>


               <td style={{ ...td, textAlign: 'center' }}>
  {item.event || '-'}
</td>

                <td style={{ ...td, textAlign: 'center' }}>
                  <button
                    onClick={() => openModal(item)}
                    style={buttonStyle('#015E78')}
                  >
                    {item.event ? 'Edit' : 'Tambah'}
                  </button>

                  {item.event && (
                    <button
                      onClick={() => openConfirm(item)}
                      style={{ ...buttonStyle('#E4080A'), marginLeft: 5 }}
                    >
                      Hapus
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', padding: 10 }}>
                Tidak ada destinasi ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* MODAL INPUT EVENT */}
      {modalShow && (
        <div
          style={overlay}
          onClick={() => setModalShow(false)}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            style={modalBox}
          >
            <h4 style={{ textAlign: 'center', marginBottom: 15 }}>
              {selectedWisata?.event ? 'Edit Event' : 'Tambah Event'}
            </h4>

            <input
              type="text"
              placeholder="Masukkan nama event"
              value={eventInput}
              maxLength={50}
              onChange={(e) => setEventInput(e.target.value)}
              style={inputStyle}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
              <button onClick={() => setModalShow(false)} style={buttonStyle('#E4080A')}>
                Batal
              </button>
              <button onClick={handleSimpan} style={buttonStyle('#015E78')}>
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL KONFIRMASI HAPUS */}
      {confirmShow && (
        <div
          style={overlay}
          onClick={() => setConfirmShow(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={modalBox}
          >
            <h4 style={{ textAlign: 'center', marginBottom: 15 }}>
              Hapus Event?
            </h4>

            <p style={{ textAlign: 'center', marginBottom: 20 }}>
              Event pada destinasi <b>{selectedWisata?.judul}</b> akan dihapus.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
              <button onClick={() => setConfirmShow(false)} style={buttonStyle('#015E78')}>
                Batal
              </button>
              <button onClick={handleHapusEvent} style={buttonStyle('#E4080A')}>
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const th = {
  padding: '12px',
  backgroundColor: '#015E78',
  color: '#fff',
  textAlign: 'center',
};

const td = {
  padding: '12px',
  borderBottom: '1px solid #ccc',
  textAlign: 'center',
};

const buttonStyle = (bg) => ({
  backgroundColor: bg,
  color: '#fff',
  border: 'none',
  padding: '6px 12px',
  borderRadius: 6,
  cursor: 'pointer',
});

const overlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalBox = {
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 12,
  width: 400,
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
};

const inputStyle = {
  width: '100%',
  padding: 10,
  borderRadius: 8,
  border: '1px solid #ccc',
  marginBottom: 15,
};

export default DaftarEvent;

```

# src/pages/admin/DaftarKomentar.jsx

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultProfileImage from '../../assets/profil.png'; // pastikan path sudah benar
import { useNavigate } from 'react-router-dom';
import { useNotifikasi } from '../../components/common/Notifikasi';

const DaftarKomentar = () => {
  const [komentar, setKomentar] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { showNotif } = useNotifikasi();

  const fetchKomentar = async () => {
    try {
      const res = await axios.get('/api/admin/komentar', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setKomentar(res.data);
    } catch (err) {
      setMessage('Gagal memuat daftar komentar.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKomentar();
  }, []);

  // Hapus komentar
  const hapusKomentar = async (id) => {
    try {
      await axios.delete(`/api/admin/komentar/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchKomentar();
      showNotif('Komentar berhasil dihapus', 'success');
    } catch (err) {
      setMessage('Gagal menghapus komentar.');
      console.error(err);
    }
  };

  const handleConfirm = () => {
    if (selectedId) {
      hapusKomentar(selectedId);
      setShowModal(false);
      setSelectedId(null);
    }
  };

  const filteredKomentar = komentar.filter(k =>
    k.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.judul_wisata.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.isi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
      <div style={{
        width: '100%',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
      }}>
        <h2 style={{ marginBottom: '24px', fontSize: '25px', fontWeight: '600', textAlign: 'center', color: '#333' }}>
          📝 Daftar Komentar Wisata
        </h2>

        {message && (
          <p style={{
            backgroundColor: '#ffdddd',
            color: '#a00',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '16px',
            textAlign: 'center',
            fontWeight: '500',
          }}>{message}</p>
        )}

        <input
          type="text"
          placeholder="🔍 Cari username, wisata, atau isi komentar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '12px 16px',
            marginBottom: '24px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            outline: 'none',
          }}
        />

        {loading ? (
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666' }}>⏳ Memuat komentar...</p>
        ) : (
          <div style={{ overflowX: 'auto', borderRadius: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th style={th}>User</th>
                  <th style={th}>Wisata</th>
                  <th style={th}>Komentar</th>
                  <th style={th}>Tanggal</th>
                  <th style={th}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredKomentar.length > 0 ? (
                  filteredKomentar.map(k => (
                    <tr key={k.komentar_id}>
                      <td style={td}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <img
                                          src={k.photoURL || defaultProfileImage}
                                          alt="profil"
                                          style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: '50%' }}
                                        />
                                        <div>
                                          <div style={{ fontWeight: 600 }}>{k.username || '-'}</div>
                                        </div>
                                      </div>
                      </td>
                      <td style={td}>{k.judul_wisata}
                         <br />
                        <button
                         onClick={() => navigate(`/wisata/${k.id_wisata}#komentar-${k.komentar_id}`)}
                          style={{
                            marginTop: '6px',
                            padding: '6px 10px',
                            fontSize: '13px',
                            backgroundColor: '#015E78',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                          }}
                        >
                          Cek Komentar
                        </button>
                      </td>
                      <td style={td}>{k.isi}</td>
                      <td style={td}>{new Date(k.created_at).toLocaleString()}</td>
                      <td style={td}>
                        <button
                          onClick={() => {
                            setSelectedId(k.komentar_id);
                            setShowModal(true);
                          }}
                          style={buttonStyle('#ff4d4f')}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '16px', fontStyle: 'italic', color: '#888' }}>
                      Tidak ada komentar ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1300 }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="card shadow p-4"
            style={{ maxWidth: '400px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="mb-3 text-center">Konfirmasi</h5>
            <p className="text-center">Yakin ingin menghapus komentar ini?</p>
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-secondary w-50 me-2" onClick={() => setShowModal(false)}>Batal</button>
              <button className="btn btn-danger w-50 ms-2" onClick={handleConfirm}>Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const th = {
  padding: '14px 18px',
  backgroundColor: '#015E78',
  color: '#fff',
  fontSize: '17px',
  textAlign: 'center',
};

const td = {
  padding: '14px 18px',
  textAlign: 'center',
  fontSize: '15px',
  borderBottom: '1px solid #eaeaea',
  backgroundColor: '#fff',
  color: '#444',
  verticalAlign: 'middle',
};

const buttonStyle = (bg) => ({
  backgroundColor: bg,
  color: '#fff',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
});

export default DaftarKomentar;

```

# src/pages/admin/DaftarUlasan.jsx

```jsx
// DaftarUlasan.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultProfileImage from '../../assets/profil.png';
import LoadingInternal from '../../components/common/LoadingInternal';

const DaftarUlasan = () => {
  const [ulasan, setUlasan] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchUlasan();
  }, []);

  const fetchUlasan = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/admin/rating', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUlasan(res.data);
      setMessage('');
    } catch (err) {
      console.error('Gagal memuat ulasan:', err);
      setMessage('Gagal memuat ulasan.');
    } finally {
      setLoading(false);
    }
  };

  const handleHapus = async (ulasanId) => {
    try {
      await axios.delete(`http://localhost:3000/api/admin/rating/${ulasanId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUlasan();
      setMessage('Ulasan berhasil dihapus.');
    } catch (err) {
      console.error('Gagal menghapus ulasan:', err);
      setMessage('Gagal menghapus ulasan.');
    }
  };

  const filtered = ulasan.filter((item) =>
    (item.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.isi_ulasan?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.nama_wisata?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleConfirmDelete = async () => {
    await handleHapus(selectedId);
    setShowModal(false);
    setSelectedId(null);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: 1300,
      margin: "0 auto",
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 12,
      boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
      boxSizing: "border-box"
    }}>
      <h2 style={{
        marginBottom: 24,
        fontSize: "clamp(18px, 2vw, 22px)", // responsive
        fontWeight: 600,
        textAlign: 'center',
        color: '#333'
      }}>
        📝 Daftar Ulasan Pengguna
      </h2>

      {message && (
        <p style={{
          backgroundColor: '#ffdddd',
          color: '#a00',
          padding: 10,
          borderRadius: 8,
          marginBottom: 16,
          textAlign: 'center',
          fontWeight: 500
        }}>{message}</p>
      )}

      <input
        type="text"
        placeholder="🔍 Cari nama pengguna, wisata, atau isi ulasan"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '7px',
          marginBottom: 24,
          width: '100%',
          borderRadius: 8,
          border: '1px solid #ccc',
          fontSize: 16,
          outline: 'none'
        }}
      />

      {loading ? <LoadingInternal/> : (
        <div style={{ overflowX: 'auto', borderRadius: 8 }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 800 }}>
            <thead>
              <tr>
                <th style={th}>User</th>
                <th style={th}>Wisata</th>
                <th style={th}>Rating</th>
                <th style={th}>Ulasan</th>
                <th style={th}>Gambar</th>
                <th style={th}>Tanggal</th>
                <th style={th}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? filtered.map((item) => {
                const gambar = item.images && JSON.parse(item.images);
                return (
                  <tr key={item.id}>
                    <td style={td}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <img
                          src={item.photoURL || defaultProfileImage}
                          alt="profil"
                          style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: '50%' }}
                        />
                        <div>
                          <div style={{ fontWeight: 600 }}>{item.username || '-'}</div>
                        </div>
                      </div>
                    </td>
                    <td style={td}>{item.nama_wisata || '-'}</td>
                    <td style={td}>
                      {item.rating ? (
                        <>{item.rating} <span style={{ color: 'orange' }}>★</span></>
                      ) : '-'}
                    </td>
                    <td style={td}>{item.review || '-'}</td>
                    <td style={td}>
                      {gambar?.length ? (
                        <img
                          src={`http://localhost:3000/uploads/ulasan/${gambar[0]}`}
                          alt="gambar ulasan"
                          style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 6 }}
                        />
                      ) : (
                        <span style={{ color: '#aaa', fontStyle: 'italic' }}>Tidak ada</span>
                      )}
                    </td>
                    <td style={td}>{new Date(item.created_at).toLocaleDateString('id-ID')}</td>
                    <td style={td}>
                      <button
                        onClick={() => {
                          setSelectedId(item.id);
                          setShowModal(true);
                        }}
                        style={buttonStyle('#ff4d4f')}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                );
              }) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: 16, fontStyle: 'italic', color: '#888' }}>
                    Tidak ada ulasan ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1300 }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="card shadow p-4"
            style={{ maxWidth: 400, width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="mb-3 text-center">Konfirmasi Hapus</h5>
            <p className="text-center">Yakin ingin menghapus ulasan ini?</p>
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-secondary w-50 me-2" onClick={() => setShowModal(false)}>Batal</button>
              <button className="btn btn-danger w-50 ms-2" onClick={handleConfirmDelete}>Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const th = {
  padding: '6px',
  backgroundColor: '#015E78',
  color: '#fff',
  fontSize: 17,
  textAlign: 'center'
};

const td = {
  padding: '14px 18px',
  textAlign: 'center',
  fontSize: 15,
  borderBottom: '1px solid #eaeaea',
  backgroundColor: '#fff',
  color: '#444',
};

const buttonStyle = (bg) => ({
  backgroundColor: bg,
  color: '#fff',
  border: 'none',
  padding: '8px 12px',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 500,
});

export default DaftarUlasan;

```

# src/pages/admin/DaftarUser.jsx

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultProfileImage from "../../assets/profil.png";
import { useNotifikasi } from '../../components/common/Notifikasi';

const DaftarUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { showNotif } = useNotifikasi();

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return console.log('Token tidak ditemukan');

      const response = await axios.get('http://localhost:3000/api/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error detail:', error);
      setMessage('Gagal mengambil data user: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  
 const confirmDelete = (userId) => {
    setSelectedUserId(userId);
    setShowModal(true);
  };

  const handleConfirm = async () => {
    if (!selectedUserId) return;

    try {
      const token = localStorage.getItem('token');
      if (!token) return console.log('Token tidak ditemukan');

      await axios.delete(`http://localhost:3000/api/users/${selectedUserId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== selectedUserId));
      showNotif('Akun pengguna berhasil dihapus.');
    } catch (error) {
      console.error('Error hapus user:', error);
      showNotif('Gagal menghapus akun pengguna: ' + (error.response?.data?.message || error.message));
    } finally {
      setShowModal(false);
      setSelectedUserId(null);
    }
  };

  const getProfileImage = (photoURL) => {
    return photoURL && photoURL.trim() !== "" ? photoURL : defaultProfileImage;
  };

  const filteredUsers = users.filter((user) =>
    user.id.toString().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h3 style={styles.title}>📋 Daftar Pengguna</h3>
 {message && <p style={styles.message}>{message}</p>}
        <input
          type="text"
          placeholder="🔍 Cari Berdasarkan ID, Username atau Email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />

        {loading ? (
          <p style={styles.loading}>⏳ Memuat data...</p>
        ) : (
          <>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>ID</th>
                    <th style={styles.th}>Foto</th>
                    <th style={styles.th}>Username</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user.id} style={styles.trHover}>
                        <td style={styles.td}>{user.id}</td>
                        <td style={styles.td}>
                          <img
                            src={getProfileImage(user.photoURL)}
                            alt={user.username}
                            style={styles.image}
                          />
                        </td>
                        <td style={styles.td}>{user.username}</td>
                          <td style={styles.td}>{user.email}</td>
                       <td style={styles.td}>
  <button style={styles.button} onClick={() => confirmDelete(user.id)}>
    Hapus
  </button>
</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" style={styles.noUser}>
                        Tidak ada user ditemukan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
           {/* Modal Konfirmasi */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 9999 }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="card shadow p-4"
            style={{ maxWidth: '400px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="mb-3 text-center">Konfirmasi</h5>
            <p className="text-center">Yakin ingin menghapus user ini?</p>
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-secondary w-50 me-2" onClick={() => setShowModal(false)}>Batal</button>
              <button className="btn btn-danger w-50 ms-2" onClick={handleConfirm}>Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    // backgroundColor: '#f9fbfd',

  },
  container: {
    width: '100%',
    maxWidth: '1280px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
  },
  title: {
    marginBottom: '24px',
    fontSize: '26px',
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  searchInput: {
    padding: '12px 16px',
    marginBottom: '24px',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  loading: {
    textAlign: 'center',
    fontSize: '16px',
    color: '#666',
  },
  message: {
    backgroundColor: '#ffdddd',
    color: '#a00',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '16px',
    textAlign: 'center',
    fontWeight: '500',
  },
  tableWrapper: {
    overflowX: 'auto',
    borderRadius: '8px',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
    borderRadius: '8px',
    overflow: 'hidden',
  },
  th: {
    padding: '14px 18px',
    backgroundColor: '#015E78',
    color: '#fff',
    fontSize: '17px',
    textAlign: 'center',
  },
  trHover: {
    transition: 'background 0.2s',
    cursor: 'pointer',
  },
  td: {
    padding: '14px 18px',
    borderBottom: '1px solid #eaeaea',
    fontSize: '15px',
    color: '#444',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  image: {
    width: '48px',
    height: '48px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
  },
  button: {
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.3s',
  },
  noUser: {
    textAlign: 'center',
    padding: '16px',
    fontStyle: 'italic',
    color: '#888',
  },
};

export default DaftarUser;

```

# src/pages/admin/Dashboard.jsx

```jsx
import React from "react";
import CardDashboard from "../../components/adminComponents/DashboardComponents/CardDashboard";

const Dashboard = () => {
  return (
    <div className="container mt-1" style={{ maxWidth: 1310 }}>
      {/* Kotak penuh di atas */}
      <div
        className="card mb-4 shadow-sm"
        style={{ backgroundColor: "#015E78", color: "white" }}
      >
        <div className="card-body">
          <h5 className="card-title mb-1">Dashboard</h5>
          {/* <p className="card-text mb-0" style={{ fontSize: "0.9rem", color: "white" }}>
            Selamat datang, Admin!
          </p> */}
        </div>
      </div>

      {/* Card utama */}
      <CardDashboard />
    </div>
  );
};

export default Dashboard;

```

# src/pages/admin/KelolaWisata.jsx

```jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DaftarWisata from '../user/DaftarWisata';
import ButtonTambahWisata from '../../components/adminComponents/kelolawisataComponents/ButtonTambahWisata';

const KelolaWisata = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [wisataList, setWisataList] = useState([]);

  const fetchWisataData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/wisata');
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

```

# src/pages/admin/LaporanKomentar.jsx

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultProfileImage from '../../assets/profil.png';
import { useNavigate } from 'react-router-dom';

const LaporanKomentar = () => {
  const [laporan, setLaporan] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const fetchLaporan = async () => {
    try {
      const res = await axios.get('/api/admin/laporan-komentar', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLaporan(res.data);
    } catch (err) {
      setMessage('Gagal memuat laporan komentar.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLaporan();
  }, []);

  const hapusLaporan = async (laporanId) => {
    try {
      await axios.delete(`/api/admin/laporan-komentar/${laporanId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchLaporan();
    } catch (err) {
      setMessage('Gagal menghapus laporan.');
    }
  };

  const hapusKomentar = async (komentarId) => {
    try {
      await axios.delete(`/api/admin/laporan-komentar/komentar/${komentarId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchLaporan();
    } catch (err) {
      setMessage('Gagal menghapus komentar.');
    }
  };

  const handleConfirm = async () => {
  try {
    if (modalType === 'laporan') {
      await hapusLaporan(selectedId);
    } else if (modalType === 'komentar') {
      await hapusKomentar(selectedId);
    }
    setShowModal(false);
    setSelectedId(null);
  } catch (err) {
    console.error('Gagal:', err);
  }
};

  const filtered = laporan.filter((item) =>
    item.pelapor_username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.pemilik_username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.isi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.alasan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.judul_wisata.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{
        width: '100%',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
      }}>
        <h2 style={{ marginBottom: '24px', fontSize: '25px', fontWeight: '600', textAlign: 'center', color: '#333' }}>
          📢 Daftar Laporan Komentar
        </h2>

        {message && (
          <p style={{
            backgroundColor: '#ffdddd',
            color: '#a00',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '16px',
            textAlign: 'center',
            fontWeight: '500',
          }}>{message}</p>
        )}

        <input
          type="text"
          placeholder="🔍 Cari komentar, pelapor, alasan, atau wisata"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '12px 16px',
            marginBottom: '24px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            outline: 'none',
          }}
        />

        {loading ? (
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666' }}>⏳ Memuat laporan...</p>
        ) : (
          <div style={{ overflowX: 'auto', borderRadius: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                   <th style={th}>terlapor</th>
                  <th style={th}>komentar</th>
                  <th style={th}>wisata</th>
                  <th style={th}>pelapor</th>
                  <th style={th}>alasan</th>
                  <th style={th}>aksi</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((item) => (
                    <tr key={item.laporan_id}>
                      <td style={td}>
                        <img
                          src={item.foto_komentar || defaultProfileImage}
                          alt="profil"
                          style={{
                            width: '48px',
                            height: '48px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                          }}
                        />
                        <div>
            <strong>{item.pemilik_username}</strong>
            <br />
            {/* <span className="text-sm text-gray-600">
              {item.pemilik_email}</span> */}
          </div>
                      </td>
                      <td style={td}>{item.isi}</td>
                      <td style={td}>
                        {item.judul_wisata}
                        <br />
                        <button
                         onClick={() => navigate(`/wisata/${item.id_wisata}#komentar-${item.komentar_id}`)}
                          style={{
                            marginTop: '6px',
                            padding: '6px 10px',
                            fontSize: '13px',
                            backgroundColor: '#015E78',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                          }}
                        >
                          Cek Komentar
                        </button>
                      </td>
                      <td style={td}>
                        <strong>{item.pelapor_username}</strong><br />
                        <span style={{ fontSize: '12px', color: '#666' }}>
                          {item.pelapor_email}</span>
                      </td>
                      <td style={td}>{item.alasan}</td>
                      <td style={td}>
                        <button
                      onClick={() => {
                            setSelectedId(item.laporan_id);
                            setModalType('laporan');
                            setShowModal(true);
                                   }}
                          style={buttonStyle('#015E78')}
                        >
                          Hapus Laporan
                        </button>
                        <br />
                        <button
                     onClick={() => {
                      setSelectedId(item.komentar_id);
                                   setModalType('komentar');
                                   setShowModal(true);
                                 }}
                          style={{ ...buttonStyle('#ff4d4f'), marginTop: '6px' }}
                        >
                          Hapus Komentar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '16px', fontStyle: 'italic', color: '#888' }}>
                      Tidak ada laporan ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            
          </div>
        )}
      </div>
    {showModal && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1300 }}
    onClick={() => setShowModal(false)}
  >
    <div
      className="card shadow p-4"
      style={{ maxWidth: '400px', width: '100%' }}
      onClick={(e) => e.stopPropagation()}
    >
      <h5 className="mb-3 text-center">Konfirmasi</h5>
      <p className="text-center">
        {modalType === 'laporan'
          ? 'Yakin ingin menghapus laporan ini?'
          : 'Yakin ingin menghapus komentar ini?'}
      </p>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary w-50 me-2" onClick={() => setShowModal(false)}>Batal</button>
        <button className="btn btn-danger w-50 ms-2" onClick={handleConfirm}>Ya, Hapus</button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

const th = {
  padding: '14px 18px',
  backgroundColor: '#015E78',
  color: '#fff',
  fontSize: '17px',
  textAlign: 'center'
};

const td = {
  padding: '14px 18px',
  textAlign: 'center',
  fontSize: '15px',
  borderBottom: '1px solid #eaeaea',
  backgroundColor: '#fff',
  color: '#444',
};

const buttonStyle = (bg) => ({
  backgroundColor: bg,
  color: '#fff',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
});

export default LaporanKomentar;

```

# src/pages/auth/AuthContext.jsx

```jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async (token) => {
    try {
      const res = await axios.get('http://localhost:3000/api/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      localStorage.setItem('role', res.data.role);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (token) => {
    localStorage.setItem('token', token);
    await fetchUser(token);
  };

 const logout = async () => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setUser(null); // pastikan ini ada
    return true;   // ⬅️ Tambahkan return true
  } catch (error) {
    console.error('Logout error:', error);
    return false;  // ⬅️ Tambahkan return false jika error
  }
};


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) fetchUser(token);
    else setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, setUser, fetchUser}}>
      {children}
    </AuthContext.Provider>
  );
};

```

# src/pages/auth/Login.jsx

```jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Loading from '../../components/common/Loading';

const Login = ({ show, onClose, toRegister }) => {
const [formData, setFormData] = useState({ identifier: '', password: '' });
const [message, setMessage] = useState('');
const [loading, setLoading] = useState(false);
const { login } = useContext(AuthContext);
const navigate = useNavigate();
const handleChange = (e) => {
  setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
    const res = await axios.post('http://localhost:3000/api/login', formData);
    setMessage('Login berhasil!');
    setTimeout(async () => {
    await login(res.data.token); 
    onClose();
    if (res.data.role === 'admin') {navigate('/dashboard');} }, 1500); } catch (err) 
      {
      setMessage(err.response?.data?.message || 'Login gagal. Coba lagi.');
      }
      finally {
      setLoading(false);
      }
  };
  if (!show) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className="btn-close float-end mt-1" onClick={onClose}></button>
        <h4 className="text-center mb-3">Login</h4>
        {message && <div className="alert alert-info">{message}
      </div>}
        <form onSubmit={handleSubmit}>

      <div className="mb-1">
        <label className="form-label">Email atau Username</label>
          <input name="identifier" type="text" className="form-control"
              value={formData.identifier} onChange={handleChange}
              required
              placeholder="Masukkan Username/Email" style={{fontSize:'15px'}}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Kata Sandi</label>
        <input name="password" type="password" className="form-control" 
         value={formData.password} onChange={handleChange}
         required
         placeholder="Masukkan Kata Sandi" style={{fontSize:'15px'}}/>
      </div>
          
        <button className="btn btn-dark w-100" type="submit">Login</button></form>
          <p className="text-center mt-2"> Belum punya akun?{' '}
          <button type="button" onClick={() => {
              onClose();
              toRegister();
            }}
            className="btn btn-link p-0 mb-1"
            style={{ fontWeight: 600 }}>Daftar
          </button>
        </p>
      </div>
    </div>
  );
};

const styles = {
  overlay: { 
    position: 'fixed', 
    top: 0, left: 0, 
    width: '100vw', 
    height: '100vh', 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    display: 'flex', justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 9999},

  card: { background: '#fff', 
    padding: '20px', 
    borderRadius: '10px', 
    width: '100%',
    maxWidth: '370px', 
    position: 'relative', 
    boxShadow: '0 0 20px rgba(0,0,0,0.3)'}};

export default Login;

```

# src/pages/auth/Register.jsx

```jsx
import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ show, onClose, toLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/register', formData);
      setMessage('Registrasi berhasil! Silakan login.');
      setFormData({ username: '', email: '', password: '' });
      setTimeout(() => {
        toLogin();
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registrasi gagal. Coba lagi.');
    }
  };

  if (!show) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className="btn-close float-end mt-2" onClick={onClose}></button>
        <h4 className="text-center mb-2">Register</h4>

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="form-label">Username</label>
            <input 
              name="username" 
              type="text" 
              className="form-control" 
              value={formData.username} 
              onChange={handleChange} 
              required 
              autoFocus
              placeholder="Masukkan Username"
              style={{fontSize:'15px'}}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input 
              name="email" 
              type="email" 
              className="form-control" 
              value={formData.email} 
              onChange={handleChange} 
              required
              placeholder="Masukkan Email"
              style={{fontSize:'15px'}}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Kata Sandi</label>
            <input 
              name="password" 
              type="password" 
              className="form-control" 
              value={formData.password} 
              onChange={handleChange} 
              required 
              placeholder="Masukkan Kata Sandi"
              style={{fontSize:'15px'}}
            />
          </div>
          <button className="btn btn-dark w-100" type="submit">Register</button>
        </form>

        <p className="text-center mt-2">
          Sudah punya akun?{' '}
          <button
            type="button"
            onClick={() => {
              onClose();
              toLogin();
            }}
            className="btn btn-link p-0 mb-1"
            style={{ fontWeight: 600 }}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1600,
    overflowY: 'auto',
    padding: '10px',
  },
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '370px',
    position: 'relative',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    zIndex: 1500,
    margin: '10px',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
};

export default Register;

```

# src/pages/Chatbot/Chatbot.jsx

```jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../pages/auth/AuthContext';
import NavbarChatbot from '../../components/chatbotComponents/NavbarChatbot';
import PopupChatbot from '../../components/chatbotComponents/PopupChatbot';

const Chatbot = ({ buttonRight }) => {

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '105px',
        right: buttonRight,
        width: '320px',
        height: '550px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1099,
        overflow: 'hidden',
      }}
    >
      <NavbarChatbot />
      <PopupChatbot/>
    </div>
  );
};

export default Chatbot;

```

# src/pages/user/DaftarWisata.jsx

```jsx
import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardWisata from '../../components/common/cardComponents/CardWisata';
import { Icon } from '@iconify/react';
import Loading from '../../components/common/Loading';

const daftarKategori = [
  'Dieng',
  'Wisata Alam',
  'Curug/Air Terjun',
  'Wisata Budaya',
  'Wisata Rekreasi',
  'Wisata Kuliner',
  'Wisata Edukasi',
  'Desa Wisata'
];

const sortOptions = [
  'Baru Ditambahkan',
  'Rating Tertinggi',
  'Like Tertinggi',
  'Simpan Favorit Tertinggi'
];

const DaftarWisata = ({ data = [], onActionSuccess }) => {
  const [allWisata, setAllWisata] = useState([]);
  const [filteredWisata, setFilteredWisata] = useState([]);
  const [wisataList, setWisataList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [kategoriTerpilih, setKategoriTerpilih] = useState([]);
  const [draftKategori, setDraftKategori] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sort states: draft = sementara saat centang di dropdown, sortTerpilih = final yang dipakai saat TERAPKAN
  const [draftSort, setDraftSort] = useState('');
  const [sortTerpilih, setSortTerpilih] = useState('');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const kategoriDariURL = queryParams.get('kategori');
  const searchQuery = queryParams.get('search');
  const sortDariURL = queryParams.get('sort');

  const dropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);
  const skipURLSyncRef = useRef(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setWisataList(data);
      setAllWisata(data);
      setFilteredWisata(data);
    } else if (wisataList.length === 0) {
      fetchDataWisata();
    }
  }, [data]);

  const fetchDataWisata = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:3000/api/wisata');
      const wisataData = await res.json();
      setWisataList(wisataData);
      setAllWisata(wisataData);
      setFilteredWisata(wisataData);
    } catch (err) {
      console.error('Gagal memuat data wisata:', err);
      setLoading(false);
    }
  };

  // --- sync from URL (only set drafts when URL changes, avoid loop with skipURLSyncRef) ---
  useEffect(() => {
    if (skipURLSyncRef.current) {
      // reset flag and skip
      skipURLSyncRef.current = false;
      return;
    }

    if (searchQuery && searchQuery !== searchTerm) {
      setSearchInput(searchQuery);
      setSearchTerm(searchQuery);
    }

    if (kategoriDariURL) {
      const kategoriArr = kategoriDariURL.includes(',')
        ? kategoriDariURL.split(',').map(k => k.trim())
        : [kategoriDariURL];
      if (JSON.stringify(draftKategori) !== JSON.stringify(kategoriArr)) {
        setDraftKategori(kategoriArr);
        setKategoriTerpilih(kategoriArr); // langsung set final too so UI matches URL
      }
    }

    if (sortDariURL) {
      if (draftSort !== sortDariURL) {
        setDraftSort(sortDariURL);
        setSortTerpilih(sortDariURL); // keep final in sync with url on load
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, kategoriDariURL, sortDariURL]);

  // --- click outside to close dropdowns (handles both) ---
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setSortDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCheckboxChange = (kategori) => {
    if (kategori === 'Semua Wisata') {
      setDraftKategori(draftKategori.includes('Semua Wisata') ? [] : ['Semua Wisata']);
    } else {
      const isChecked = draftKategori.includes(kategori);
      const newKategori = isChecked
        ? draftKategori.filter(k => k !== kategori)
        : [...draftKategori.filter(k => k !== 'Semua Wisata'), kategori];
      setDraftKategori(newKategori);
    }
  };

  // draftSort is temporary selection. Use single-select behavior (like you wanted)
  const handleDraftSortChange = (option) => {
    setDraftSort(draftSort === option ? '' : option);
  };

  // APPLY button: set final values (searchTerm, kategoriTerpilih, sortTerpilih) and update URL
  const handleApplySearchAndFilter = () => {
    // Set final states from drafts
    setSearchTerm(searchInput.trim());
    setKategoriTerpilih(draftKategori);
    setSortTerpilih(draftSort); // <-- crucial: only when TERAPKAN is pressed

    // close dropdowns
    setDropdownOpen(false);
    setSortDropdownOpen(false);

    skipURLSyncRef.current = true;
    const params = new URLSearchParams(location.search);

    if (searchInput.trim()) params.set('search', searchInput.trim());
    else params.delete('search');

    if (draftKategori.length > 0) params.set('kategori', draftKategori.join(','));
    else params.delete('kategori');

    if (draftSort) params.set('sort', draftSort);
    else params.delete('sort');

    navigate(`?${params.toString()}`, { replace: true });
  };

  // useEffect: filter (by final searchTerm & kategoriTerpilih) and THEN sort (by sortTerpilih).
  // IMPORTANT: depends on sortTerpilih (final) so sorting only runs after Apply changed it.
  useEffect(() => {
    const timer = setTimeout(() => {
      const result = allWisata.filter((item) => {
        const cocokSearch = item.judul?.toLowerCase().includes(searchTerm.toLowerCase());
        let itemKategori = [];
        try {
          itemKategori = item.kategori ? JSON.parse(item.kategori) : [];
        } catch {
          itemKategori = [];
        }
        const cocokKategori =
          kategoriTerpilih.length === 0 ||
          kategoriTerpilih.includes('Semua Wisata') ||
          kategoriTerpilih.some(k => itemKategori.includes(k));

        return cocokSearch && cocokKategori;
      });

      // SORT based on final selection (sortTerpilih) — will only change after TERAPKAN
      switch (sortTerpilih) {
        case 'Baru Ditambahkan':
          result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          break;
        case 'Rating Tertinggi':
          result.sort((a, b) => (b.average_rating || 0) - (a.average_rating || 0));
          break;
        case 'Like Tertinggi':
          result.sort((a, b) => (b.total_likes || 0) - (a.total_likes || 0));
          break;
        case 'Simpan Favorit Tertinggi':
          result.sort((a, b) => (b.total_favorit || 0) - (a.total_favorit || 0));
          break;
        default:
          break;
      }

      setFilteredWisata(result);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [allWisata, searchTerm, kategoriTerpilih, sortTerpilih]);

  // If loading true show Loading
  if (loading) {
    return <Loading />;
  }

  // --- Render ---
  return (
    <main className="mx-auto my-4 px-4" style={{ maxWidth: '1150px' }}>
      <div className="d-flex flex-column flex-sm-row align-items-start gap-2 gap-sm-3 mb-3" style={{ maxWidth: '1100px', margin: '0 auto', }}>
        <input
          type="text"
          className="form-control"
          placeholder="Cari wisata..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleApplySearchAndFilter(); }}
        />

        <div className="d-flex flex-column flex-sm-row gap-2 w-100">
          {/* KATEGORI DROPDOWN */}
          <div ref={dropdownRef} className="position-relative flex-grow-1">
            <input
              type="text"
              readOnly
              className="form-control w-100"
              placeholder="Filter kategori"
              value={draftKategori.length > 0 ? draftKategori.join(', ') : ''}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{ cursor: 'pointer' }}
              onFocus={e => e.target.blur()}
            />
            <span className="position-absolute top-50 end-0 translate-middle-y pe-3" style={{ pointerEvents: 'none', color: '#555', fontSize: '12px' }}>
              ▼
            </span>

            {dropdownOpen && (
              <div className="border rounded bg-white shadow-sm p-3 position-absolute w-100" style={{ top: 'calc(100% + 5px)', zIndex: 1000, maxHeight: '220px', overflowY: 'auto' }}>
                {daftarKategori.map((kategori, idx) => (
                  <div key={idx} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`kategori-${idx}`}
                      checked={draftKategori.includes(kategori)}
                      onChange={() => handleCheckboxChange(kategori)}
                    />
                    <label className="form-check-label" htmlFor={`kategori-${idx}`}>
                      {kategori}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SORT DROPDOWN (PERSIS KATEGORI, TAPI SINGLE-SELECT -> DRAFT) */}
          <div ref={sortDropdownRef} className="position-relative flex-grow-1">
            <input
              type="text"
              readOnly
              className="form-control w-100"
              placeholder="Urutkan berdasarkan"
              value={draftSort}
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              style={{ cursor: 'pointer' }}
              onFocus={e => e.target.blur()}
            />
            <span className="position-absolute top-50 end-0 translate-middle-y pe-3" style={{ pointerEvents: 'none', color: '#555', fontSize: '12px' }}>
              ▼
            </span>

            {sortDropdownOpen && (
              <div className="border rounded bg-white shadow-sm p-3 position-absolute w-100" style={{ top: 'calc(100% + 5px)', zIndex: 1000, maxHeight: '220px', overflowY: 'auto' }}>
                {sortOptions.map((option, idx) => (
                  <div key={idx} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`sort-${idx}`}
                      checked={draftSort === option}
                      onChange={() => handleDraftSortChange(option)}
                    />
                    <label className="form-check-label" htmlFor={`sort-${idx}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TOMBOL TERAPKAN — PANGGIL handleApplySearchAndFilter */}
          <button
            type="button"
            className="btn btn-primary mt-2 mt-sm-0"
            style={{ backgroundColor: '#015E78', alignSelf: 'flex-start' }}
            onClick={handleApplySearchAndFilter}
          >
            Terapkan
          </button>
        </div>
      </div>

      {(searchTerm || kategoriTerpilih.length > 0) && (
        <p className="text-center mb-4">
          Menampilkan hasil
          {searchTerm && <> pencarian untuk <b>"{searchTerm}"</b></>}
          {kategoriTerpilih.length > 0 && (
            <>
              {searchTerm ? ' di kategori ' : ' untuk kategori '}
              <b>{kategoriTerpilih.join(', ')}</b>
            </>
          )}
        </p>
      )}

      {filteredWisata.length > 0 ? (
        <div className="row d-flex flex-wrap justify-content-start">
          {filteredWisata.map((item) => (
            <CardWisata
              key={item.id}
              item={item}
              showOptionsMenu={false}
              onActionSuccess={fetchDataWisata}
            />
          ))}
        </div>
      ) : (
        <div className="mb-4 mt-5 d-flex flex-column align-items-center text-muted">
          <Icon icon="hugeicons:album-not-found-01" width={50} />
          <h5 className="mt-2 fw-semibold">Wisata tidak ditemukan</h5>
          <p className="text-sm">Coba gunakan kata kunci atau kategori lain</p>
        </div>
      )}
    </main>
  );
};

export default DaftarWisata;

```

# src/pages/user/DetailWisata.jsx

```jsx
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
    const resDetail = await fetch(`http://localhost:3000/api/wisata/${id}`);
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

```

# src/pages/user/Home.jsx

```jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import CategoryCard from '../../components/common/cardComponents/CategoryCard';
import BannerCarrousel from '../../components/userComponents/homeComponents/BannerCarrousel';
import SearchBar from '../../components/userComponents/homeComponents/SearchBar';
import TombolWisataLainnya from '../../components/userComponents/homeComponents/TombolWisataLainnya';
import RatingTertinggi from '../../components/userComponents/homeComponents/RatingTertinggi';
import LikeTerbanyak from '../../components/userComponents/homeComponents/LikeTerbanyak';
import SistemRekomendasi from '../../components/SistemRekomendasi/SistemRekomendasi';
import FavoritTerbanyak from '../../components/userComponents/homeComponents/FavoritTerbanyak';

const Home = () => {
const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
const [loading, setLoading] = useState(true);
const navigate = useNavigate();

useEffect(() => {
const handleResize = () => { setIsDesktop(window.innerWidth >= 992);};
window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
}, []);

useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300); // 1 detik
    return () => clearTimeout(timer);
  }, []);

if (loading) {
  return <Loading />;}

return (
<>
<BannerCarrousel />
<SearchBar/>

<main
  className="my-3 mx-auto"
  style={{ width: '100%',maxWidth: '1180px', 
  paddingLeft: isDesktop ? '32px' : '12px', 
  paddingRight: isDesktop ? '32px' : '12px'}}>
  <SistemRekomendasi/>
<div className="text-center mb-3 mt-2"><TombolWisataLainnya/> </div>

<section className="my-4">
  <h5 className="text-left mb-3">
    <b style={{fontSize:'clamp(16px, 2.5vw, 20px)'}}> Berdasarkan Kategori</b>
  </h5>
  <CategoryCard />
</section>
        
<RatingTertinggi/>
<LikeTerbanyak/>
<FavoritTerbanyak/>
  
<div className="text-center mb-3 mt-2"><TombolWisataLainnya/> </div>

</main>
</>
);
};

export default Home;
```

# src/pages/user/LihatProfil.jsx

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import profilePlaceholder from '../../assets/profil.png';
import CardWisata from '../../components/common/cardComponents/CardWisata';
import { Icon } from '@iconify/react';
import Loading from '../../components/common/Loading';
import { AuthContext } from '../../pages/auth/AuthContext';

const LihatProfil = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [disukai, setDisukai] = useState([]);
  const [disimpan, setDisimpan] = useState([]);
  const [activeTab, setActiveTab] = useState('disukai');
  const [showPreview, setShowPreview] = useState(false);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfil = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`/api/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error('Gagal ambil data user:', err);
        } finally {
      setLoading(false);
    }
  };
    fetchProfil();
  }, [id]);

  useEffect(() => {
    const fetchWisataUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:3000/api/user-wisata-lain?id=${id}`,
           {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDisukai(res.data.disukai || []);
        setDisimpan(res.data.disimpan || []);
      } catch (err) {
        console.error('Gagal ambil wisata:', err);
      }
    };

    fetchWisataUser();
  }, [id]);

  if (!user) return <Loading />;

  return (
    <div className="container mt-3 text-center">
      <img
        src={user.photoURL || profilePlaceholder}
        alt="Foto Profil"
        className="rounded-circle"
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'cover',
          border: '2px solid #ccc',
          cursor: user.photoURL ? 'pointer' : 'default',
        }}
        onClick={() => user.photoURL && setShowPreview(true)}
      />

      <h5 className="mt-2">{user.username}</h5>
    <div
  className="text-muted"
  style={{
    borderBottom: '1px solid #ccc',
    paddingBottom: '4px'
  }}>
</div>


  <div className="d-flex justify-content-center" >
  <button
    onClick={() => setActiveTab('disukai')}
    className={`w-44 border-bottom-2 py-3 ${activeTab === 'disukai' ? 'border-accent-1' : ''}`}
    style={{
      border: 'none',
      borderBottom: activeTab === 'disukai' ? '2px solid #0d6efd' : '2px solid transparent',
      background: 'transparent',
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      fontWeight: activeTab === 'disukai' ? '600' : '400',
    }}
  >
    Wisata Disukai
  </button>

  <button
    onClick={() => setActiveTab('disimpan')}
    className={`w-44 border-bottom-2 py-3 ${activeTab === 'disimpan' ? 'border-accent-1' : ''}`}
    style={{
      border: 'none',
      borderBottom: activeTab === 'disimpan' ? '2px solid #0d6efd' : '2px solid transparent',
      background: 'transparent',
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      fontWeight: activeTab === 'disimpan' ? '600' : '400',
    }}
  >
    Wisata Disimpan
  </button>
</div>


      <div className="row d-flex flex-wrap justify-content-start mt-4">
        {(activeTab === 'disukai' ? disukai : disimpan).length > 0 ? (
          (activeTab === 'disukai' ? disukai : disimpan).map((item) => (
            <CardWisata key={item.id} item={item} showOptionsMenu={false} />
          ))
        ) : (
          <p className="mb-5 mt-3 d-flex flex-column align-items-center text-muted" style={{minHeight:'203px'}}>
                      <Icon icon="hugeicons:album-not-found-01" width={60} />
            Belum ada wisata yang {activeTab === 'disukai' ? 'disukai' : 'disimpan'}.
          </p>
        )}
      </div>

      {/* Modal Preview Foto */}
      {showPreview && (
          <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1250 }}
          onClick={() => setShowPreview(false)}
        >
            <div className="position-relative" onClick={(e) => e.stopPropagation()} 
          style={{
            backgroundColor:'white',
            padding:'5px'
          }}>
                 <img
              src={user.photoURL}
              alt="Preview"
              className="img-fluid"
              style={{
                width: 'min(80vw, 500px)',
                height: 'min(80vw, 500px)',
                 borderRadius: '50%' }}
            />
              </div>
            </div>
        
      )}
    </div>
  );
};

export default LihatProfil;

```

# src/pages/user/ProfilUser.jsx

```jsx
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import profilePlaceholder from '../../assets/profil.png';
import CardWisata from '../../components/common/cardComponents/CardWisata';
import { Icon } from '@iconify/react';
import { AuthContext } from '../auth/AuthContext';
import { useNotifikasi } from '../../components/common/Notifikasi';
import Loading from '../../components/common/Loading';

const ProfilUser = () => {
  const { user, setUser, fetchUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('disukai');
  const [disukai, setDisukai] = useState([]);
  const [disimpan, setDisimpan] = useState([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { showNotif } = useNotifikasi();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (error) {
        console.error('Gagal mengambil data user:', error);
       } finally {
      setLoading(false);
    }
  };
    fetchUser();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:3000/api/user-wisata', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setDisukai(res.data.disukai || []);
        setDisimpan(res.data.disimpan || []);
      })
      .catch((err) => {
        console.error('GAGAL AMBIL:', err.response?.data || err.message);
      });
  }, []);

  const handleFotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('photo', file);

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:3000/api/update-photo', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setUser((prev) => ({
        ...prev,
        photoURL: res.data.photoURL,
      }));
       showNotif('Foto Profil Berhasil Diperbarui', 'success');
    } 
    catch (err) {
      console.error('Gagal upload foto:', err.response?.data || err.message);
    }
  };

  const handleDeletePhoto = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3000/api/delete-photo', {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setShowConfirmDelete(false);
      setShowPreview(false);
      await fetchUser(token);
      showNotif('Foto Profil Berhasil Dihapus', 'success');
    } catch (err) {
      console.error('Gagal hapus foto:', err);
    }
  };

 if (loading) return <Loading />;

  const isDefaultPhoto = !user.photoURL;

  return (
    <main
        className="my-3 mx-auto"
        style={{
          width: '100%',
          maxWidth: '1100px',
        }}
      >
    <div className="container mt-3 text-center">
      {/* FOTO PROFIL */}
      <div
        className="position-relative d-inline-block"
        style={{ width: '100px', height: '100px' }}
      >
        <img
          src={user.photoURL || profilePlaceholder}
          alt="Foto Profil"
          className="rounded-circle"
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            // border: '2px solid #ccc',
            cursor: isDefaultPhoto ? 'pointer' : 'pointer',
          }}
          onClick={() => {
            if (!isDefaultPhoto) setShowPreview(true);
          }}
        />

        {/* OVERLAY “+” jika foto masih default */}
        {isDefaultPhoto && (
          <>
           <div
  className="position-absolute top-50 start-50 translate-middle rounded-circle d-flex justify-content-center align-items-center"
  style={{
    width: '100px',
    height: '100px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
  }}
  onClick={() => document.getElementById('uploadFotoBaru').click()}
>
  <span
    style={{
      color: 'white',
      fontSize: '3.5rem',
      fontWeight: 300,
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1,
    }}
  >
    +
  </span>
</div>


            <input
              type="file"
              accept="image/*"
              id="uploadFotoBaru"
              style={{ display: 'none' }}
              onChange={handleFotoChange}
            />
          </>
        )}
      </div>

      <h5 className="mt-2">{user.username}</h5>
      <p className="mt-1">{user.email}</p>
      <div
        className="text-muted"
        style={{
          borderBottom: '1px solid #ccc',
        }}
      ></div>

     {/* TAB BUTTON */}
<div className="d-flex justify-content-center" >
  <button
    onClick={() => setActiveTab('disukai')}
    className={`w-44 border-bottom-2 py-3 ${activeTab === 'disukai' ? 'border-accent-1' : ''}`}
    style={{
      border: 'none',
      borderBottom: activeTab === 'disukai' ? '2px solid #0d6efd' : '2px solid transparent',
      background: 'transparent',
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      fontWeight: activeTab === 'disukai' ? '600' : '400',
    }}
  >
    Wisata Disukai
  </button>

  <button
    onClick={() => setActiveTab('disimpan')}
    className={`w-44 border-bottom-2 py-3 ${activeTab === 'disimpan' ? 'border-accent-1' : ''}`}
    style={{
    
      border: 'none',
      borderBottom: activeTab === 'disimpan' ? '2px solid #0d6efd' : '2px solid transparent',
      background: 'transparent',
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      fontWeight: activeTab === 'disimpan' ? '600' : '400',
    }}
  >
    Wisata Disimpan
  </button>
</div>


      {/* LIST WISATA */}
      <div className="row d-flex flex-wrap justify-content-start mt-4">
        {(activeTab === 'disukai' ? disukai : disimpan).length > 0 ? (
          (activeTab === 'disukai' ? disukai : disimpan).map((item) => (
            <CardWisata key={item.id} item={item} showOptionsMenu={false} />
          ))
        ) : (
          <p
            className="mb-5 mt-3 d-flex flex-column align-items-center text-muted"
            style={{ minHeight: '203px' }}
          >
            <Icon icon="hugeicons:album-not-found-01" width={60} />
            Belum ada wisata yang {activeTab === 'disukai' ? 'disukai' : 'disimpan'}.
          </p>
        )}
      </div>

      {/* MODAL PREVIEW */}
      {showPreview && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1250 }}
          onClick={() => setShowPreview(false)}
        >
          <div
            className="position-relative"
            onClick={(e) => e.stopPropagation()}
            style={{
              // backgroundColor: 'white',
              padding: '5px',
            }}
          >
            <img
              src={user.photoURL}
              alt="Preview"
              className="img-fluid"
              style={{
                width: 'min(80vw, 500px)',
                height: 'min(80vw, 500px)',
                borderRadius: '50%',
              }}
            />

 {/* Tombol Aksi di kanan bawah */}
<div
  className="position-absolute bottom-0 end-0 m-2 d-flex gap-2"
  style={{
    zIndex: 20,
    borderRadius: '8px',
    padding: '6px 6px',
  }}
>
  {/* Tombol Ubah */}
  <input
    type="file"
    accept="image/*"
    id="uploadFotoUbah"
    style={{ display: 'none' }}
    onChange={handleFotoChange}
  />
  <label
    htmlFor="uploadFotoUbah"
    className="btn"
    style={{
      backgroundColor: '#015E78',
      color: 'white',
      border: 'none',
    }}
  >
    <i className="bi bi-pencil"></i>
  </label>

  {/* Tombol Hapus */}
  <button
    className="btn btn-danger"
    style={{ border: 'none' }}
    onClick={() => setShowConfirmDelete(true)}
  >
    <i className="bi bi-trash"></i>
  </button>
</div>

          </div>
        </div>
      )}

      {/* KONFIRMASI HAPUS */}
      {showConfirmDelete && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1260 }}
        >
          <div className="bg-white p-4 rounded text-center" style={{ maxWidth: '300px' }}>
            <p>Apakah Anda yakin ingin menghapus foto profil?</p>
            <div className="d-flex justify-content-between mt-3">
              
              <button className="btn btn-secondary" onClick={() => setShowConfirmDelete(false)}>
                Batal
              </button>
              <button className="btn btn-danger" onClick={handleDeletePhoto}>
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </main>
  );
};

export default ProfilUser;

```

# vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // arahkan ke backend
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

```

