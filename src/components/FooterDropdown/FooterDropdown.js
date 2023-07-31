import React from "react";
import "./FooterDropdown.css";

const FooterDropdown = () => {
  return (
    // Responsive footer
    <div className="footer-background">
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Channel Red *New*
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <p>Mobile Banking</p>
              <p>Net Banking</p>
              <p>Manage your account</p>
              <p>Transfer money</p>
              <p>Recharge / Make payments</p>
              <p>Credit Cards</p>
              <p>Debit Cards</p>
              <p>Loans</p>
              <p>National Pension Scheme</p>
              <p>Deposits</p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Popular Products
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <p>Home Loan</p>
              <p>Personal Loan</p>
              <p>Savings Account</p>
              <p>Current Account</p>
              <p>Credit Cards</p>
              <p>Mutual Funds</p>
              <p>National Pension Scheme (NPS)</p>
              <p>Zero Balance Savings Account</p>
              <p>Life Insurance</p>
              <p>Fixed Deposit</p>
              <p>Recurring Deposit</p>
              <p>Loan against property</p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Help Center
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              <p>Account</p>
              <p>Issue with Transactions</p>
              <p>Credit Card</p>
              <p>811 Account</p>
              <p>Fund Transfer, Bill Payment & Recharge</p>
              <p>Loans</p>
              <p>FASTag</p>
              <p>Fixed Deposit (FD) and Recurring Deposit (RD)</p>
              <p>NRI Services</p>
              <p>My Profile - Mobile Number, Aadhaar, Email ID & Address</p>
              <p>Forex</p>
              <p>Insurance (Premium payments, Tax benefit etc )</p>
              <p>Investments (Scheme Issues, Dividend related)</p>
              <p>Working Capital</p>
              <p>KayMall - Flights, Hotels, Bus, Trains, Shopping</p>
            </div>
          </div>

          <div className="connect">
            <div className="installation-links">
              <p>Install Kotak - 811 & Mobile Banking App</p>
              <div className="installation-img">
                <img
                  src="https://www.kotak.com/content/dam/Kotak/google-play.png"
                  alt="google play"
                />
                <img
                  src="https://www.kotak.com/content/dam/Kotak/apple-store.png"
                  alt="App Store"
                />
              </div>
            </div>

            <div className="flex-connection">
              <div className="connection-links-responsive">
                <p>Connect With Us</p>
                <i class="bx bxl-facebook" style={{ color: "#4762ac" }}></i>
                <i class="bx bxl-twitter" style={{ color: "#189df5" }}></i>
                <i class="bx bxl-youtube" style={{ color: "#e5141d" }}></i>
                <i
                  class="bx bxl-linkedin-square"
                  style={{ color: "#0074b7" }}
                ></i>
              </div>

              <i
                class="bx bx-phone-call"
                style={{ borderLeft: "1px solid #666", paddingLeft: ".8rem" }}
              ></i>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingfour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsefour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsefour"
              >
                About us
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsefour"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingfour"
            >
              <div class="accordion-body">
                <p>Our Businesses</p>
                <p>Media Centre</p>
                <p>Sustainability</p>
                <p>Careers</p>
                <p>DIFC Branch</p>
                <p>GIFT Branch</p>
                <p>KMFSL</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingfive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsefive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsefour"
              >
                Investor Relations
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsefive"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingfive"
            >
              <div class="accordion-body">
                <p>Overview</p>
                <p>Financials</p>
                <p>Governance</p>
                <p>Investor Info</p>
                <p>Disclosures Regulation 46 and 62</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingsix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsesix"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsesix"
              >
                Customer Service
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsesix"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingsix"
            >
              <div class="accordion-body">
                <p>Important Information</p>
                <p>Write to us</p>
                <p>Grievance Redressal</p>
                <p>Grievance Redressal</p>
                <p>Banking Ombudsman</p>
                <p>Download Forms</p>
                <p>Service Requests</p>
                <p>Track Application Status</p>
                <p>Tips on Safe Banking</p>
                <p>Doorstep Banking Service</p>
                <p>Contact Us for Depository Services</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingseven">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseseven"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseseven"
              >
                Aadhaar Services
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseseven"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingseven"
            >
              <div class="accordion-body">
                <p>Link your Aadhaar</p>
                <p>Aadhaar Enrollment Center</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingeight">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseeight"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsefour"
              >
                Calculators & Tools
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseeight"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingeight"
            >
              <div class="accordion-body">
                <p>Personal Loan EMI Calculator</p>
                <p>Car Loan EMI Calculator</p>
                <p>Home Loan EMI Calculator</p>
                <p>Fixed Deposit Calculator</p>
                <p>Recurring Deposit Calculator</p>
                <p>Gold Loan Calculator</p>
                <p>Life Insurance Calculator</p>
                <p>Business Loan EMI Calculator</p>
                <p>Retirement Calculator</p>
                <p>Simple Interest Calculator</p>
                <p>Compound Interest Calculator</p>
                <p>Goal Planner</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingnine">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsenine"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsefour"
              >
                Digital Banking
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsenine"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingnine"
            >
              <div class="accordion-body">
                <p>Ways to Bank</p>
                <p>Insta Services</p>
                <p>Business & Fintech</p>
                <p>Open Banking</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingten">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseten"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseten"
              >
                Self Help{" "}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseten"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingten"
            >
              <div class="accordion-body">
                <p>Help Center</p>
                <p>Chat with Keya</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingeleven">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseeleven"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseeleven"
              >
                Trending Products{" "}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseeleven"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingeleven"
            >
              <div class="accordion-body">
                <p>Credit Cards</p>
                <p>811 Digital Savings Bank Account</p>
                <p>Digi Personal Loan</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingtwelve">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsetwelve"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsetwelve"
              >
                Rates & fees{" "}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsetwelve"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingtwelve"
            >
              <div class="accordion-body">
                <p>Interest Rates</p>
                <p>Fees & Charges (GSFC)</p>
                <p>Goods & Services Tax (GST)</p>
              </div>
            </div>
          </div>
          {/*  */}

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                style={{ color: "red" }}
              >
                Financial Inclusion{" "}
              </button>
            </h2>
            <div
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingtwelve"
            >
              <div class="accordion-body"></div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                style={{ color: "red" }}
              >
                About Merger{" "}
              </button>
            </h2>
            <div
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingtwelve"
            >
              <div class="accordion-body"></div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingthirteen">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsethirteen"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsethirteen"
              >
                Erstwhile ING Vysya{" "}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsethirteen"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingthirteen"
            >
              <div class="accordion-body">
                <p>Savings Account</p>
                <p>Current Account</p>
                <p>Debit Card</p>
                <p>Institutional Accounts</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingfourteen">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsefourteen"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsefourteen"
              >
                Others{" "}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsefourteen"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingfourteen"
            >
              <div class="accordion-body">
                <p>Credit Card T&C</p>
                <p>Co Brand Credit Card</p>
                <p>Public Notice</p>
                <p>USA Patriot Act Certification</p>
                <p>Subscriptions/ Recurring Payments</p>
                <p>Wolfsberg AML Questionnaire</p>
                <p>Knowledge Centre</p>
                <p>Auction Cum Sale Notice</p>
                <p>Asset Classification Norms</p>
                <p>Recovery Agent</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingfifteen">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsefifteen"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsefifteen"
              >
                Kotak Group Companies{" "}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsefifteen"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingfifteen"
            >
              <div class="accordion-body">
                <p>Kotak Asset Management</p>
                <p>Kotak General Insurance</p>
                <p>Kotak Institutional Equities</p>
                <p>Kotak International Business</p>
                <p>Kotak Investment Advisors</p>
                <p>Kotak Investment Banking</p>
                <p>Kotak Life Insurance</p>
                <p>Kotak Mahindra Investments</p>
                <p>Kotak Mahindra Prime</p>
                <p>Kotak Securities Limited</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDropdown;
