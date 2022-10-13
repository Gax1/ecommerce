import React from "react";
import Header from "./components/Header/Header";

import useCellphone from "./store/hooks/useCellphone/useCellphone";
import "./App.css";
import SelectProduct from "./components/SelectProduct/SelectProduct";
import { cellphoneDetailTest } from "./test-utils/utils/test-variables";
import PhoneDetailPage from "./pages/PhoneDetailPage/PhoneDetailPage";

const phone = {
  id: "id",
  options: cellphoneDetailTest[0].options,
};

const App = () => {
  const { uploadCellPhones } = useCellphone();

  uploadCellPhones();

  return (
    <>
      <Header />
      <div className="main-container">
        <PhoneDetailPage />
      </div>
    </>
  );
};

export default App;
