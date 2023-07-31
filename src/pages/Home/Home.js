import React from "react";
import "./Home.css";
import Cardfirst from "../../components/Card/Section1/Cardfirst";
import img1 from "../../assets/kotak-main-image.jpg";
import img2 from "../../assets/kotak-main-image-res - Copy.jpg";

const Home = () => {
  return (
    <div>
      <div class="main-page" id="#main-page">
        {/* Image for desktop */}
        <img className="img1" src={img1} alt="main-page" />
        {/* Image for mobile */}
        <img className="img2" src={img2} alt="main-page" />

        {/* Image text  */}
        <div className="image-text">
          <h1 class="image-h1">Home Loan Sanction letter in 10 minutes</h1>
          <p className="p">
            Rates starting at 8.85% p.a. | Tenure of up to 25 yearsdocuments
          </p>

          {/* Buttons */}
          <div className="btn-box">
            <button className="button-5">
              <p style={{ color: "#fff" }}>Get my sanction letter</p>
            </button>
            <button className="button-5">
              <p style={{ color: "#fff" }}>Calculate EMI</p>
            </button>
          </div>
        </div>
      </div>
      <Cardfirst />
    </div>
  );
};

export default Home;
