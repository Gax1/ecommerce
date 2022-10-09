import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import HeaderStyled from "./HeaderStyled";

const Header = ({ itemsOnCart }) => {
  return (
    <HeaderStyled>
      <h1 className="page-title">E-Commerce</h1>
      <Breadcrumbs />
      <span className="itemsOnCart">{itemsOnCart}</span>
    </HeaderStyled>
  );
};

export default Header;
