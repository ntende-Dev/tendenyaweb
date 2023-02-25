import Image from "next/image";
import Link from "next/link";
import Hero from "../../../app/HeroImage.png";
import h from "../Home/Home.module.scss";

const Home = () => {
  return (
    <>
      <main className="container">
        <div className={h.homeWrapper}>
          <div className={h.lefty}>
            <p className="breadCrumb"></p>
            <h1 className={h.title}>
              <span className={h.spani}> Masterfully </span>
              <br />
              crafted logos & <br />
              <span className={h.spani}> responsive</span> webs apps!
            </h1>
            <p className={h.para}>
              Get a logo which is optimized for brand visibility AND a web
              application which is accessible, secure & fast!
              <br />
              <br />
              Contact us for cutting edge & innovative digital solutions!
            </p>
            <Link href={"/"}>
              <button className={h.contactBtn}>Request a quote</button>
            </Link>
          </div>

          <div className={h.righty}>
            <Image src={Hero} alt="heroImage" />
            <div className={h.cirleTeal}></div>
            <div className={h.circleOrange}></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
