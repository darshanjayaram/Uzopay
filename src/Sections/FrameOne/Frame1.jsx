import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Badge from "../../Components/Badge.jsx";
import frame1Img from "../../assets/Frame1.png";
import growthImg from "../../assets/growth.png";
import bgBlur from "../../assets/BG-blur.png";  
import "../../Css/Frame1.css"

const Frame1 = () => {
  const ref = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.to(imageRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={ref}
      className="frame1-section position-relative w-100 text-white py-5 overflow-hidden"
    >

      <div className="glow-left position-absolute pointer-events-none" />
      <div className="glow-right position-absolute pointer-events-none" />

      <div className="container-lg py-5">
        <div className="row align-items-center gy-4">

          <div className="col-12 col-lg-6 position-relative">
            <div className="max-w-605 position-relative">

              <img src={bgBlur} alt="background blur" className="bg-blur-img" />

              <div className="frame1-badge d-flex align-items-center mb-3">
                <div className="d-flex align-items-center gap-3">
                  <Badge>Reliable, and Efficient</Badge>
                </div>

                <img
                  src={growthImg}
                  alt="Growth indicator"
                  className="ms-3 growth-img"
                />
              </div>

              <h2 className="frame1-heading mb-3">
                Simplify the <br /> payments process
              </h2>

              <p className="frame1-desc">
                Tools crafted to simplify and enhance your payout processes.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Box design */}
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
            <div
              ref={imageRef}
              className="frame-card position-relative d-flex align-items-center justify-content-center"
            >
              <img
                src={frame1Img}
                alt="Payments process preview"
                className="frame-image position-absolute"
              />
              <div className="frame-overlay position-absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame1;
