import React from "react";
import { Outlet } from "react-router-dom";

// CSS File :
import "../App.css";

//------------------------
// Public Layout Handler
//------------------------
export const PublicLayout = () => {
  return (
    <>
      {/* ===== Page Content ===== */}
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};
