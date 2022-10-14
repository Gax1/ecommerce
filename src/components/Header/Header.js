import Breadcrumb from "../Breadcrumb/Breadcrumb";
import HeaderStyled from "./HeaderStyled";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((state) => state);

  return (
    <HeaderStyled>
      <div className="header__title-container">
        <Link to={"/"}>
          <h1 className="header__title">E-Commerce</h1>
        </Link>
        <div className="header__itemsOnCart">
          {cart !== 0 && (
            <span className="header__itemsOnCart--countOfItems">{cart}</span>
          )}
          <GiShoppingCart size="lg" className="header__itemsOnCart--cart" />
        </div>
      </div>
      <Breadcrumb className="header__breadcrumb" />
    </HeaderStyled>
  );
};

export default Header;
