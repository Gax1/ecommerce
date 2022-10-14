import styled from "styled-components";

const PhoneDetailPageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0 40px 0;
  gap: 50px;

  .phone__title {
    font-size: 32px;
  }

  .home-link {
    font-size: 25px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid black;
    padding: 20px;
    box-shadow: grey 0px 2px 2px;
  }

  .details {
    &__phone {
      &--container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default PhoneDetailPageStyled;
