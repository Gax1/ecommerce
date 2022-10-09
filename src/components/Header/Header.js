import Breadcrumb from "../Breadcrumb/Breadcrumb";
import HeaderStyled from "./HeaderStyled";
import { GiShoppingCart } from "react-icons/gi";

const Header = ({ itemsOnCart }) => {
  return (
    <HeaderStyled>
      <div className="header__title-container">
        <h1 className="header__title">E-Commerce</h1>
        <div className="header__itemsOnCart">
          <span className="header__itemsOnCart--countOfItems">
            {itemsOnCart}
          </span>
          <GiShoppingCart size="lg" className="header__itemsOnCart--cart" />
        </div>
      </div>
      <Breadcrumb className="header__breadcrumb" />
    </HeaderStyled>
  );
};

export default Header;
