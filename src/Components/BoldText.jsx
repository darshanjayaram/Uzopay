import React from "react";
import "../Css/BoldText.css";

export default function BoldText() {
    return (
        <section className="py-5">
            <div className="container-lg">
                <h1 className="bold-heading">
                    {/* Glowing substring (only this span has the pill + neon) */}
                    <span className="glow-text">We focus on your finances, you focus on what matters most. You</span>
                    <span className="normal-text">r finance our pride, Always Safe &amp; Reliable.</span>
                </h1>
            </div>
        </section>
    );
}
