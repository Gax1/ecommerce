import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadCartActionCreator } from "../../store/feature/cartSlice/cartSlice";
import useCellphone from "../../store/hooks/useCellphone/useCellphone";
import Selectors from "../Selectors/Selectors";
import SelectProductStyled from "./SelectProductStyled";

const SelectProduct = ({
  phone: {
    id,
    options: { colors, storages },
  },
}) => {
  const initialPreferences = {
    id: id,
    colorCode: colors[0].code,
    storageCode: storages[0].code,
  };

  const dispatch = useDispatch();

  const [preferences, setPreferences] = useState(initialPreferences);

  const setStorageCode = (storageCode) => {
    setPreferences({ ...preferences, storageCode });
  };

  const setColorCode = (colorCode) => {
    setPreferences({ ...preferences, colorCode });
  };

  const { addToCart } = useCellphone();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const itemsOnCart = await addToCart(preferences);
    dispatch(uploadCartActionCreator(itemsOnCart.count));
  };

  return (
    <SelectProductStyled>
      <form
        className="product__form"
        onSubmit={handleOnSubmit}
        data-testid="form-checkbox"
      >
        <span className="product__form--text">Select the Color</span>
        <Selectors
          options={colors}
          setOption={setColorCode}
          className="product__form--selectors"
        />

        <span className="product__form--text">Select the Storage</span>
        <Selectors
          options={storages}
          setOption={setStorageCode}
          className="product__form--selectors"
        />

        <button className="product__form--button">Add to Cart</button>
      </form>
    </SelectProductStyled>
  );
};

export default SelectProduct;
