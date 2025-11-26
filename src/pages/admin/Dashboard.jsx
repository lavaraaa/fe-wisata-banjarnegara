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
