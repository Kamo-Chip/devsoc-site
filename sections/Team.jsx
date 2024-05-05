import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import teamStyles from "../styles/team.module.css";

const years = ["2024", "2023", "2022"];
const team = {
  2022: [
    {
      id: 1,
      name: "Je-Mé Kruger-Baartjies",
      team: "Head of Society",
      image: "/assets/members/jeme.jpg",
      linkedin: "http://linkedin.com/in/je-mekruger-baartjes",
    },
    {
      id: 2,
      name: "Ghulame Arbi",
      team: "Corporate Partnerships Team",
      image: "/assets/members/ghu.jpg",
      linkedin: "http://linkedin.com/in/mujtaba-arbi",
    },
    {
      id: 3,
      name: "Ntokozo Mkhonza",
      team: "Social Media Team",
      image: "/assets/members/ntoko.png",
      linkedin: "http://linkedin.com/in/ntokozo-mkhonza-a4717018b",
    },
    {
      id: 4,
      name: "Taufeeq Razak",
      team: "Developer Team",
      image: "/assets/members/tau.jpg",
      linkedin: "http://linkedin.com/in/taufeeq-razak-6202041b3",
    },

    {
      id: 5,
      name: "Bhavik Govan",
      team: "Corporate Partnerships Team",
      image: "/assets/members/bha.jpg",
      linkedin: "https://www.linkedin.com/in/bhavik-govan-321702169",
    },

    {
      id: 6,
      name: "Thapelo Seletisha",
      team: "Developer Team",
      image: "/assets/members/thap.jpg",
      linkedin: "http://linkedin.com/in/thapelo-seletisha",
    },
    {
      id: 7,
      name: "Kimentha Govender",
      team: "Social Media Team",
      image: "/assets/members/kim.jpg",
      linkedin: "http://linkedin.com/in/kimentha-govender",
    },
    {
      id: 8,
      name: "Jeremy Crouch",
      team: "Writing Team",
      image: "/assets/members/jer.jpg",
      linkedin: "http://linkedin.com/in/jeremy-crouch-5571331b5",
    },
    {
      id: 9,
      name: "Nyeleti Kanyana",
      team: "Writing Team",
      image: "/assets/members/nyel.jpg",
      linkedin:
        "https://www.linkedin.com/in/ntsakisi-nyeleti-kanyana-463664205",
    },

    {
      id: 10,
      name: "Suraksha Motilal",
      team: "Workshop Team",
      image: "/assets/members/sura.jpg",
      linkedin: "http://linkedin.com/in/suraksha-motilal-3177a319a",
    },
    {
      id: 11,
      name: "Ziyaad Ballim",
      team: "Corporate Partnerships Team",
      image: "/assets/members/Ziyaad.png",
      linkedin: "http://linkedin.com/in/ziyaad-ballim-7174481b0",
    },
  ],
  2023: [
    {
      id: 1,
      name: "Ziyaad Ballim",

      team: "Corporate & Event Partnership Team",
      image: "/assets/members/Ziyaad.png",
      linkedin: "https://www.linkedin.com/in/ziyaad-ballim-7174481b0/",
    },
    {
      id: 2,
      name: "Thato Senoamadi",

      team: "Corporate & Event Partnership Team",
      image: "/assets/members/thato.jpg",
      linkedin: "https://www.linkedin.com/in/thato-senoamadi-4422091a6",
    },
    {
      id: 3,
      name: "Kimentha Govender",

      team: "Head of Society",
      image: "/assets/members/kim.jpg",
      linkedin: "https://www.linkedin.com/in/kimentha-govender",
    },
    {
      id: 4,
      name: "Kudzai Saurombe",

      team: "Corporate & Event Partnership Team",
      image: "/assets/members/Kudza.png",
      linkedin: "https://www.linkedin.com/in/kudzai-saurombe-2380a3170",
    },
    {
      id: 5,
      name: "Abdel Mfougouon Njupoun",

      team: "Corporate & Event Partnership Team",
      image: "/assets/members/abdel.jpg",
      linkedin: "https://www.linkedin.com/in/abdel-mfougouon-njupoun",
    },
    {
      id: 6,
      name: "Eram Sarah",

      team: "Corporate & Event Partnership Team",
      image: "/assets/members/Eram.jpg",
      linkedin: "https://www.linkedin.com/in/eram-sarah",
    },
    {
      id: 7,
      name: "Iviwe Maseti",

      team: "Corporate & Event Partnership Team",
      image: "/assets/members/Quest.jpg",
      linkedin: "https://www.linkedin.com/in/iviwe-maseti-28b936224",
    },
    {
      id: 8,
      name: "Keren Chetty",

      team: "Social Media Team",
      image: "/assets/members/Keren.jpeg",
      linkedin: "https://www.linkedin.com/in/keren-chetty-48a14022b",
    },
    {
      id: 9,
      name: "Neo Nkosi",

      team: "Photography Team",
      image: "/assets/members/Neo.jpg",
      linkedin: "https://www.linkedin.com/in/neo-nkosi-3a570420a",
    },
    {
      id: 10,
      name: "Pretty Mangwadi",

      team: "Social Media Team",
      image: "/assets/members/Pretty.jpg",
      linkedin: "https://www.linkedin.com/in/pretty-mangwadi-18838522a",
    },
    {
      id: 11,
      name: "Valerie Chinyoka",

      team: "Developer Team",
      image: "/assets/members/val.jpg",
      linkedin: "https://www.linkedin.com/in/valerie-chinyoka",
    },
    {
      id: 12,
      name: "Zainub Lorgat",

      team: "Social Media Team",
      image: "/assets/members/zayzay.jpg",
      linkedin: "https://za.linkedin.com/in/zainab-lorgat-861603246",
    },
    {
      id: 13,
      name: "Mahdiyyah Jhetam",

      team: "Writing Team",
      image: "/assets/members/Mahdiyyah.jpg",
      linkedin: "http://www.linkedin.com/in/mahdiyyah-jhetam",
    },
    {
      id: 14,
      name: "Nyeleti Kanyana",

      team: "Writing Team",
      image: "/assets/members/Nyelz.png",
      linkedin:
        "https://www.linkedin.com/in/ntsakisi-nyeleti-kanyana-463664205",
    },
    {
      id: 15,
      name: "Mohammed Huzaifah",

      team: "Developer Team",
      image: "/assets/members/Mohammed-Huzaifah.jpg",
      linkedin: "https://www.linkedin.com/in/mhbangie",
    },
    {
      id: 16,
      name: "Ntiyiso Mushwana",

      team: "Corporate & Event Partnership Team",
      image: "/assets/members/Ntiyiso.jpg",
      linkedin: "https://www.linkedin.com/in/ntiyiso-mushwana-623b4b112",
    },
    {
      id: 17,
      name: "Cwenga Gcolotela",

      team: "Corporate & Event Partnership Team",
      image: "/assets/members/cwe.jpg",
      linkedin: "https://www.linkedin.com/in/cwengazc",
    },
    {
      id: 18,
      name: "Patience Mbanga",

      team: "Writing Team",
      image: "/assets/members/pati.jpg",
      linkedin: "https://za.linkedin.com/in/patience-mbanga-a67332269",
    },
  ],
  2024: [
    {
      id: 1,
      name: "Keren Chetty",
      team: "Head of Society",
      image: "/assets/members/Keren.jpeg",
      linkedin: "https://www.linkedin.com/in/keren-chetty-48a14022b/",
    },
    {
      id: 2,
      name: "Mohammed Huzaifah",
      team: "Head of Developers Team",
      image: "/assets/members/Mohammed-Huzaifah.jpg",
      linkedin: "http://www.linkedin.com/in/mhbangie",
    },
    {
      id: 3,
      name: "Kamogelo Khumalo",
      team: "Developers Team",
      image: "/assets/members/kamo.jpg",
      linkedin: "https://www.linkedin.com/in/kamogelokhumalo/",
    },
    {
      id: 4,
      name: "Tsiri Moloko",
      team: "Developers Team",
      image: "/assets/members/Tsiri-Moloko.jpg",
      linkedin: "https://www.linkedin.com/in/moloko-tsiri-161881265/",
    },

    {
      id: 5,
      name: "Pretty Mangwadi",
      team: "Social Media Team",
      image: "/assets/members/Pretty.jpg",
      linkedin: "https://www.linkedin.com/in/pretty-mangwadi-18838522a",
    },

    {
      id: 6,
      name: "Zainub Lorgat",
      team: "Social Media Team",
      image: "/assets/members/zayzay.jpg",
      linkedin: "https://www.linkedin.com/in/zainablorgat/",
    },
    {
      id: 7,
      name: "Kayisha Naidoo",
      team: "Social Media Team",
      image: "/assets/members/Kayisha Naidoo.jpg",
      linkedin: "https://www.linkedin.com/in/kayisha-naidoo-90a821270/",
    },
    {
      id: 8,
      name: "Lubabalo Dlwathi",
      team: "Social Media Team",
      image: "/assets/members/Dlwa_up.png",
      linkedin: "https://www.linkedin.com/in/lubabalo-b-dlwathi-336219202/",
    },

    {
      id: 9,
      name: "Jessica Badiata",
      team: "Photographer",
      image: "/assets/members/Jessica_up.png",
      linkedin: "http://www.linkedin.com/in/jessica-badiata-165726242",
    },

    {
      id: 10,
      name: "Ziyaad Ballim",
      team: "Corporate & Event Partnership Team ",
      image: "/assets/members/Ziyaad.png",
      linkedin: "https://www.linkedin.com/in/ziyaad-ballim-7174481b0",
    },
    {
      id: 11,
      name: "Kutlwano Ralehlaka",
      team: "Corporate & Event Partnership Team ",
      image: "/assets/members/Kutlwano Ralehlaka .jpg",
      linkedin: "https://www.linkedin.com/in/kutlwano-ralehlaka",
    },

    {
      id: 12,
      name: "Ibram Chilufya",
      team: "Corporate & Event Partnership Team ",
      image: "/assets/members/Ibram Chilufya.jpg",
      linkedin: "https://www.linkedin.com/in/ibramchilufya/",
    },

    {
      id: 13,
      name: "Mahdiyyah Jhetam",
      team: "Writing Team",
      image: "/assets/members/Mahdiyyah.jpg",
      linkedin: "http://www.linkedin.com/in/mahdiyyah-jhetam",
    },

    {
      id: 14,
      name: "Emmanuel Azubuike",
      team: "Writing Team",
      image: "/assets/members/Emmanuel Azubuike.jpeg",
      linkedin:
        "https://www.linkedin.com/in/emmanuel-obinna-azubuike-b39940274",
    },
  ],
};

const Team = () => {
  const [currYear, setCurrYear] = useState(years[0]);
  const [currTeam, setCurrTeam] = useState(team[years[0]]);

  useEffect(() => {
    setCurrTeam(team[currYear]);
  }, [currYear]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section
      className={teamStyles.container}
      id="team"
      data-aos="fade-in"
      data-aos-easing="ease-in"
    >
      <h1>Meet The Team</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          fontSize: "20px",
          maxWidth: "800px",
          width: "100%",
          alignSelf: "center",
        }}
      >
        {years
          .sort((a, b) => b - a)
          .map((year, idx) => {
            return (
              <span
                key={`${year}${idx}`}
                onClick={() => {
                  setCurrYear(year);
                }}
                style={{
                  textDecoration: currYear == year ? "underline" : "none",
                  cursor: "pointer",
                }}
              >
                {year}
              </span>
            );
          })}
      </div>
      <div className={teamStyles.subContainer}>
        {currTeam.map((member, idx) => {
          return (
            <MemberItem
              key={`${member}${idx}`}
              imgSrc={member.image}
              name={member.name}
              position={member.team}
              linkedInUrl={member.linkedin}
            />
          );
        })}
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
      />
      <Bubble
        style={{
          position: "absolute",
          backgroundColor: "var(--blue-1)",
          height: "600px",
          width: "600px",
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
          height: "350px",
          width: "350px",
          right: "1rem",
          bottom: "30vh",
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
          right: "-10px",
          top: "-20px",
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

const MemberItem = ({ imgSrc, name, position, linkedInUrl }) => {
  return (
    <div className={teamStyles.itemContainer}>
      <Image src={imgSrc} alt="" width={200} height={200} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            textAlign: "center",
            margin: ".5rem 0",
            fontWeight: "500",
          }}
        >
          {name}
        </span>
        <span style={{ textAlign: "center", fontSize: "14px" }}>
          {position}
        </span>
        <a
          href={linkedInUrl}
          target="_blank"
          style={{
            marginTop: ".5rem",
            backgroundColor: "var(--linkedin-blue)",
            color: "#fff",
            padding: ".5rem",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};
export default Team;
