import React from "react";
import Button from "../../Components/Button.jsx";
import "../../Css/Frame2.css";
import bgLeft from "../../assets/frame2-bg-left.png";
import bgRight from "../../assets/frame2-bg-left.png";

export default function Frame2({
  title = "Let’s build the\nfuture of finance together",
  btnText = "Get Started ",
  bgLeftSrc = bgLeft,
  bgRightSrc = bgRight,
}) {
  return (
    <section className="frame2-section">
      <div className="frame2-inner">
        <div className="row gx-0 align-items-center">
          {/* LEFT COLUMN - text over background, text left-aligned */}
          <div
            className="col-sm-12 col-md-9 col-lg-9 frame2-col left-col"
            style={{ backgroundImage: `url(${bgLeftSrc})` }}
          >
            <div className="frame2-content left-content">
              <h2
                className="frame2-title"
                dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, "<br/>") }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN - button centered in its column */}
          <div
            className="col-sm-12 col-md-3 col-lg-3 frame2-col-right right-col"
            style={{ backgroundImage: `url(${bgRightSrc})` }}
          >
            <div className="frame2-content right-content">
              <Button variant="Primary-square">
                {btnText} <span className="btn-arrow">{'>'}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
