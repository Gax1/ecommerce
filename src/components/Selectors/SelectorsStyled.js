import styled from "styled-components";

const SelectorsStyled = styled.div`
  margin: 10px 0 40px 0;
  display: flex;
  flex-direction: row;
  gap: 50px;

  .selectors__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  [type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }

  [type="checkbox"] {
    width: 40px;
    height: 40px;
    border: solid 1px #cccccc;
    position: relative;
    margin-bottom: 10px;
  }

  [type="checkbox"]:checked::before {
    content: "";
    width: 30px;
    height: 30px;
    /* background-color: grey; */
    content: "✔";
    font-size: 28px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-38%, -64%);
  }
`;

export default SelectorsStyled;
