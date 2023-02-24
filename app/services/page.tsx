"use client";

import Head from "next/head";
import a from "../services/Services.module.scss";
import Image from "next/image";
import HeroImage from "../HeroImago.png";
import { Data } from "./ServicesData";

const Services = () => {
  return (
    <>
      <div className="container">
        <div className={a.servicesWrapper}>
          <div className={a.leftWrapper}>
            {Data.map((serv) => (
              <div className={a.leftCard} key={serv.id}>
                <div className={a.ikon}>{serv.icon}</div>
                <div className={a.cardBody}>
                  <h3 className={a.title}>{serv.service} </h3>
                  <p className={a.descr}>{serv.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={a.rightWrapper}>
            <div className={a.whowhy}>
              <p className="breadCrumb">OUR SERVICES</p>
              <h1 className="titleBg">What we do</h1>
              <p className={a.paraLine}>
                At Tendenya, we are dedicated to delivering innovative and
                impactful web solutions for our clients. We are constantly
                pushing boundaries and exploring new technologies and techniques
                to help you stay ahead of the curve.
              </p>
            </div>
            <div className={a.right}>
              <Image src={HeroImage} alt="picy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
