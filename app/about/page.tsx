"use client";
import a from "../about/About.module.scss";
import Image from "next/image";
import HeroImage from "../HeroImage.png";
import { GiReceiveMoney } from "react-icons/gi";
import { FaCogs, FaUserTie } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

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
              <h3 className="title2">Why you should choose us</h3>
            </div>

            <div className={a.leftCard}>
              <div className={a.icon}>
                {" "}
                <FaUserTie className={a.ikon} />
              </div>
              <div>
                <h3 className="title2">Expertise and Experience:</h3>
                <p>
                  Specializing in multiple areas of design for the past 15
                  years, we have a wealth of expertise and experience in each
                  field, resulting in high-quality work and innovative
                  solutions.
                </p>
              </div>
            </div>

            <div className={a.leftCard}>
              <div className={a.icon}>
                {" "}
                <MdDesignServices className={a.ikon} />
              </div>
              <div>
                <h3 className="title2">Comprehensive services: </h3>
                <p>
                  We provide clients with a one-stop solution for all their
                  design needs, ensuring a consistent brand image across
                  different platforms and mediums.
                </p>
              </div>
            </div>

            <div className={a.leftCard}>
              <div className={a.icon}>
                {" "}
                <FaCogs className={a.ikon} />
              </div>
              <div>
                <h3 className="title2">Integration and consistency: </h3>
                <p>
                  With a range of services under one roof, we ensure that all
                  the design elements are integrated and consistent, resulting
                  in a cohesive and aesthetically pleasing end product.
                </p>
              </div>
            </div>

            <div className={a.leftCard}>
              <div className={a.icon}>
                <GiReceiveMoney className={a.ikon} />
              </div>
              <div>
                <h3 className="title2">Cost-effectiveness:</h3>
                <p>
                  Hiring multiple agencies for each design aspect can be
                  time-consuming and expensive. We help reduce the overall cost
                  of your design projects while still receiving high-quality
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
