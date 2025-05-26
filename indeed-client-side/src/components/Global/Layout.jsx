import React from "react";
import Navbar from "./Navbar";

const Layout = ({ page }) => {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">{page}</main>
    </>
  );
};

export default Layout;
