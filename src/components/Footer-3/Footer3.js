import React, { useState } from 'react'
import './Footer3.css'
import FooterDropdown from '../FooterDropdown/FooterDropdown'

const Footer3 = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      {/* Footer Section 3 */}
      <div className="footer3-content">
        <div className="connection-links">
            <p>Connect With Us</p>
            <i class='bx bxl-facebook' ></i>        
             <i class='bx bxl-twitter' ></i>
            <i class='bx bxl-youtube' ></i>
            <i class='bx bxl-linkedin-square' ></i>

        </div>

        <div className="installation-links">
            <p>
Install Kotak - 811 & Mobile Banking App</p>
<div className="installation-img">

<img src="https://www.kotak.com/content/dam/Kotak/google-play.png" alt="google play" />
<img src="https://www.kotak.com/content/dam/Kotak/apple-store.png" alt="App Store" />
</div>
        </div>


        <div className="footer-logo">
            <img src="https://www.kotak.com/content/dam/Kotak/entrust.png" alt="logo" />
            <img src="https://www.kotak.com/content/dam/Kotak/verisign.png" alt="logo" />
        </div>


        <div className="kotak-dropdown">
      <button className="kotak-list" onClick={toggleDropdown}>
        kotak Group Companies <i className="bx bxs-chevron-down"></i>
      </button>
      {isOpen && (
        <div className="dropdown-content1">
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
          )}
    </div>
      </div>



  
  
        <FooterDropdown/>

        {/* End of Footer */}
      <div className="footer-end">
        <p>
            Copyright Kotak Mahindra Bank Limited. | Disclaimer | Privacy Policy | Terms & Conditions
        </p>
      </div>
    </div>
  )
}

export default Footer3
