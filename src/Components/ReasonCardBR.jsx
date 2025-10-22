import React from "react";
import "../Css/ReasonCardTL.css";
import mediaImg from "../assets/reason-card-br.png";
import Button from "./Button";

export default function ReasonCardBR({
    title = "Faster Processing Time",
    body = "Quick and efficient payment processing for a seamless user experience.",
    btnText = "Learn more →",
    mediaSrc = mediaImg,
}) {
    return (
        <div className="reason-card-tl glass-card large-card d-flex flex-column">
            {/* CONTENT */}
            <div className="reason-card-content d-flex flex-column justify-content-between">
                <div className="reason-card-info">
                    <h5 className="reason-card-title mb-2">
                        Faster Processing Time
                    </h5>
                    <p className="reason-card-body">
                        Quick and efficient payment processing for a seamless user experience.
                    </p>
                </div>

                <div className="reason-card-btn">
                    <Button variant="ghost-dark-square">Explore →</Button>
                </div>
            </div>

            <div className="reason-card-video mt-5">
                <img
                    src={mediaSrc}
                    alt="Payment"
                    className="img-fluid reason-card-img"
                    draggable="false"
                />
            </div>
        </div>
    );
}
