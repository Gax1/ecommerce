import styled from "styled-components";

const PhonesPageStyled = styled.main`
  .phones-card {
    &__list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    &__item {
      padding: 20px;

      @media (min-width: 1080px) {
        width: 25%;
        box-sizing: border-box;
      }
    }
  }
`;

export default PhonesPageStyled;
