import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

// const Layout = "";

const Routers = () => {
  return (
    <Routes>
      {/* <Layout> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      {/* </Layout> */}
    </Routes>
  );
};

export default Routers;
