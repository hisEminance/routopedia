import React from "react";
import logo from './images/react.png';
import { Link, NavLink } from "react-router-dom";
import CryptoDetail from "./pages/crypto/CryptoDetail";

function Header() {
  const getActiveClass = ({ isActive }) => isActive ? "nav-link active text-danger" : "nav-link";

  const links = [
    { to: "/", label: "Home", type: "nav" },
    { to: "/about", label: "About", type: "nav" },
    { to: "/crypto/BTC/10", label: "Crypto Detail", type: "nav" },
  ];

  const productLinks = [
    { to: "/product", label: "Product" },
    { to: "/product/create", label: "Create Product" },
    { to: "/product/list", label: "Product List" },
    { to: "/product/details/1", label: "Product Details" },
  ];

  return (
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <img
          src={logo}
          alt="logo"
          style={{ height: "35px", verticalAlign: "top" }}
        />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li key={link.to} className="nav-item">
                <NavLink className={getActiveClass} to={link.to}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/product"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </Link>
              <ul className="dropdown-menu">
                {productLinks.map((link) => (
                  <li key={link.to}>
                    <Link className="dropdown-item" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled">Disabled</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;