"use client";
import a from "../about/About.module.scss";
import Image from "next/image";
import HeroImage from "../HeroImage.png";
import { Data } from "./AboutData";

const About = () => {
  return (
    <>
      <div className="container">
        <div className={a.aboutWrapper}>
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
          <div className={a.leftWrapper}>
            <div className={a.whowhy}>
              {" "}
              <p className="breadCrumb">ABOUT US</p>
              <h1 className="titleBg">Who we are</h1>
              <p className={a.paraLine}>
                Tendenya was registered in 2008 with the CIPC to help businesses
                reach their target audience and achieve their marketing goals.
              </p>
              <h3 className="title">Why you should choose us</h3>
            </div>

            {Data.map((about) => (
              <div className={a.leftCard} key={about.id}>
                <div className={a.icon}>
                  <p className={a.ikon}>{about.icon}</p>
                </div>
                <div className={a.cardBody}>
                  <h3 className={a.title}>{about.title}</h3>
                  <p className={a.desc}>{about.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
