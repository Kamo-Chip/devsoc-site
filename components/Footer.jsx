import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import footerStyles from "../styles/footer.module.css";
import utilStyles from "../styles/utils.module.css";
const Footer = () => {
  return (
    <footer className={footerStyles.container} id="footer">
      <div className={footerStyles.subContainer}>
        <h2>Connect With Us</h2>
        <span>
          Drop by any of our social media outlets to learn more about us, keep
          up-to-date with our upcoming events!
        </span>
        <div style={{ marginTop: "1rem", fontSize: "24px" }}>
          <a
            href="https://www.instagram.com/witsdevsoc"
            target="_blank"
            style={{ paddingRight: "1.5em" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/wits-developer-society"
            target="_blank"
            style={{ paddingRight: "1.5em" }}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/witsdevsoc/"
            target="_blank"
            style={{ paddingRight: "1.5em" }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://discord.gg/QjphB5N6NC"
            target="_blank"
            style={{ paddingRight: "1.5em" }}
          >
            <FaDiscord />
          </a>
        </div>
      </div>
      <div className={footerStyles.subContainer}>
        <h2>Join Our Society</h2>
        <span>
          Get involved in upcoming events and show us what you are made of!
        </span>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfP8Yl0WAxFL8cXUMEn0WmhSJtXW44i02uXmXNsPD7zCgFWSg/viewform"
          target="_blank"
          style={{ backgroundColor: "#fff", color: "#000", marginTop: "1rem" }}
          className={utilStyles.button}
        >
          Register now
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          padding: "0 1rem",
          justifyContent: "space-between",
          position: "absolute",
          bottom: "1rem",
        }}
      >
        <span>
          Get in touch at{" "}
          <a
            href="mailto:witsdevsoc@gmail.com?subject=Enquiry About"
            style={{
              textDecoration: "underline",
              textDecorationThickness: "2px",
            }}
          >
            witsdevsoc@gmail.com
          </a>
        </span>
        <Link
          href="/faqs"
          style={{
            textDecoration: "underline",
            textDecorationThickness: "2px",
          }}
        >
          FAQs
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
