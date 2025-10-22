import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import "../Css/Payments.css";
import panelImg from "../assets/payments-tab-img.png";
import panelImg2 from "../assets/payments-tab-img.png";
import panelImg3 from "../assets/payments-tab-img.png";
import paymentsIcon from "../assets/tab-icon-1.png";
import payoutIcon from "../assets/tab-icon-2.png";
import payrollIcon from "../assets/tab-icon-3.png";
import aiIcon from "../assets/tab-icon-4.png";

export default function Payments() {
    const tabs = [
        {
            id: "payments",
            label: "Payments",
            icon: paymentsIcon,
            title: "Elevate Your Online Store's Payment Experience",
            body:
                "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your checkout and boost customer satisfaction.",
            bullets: [
                { icon: "/src/assets/payment-feature-1.png", text: "Optimize Your Checkout" },
                { icon: "/src/assets/payment-feature-2.png", text: "Fast and Secure" },
                { icon: "/src/assets/payment-feature-3.png", text: "Smooth Integration" },
            ],
            img: panelImg,
        },
        {
            id: "payout",
            label: "Payout",
            icon: payoutIcon,
            title: "Efficient Payouts at Scale",
            body:
                "Automate and schedule payouts to vendors and contractors with robust controls and auditability.",
            bullets: [
                { icon: "/src/assets/payment-feature-1.png", text: "Optimize Your Checkout" },
                { icon: "/src/assets/payment-feature-2.png", text: "Fast and Secure" },
                { icon: "/src/assets/payment-feature-3.png", text: "Smooth Integration" },
            ],
            img: panelImg2,
        },
        {
            id: "payroll",
            label: "Payroll",
            icon: payrollIcon,
            title: "Payroll Simplified",
            body:
                "Accurate payroll calculations, local tax support, and multi-country payouts.",
            bullets: [
                { icon: "/src/assets/payment-feature-1.png", text: "Optimize Your Checkout" },
                { icon: "/src/assets/payment-feature-2.png", text: "Fast and Secure" },
                { icon: "/src/assets/payment-feature-3.png", text: "Smooth Integration" },
            ],
            img: panelImg3,
        },
        {
            id: "ai-banking",
            label: "AI Banking",
            icon: aiIcon,
            title: "AI-first Banking",
            body:
                "Smart risk scoring and transaction insights to reduce fraud and increase conversion.",
            bullets: [
                { icon: "/src/assets/payment-feature-1.png", text: "Optimize Your Checkout" },
                { icon: "/src/assets/payment-feature-2.png", text: "Fast and Secure" },
                { icon: "/src/assets/payment-feature-3.png", text: "Smooth Integration" },
            ],
            img: panelImg,
        },
    ];


    const [active, setActive] = useState(tabs[0].id);

    return (
        <section className="payments-section py-5">
            <div className="container-lg">
                <SectionTitle eyebrow="Enhancing payments" heading="Powering Payments Across Industries" />

                <div className="payments-card mt-4">
                    {/* Tabs header (pills) */}
                    <div className="payments-tabs-wrapper d-flex align-items-center">
                        <ul className="nav nav-pills payments-tabs" role="tablist">
                            {tabs.map((t) => (
                                <li className="nav-item" key={t.id}>
                                    <button
                                        className={`nav-link d-flex align-items-center ${active === t.id ? "active" : ""}`}
                                        onClick={() => setActive(t.id)}
                                        role="tab"
                                        aria-selected={active === t.id}
                                        aria-controls={`tab-${t.id}`}
                                    >
                                        <img src={t.icon} alt="" className="tab-icon me-2" />
                                        <span className="tab-label">{t.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                            
                    {/* Tab content */}
                    <div className="tab-content mt-4">
                        {tabs.map((t) => (
                            <div
                                key={t.id}
                                id={`tab-${t.id}`}
                                role="tabpanel"
                                className={`tab-pane fade ${active === t.id ? "show active" : ""}`}
                            >
                                <div className="row align-items-center gx-4">
                                    {/* Left column: text, bullets, button */}
                                    <div className="col-12 col-lg-6">
                                        <h3 className="payments-title">{t.title}</h3>
                                        <p className="payments-desc">{t.body}</p>

                                        <ul className="payments-features list-unstyled mt-3">
                                            {t.bullets.map((b, i) => (
                                                <li key={i} className="d-flex align-items-start mb-3 feature-item">
                                                    <img className="feature-icon me-3" src={b.icon} alt="feature-icon" />
                                                    <span className="feature-text pt-1">{b.text}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-4">
                                            <Button variant="Primary-square">Get Started {'>'}</Button>
                                        </div>
                                    </div>

                                    {/* Right column: image / visual */}
                                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                                        <div className="payments-visual w-100 h-100 d-flex align-items-center justify-content-center">
                                            <img src={t.img} alt={t.label} className="img-fluid payments-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
