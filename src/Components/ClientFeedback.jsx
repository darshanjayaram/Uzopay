import React, { useEffect, useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";
import "../Css/ClientFeedback.css";

// Images for Feedback.
import avatar1 from "../assets/feedback-1.png";
import avatar2 from "../assets/feedback-1.png";
import avatar3 from "../assets/feedback-1.png";

export default function ClientFeedback({ className = "" }) {
    // Data for Cards
    const cards = [
        {
            id: "t1",
            quote:
                "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
            name: "Mickael Grants",
            role: "CEO",
            rating: 5,
            avatar: avatar1,
        },
        {
            id: "t2",
            quote:
                "Excellent uptime and clear dashboards. Settlement speeds have improved significantly.",
            name: "Laura Benson",
            role: "Head of Finance",
            rating: 5,
            avatar: avatar2,
        },
        {
            id: "t3",
            quote:
                "Their payouts and reconciliation tools saved hours every week for our team.",
            name: "Samuel Park",
            role: "Operations",
            rating: 4,
            avatar: avatar3,
        },
        {
            id: "t4",
            quote:
                "Support is quick and the SDKs made integration painless. Highly recommended.",
            name: "Priya Shah",
            role: "CTO",
            rating: 5,
            avatar: avatar1,
        },
        {
            id: "t5",
            quote:
                "Reliable and secure — perfect fit for our payment flows and international requirements.",
            name: "Andre Silva",
            role: "Finance Lead",
            rating: 5,
            avatar: avatar2,
        },
        {
            id: "t5",
            quote:
                "Reliable and secure — perfect fit for our payment flows and international requirements.",
            name: "Andre Silva",
            role: "Finance Lead",
            rating: 5,
            avatar: avatar2,
        },
    ];

    const getPerSlide = () => {
        if (window.innerWidth >= 992) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const [perSlide, setPerSlide] = useState(getPerSlide);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => setPerSlide(getPerSlide());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // chunk into slides
    const slides = useMemo(() => {
        const chunks = [];
        for (let i = 0; i < cards.length; i += perSlide) {
            chunks.push(cards.slice(i, i + perSlide));
        }
        return chunks;
    }, [cards, perSlide]);

    const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const goNext = () => setIndex((i) => (i + 1) % slides.length);

    // optional: autoplay (uncomment if you want)
    useEffect(() => {
        const timer = setInterval(goNext, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className={`client-feedback-section py-5 ${className}`}>
            <div className="container-lg">
                <SectionTitle eyebrow="Client Feedbacks" title="Trusted by Businesses Like Yours" />

                <div className="client-feedback-carousel mt-4">
                    <div className="carousel-window">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${index * 100}%)`,
                            }}
                        >
                            {slides.map((slide, sIdx) => (
                                <div key={sIdx} className="carousel-slide" style={{ width: `${100 / slides.length}%` }}>
                                    <div className="row gx-4 justify-content-center">
                                        {slide.map((card, cIdx) => {
                                            const isActive = cIdx === Math.floor(slide.length / 2);
                                            return (
                                                <div key={card.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                                                    <article className={`feedback-card flex-fill ${isActive ? "active" : ""}`}>
                                                        <div className="feedback-quote">{card.quote}</div>
                                                        <div className="feedback-meta d-flex align-items-center mt-4">
                                                            <img src={card.avatar} alt={card.name} className="feedback-avatar me-3" />
                                                            <div className="feedback-author">
                                                                <div className="feedback-name">{card.name}</div>
                                                                <div className="feedback-role">{card.role}</div>
                                                            </div>
                                                            <div className="feedback-rating ms-auto">
                                                                {Array.from({ length: 5 }).map((_, i) => (
                                                                    <span key={i} className={`star ${i < card.rating ? "filled" : ""}`}>★</span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="carousel-footer mt-4">
                        <div className="carousel-controls mb-2">
                            <button aria-label="Previous" className="carousel-control" onClick={goPrev}>‹</button>
                            <button aria-label="Next" className="carousel-control" onClick={goNext}>›</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
