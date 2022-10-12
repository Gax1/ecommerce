import styled from "styled-components";

const SearchBarStyled = styled.div`
  padding: 3rem 1.5rem;
  text-align: center;

  .search-box {
    &__input {
      width: 260px;
      font-size: 18px;
      height: 42px;
      border-radius: 2px;
      padding-left: 10px;
      border: 1.5px solid grey;
    }
    &__label {
      font-family: inherit;
      font-size: 1.25rem;
      display: block;
      transform: translate(-2.75rem, -33px);
      padding-left: 10px;
      transition: all 0.2s ease-out;
      color: #999;
    }
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    color: #111;
    transform: translate(-1rem, -4.5rem);
    padding-left: inherit;
  }
`;

export default SearchBarStyled;
