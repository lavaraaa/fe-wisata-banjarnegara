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
  axios.get("/api/users", {
    headers: { Authorization: `Bearer ${token}` },
  }),
  axios.get("/api/wisata"),
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
      "/api/admin/rating",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setJumlahUlasan(Array.isArray(ulasanRes.data) ? ulasanRes.data.length : 0);

    const komentarRes = await axios.get(
      "/api/admin/komentar",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setJumlahKomentar(Array.isArray(komentarRes.data) ? komentarRes.data.length : 0);

    const laporankomentarRes = await axios.get(
      "/api/admin/laporan-komentar",
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
