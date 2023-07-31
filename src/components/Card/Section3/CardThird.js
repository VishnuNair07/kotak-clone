import React from "react";
import "./CardThird.css";
import BackOnTop from "../../BackonTop/BackOnTop";
import CardDropdown from "../../CardDropdown/CardDropdown";
import img1 from "../../../assets/Section3-card1.jpg";
import img2 from "../../../assets/Section3-card2.jpg";
import img3 from "../../../assets/Section3-card3.jpg";
import img4 from "../../../assets/Section3-card4.jpg";
import img5 from "../../../assets/Section3-card5.jpg";

const CardThird = () => {
  return (
    <div>
      {/* Third section */}
      <div className="container">
        {/* Card 1 */}
        <div className="section-card">
          <div className="card-title">
            <img src={img1} alt="section-card" />
          </div>
          <div className="card-body">
            <h4>Chatting and banking come together! </h4>
            <p>
              Meet Keya - Your very own virtual assistant from Kotak. Keya is
              quick & smart and will promptly answer your banking queries round
              the clock{" "}
            </p>
            <div className="user">
              <div className="user-info">
                <h5>
                  Experience it now <i class="bx bxs-chevron-right"></i>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="section-card">
          <div className="card-title">
            <img className="img-float" src={img2} alt="section-card" />
          </div>
          <div className="card-body">
            <span className="title"> Ways to Bank </span>
            <h4>Mobile Banking </h4>
            <p>
              Now, you can experience the benefits of online banking anywhere
              and anytime, without the need for a computer.{" "}
            </p>
            <div className="user">
              <div className="user-info">
                <h5>
                  Know more <i class="bx bxs-chevron-right"></i>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="section-card">
          <div className="card-title">
            <img src={img3} alt="section-card" />
          </div>
          <div className="card-body">
            <span className="title"> Ways to Bank </span>
            <h4>Net Banking </h4>
            <p>
              Net Banking is a convenient way to bank from the comfort of your
              home or office - a one stop solution for all of your banking
              needs.{" "}
            </p>
            <div className="user">
              <div className="user-info">
                <h5>
                  Know more <i class="bx bxs-chevron-right"></i>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="section-card">
          <div className="card-title">
            <img src={img4} alt="section-card" />
          </div>
          <div className="card-body">
            <span className="title" style={{ marginBottom: "1rem" }}>
              Zomato
            </span>

            <p style={{ marginBottom: "1rem" }}>
              Flat Rs 100 off on select restaurant on MOV of Rs 499 & Rs 75 on
              select restaurants on Kotak Credit Card- every Friday & Saturday{" "}
            </p>
            <p style={{ color: "#666" }}>Valid till: 15 July 2023</p>
            <div className="user">
              <div className="user-info">
                <h5>
                  Know more <i class="bx bxs-chevron-right"></i>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="section-card">
          <div className="card-title">
            <img src={img5} alt="section-card" />
          </div>
          <div className="card-body">
            <h4>Tune in to Channel Red</h4>
            <p>
              Explore a treasure trove of information about our products and
              services on Digital Platforms.{" "}
            </p>
            <div className="user">
              <div className="user-info">
                <h5>
                  Know more <i class="bx bxs-chevron-right"></i>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <CardDropdown />
      </div>
      {/* Back on top button */}
      <BackOnTop />
    </div>
  );
};

export default CardThird;
