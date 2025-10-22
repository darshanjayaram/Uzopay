import React from "react";
import "../Css/Reasons.css";
import SectionTitle from "./SectionTitle.jsx";
import ReasonCardTL from "./ReasonCardTL.jsx";
import ReasonCardTR from "./ReasonCardTR.jsx";
import ReasonCardBL from "./ReasonCardBL.jsx";
import ReasonCardBR from "./ReasonCardBR.jsx";

export default function Reasons() {
  const eyebrow = "Reasons to Partner";
  const heading = "Exceptional Support for Your Success";

  return (
    <section className="reasons-container">
      <SectionTitle eyebrow={eyebrow} heading={heading} />

      <div className="reasons-grid">
        <div className="card-tl">
          <ReasonCardTL />
        </div>

        <div className="card-tr">
          <ReasonCardTR />
        </div>

        <div className="card-bl">
          <ReasonCardBL />
        </div>

        <div className="card-br">
          <ReasonCardBR />
        </div>
      </div>
    </section>
  );
}
