import React from "react";
import "../Css/Copyright.css";
import arrowUpIcon from "../assets/Arrow-up.png";

export default function Copyright() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="copyright-section">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <p className="copyright-text mb-0">
          © 2025 <span className="brand-italic">UzOPay</span>
        </p>

        <div className="d-flex align-items-center gap-4">
          <a href="#" className="footer-link">
            Terms of Service
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>

          <button
            className="scroll-top-btn"
            aria-label="Scroll to top"
            onClick={scrollToTop}
          >
            <img
              src={arrowUpIcon}
              alt="Scroll to top"
              className="scroll-top-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
