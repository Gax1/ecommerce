import React from "react";
import Header from "./components/Header/Header";
import PhonesPage from "./pages/PhonesPage/PhonesPage";
import useCellphone from "./store/hooks/useCellphone/useCellphone";
import "./App.css";

const App = () => {
  const { uploadCellPhones } = useCellphone();

  uploadCellPhones();

  return (
    <>
      <div className="main-container">
        <Header itemsOnCart={10} />
        <PhonesPage />
      </div>
    </>
  );
};

export default App;
