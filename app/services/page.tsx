"use client";

import Head from "next/head";
import a from "../Services/Services.module.scss";
import Image from "next/image";
import HeroImage from "../HeroImage.png";

const Services = () => {
  return (
    <>
      <div className="container">
        <div className={a.servicesWrapper}>
          <div className={a.leftWrapper}>
            <div className={a.whowhy}>
              {" "}
              <p className="breadCrumb">OUR SERVICES</p>
              <h1 className="titleBg">
                What we do &
                <br /> How we do it.
              </h1>
              <p className={a.paraLine}>
                At Tendenya, we are dedicated to delivering innovative and
                impactful web solutions for our clients. We are constantly
                pushing boundaries and exploring new technologies and techniques
                to help you stay ahead of the curve.
              </p>
            </div>

            <div className={a.leftCard}>
              <div className={a.icon}>
                <h1 className="title"> 01</h1>
              </div>
              <div>
                <h3 className="title2">Branding & logo design </h3>
                <p>
                  We offer unique, professional and eye-catching logo designs
                  that are representative of a brand's identity and values.
                </p>
              </div>
            </div>

            <div className={a.leftCard}>
              <div className={a.icon}>
                <h1 className="title"> 02</h1>
              </div>
              <div>
                <h3 className="title2">Web Development </h3>
                <p>
                  We offer full-service solution for creating and maintaining
                  custom websites that are attractive, functional, and
                  user-friendly.
                </p>
              </div>
            </div>

            <div className={a.leftCard}>
              <div className={a.icon}>
                <h1 className="title"> 03</h1>
              </div>
              <div>
                <h3 className="title2">UI/UX Design</h3>
                <p>
                  We offer UX/UI design services to improve the overall user
                  experience of your website or app by creating interfaces that
                  are both functional and aesthetically pleasing.
                </p>
              </div>
            </div>
            <div className={a.leftCard}>
              <div className={a.icon}>
                <h1 className="title"> 04</h1>
              </div>
              <div>
                <h3 className="title2">Video & Motion Graphics</h3>
                <p>
                  We help create, edit and produce promotional videos, explainer
                  videos, and corporate videos. We also produce animated
                  graphics for videos and commercials
                </p>
              </div>
            </div>
          </div>
          <div className={a.rightWrapper}>
            <div className={a.right}>
              <Image src={HeroImage} alt="picy" />
            </div>
            <div className={a.mission}>
              <h3 className="title2"> Vision: </h3>
              <p className={a.rightPara}>
                To become the leading creative agency delivering innovative and
                user-centered digital solutions that transform businesses and
                brands.
              </p>
            </div>
            <div className={a.mission}>
              <h3 className="title2">Mission:</h3>
              <p className={a.rightPara}>
                To provide unparalleled web design, development, SEO, UI/UX
                design, graphic design, and digital filmmaking services that
                meet the needs and exceed the expectations of our clients.
              </p>
            </div>

            <div className={a.mission}>
              <h3 className="title2">Values:</h3>
              <ul>
                <li>Customer Focus</li>
                <li>Innovation</li>
                <li>Quality</li>
                <li>Collaboration</li>
                <li>Integrity</li>
              </ul>
              <p className={a.rightPara}>
                By adhering to these values, we will deliver exceptional digital
                experiences that make a lasting impact on our clients'
                businesses and their customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
