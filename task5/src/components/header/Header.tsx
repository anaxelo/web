import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <div className="header">
        <NavLink to="/" className="header__logo">
          <img src="/img/favicon.ico" />
          <p className="header__logo-title">ФИЛЬМОТЕКА</p>
        </NavLink>
        <div className="header__author">
          <p className="text-[#301014]">Александра Коломытцева 6408</p>
          <a className="header__git" href="https://github.com/anaxelo/web">
            https://github.com/anaxelo/web
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
