import React from "react";
import "./CardSecond.css";
import CardThird from "../Section3/CardThird";
import img1 from "../../../assets/Section2-card1.jpg";
import img2 from "../../../assets/Section2-card2.jpg";
import img3 from "../../../assets/Section2-card3.jpg";
import img4 from "../../../assets/Section2-card4.jpg";
import img5 from "../../../assets/Section2-card5.jpg";
import img6 from "../../../assets/Section2-card6.jpg";

const CardSecond = () => {
  return (
    <>
      <div className="section2-content">
        {/* Stories */}
        <div className="main-img">
          <img src={img1} alt="main-img" />
          <div className="image-font">
            <p className="story-heading">Stories in focus</p>
            <p
              style={{
                marginTop: ".7rem",
                fontSize: "21px",
                fontWeight: 300,
                color: "#fff",
                margin: "0 0 15px",
                height: "auto",
              }}
            >
              Browse through and read from our collection of specially curated
              stories, for your reading pleasure
            </p>

            <p
              style={{
                margin: "1rem 0",
                display: "flex",
                alignItems: "center",
              }}
              className="readmore"
            >
              Read more <i class="bx bxs-chevron-right"></i>
            </p>
          </div>
        </div>

        {/* Stories in focus */}
        <div className="stories">
          <p className="story-heading">Stories in focus</p>

          <div className="first-story">
            <img src={img2} alt="story" />
            <p>The Right Way To Apply And Get A New Credit Card</p>
            <i class="bx bxs-chevron-right"></i>
          </div>
          <div className="first-story">
            <img src={img3} alt="story" />
            <p>
              Bhulekh Odisha 2023: A guide about checking Land records,
              verfication of naksha, ROR Online
            </p>
            <i class="bx bxs-chevron-right"></i>
          </div>
          <div className="first-story">
            <img src={img4} alt="story" />
            <p>
              Stamp Duty & Property Registration Charges in Chennai, Tamil Nadu
            </p>
            <i class="bx bxs-chevron-right"></i>
          </div>
          <div className="first-story">
            <img src={img5} alt="story" />
            <p>
              What is Prime Lending Rate? Meaning, Characteristics in Banking &
              Importance
            </p>
            <i class="bx bxs-chevron-right"></i>
          </div>
          <div className="first-story">
            <img src={img6} alt="story" />
            <p>
              Moratorium Period: Meaning, Examples, Importance In Home Loan &
              Comparison with Grace Period
            </p>
            <i class="bx bxs-chevron-right"></i>
          </div>
        </div>
      </div>
      <CardThird />
    </>
  );
};

export default CardSecond;
