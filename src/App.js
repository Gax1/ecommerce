import React from "react";
import Header from "./components/Header/Header";
import SearchComponent from "./components/SearchComponent/SearchComponent";

const App = () => {
  return (
    <>
      <Header itemsOnCart={10} />
      <SearchComponent />
    </>
  );
};

export default App;
