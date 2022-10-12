import PhonesPageStyled from "./PhonesPageStyled";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSelector } from "react-redux";
import PhoneCard from "../../components/PhoneCard/PhoneCard";
import searchPhonesList from "../../utils/searchPhonesList/searchPhonesList";
import { useState } from "react";
import Pagination from "../../components/Pagionation/Pagination";

const PhonesPage = () => {
  const { cellphones, search } = useSelector((state) => state);
  const [cards, setCards] = useState(0);

  const searchedPhones = searchPhonesList(cellphones, search, cards);

  return (
    <PhonesPageStyled>
      <SearchBar />
      {searchedPhones.length !== 0 && (
        <ul className="phones-card__list">
          {searchedPhones.map((phone) => (
            <li key={phone.id} className="phones-card__item">
              <PhoneCard phone={phone} />
            </li>
          ))}
        </ul>
      )}
      {searchedPhones.length === 0 && <p>Not found any match</p>}
      {searchedPhones.length > 19 && (
        <Pagination cards={cards} setCards={setCards} />
      )}
    </PhonesPageStyled>
  );
};

export default PhonesPage;
