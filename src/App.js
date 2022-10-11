import React from "react";
import Header from "./components/Header/Header";
import PhoneCard from "./components/PhoneCard/PhoneCard";

const phone = {
  id: "ZmGrkLRPXOTpxsU4jjAcv",
  brand: "Acer",
  model: "Iconia Talk S",
  price: "170",
  imgUrl:
    "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
};

const App = () => {
  return (
    <>
      <Header itemsOnCart={10} />
      <PhoneCard phone={phone} />
    </>
  );
};

export default App;
