import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        {/* Rendering the children components directly */}
        {/* If you use Outlet, it will render nested routes */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
