import React from "react";
import "./Footer.css";
import designSvg from "../../assets/design.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <img className="github" src="./github.png" alt="githup"  />
      <img
        src={designSvg}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
      <a
        href="https://github.com/Mehmet-github06"
        target="_blank"
        rel="noopener noreferrer"
        // style={{ textDecoration: "none" }}
      >
        <h2 className="brand">{"Mehmet Doğan"}</h2>
      </a>
    </div>
  );
};

export default Footer;
