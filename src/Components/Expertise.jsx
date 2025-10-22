import React, { useEffect, useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";
import "../Css/Expertise.css";
import shield from "../assets/Shield.png"; 
import expertise1 from "../assets/expertise-1.png"

export default function Expertise() {
    const cards = [
        {
            title: "UPI Autopay",
            body: "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
            image: expertise1,
        },
        {
            title: "API Banking",
            body: "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
            image: "/src/assets/expertise-2.png",
        },
        {
            title: "Payouts",
            body: "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
            image: "/src/assets/expertise-3.png",
        },
        {
            title: "Bulk Payments",
            body: "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
            image: "/src/assets/expertise-4.png",
        },
        {
            title: "Bulk Payments",
            body: "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
            image: "/src/assets/expertise-4.png",
        },
        {
            title: "Payouts",
            body: "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
            image: "/src/assets/expertise-3.png",
        },
        {
            title: "API Banking",
            body: "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
            image: "/src/assets/expertise-2.png",
        },
        {
            title: "Bulk Payments",
            body: "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
            image: "/src/assets/expertise-4.png",
        },
    ];

    const getPerSlide = () => {
        if (window.innerWidth >= 992) return 4;
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

    const slides = useMemo(() => {
        const chunks = [];
        for (let i = 0; i < cards.length; i += perSlide) {
            chunks.push(cards.slice(i, i + perSlide));
        }
        return chunks;
    }, [cards, perSlide]);

    const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const goNext = () => setIndex((i) => (i + 1) % slides.length);

    return (
        <section className="expertise-section py-5">
            <div className="container-lg">
                <SectionTitle
                    eyebrow="Our Expertise"
                    title="Redefining Payment Processing for You"
                />

                <div className="expertise-carousel">
                    <div className="carousel-window">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${index * 100}%)`,
                            }}
                        >
                            {slides.map((slide, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="carousel-slide"
                                    style={{ width: `${100 / slides.length}%` }}
                                >
                                    <div className="row gx-3 justify-content-center">
                                        {slide.map((card, cIdx) => (
                                            <div
                                                key={cIdx}
                                                className="col-12 col-md-6 col-lg-3 d-flex justify-content-center py-2"
                                            >
                                                <article className="expertise-card glass-card">
                                                    {/* Shield icon top-right */}
                                                    <img
                                                        src={shield}
                                                        alt="Secure"
                                                        className="expertise-card-shield"
                                                    />

                                                    <div className="expertise-card-media my-3">
                                                        <img
                                                            src={card.image}
                                                            alt={card.title}
                                                            className="img-fluid"
                                                        />
                                                    </div>

                                                    <div className="expertise-card-body">
                                                        <h4 className="expertise-card-title">{card.title}</h4>
                                                        <p className="expertise-card-text">{card.body}</p>
                                                        <div className="expertise-card-cta"></div>
                                                    </div>
                                                </article>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="carousel-footer mt-4">
                        <div className="carousel-controls">
                            <button className="carousel-control" onClick={goPrev}>
                                ‹
                            </button>
                            <button className="carousel-control" onClick={goNext}>
                                ›
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
