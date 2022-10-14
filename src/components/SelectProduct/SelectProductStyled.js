import styled from "styled-components";

const SelectProductStyled = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;

  @media (min-width: 1080px) {
    font-size: 32px;
  }

  .product {
    &__form {
      display: flex;
      flex-direction: column;
      text-align: center;
      &--button {
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        height: 25px;
        width: 250px;

        box-shadow: grey 0px 2px 2px;

        @media (min-width: 1080px) {
          font-size: 32px;
          width: 350px;
          height: 40px;
        }
      }
    }
  }
`;
export default SelectProductStyled;
