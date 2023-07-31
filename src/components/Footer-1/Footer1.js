import React from "react";
import "./Footer1.css";
import Footer2 from "../Footer-2/Footer2";

const Footer1 = () => {
  return (
    <div>
      {/* Footer section 1 */}
      <div className="footer-one">
        <div className="footer-content">
          <p className="footer-title">Channel Red *New*</p>
          <p className="footer-detail">
            Mobile Banking | Net Banking | Manage your accosunt | Transfer money
            | Recharge / Make payments | Credit Cards | Debit Cards | Loans |
            National Pension Scheme | Deposits
          </p>
        </div>
        <div className="footer-content">
          <p className="footer-title">Popular Products</p>
          <p className="footer-detail">
            Home Loan | Personal Loan | Savings Account | Current Account |
            Credit Cards | Mutual Funds | National Pension Scheme (NPS) |
            Business Loan | Zero Balance Savings Account | Life Insurance |
            Fixed Deposit | Recurring Deposit | Loan against property
          </p>
        </div>
        <div className="footer-content">
          <p className="footer-title">Help Center</p>
          <p className="footer-detail">
            Account | Issue with Transactions |Credit Card | 811 Account | Fund
            Transfer, Bill Payment & Recharge | Loans | FASTag | Fixed Deposit
            (FD) and Recurring Deposit (RD) | NRI Services | My Profile - Mobile
            Number, Aadhaar, Email ID & Address | Forex | Insurance (Premium
            payments, Tax benefit etc ) | Investments (Scheme Issues, Dividend
            related) | Working Capital | KayMall - Flights, Hotels, Bus, Trains,
            Shopping
          </p>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Footer1;
