import React from "react";
import Header from "./components/Header/Header";
import PhonesPage from "./pages/PhonesPage/PhonesPage";
import useCellphone from "./store/hooks/useCellphone/useCellphone";
import "./App.css";
import SelectProduct from "./components/SelectProduct/SelectProduct";
import { cellphoneDetailTest } from "./test-utils/utils/test-variables";

const phone = {
  id: "id",
  options: cellphoneDetailTest[0].options,
};

const App = () => {
  const { uploadCellPhones } = useCellphone();

  uploadCellPhones();

  return (
    <>
      <SelectProduct phone={phone} />
      {/* <div className="main-container">
        <Header itemsOnCart={10} />
        <PhonesPage />
      </div> */}
    </>
  );
};

export default App;
