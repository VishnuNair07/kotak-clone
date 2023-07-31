import React, { useState, useEffect } from "react";
import "./ScrollNavbar.css";
// import Dropdown from '../NavbarDropdown/Dropdown';

const ScrollNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50;
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Searchbox modal
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="main-scroll responsive-scroll">
      <div className={`scroll-nav ${isVisible ? "visible" : ""}`}>
        <div className="first-part">
          <div className="kotak-menu-icon">
          <label htmlFor="check" className="checkbtn1">
              <i className="bx bx-menu" style={{cursor : "pointer"}}></i>
            </label>
            <img
              src="https://www.kotak.com/content/dam/Kotak/kotak-logo.png"
              alt="kotak-logo"
            />
                   
        </div>
   
        </div>
        <div className="second-part">
          <div
            className="search-icon"
            onClick={toggleSearch}
            style={{ cursor: "pointer" }}
          >
            <i className="bx bx-search-alt-2"></i>
            <p style={{ color: "white" }}>Search</p>
          </div>
        </div>
        <div className="scrollnav-right">
          <div className="nav-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png?w=740&t=st=1688030514~exp=1688031114~hmac=0ed07c099478076b7e47be5bdf8a09110851919c922092c3986cb01d6de7a12a"
              alt="profile"
            />
            <button className="button-23">
              <i className="bx bx-user"></i>
              Login
            </button>
          </div>
        </div>
        {isSearchOpen && (
          <div className="search-modal1">
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
      </div>
    </div>
  );
};

export default ScrollNavbar;
