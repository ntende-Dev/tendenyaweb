import Image from "next/image";
import Link from "next/link";
import Hero from "../app/HeroImage.png";
import h from "../app/Home.module.scss";

export default function Home() {
  return (
    <main className={h.homeContainer}>
      <div className={h.homeWrapper}>
        <div className={h.lefty}>
          <h1 className={h.title}>
            Well <span className={h.spani}> crafted </span> & <br />
            <span className={h.spani}> powerful</span> corporate <br /> identity
            designs
          </h1>
          <p className={h.para}>
            Your company deserves a good logo
            <br /> and a website which is highly optimized. <br />
            <br />
            Let us be your digital marketing solutions provider.
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
