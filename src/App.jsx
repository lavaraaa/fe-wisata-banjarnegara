import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";

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
// import DaftarEvent from "./pages/admin/DaftarEvent";

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
            {/* <Route path="daftarevent" element={<DaftarEvent />} /> */}
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
      <ButtonChatbot />
      <Footer />
    </div>
  );
}


export default App;
