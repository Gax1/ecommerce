import SearchComponentStyled from "./SearchComponentStyled";

const SearchComponent = () => {
  return (
    <SearchComponentStyled>
      <input
        type="text"
        className="search-box__input"
        id="search-box"
        placeholder=" "
      />
      <label htmlFor="search-box" className="search-box__label">
        Search Products
      </label>
    </SearchComponentStyled>
  );
};

export default SearchComponent;
