import React from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchComponent/SearchBar";

const App = () => {
  return (
    <>
      <Header itemsOnCart={10} />
      <SearchBar />
    </>
  );
};

export default App;
