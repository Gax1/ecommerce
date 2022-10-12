const { default: styled } = require("styled-components");

const PhonesPageStyled = styled.main`
  .phones-card {
    &__list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    &__item {
      padding: 20px;

      @media (min-width: 1000px) {
        width: 25%;
        box-sizing: border-box;
      }
    }
  }
`;

export default PhonesPageStyled;
