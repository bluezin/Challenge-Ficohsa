import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import ItemDetail from "./ItemDetail";
import Layout from "./Layout";
import List from "./List";

const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/items/search" element={<List />} />
          <Route exact path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
