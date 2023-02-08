import React from "react";
import f from "../Footer/Footer.module.scss";

const Footer = () => {
  return (
    <div className={f.footerContainer}>
      <div className={f.copyright}>
        &copy; {new Date().getFullYear()} Tendenya. All rights reserved.
      </div>
      <div>
        <p className={f.terms}>Terms of service</p>
      </div>
      <div>
        <p className={f.disclaimer}>Disclaimer</p>
      </div>
    </div>
  );
};

export default Footer;
