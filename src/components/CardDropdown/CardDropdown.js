import React, { useState } from "react";
import "./CardDropdown.css";

const Dropdown = () => {

  // To toggle the dropdown
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    // Card 6
    <div className="section-card last-card">
      <div className="card-title">
        <h3>Rates & Charges</h3>
      </div>
      <div className="card-body last-card-body">
        <div className="card-sizing">
          <div className="card-dropdown">
            <img
              src="https://www.kotak.com/content/dam/Kotak/svg-icons/icon-piggy-bank.svg"
              alt="card-deposit"
            />
            <label
              htmlFor="touch-20"
              className="card-touch"
              onClick={toggleDropdown}
            >
              <span>Deposits</span>
              {isOpen ? (
                <i className="bx bx-chevron-up" style={{ color: "red" }}></i>
              ) : (
                <i className="bx bx-chevron-down" style={{ color: "red" }}></i>
              )}
            </label>
          </div>
          <input type="checkbox" id="touch-20" />
          <ol className="slide">
            <li className="sub-touch">Fixed Deposits (390 Days)</li>
            <div className="li-spacing">
              <li className="sub-touch" style={{ color: "red" }}>
                Regular
              </li>
              <li className="sub-touch">7.20%</li>
            </div>
            <div className="li-spacing">
              <li className="sub-touch" style={{ color: "red" }}>
                Senior Citizen
              </li>
              <li className="sub-touch">7.70%</li>
            </div>
          </ol>

          <div className="card-sizing">
            <div className="card-dropdown">
              <img
                src="https://www.kotak.com/content/dam/Kotak/svg-icons/icon-money-wallet.svg"
                alt="card-deposit"
              />
              <label
                htmlFor="touch-21"
                className="card-touch"
                onClick={toggleDropdown}
              >
                <span>Savings Account</span>
                {isOpen ? (
                  <i className="bx bx-chevron-up" style={{ color: "red" }}></i>
                ) : (
                  <i
                    className="bx bx-chevron-down"
                    style={{ color: "red" }}
                  ></i>
                )}
              </label>
            </div>
            <input type="checkbox" id="touch-21" />
            <ol className="slide">
              <div className="li-spacing">
                <li className="sub-touch" style={{ color: "red" }}>
                  Interest Rate
                </li>
                <li className="sub-touch">4%*</li>
              </div>
            </ol>
          </div>

          <div className="card-sizing">
            <div className="card-dropdown">
              <img
                src="https://www.kotak.com/content/dam/Kotak/svg-icons/rate-loans.svg"
                alt="card-deposit"
              />
              <label
                htmlFor="touch-22"
                className="card-touch"
                onClick={toggleDropdown}
              >
                <span>Loans</span>
                {isOpen ? (
                  <i className="bx bx-chevron-up" style={{ color: "red" }}></i>
                ) : (
                  <i
                    className="bx bx-chevron-down"
                    style={{ color: "red" }}
                  ></i>
                )}
              </label>
            </div>
            <input type="checkbox" id="touch-22" />
            <ol className="slide">
              <div className="li-spacing">
                <li className="sub-touch" style={{ color: "red" }}>
                  Home Loan
                </li>
                <li className="sub-touch">8.85%*</li>
              </div>
              <div className="li-spacing">
                <li className="sub-touch" style={{ color: "red" }}>
                  Personal Loan
                </li>
                <li className="sub-touch">10.99%*</li>
              </div>
            </ol>
          </div>
        </div>

        <div className="user">
          <div className="user-info">
            <h5>
              See all rates <i className="bx bxs-chevron-right"></i>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
