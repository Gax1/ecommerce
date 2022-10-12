import styled from "styled-components";

const PhoneCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 200px;
  text-align: center;
  box-shadow: grey 0px 3px 8px;
  padding: 18px;

  @media (min-width: 1200px) {
    width: 250px;
    font-size: 1.25rem;
  }
  .phone-card {
    &__data-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
      &--brand {
        font-weight: bold;
        font-size: 1.25rem;
        margin: inherit;
      }
      &--price {
        font-weight: 900;
        font-size: 1.5rem;
      }
    }
  }
`;

export default PhoneCardStyled;
