import { Navigation } from "./Navigation";

import "./header.scss";
import { NavLink } from "react-router-dom";
import { CartLink } from "./CartLink";

const Header = () => {
  return (
    <header className="header">
      <div className="header__flex container">
        <Navigation />
        <CartLink />
      </div>
    </header>
  );
};

export default Header;
