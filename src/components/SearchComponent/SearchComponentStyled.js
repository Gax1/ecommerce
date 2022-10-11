import styled from "styled-components";

const SearchComponentStyled = styled.div`
  padding: 3rem 1.5rem;

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
      display: block;
      transform: translate(0.25rem, -29px);
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

export default SearchComponentStyled;
