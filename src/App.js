import React from "react";
import Header from "./components/Header/Header";

import useCellphone from "./store/hooks/useCellphone/useCellphone";
import "./App.css";
import PhoneDetailPage from "./pages/PhoneDetailPage/PhoneDetailPage";
import { Navigate, Route, Routes } from "react-router-dom";
import PhonesPage from "./pages/PhonesPage/PhonesPage";

const App = () => {
  const { uploadCellPhones } = useCellphone();

  uploadCellPhones();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<PhonesPage />} />
        <Route path="/product/:id" element={<PhoneDetailPage />} />
      </Routes>
    </>
  );
};

export default App;
