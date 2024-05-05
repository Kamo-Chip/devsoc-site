import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Layout from "../components/layout";
import { useState } from "react";

const questions = [
  {
    question: "Can I join even if I’m not a WITS computer science student?",
    answer:
      "Of course! As long as you are a registered student of WITS you can be a member of the WITS Developer Society, no matter the faculty.",
  },
  {
    question: "Are there any membership fees?",
    answer:
      "Nope! As long as you are a registered WITS student you can join free of charge!",
  },
  {
    question: "How do I join your discord?",
    answer:
      "Once you’ve filled out the membership registration form you will receive a link to join our discord.",
  },
  {
    question: "Do I have to participate in events?",
    answer:
      "Attendance at all WDS events is optional, but we’d really recommend you come along! We really try our best to make them as fun and interesting as possible.",
  },
  {
    question: "Will you be able to find me an internship position?",
    answer:
      "As much as the WDS encourages and supports student developer internships, we cannot promise to secure positions for members. Instead, regular open positions and internship opportunities will be shared in our discord server and mailing list.",
  },
  {
    question:
      "I have an article that I’d publish on your blog - who do I get in contact with?",
    answer:
      "Email your pitch to witsdevsoc@gmail.com and someone from our writing team will approve and edit your piece.",
  },
  {
    question:
      "My organization would like to partner with your society, how do we go about doing it?",
    answer:
      "Contact us at witsdevsoc@gmail.com and we will be sure to get back to you and the various sponsorship opportunities our society has to offer.",
  },
];
const FAQPage = () => {
  return (
    <Layout blog={false} isScrollLinksHidden={true}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Frequently Asked Questions</h1>
        <div
          style={{
            marginBottom: "2rem",
            lineHeight: "24px",
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          {questions.map((question, idx) => {
            return <FAQItem key={`${question}${idx}`} question={question} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

const FAQItem = ({ question }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 1px grey",
        padding: "1rem",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontWeight: "500", fontSize: "20px" }}>
          {question.question}
        </span>
        <span
          onClick={() => setIsAnswerVisible(!isAnswerVisible)}
          style={{
            cursor: "pointer",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!isAnswerVisible ? <FaChevronDown /> : <FaChevronUp />}
        </span>
      </div>
      {isAnswerVisible ? (
        <span
          style={{ fontSize: "18px", paddingLeft: ".5rem", marginTop: "1rem" }}
        >
          {question.answer}
        </span>
      ) : null}
    </div>
  );
};
export default FAQPage;
