import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Home from "../../pages/Home/Home";
import Dropdown from "../NavbarDropdown/Dropdown";
import ScrollNavbar from "../ScrollNavbar/ScrollNavbar";

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
      const scrolled =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollTop(scrolled <= threshold); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkboxRef = useRef(null);

  useEffect(() => {
    if (isScrollTop) {
      checkboxRef.current.checked = false;
    }
  }, [isScrollTop]);

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
        <input
            type="checkbox"
            id="check"
            ref={checkboxRef}
          />
          <label className="logo">
            <label htmlFor="check" className="checkbtn">
              <i className="bx bx-menu"></i>
            </label>
            <img
              src="https://www.kotak.com/content/dam/Kotak/kotak-logo.png"
              alt="kotak-logo"
            />
          </label>
          <div className={`ul-scroll desktop-scroll ${isScrollTop ? 'isScrollTop' : ''}`}>

           <Dropdown />
 {/* Navbar Responsive  */}
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

                  {/* <div class="dropdown-content">
                    <a href="/">Savings Account</a>
                    <a href="/">Current Accounts</a>
                    <a href="/">Privy League</a>
                    <a href="/">Salary Accounts</a>
                    <a href="/">Service Requests</a>
                    <a href="/">Deposits</a>
                  </div> */}
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
                  {/* <div class="dropdown-content">
                    <a href="/">Credit Cards</a>
                    <a href="/">Debit Cards</a>
                    <a href="/">FASTag / Spendz</a>
                    <a href="/">Prepaid Services</a>
                    <a href="/">Credit Card Services</a>
                    <a href="/">Other Card Services</a>
                  </div> */}
                </li>
              </div>
              <div class="dropdown">
                <li>
                  <button class="dropbtn">
                    Investment &<br />
                    Insurance
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  {/* <div class="dropdown-content">
                    <a href="/">Investments</a>
                    <a href="/">Insurance</a>
                    <a href="/">Government Schemes</a>
                    <a href="/">Deposits</a>
                  </div> */}
                </li>
              </div>
              <div class="dropdown">
                <li>
                  <button class="dropbtn">
                    Loans
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  {/* <div class="dropdown-content">
                    <a href="/">Home Loan</a>
                    <a href="/">Personal Loan</a>
                    <a href="/">Smart EMI</a>
                    <a href="/">Other Loans</a>
                    <a href="/">Loan Account Services</a>
                  </div> */}
                </li>
              </div>
              <div class="dropdown">
                <li>
                  <button class="dropbtn">
                    Payments &<br />
                    Taxes
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  {/* <div class="dropdown-content">
                    <a href="/">Money Transfer / Forex</a>
                    <a href="/">Bill Payments & Recharges</a>
                    <a href="/">Loan & Card Payment</a>
                    <a href="/">Tax Payment</a>
                  </div> */}
                </li>
              </div>
              <div class="dropdown">
                <li>
                  <button class="dropbtn">
                    Offers
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  {/* <div class="dropdown-content">
                    <a href="/">Popular Categories</a>
                    <a href="/">Offers by Payment Type</a>
                    <a href="/">Offers near you</a>
                    <a href="/">Explore Kaymall</a>
                  </div> */}
                </li>
              </div>
              <div class="dropdown">
                <li>
                  <button class="dropbtn">
                    Service Request
                    <i class="bx bx-chevron-down"></i>{" "}
                  </button>
                  {/* <div class="dropdown-content">
                    <a href="/">Update Profile</a>
                    <a href="/">Saving and Current Accounts</a>
                    <a href="/">Debit and Credit Cards</a>
                    <a href="/">Personal Loans</a>
                    <a href="/">Home Loans</a>
                    <a href="/">
                      Business Loans / Loan Against Property / Payday Loans
                    </a>
                  </div> */}
                </li>
              </div>
            </div>
          </ul>
          {/* Responsive Icons  */}
          <div className="nav-icon">
            <i className="bx bx-search-alt-2"></i>
            <i className="bx bxs-user-pin"></i>
            <i className="bx bx-user"></i>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-btn">
            {/* Profile */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png?w=740&t=st=1688030514~exp=1688031114~hmac=0ed07c099478076b7e47be5bdf8a09110851919c922092c3986cb01d6de7a12a"
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
