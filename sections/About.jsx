import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import Bubble from "../components/Bubble";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section
      className="about"
      id="about"
      data-aos="fade-in"
      data-aos-easing="ease-in"
      style={{ position: "relative" }}
    >
      <div className="img-container">
        <Image
          src="/assets/promo-figure-alt.svg"
          alt="one orange duck surrounded by yellow ducks"
          height={479}
          width={359}
        />
      </div>
      <div className="text-container">
        <h1>About Us</h1>
        <div
          style={
            {
              // backgroundColor: "#fff",
              // borderRadius: "10px",
              // boxShadow: "0 0 1px grey",
              // padding: ".25rem 1rem",
            }
          }
        >
          <p>
            The world of software development is vast. Due to limited time, a
            university class fails to cover all fields in detail. This has led
            many graduates to face a bit of culture shock when they step out
            into the industry for the first time.
          </p>
          <p>
            The Wits Developer Society is a student led organization designed
            for student programmers with a mission to equip them with all they
            need to make for a smooth transition from university to work. Our
            vision is to see students become more aware of the world of
            opportunities out there and have knowledge of how to get there.
          </p>
        </div>
      </div>
      {/* <Bubble
        style={{
          position: "absolute",
          backgroundColor: "var(--blue-1)",
          height: "250px",
          width: "250px",
          left: "0",
          top: "0",
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
          right: "1rem",
          bottom: "20vh",
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
          right: "10%",
          top: "10%",
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
          left: "-10px",
          bottom: "0",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      /> */}
    </section>
  );
};

export default About;
