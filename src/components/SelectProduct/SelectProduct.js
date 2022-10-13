import Selectors from "../Selectors/Selectors";
import SelectProductStyled from "./SelectProductStyled";

const SelectProduct = ({ options: { colors, storages } }) => {
  return (
    <SelectProductStyled>
      <h3 className="product__title">Choose your Preference</h3>
      <form className="product__form">
        <Selectors
          options={colors}
          setOption={() => {}}
          key={`selector ${colors[0].name}`}
          className="product__form--colors"
        />
        <Selectors
          options={storages}
          setOption={() => {}}
          key={`selector ${storages[0].name}`}
          className="product__form--storages"
        />
        <button className="product__form--button">Submit</button>
      </form>
    </SelectProductStyled>
  );
};

export default SelectProduct;
