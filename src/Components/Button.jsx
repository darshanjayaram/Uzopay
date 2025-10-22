import React from "react";
import "../Css/Button.css"

export default function Button({ children, variant = "primary", onClick }) {
  const baseClasses =
    "btn d-inline-flex align-items-center justify-content-center text-nowrap";

const variantClass =
      variant === "primary"
      ? "btn-gradient rounded-pill px-4 py-2"
      : variant === "Primary-square"
      ? "btn-gradient-square px-4 py-2"
      : variant === "ghost-dark-square"
      ? "btn-outline-square px-4 py-2"
      : "btn-outline-custom rounded-pill px-4 py-2"


  return (
    <button type="button" onClick={onClick} className={`${baseClasses} ${variantClass}`}>
      {children}
    </button>
  );
}
