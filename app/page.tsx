"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "../app/heroImage.png";
import h from "../app/Home.module.scss";

export default function Home() {
  return (
    <main className={h.homeContainer}>
      <div className={h.homeWrapper}>
        <div className={h.lefty}>
          <p className={h.breadCrumb}>
            In this digital age, <br />a company should at least have
          </p>
          <h1 className={h.title}>
            A <span className={h.spani}> masterfully </span>
            <br />
            crafted logo & <br />
            <span className={h.spani}> responsive</span> website!
          </h1>
          <p className={h.para}>
            Logos we create are optimized for brand visibility. <br />
            We develop web applications which are highly <br />
            accessible, secure, responsive and, fast!
            <br />
            <br />
            Let us help you with our innovative digital solutions.
          </p>
          <Link href={"/"}>
            <button className="contactBtn">Request a quote</button>
          </Link>
        </div>

        <div className={h.righty}>
          <Image src={Hero} alt="heroImage" />
        </div>
      </div>
    </main>
  );
}
