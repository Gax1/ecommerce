import React from "react";
import Header from "./components/Header/Header";
import PhonesPage from "./pages/PhonesPage";
import useCellphone from "./store/hooks/useCellphone/useCellphone";

const App = () => {
  const { uploadCellPhones } = useCellphone();

  uploadCellPhones();

  return (
    <>
      <Header itemsOnCart={10} />
      <PhonesPage />
    </>
  );
};

export default App;
