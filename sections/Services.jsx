import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import activityStyles from "../styles/activity.module.css";
import Bubble from "../components/Bubble";

const Services = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section
      className={activityStyles.services}
      id="services"
      data-aos="fade-in"
      data-aos-easing="ease-in"
    >
      <h1>What We Do</h1>
      <div className={activityStyles.container}>
        <ActivityItem
          imgSrc={"/assets/monitor-loading-progress.svg"}
          pointNum={"1"}
          title={"Skill Enhancement"}
          text={
            "Join in our hackathons and other interactive sessions to boost your developer skills"
          }
        />
        <ActivityItem
          imgSrc={"/assets/monitor-window.svg"}
          pointNum={"2"}
          title={"Networking"}
          text={
            "Partake in workshops conducted in association with different years of study and faculties to get to know interesting people"
          }
        />
        <ActivityItem
          imgSrc={"/assets/monitor-cash-credit-card.svg"}
          pointNum={"3"}
          title={"Collaboration"}
          text={"Find a friend or two to help you finish that personal project"}
        />
      </div>
      <button onClick={() => setIsCalendarVisible(!isCalendarVisible)}>
        {!isCalendarVisible ? "View upcoming events" : "Close upcoming events"}
      </button>
      {isCalendarVisible ? (
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Africa%2FJohannesburg&bgcolor=%23ffffff&src=a2Ftb2todW1hbG8wNEBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2Iuc2EjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043"
          style={{
            border: "solid 1px #777",
            alignSelf: "center",
            marginTop: "1rem",
          }}
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      ) : null}
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
      />
      <Bubble
        style={{
          position: "absolute",
          backgroundColor: "var(--blue-1)",
          height: "600px",
          width: "600px",
          left: "30vw",
          top: "20vh",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      />
      <Bubble
        style={{
          position: "absolute",
          backgroundColor: "var(--blue-1)",
          height: "400px",
          width: "400px",
          right: "0",
          top: "0",
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
          right: "15vw",
          bottom: "1rem",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      /> */}
    </section>
  );
};

const ActivityItem = ({ imgSrc, pointNum, title, text }) => {
  return (
    <div className={activityStyles.itemContainer}>
      <Image src={imgSrc} alt="" width={200} height={200} />
      <div>
        <span style={{ fontSize: "24px" }}>{title}</span>
      </div>
      <span style={{ marginTop: ".5rem", textAlign: "center" }}>{text}</span>
    </div>
  );
};
export default Services;
