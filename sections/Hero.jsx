import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import heroStyles from "../styles/hero.module.css";
import utilStyles from "../styles/utils.module.css";
import Bubble from "../components/Bubble";
const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section className={heroStyles.hero} id="hero">
      <div className={heroStyles.heroContainer}>
        <div className={heroStyles.heroTextContainer}>
          <span data-aos="fade-left" data-aos-easing="ease">
            Student-Run Society
            <br />
          </span>
          <span
            data-aos="fade-left"
            data-aos-delay="1500"
            data-aos-easing="ease"
          >
            Filling The Gap Between Your Studies And Your Career
          </span>
          <small
            data-aos="fade-in"
            data-aos-delay="3000"
            data-aos-easing="ease-in"
          >
            Collaborate, upskill, and network with fellow students and our
            partner companies
          </small>
          <a
            href="https://linktr.ee/witsdevsoc"
            target="_blank"
            className={utilStyles.button}
            style={{ marginTop: "1rem", fontSize: "24px" }}
            data-aos="fade-up"
            data-aos-delay="5000"
            data-aos-easing="ease-in"
          >
            Connect with us
          </a>
        </div>

        <Image
          priority
          src="/assets/hero2.png"
          width={851}
          height={449}
          data-aos="fade-in"
          data-aos-delay="6000"
          data-aos-easing="ease-in"
        />
      </div>
      {/* <Bubble
        style={{
          position: "absolute",
          backgroundColor: "var(--blue-1)",
          height: "250px",
          width: "250px",
          left: "1rem",
          top: "30vh",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      /> */}
      {/* <Bubble
        style={{
          position: "absolute",
          backgroundColor: "var(--blue-1)",
          height: "500px",
          width: "500px",
          left: "30vw",
          top: "30vh",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      />
      <Bubble
        style={{
          position: "absolute",
          backgroundColor: "var(--blue-1)",
          height: "320px",
          width: "320px",
          right: "1rem",
          bottom: "50vh",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      />
      <Bubble
        style={{
          position: "absolute",
          backgroundColor: "var(--blue-1)",
          height: "200px",
          width: "200px",
          right: "30%",
          top: "10px",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      />
      <Bubble
        style={{
          position: "absolute",
          backgroundColor: "var(--blue-1)",
          height: "300px",
          width: "300px",
          left: "10px",
          bottom: "0",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      /> */}
    </section>
  );
};

export default Hero;
