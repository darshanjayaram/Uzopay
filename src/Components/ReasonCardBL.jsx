import React from "react";
import "../Css/ReasonCardTL.css";
import paymentImg from "../assets/reason-card-bl.png"; 
import Button from "./Button"; 

export default function ReasonCardBL() {
  return (
    <div className="reason-card-tl glass-card d-flex flex-column">
      <div className="reason-card-video">
        <img
          src={paymentImg}
          alt="Payment"
          className="img-fluid reason-card-img"
          draggable="false"
        />
      </div>

      {/* CONTENT */}
      <div className="reason-card-content py-4">
        <div className="reason-card-info">
          <h5 className="reason-card-title mb-2">
            Flexible Solutions
          </h5>
          <p className="reason-card-body mb-3">
            Customizable options to meet the unique needs of your business.
          </p>
        </div>

        <div className="reason-card-btn">
          <Button variant="ghost-dark-square">Explore →</Button>
        </div>
      </div>
    </div>
  );
}
