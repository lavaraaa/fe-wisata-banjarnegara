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
