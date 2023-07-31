import React from "react";
import "./Cardfirst.css";
import CardSecond from "../Section2/CardSecond";
import img1 from "../../../assets/Section1-card1.jpg";
import img2 from "../../../assets/Section1-card2.jpg";
import img3 from "../../../assets/Section1-card3.jpg";

const Cardfirst = () => {
  return (
    <div>
      {/* First Section */}
      <div className="container">
        {/* Card 1 */}
        <div className="section-card">
          <div className="card-title">
            <img src={img1} alt="rover" />
          </div>
          <div className="card-body">
            <span className="title">LOANS</span>
            <h4>Personal Loan at incredibly low rates</h4>
            <p>
              Quick loan sanction | Part Prepayment available | Loan amount up
              to Rs.40 lakh
            </p>
            <div className="user">
              <div className="user-info">
                <h5>
                  Know More <i class="bx bxs-chevron-right"></i>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="section-card">
          <div className="card-title">
            <img className="img-float" src={img2} alt="ballons" />
          </div>
          <div className="card-body">
            <span className="title">SAVINGS ACCOUNT</span>
            <h4>811 Digital Savings Account</h4>
            <p>
              Open a zero balance digital savings account instantly from
              anywhere with the new Video KYC process
            </p>
            <div className="user">
              <div className="user-info">
                <h5>
                  Open Savings Account <i class="bx bxs-chevron-right"></i>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="section-card">
          <div className="card-title">
            <img src={img3} alt="city" />
          </div>
          <div className="card-body">
            <span className="title">FIXED DEPOSITS</span>
            <h4>Fixed Deposits now at higher rate</h4>
            <p>
              Your dreams now within reach! Smartly Invest in a Kotak Fixed
              Deposit & get 7.20% for 12 months 25 days to less than 2 years.
            </p>
            <div className="user">
              <div className="user-info">
                <h5>
                  Invest Now <i class="bx bxs-chevron-right"></i>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardSecond />
    </div>
  );
};

export default Cardfirst;
