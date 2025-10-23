import React from "react";
import "../../Css/ReasonCardTL.css";
import paymentImg from "../../assets/payment.png"; 
import Button from "../../Components/Button"; 

export default function ReasonCardTL() {
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
            Optimize customer <span className="muted-text">journeys</span>
          </h5>
          <p className="reason-card-body mb-3">
            Streamlined transactions enhancing efficiency and customer satisfaction.
          </p>
        </div>

        <div className="reason-card-btn">
          <Button variant="ghost-dark-square">Explore →</Button>
        </div>
      </div>
    </div>
  );
}
