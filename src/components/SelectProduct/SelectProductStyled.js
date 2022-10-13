import styled from "styled-components";

const SelectProductStyled = styled.div`
  font-size: 20px;

  @media (min-width: 1080px) {
    font-size: 32px;
  }

  .product {
    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
export default SelectProductStyled;
