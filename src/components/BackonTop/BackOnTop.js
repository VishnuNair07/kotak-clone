import React from "react";
import "./BackOnTop.css";
import Footer1 from "../Footer-1/Footer1";

const BackOnTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="back-to-top">
        <p style={{margin : "0"}}>
          <a href="#top" onClick={scrollToTop}>
            Back to Top <i class="bx bxs-chevron-up"></i>
          </a>
        </p>
      </div>
      <Footer1 />
    </div>
  );
};

export default BackOnTop;
