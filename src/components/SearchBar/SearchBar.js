import { useDispatch, useSelector } from "react-redux";
import { changeSearchActionCreator } from "../../store/feature/searchSlice/searchSlice";
import SearchBarStyled from "./SearchBarStyled";

const SearchBar = () => {
  const { search } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    dispatch(changeSearchActionCreator(event.target.value));
  };

  return (
    <SearchBarStyled>
      <input
        type="text"
        className="search-box__input"
        id="search-box"
        data-testid="search-input"
        placeholder=" "
        value={search}
        onChange={handleOnChange}
      />
      <label htmlFor="search-box" className="search-box__label">
        Search Products
      </label>
    </SearchBarStyled>
  );
};

export default SearchBar;
