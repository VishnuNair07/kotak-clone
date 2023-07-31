import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const toggleSubDropdown = () => {
    setIsSubOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      {/* Navbar Responsive */}

      {/* Dropdown 1 */}
      <section className="responsive-section ">
        <label htmlFor="touch" className="touch" onClick={toggleDropdown}>
          <span>PERSONAL</span>
          {isOpen ? (
            <i className="arrow-icon minus">-</i>
          ) : (
            <i className="arrow-icon plus">+</i>
          )}
        </label>
        <input type="checkbox" id="touch" />
        <ol className="slide">
          <li>
            <label
              htmlFor="touch-1"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Accounts & Deposits</span>
              {isSubOpen ? (
                <i className="bx bx-chevron-up"></i>
              ) : (
                <i className="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-1" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Savings Account
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Current Accounts
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Privy League
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Salary Accounts
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Service Requests
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Deposits
                  </a>
                </li>
              </ol>
            )}
          </li>
          <li>
            <label
              htmlFor="touch-2"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Investment & Insurance</span>

              {isSubOpen ? (
                <i class="bx bx-chevron-up"></i>
              ) : (
                <i class="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-2" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Investments
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Insurance
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Government Schemes
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Deposits
                  </a>
                </li>
              </ol>
            )}
          </li>

          <li>
            <label
              htmlFor="touch-3"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Loans</span>

              {isSubOpen ? (
                <i class="bx bx-chevron-up"></i>
              ) : (
                <i class="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-3" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Home Loan
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Personal Loan
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Smart EMI
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Other Loans
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Loan Account Services
                  </a>
                </li>
              </ol>
            )}
          </li>
          <li>
            <label
              htmlFor="touch-4"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Payments & Taxes</span>

              {isSubOpen ? (
                <i class="bx bx-chevron-up"></i>
              ) : (
                <i class="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-4" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Money Transfer / Forex
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Bill Payments & Recharges
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Loan & Card Payment
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Other Loans
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Tax Payment
                  </a>
                </li>
              </ol>
            )}
          </li>
          <li>
            <label
              htmlFor="touch-5"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Offers</span>

              {isSubOpen ? (
                <i class="bx bx-chevron-up"></i>
              ) : (
                <i class="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-5" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Popular Categories
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Offers by Payment Type
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Offers near you
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Explore Kaymall
                  </a>
                </li>
              </ol>
            )}
          </li>
          <li>
            <label
              htmlFor="touch-6"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Service Request</span>

              {isSubOpen ? (
                <i class="bx bx-chevron-up"></i>
              ) : (
                <i class="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-6" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Update Profile
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Saving and Current Accounts
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Debit and Credit Cards
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Personal Loans
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Home Loans
                  </a>
                </li>
              </ol>
            )}
          </li>
        </ol>
      </section>

      {/* Dropdown 2 */}

      <section className="responsive-section">
        <label htmlFor="touch-7" className="touch" onClick={toggleDropdown}>
          <span>BUSINESS</span>
          {isOpen ? (
            <i className="arrow-icon minus">-</i>
          ) : (
            <i className="arrow-icon plus">+</i>
          )}
        </label>
        <input type="checkbox" id="touch-7" />
        <ol className="slide">
          <li>
            <label
              htmlFor="touch-8"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Explore Products</span>
              {isSubOpen ? (
                <i className="bx bx-chevron-up"></i>
              ) : (
                <i className="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-8" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Accounts
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Loans
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Working Capital
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Trade Services
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Payment Solution
                  </a>
                </li>
              </ol>
            )}
          </li>
          <li>
            <label
              htmlFor="touch-9"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Offers Beyond Banking</span>
              {isSubOpen ? (
                <i className="bx bx-chevron-up"></i>
              ) : (
                <i className="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-9" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Business Management and Marketing
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Enterprise Resource Planning
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Taxation and Legal
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Human Resource
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Supply Chain and Logistics
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Workspace Management
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Healthcare and Medical Equipment
                  </a>
                </li>
              </ol>
            )}
          </li>
          <li>
            <label
              htmlFor="touch-10"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Payments &Taxes</span>
              {isSubOpen ? (
                <i className="bx bx-chevron-up"></i>
              ) : (
                <i className="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-10" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Money Transfer / Forex
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Bill payments / Recharges
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Loan / Card Payment
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Tax Payment
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Supply Chain and Logistics
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Workspace Management
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Healthcare and Medical Equipment
                  </a>
                </li>
              </ol>
            )}
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Privy League</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Connected Banking</span>
            </label>
          </li>
        </ol>
      </section>

      {/* Dropdown 3 */}

      <section className="responsive-section">
        <label htmlFor="touch-12" className="touch" onClick={toggleDropdown}>
          <span>CORPORATE</span>
          {isOpen ? (
            <i className="arrow-icon minus">-</i>
          ) : (
            <i className="arrow-icon plus">+</i>
          )}
        </label>
        <input type="checkbox" id="touch-12" />
        <ol className="slide">
          <li>
            <label
              htmlFor="touch-13"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Explore Products</span>
              {isSubOpen ? (
                <i className="bx bx-chevron-up"></i>
              ) : (
                <i className="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-13" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Cash Management Services
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Trade & Supply Chain Finance
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Trade Service
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Trade Services
                  </a>
                </li>
              </ol>
            )}
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Sector Expertise</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Service Request</span>
            </label>
          </li>
        </ol>
      </section>

      {/* Dropdown 4 */}
      <section className="responsive-section">
        <label htmlFor="touch-14" className="touch" onClick={toggleDropdown}>
          <span>PRIVATE BANKING</span>
          {isOpen ? (
            <i className="arrow-icon minus">-</i>
          ) : (
            <i className="arrow-icon plus">+</i>
          )}
        </label>
        <input type="checkbox" id="touch-14" />
        <ol className="slide">
          <li>
            <label
              htmlFor="touch-15"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>About Us</span>
              {isSubOpen ? (
                <i className="bx bx-chevron-up"></i>
              ) : (
                <i className="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-15" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Kotak Private Banking
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Kotak Private
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Awards & Accolades
                  </a>
                </li>
              </ol>
            )}
          </li>
          <li>
            <label
              htmlFor="touch-16"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Our Offerings</span>
              {isSubOpen ? (
                <i className="bx bx-chevron-up"></i>
              ) : (
                <i className="bx bx-chevron-down"></i>
              )}
            </label>
            <input type="checkbox" id="touch-16" />
            {isSubOpen && (
              <ol className="slide">
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Investment Management
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#666" }}>
                    Banking Solutions
                  </a>
                </li>
              </ol>
            )}
          </li>
        </ol>
      </section>

      {/* Dropdown 5 */}
      <section className="responsive-section">
        <label htmlFor="touch-17" className="touch" onClick={toggleDropdown}>
          <span>PRIVY LEAGUE</span>
          {isOpen ? (
            <i className="arrow-icon minus">-</i>
          ) : (
            <i className="arrow-icon plus">+</i>
          )}
        </label>
        <input type="checkbox" id="touch-17" />
        <ol className="slide">
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Privy League Overview</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Privy League Programmes</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>PrivyOfferings</span>
            </label>
          </li>
        </ol>
      </section>

      {/* Dropdown 6 */}

      <section className="responsive-section">
        <label htmlFor="touch-18" className="touch" onClick={toggleDropdown}>
          <span>NRI SERVICES</span>
          {isOpen ? (
            <i className="arrow-icon minus">-</i>
          ) : (
            <i className="arrow-icon plus">+</i>
          )}
        </label>
        <input type="checkbox" id="touch-18" />
        <ol className="slide">
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>NRI Overview</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Explore Products</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>NRI Privy League</span>
            </label>
          </li>
        </ol>
      </section>

      {/* Dropdown 7 */}

      <section className="responsive-section">
        <label htmlFor="touch-19" className="touch" onClick={toggleDropdown}>
          <span>INVESTORS</span>
          {isOpen ? (
            <i className="arrow-icon minus">-</i>
          ) : (
            <i className="arrow-icon plus">+</i>
          )}
        </label>
        <input type="checkbox" id="touch-19" />
        <ol className="slide">
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Overview</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Financials</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Governance</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Investor Info</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>Disclosures Regulation 46 and 62</span>
            </label>
          </li>
          <li>
            <label
              htmlFor="touch-11"
              className="sub-touch"
              onClick={toggleSubDropdown}
            >
              <span>IEPF</span>
            </label>
          </li>
        </ol>
      </section>

      <section className="responsive-section">
        <label htmlFor="touch-19" className="touch" onClick={toggleDropdown}>
          <span>Help Center</span>
        </label>
      </section>

      <section className="responsive-section">
        <label htmlFor="touch-19" className="touch" onClick={toggleDropdown}>
          <span>Locate us</span>
        </label>
      </section>

      <section className="responsive-section">
        <label htmlFor="touch-19" className="touch" onClick={toggleDropdown}>
          <span>Contact Us</span>
        </label>
      </section>

      <section className="responsive-section">
        <label htmlFor="touch-19" className="touch" onClick={toggleDropdown}>
          <span>Call Us 24x7</span>
        </label>
      </section>
    </div>
  );
};

export default Dropdown;
