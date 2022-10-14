import React, { useEffect } from "react";
import Header from "./components/Header/Header";

import useCellphone from "./store/hooks/useCellphone/useCellphone";
import "./App.css";
import PhoneDetailPage from "./pages/PhoneDetailPage/PhoneDetailPage";
import { Navigate, Route, Routes } from "react-router-dom";
import PhonesPage from "./pages/PhonesPage/PhonesPage";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading/Loading";
import { uploadCellPhonesActionCreator } from "./store/feature/cellphoneSlice/cellphoneSlice";

const App = () => {
  const { uploadCellPhones } = useCellphone();
  const { loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeStamp = localStorage.getItem("timeStamp");
    if (new Date().getHours() > JSON.parse(timeStamp)) {
      uploadCellPhones();
    } else {
      dispatch(
        uploadCellPhonesActionCreator(JSON.parse(localStorage.getItem("data")))
      );
    }
  }, [uploadCellPhones, dispatch]);

  return (
    <>
      {loading && <Loading />}
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
