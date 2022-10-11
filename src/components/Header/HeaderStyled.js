import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  padding-right: 5%;
  border-bottom: 2px solid grey;
  flex-wrap: wrap;

  .header {
    &__title-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 2px 7px;
      margin-top: 25px;
    }
    &__itemsOnCart {
      width: 60px;
      height: 60px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1.5px solid grey;
      box-shadow: grey 0px 2px 2px;
    }
    &__breadcrumb {
      text-align: center;
      padding-bottom: 5%;
    }
  }
`;

export default HeaderStyled;
