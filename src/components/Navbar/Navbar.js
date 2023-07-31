import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Home from "../../pages/Home/Home";
import Dropdown from "../NavbarDropdown/Dropdown";
import ScrollNavbar from "../ScrollNavbar/ScrollNavbar";
import chatbotImage from '../../assets/chatbot-icon.png'

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(true); // Add state for scroll top check

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50;
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollTop(scrolled <= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsScrollTop(window.innerWidth >= 1273);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const checkboxRef = useRef(null);

  useEffect(() => {
    if (isScrollTop) {
      checkboxRef.current.checked = false;
    }
  }, [isScrollTop]);

  // const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(null);

  const toggleMegaMenu = (menuType) => {
    // setIsMegaMenuOpen((prevMenuType) =>
    //   prevMenuType === menuType ? null : menuType
    // );
  };
  return (
    <div>
      <ScrollNavbar />

      {/* Upper Navbar */}

      <nav className="upper-nav">
        <div className="upper-li">
          <ul>
            <li className="main-paragraph hover_effect active">personal</li>
            <li className="main-paragraph hover_effect">Business</li>
            <li className="main-paragraph hover_effect">Corporate</li>
            <li className="main-paragraph hover_effect">private banking</li>
            <li className="main-paragraph hover_effect">privy League</li>
            <li className="main-paragraph hover_effect">nri services</li>
            <li className="main-paragraph hover_effect">investors</li>
          </ul>
        </div>
        <div className="upper-search">
          <ul>
            <li onClick={toggleSearch}>
              <i class="bx bx-search-alt-2"></i>Search
            </li>
            <li>
              <i class="bx bx-help-circle"></i>Help Center
            </li>
            <li>
              <i class="bx bx-location-plus"></i>Locate us
            </li>
          </ul>
        </div>
      </nav>

      {/* Lower Navbar */}
      <nav className="lower-nav">
        <div className="logo-center">
          <input type="checkbox" id="check" ref={checkboxRef} />
          <label className="logo">
            <label htmlFor="check" className="checkbtn">
              <i className="bx bx-menu"></i>
            </label>
            <img
              src="https://www.kotak.com/content/dam/Kotak/kotak-logo.png"
              alt="kotak-logo"
            />
          </label>
          <div
            className={`ul-scroll desktop-scroll ${
              isScrollTop ? "isScrollTop" : ""
            }`}
          >
            <Dropdown />
            {/* Navbar Responsive for desktop */}
          </div>
          <ul>
            <div className="nav-content">
              <div class="dropdown">
                <li>
                  <button class="dropbtn">
                    Accounts &<br />
                    Deposits
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  <div className="main">
                    <div class="dropdown-content">
                      <ul>
                        <li onClick={() => toggleMegaMenu("mega-menu-1")}>
                          Savings Account
                        </li>

                        <li onClick={() => toggleMegaMenu("mega-menu-2")}>
                          Current Accounts
                        </li>

                        <li onClick={() => toggleMegaMenu("mega-menu-3")}>
                          Privy League
                        </li>
                        <li onClick={() => toggleMegaMenu("mega-menu-4")}>
                          Salary Accounts
                        </li>
                        <li onClick={() => toggleMegaMenu("mega-menu-5")}>
                          Service Requests
                        </li>
                        <li onClick={() => toggleMegaMenu("mega-menu-6")}>
                          Deposits
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </div>
              <div class="dropdown">
                <li>
                  <button class="dropbtn">
                    Cards &<br />
                    Fastag
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  <div class="dropdown-content">
                    <ul>
                      <li onClick={() => toggleMegaMenu("mega-menu-7")}>
                        Credit Cards
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-8")}>
                        Debit Cards
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-9")}>
                        FASTag / Spendz
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-10")}>
                        Prepaid Services
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-11")}>
                        Credit Card Services
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-12")}>
                        Other Card Services
                      </li>
                    </ul>
                  </div>
                </li>
              </div>
              <div class="dropdown">
                <li>
                  <button class="dropbtn">
                    Investment &<br />
                    Insurance
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  <div class="dropdown-content">
                    <ul>
                      <li onClick={() => toggleMegaMenu("mega-menu-13")}>
                        Investments
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-14")}>
                        Insurance
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-15")}>
                        Government Schemes
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-16")}>
                        Deposits
                      </li>
                    </ul>
                  </div>
                </li>
              </div>

              <div class="dropdown ">
                <li>
                  <button class="dropbtn">
                    Loans
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  <div class="dropdown-content">
                    <ul>
                      <li onClick={() => toggleMegaMenu("mega-menu-17")}>
                        Home Loan
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-18")}>
                        Personal Loan
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-19")}>
                        Smart EMI
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-20")}>
                        Other Loans
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-21")}>
                        Loan Account Services
                      </li>
                    </ul>
                  </div>
                </li>
              </div>
              <div class="dropdown">
                <li>
                  <button class="dropbtn">
                    Payments &<br />
                    Taxes
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  <div class="dropdown-content">
                    <ul>
                      <li onClick={() => toggleMegaMenu("mega-menu-22")}>
                        Money Transfer / Forex
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-23")}>
                        Bill Payments & Recharges
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-24")}>
                        Loan & Card Payment
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-25")}>
                        Tax Payment
                      </li>
                    </ul>
                  </div>
                </li>
              </div>

              <div class="dropdown">
                <li>
                  <button class="dropbtn">
                    Offers
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  <div class="dropdown-content">
                    <ul>
                      <li onClick={() => toggleMegaMenu("mega-menu-26")}>
                        Popular Categories
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-27")}>
                        Offers by Payment Type
                      </li>

                      <li onClick={() => toggleMegaMenu("mega-menu-28")}>
                        Explore Kaymall
                      </li>
                    </ul>
                  </div>
                </li>
              </div>
              <div class="dropdown">
                <li>
                  <button class="dropbtn">
                    Service Request
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  <div class="dropdown-content">
                    <ul>
                      <li onClick={() => toggleMegaMenu("mega-menu-29")}>
                        Update Profile
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-30")}>
                        Saving and Current Accounts
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-31")}>
                        Debit and Credit Card
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-32")}>
                        Personal Loans
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-33")}>
                        Home Loans
                      </li>
                      <li onClick={() => toggleMegaMenu("mega-menu-34")}>
                        Business Loans / Loan Against Property / Payday Loans
                      </li>
                    </ul>
                  </div>
                </li>
              </div>
            </div>
          </ul>
          {/* Responsive Icons  */}
          <div className="nav-icon">
            <i className="bx bx-search-alt-2" onClick={toggleSearch}></i>
            <i className="bx bxs-user-pin"></i>
            <i className="bx bx-user"></i>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-btn">
            {/* Profile */}
            <img
              src={chatbotImage}
              alt="profile"
            />

            {/* Login button */}
            <button className="button-23">
              <i className="bx bx-user"></i>
              Login
            </button>
          </div>
        </div>
      </nav>
      {isSearchOpen && (
        <div className="search-modal">
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="I am looking for..."
            />

            <div className="close-icons">
              <i class="bx bx-search-alt-2"></i>
              <svg
                onClick={handleCloseSearch}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
      <Home />
    </div>
  );
};

export default Navbar;
