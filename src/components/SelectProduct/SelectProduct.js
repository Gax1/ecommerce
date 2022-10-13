import Selectors from "../Selectors/Selectors";
import SelectProductStyled from "./SelectProductStyled";

const SelectProduct = ({ options: { colors, storages } }) => {
  return (
    <SelectProductStyled>
      <h3 className="product__title">Choose your Preference</h3>
      <form className="product__form">
        <span className="product__form--text">Select the Color</span>
        <Selectors
          options={colors}
          setOption={() => {}}
          key={`selector ${colors[0].name}`}
          className="product__form--selectors"
        />

        <span className="product__form--text">Select the Storage</span>
        <Selectors
          options={storages}
          setOption={() => {}}
          key={`selector ${storages[0].name}`}
          className="product__form--selectors"
        />

        <button className="product__form--button">Submit</button>
      </form>
    </SelectProductStyled>
  );
};

export default SelectProduct;
