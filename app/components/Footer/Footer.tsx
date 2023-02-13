import React from "react";
import Link from "next/link";
import f from "../Footer/Footer.module.scss";
import { ImPhone } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail, MdLocationPin, MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import c from "../Contact/Contact.module.scss";

const Footer = () => {
  return (
    <div className={f.footerContainer}>
      <div className={f.copyright}>
        &copy; {new Date().getFullYear()} Tendenya. All rights reserved.
      </div>
      <div>
        <p className={f.terms}>
          {" "}
          <Link href={"/terms"}>Terms of service</Link>{" "}
        </p>
      </div>
      <div>
        <p className={f.disclaimer}>Disclaimer</p>
      </div>
      <div>
        <p className={f.disclaimer}>info@tendenya.co.za</p>
      </div>
      <div className={f.socialLinks}>
        <Link href={"/"}>
          <MdFacebook className={f.icon} />
        </Link>
        <Link href={"/"}>
          <AiFillTwitterCircle className={f.icon} />
        </Link>
        <Link href={"/"}>
          <AiFillInstagram className={f.icon} />
        </Link>
        <Link href={"/"}>
          <BsWhatsapp className={f.icon} style={{ fontSize: 27 }} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
