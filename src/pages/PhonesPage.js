import PhonesPageStyled from "./PhonesPageStyled";
import SearchBar from "../components/SearchBar/SearchBar";
import { useSelector } from "react-redux";
import PhoneCard from "../components/PhoneCard/PhoneCard";

const PhonesPage = () => {
  const { cellphones, search } = useSelector((state) => state);

  return (
    <PhonesPageStyled>
      <SearchBar />
      {search === ""
        ? cellphones.map((cellphone) => (
            <PhoneCard key={cellphone.id} phone={cellphone} />
          ))
        : cellphones.map(
            (cellphone) =>
              (cellphone.brand.includes(search) ||
                cellphone.model.includes(search)) && (
                <PhoneCard key={cellphone.id} phone={cellphone} />
              )
          )}
    </PhonesPageStyled>
  );
};

export default PhonesPage;
