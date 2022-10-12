import styled from "styled-components";

const PaginationStyled = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .pagination {
    &__button {
      cursor: pointer;
      font-size: 3rem;
    }
    &__page {
      border-radius: 1px solid black;
      &--container {
        padding: 10px;
        border: 1px solid black;
        width: 250px;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
      }
      &--pages {
        color: grey;
      }
      &--this-page {
        color: black;
      }
    }
  }
`;

export default PaginationStyled;
