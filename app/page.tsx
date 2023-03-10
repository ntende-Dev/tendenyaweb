import Image from "next/image";
import Link from "next/link";
import Hero from "../app/HeroImago.png";
import h from "../app/components/Home/Home.module.scss";

const Home = () => {
  return (
    <>
      <main className="container">
        <div className={h.homeWrapper}>
          <div className={h.lefty}>
            <p className="breadCrumb">The home of</p>
            <h1 className={h.title}>
              <span className={h.spani}> Masterfully </span>
              <br />
              crafted logos & <br />
              <span className={h.spani}> responsive</span> web apps!
            </h1>
            <p className={h.para}>
              Get a logo which is optimized for brand visibility <br />
              and a web application which is accessible, secure & fast!
              <br />
              <br />
              Contact us for cutting edge & innovative digital solutions!
            </p>
            <Link href={"/"}>
              <button className={h.contactBtn}>Request a quote</button>
            </Link>
          </div>

          <div className={h.righty}>
            <div className={h.imageWrapper}>
              <Image src={Hero} alt="heroImage" />
            </div>
            <div className={h.circleTeal}></div>
            <div className={h.circleOrange}></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
