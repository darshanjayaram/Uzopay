import React, { useState } from "react";
import "../Css/Navbar.css";

const Navbar = ({ isFixed = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "AI Banking", "Payments", "Payouts", "Payroll", "Contact Us"];

  const positionStyle = isFixed
    ? "position-fixed top-3 start-50 translate-middle-x"
    : "position-absolute top-3 start-50 translate-middle-x";

  return (
    <header
      className={`d-flex justify-content-center align-items-center pt-4 ${positionStyle}`}
      style={{ zIndex: isFixed ? 1050 : 1040 }}
    >
      <nav className="navbar-custom d-flex align-items-center justify-content-between mx-auto w-100">
        {/* Logo */}
        <div className="navbar-brand mb-0 h4 text-white fw-bold me-lg-5 me-xl-6">UzOPay</div>

        {/* Hamburger (mobile) */}
        <button
          className="navbar-toggler d-lg-none ms-auto"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <ul
          className={`nav align-items-center mb-0 gap-3 ${
            isOpen ? "show-menu" : "hide-menu"
          }`}
        >
          {menuItems.map((item) => {
            const isActive = item === "Home";
            return (
              <li key={item} className="nav-item">
                <button
                  type="button"
                  className={`btn btn-link nav-link px-2 py-0 ${
                    isActive ? "active-link" : "text-white-75"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="me-1">{item}</span>
                  {item === "AI Banking" && <small className="dropdown-caret">▼</small>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
