import React from "react";
import "../Css/SectionTitle.css";

export default function SectionTitle({
  eyebrow = "Reasons to Partner",
  heading = "Exceptional Support for Your Success",
  center = true,
}) {
  return (
    <div
      className={`section-title ${center ? "text-center mx-auto" : ""}`}
      style={{ maxWidth: "600px" }}
    >
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-heading">{heading}</h2>
    </div>
  );
}
