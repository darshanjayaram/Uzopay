import React, { useState } from "react";
import "../../Css/Steps.css";
import "../../Css/Slider.css"
import Button from "../../Components/Button";
import VerticalSlider from "../../Components/VerticalSlider";
import stepsImg from "../../assets/steps.png";
import Badge from "../../Components/Badge";
import bgBlur from "../../assets/bg-blur-steps.png";

export default function Steps() {
    const [active, setActive] = useState(0);

    const steps = [
        {
            title: "Comprehensive Documentation",
            body: "Access clear, detailed documentation that simplifies integration and accelerates your payout setup.",
        },
        {
            title: "Quick Start SDKs",
            body: "Leverage our ready-to-use SDKs for various programming languages, enabling quick and smooth payout implementation.",
        },
        {
            title: "Sandbox Environment",
            body: "Test and refine your payout integration in a secure sandbox environment before going live, ensuring a seamless launch.",
        },
    ];

    return (
        <section className="steps-section position-relative py-5">
            <div className="container-lg py-5">
                <div className="row align-items-center gx-4">
                    {/* LEFT COLUMN */}
                    <div className="col-12 col-lg-6 d-flex">
                        {/* Vertical Slider */}
                        <div className="d-flex align-items-center">
                            <VerticalSlider count={steps.length} value={active} onChange={setActive} showIndicator={true} />
                        </div>

                        {/* Text content */}
                        <div className="steps-content">
                            <Badge>Payout Service Centric</Badge>

                            <h2 className="steps-title mt-4">Streamlined for Payout Ease and Efficiency</h2>
                            <img
                                src={bgBlur}
                                alt="Growth indicator"
                                className="ms-3 bg-blur-steps"
                            />
                            <div className="steps-list mt-4">
                                {steps.map((s, i) => (
                                    <div
                                        key={i}
                                        className={`steps-item mb-3 ${i === active ? "active" : ""}`}
                                        onClick={() => setActive(i)}
                                    >
                                        <div className="steps-item-title">{s.title}</div>
                                        <div className="steps-item-body">{s.body}</div>
                                    </div>
                                ))}
                            </div>
                            <Button variant="Primary-square">Get Started →</Button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
                        <img src={stepsImg} alt="Steps Visual" className="steps-img img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}
