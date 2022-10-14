import styled from "styled-components";

const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  width: 600px;
  text-align: justify;
  flex-wrap: wrap;
  width: 60%;

  .description {
    &__title {
      font-weight: 400;
      font-size: 32px;
      margin: 0;
    }

    &__price {
      font-size: 28px;
      margin-bottom: 20px;
    }

    &__details {
      font-size: large;
      display: flex;
      flex-direction: column;

      font-size: 25px;

      gap: 20px;
    }

    &__detail {
      &-item {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid black;
        padding-bottom: 20px;
      }

      &--value {
        width: 100px;
      }
    }
  }
`;

export default DescriptionStyled;
