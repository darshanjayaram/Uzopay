import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";
import FloatingTag from "./FloatingTag";
import robotImg from "../assets/robot.png";
import robotShade from "../assets/robo-shade.png"
import robotShadeDark from "../assets/robo-shade-dark.png"
import navBg from "../assets/Nav-bg.png"
import Badge from "./Badge";

const Hero = () => {
    const heroRef = useRef(null);
    const robotWrapperRef = useRef(null);

    useEffect(() => {
        // hero entrance
        gsap.fromTo(
            heroRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" }
        );

        // gentle float for robot (works only when visible)
        if (robotWrapperRef.current) {
            gsap.to(robotWrapperRef.current, {
                y: -8,
                repeat: -1,
                yoyo: true,
                duration: 4,
                ease: "sine.inOut",
                delay: 0.3,
            });
        }
    }, []);

    return (
        <section ref={heroRef} className="hero position-relative text-white overflow-hidden">
            <div className="container-lg h-100 position-relative hero-container-wrapper">
                <img
                    src={navBg}
                    alt="AI Robot"
                    className="nav-bg"
                    style={{ height: "auto" }}
                />
                <div className="row gx-0">
                    {/* LEFT: Text Section (absolute on desktop, stacked on mobile) */}
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="hero-text-wrapper hero-left">
                            <Badge>Pay Smart. Pay Fast</Badge>

                            <h1 className="hero-heading">
                                End-to-End Payout &amp; Payroll Solutions for Digital Era.
                            </h1>

                            <p className="hero-desc">
                                Optimize transactions and payouts with our secure, efficient payment gateway solution,
                                ensuring smooth operations.
                            </p>

                            <div className="d-flex gap-3 hero-buttons">
                                <Button variant="ghost">Reach out</Button>
                                <Button variant="primary">Get Started →</Button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: image column */}
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div
                            ref={robotWrapperRef}
                            className="robot-wrapper position-relative d-flex align-items-center justify-content-center pointer-events-none"
                            style={{ transformOrigin: "center" }}
                        >
                            <img
                                src={robotImg}
                                alt="AI Robot"
                                className="robot-img img-fluid"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                            <img
                                src={robotShadeDark}
                                alt="AI Robot"
                                className="robot-shade-dark"
                                style={{ maxWidth: "70%", height: "auto" }}
                            />
                            <img
                                src={robotShade}
                                alt="AI Robot"
                                className="robot-shade"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                            {/* Floating tags (positioned by CSS for responsiveness) */}
                            <div className="floating-tag tag-pos-1">
                                <FloatingTag label="Payout process" />
                            </div>
                            <div className="floating-tag tag-pos-2">
                                <FloatingTag label="Sales Product Screening" />
                            </div>
                            <div className="floating-tag tag-pos-3">
                                <FloatingTag label="Transactions" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative background glow behind robot */}
            <div className="hero-glow position-absolute" />
        </section>
    );
};

export default Hero;
