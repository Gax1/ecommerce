import styled from "styled-components";

const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 600px;
  .description {
    &__title {
      font-weight: 400;
      font-size: 32px;
      margin: 0;
    }

    &__price {
      font-size: 28px;
    }

    &__details {
      font-size: large;
      display: flex;
      flex-direction: column;
      align-content: space-between;
      width: 320px;
    }

    &__detail {
      &-item {
        display: flex;
        justify-content: space-between;
      }

      &--value {
        width: 100px;
      }
    }
  }
`;

export default DescriptionStyled;
