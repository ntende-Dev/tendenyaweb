"use client";

import Link from "next/link";
import Image from "next/image";
import n from "../Nav/Nav.module.scss";
import Logo from "../../../public/tenLogo.png";
import { TbPhoneCall } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={n.navContainer}>
      <div className={n.navWrapper}>
        <div className={n.logo}>
          <Image src={Logo} alt="logo" width={200} />
        </div>{" "}
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Services</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
        <div className={n.navBtn}>
          <p className={n.callUs}>Call us now @</p>
          <p className={n.btnText}>
            <TbPhoneCall /> +27 73 793 7267
          </p>
        </div>
        <div className={n.burgerWrapper} onClick={() => setOpen(!open)}>
          <div className={open ? n.burgerOpen : n.burgerClose}></div>
        </div>
      </div>
      {open && (
        <>
          <div className={n.mobileMenu}>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/"}>Services</Link>
              </li>
              <li>
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
