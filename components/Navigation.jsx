import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { IoIosArrowBack, IoMdArrowUp } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import utilStyles from "../styles/utils.module.css";
import { FaChevronUp } from "react-icons/fa";
const Navigation = ({ blog, isScrollLinksHidden }) => {
  const [showNavItems, setShowNavItems] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    const nav = document.querySelector(".nav-list");

    if (showNavItems) {
      nav.classList.remove("nav-on");
      nav.classList.add("nav-off");
      document.querySelector(".nav-icon-container").style.position = "fixed";
      setShowNavItems(false);
    } else {
      nav.classList.remove("nav-off");
      nav.classList.add("nav-on");

      document.querySelector(".nav-icon-container").style.position = "fixed";
      setShowNavItems(true);
    }
  };

  const closeNav = () => {
    if (showNavItems) {
      setShowNavItems(false);
      toggleNav();
    }
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      {!blog ? (
        <nav className="navigation" id="top">
          <header className="logo">
            <Link href="/">
              <Image
                src={"/assets/logo-not-transparent.png"}
                alt="Logo"
                width={371}
                height={371}
              />
              WitsDevSoc
            </Link>
          </header>
          <div className="nav-items-container">
            <div onClick={toggleNav} className="nav-icon-container">
              {showNavItems ? <HiX size="2rem" /> : <HiMenuAlt4 size="2rem" />}
            </div>

            <ul className="nav-list">
              {!isScrollLinksHidden ? (
                <>
                  <li>
                    <ScrollLink
                      to="team"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={closeNav}
                      href="#"
                    >
                      Team
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="testimonials"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={closeNav}
                      href="#"
                    >
                      Our Partners
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="footer"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={closeNav}
                      href="#"
                    >
                      Contact
                    </ScrollLink>
                  </li>
                </>
              ) : null}
              <li>
                <Link
                  href="/blog"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: ".5rem",
                    borderRadius: "10px",
                  }}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <ScrollLink
            to="top"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeNav}
            href="#"
            style={{
              position: "fixed",
              bottom: "2.7rem",
              right: "1rem",
              padding: "1rem",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              backgroundColor: "#000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "3",
            }}
          >
            <FaChevronUp />
          </ScrollLink>
        </nav>
      ) : (
        <nav className="navigation blogStyles" id="top">
          <header className="logo">
            <Link href="/">
              <Image
                src={"/assets/logo-not-transparent.png"}
                alt="Logo"
                width={371}
                height={371}
              />
              WitsDevSoc
            </Link>
          </header>
          <Link href="/" className="blogLink">
            <IoIosArrowBack className="blogBack" size="2.5rem" />
          </Link>
          <ScrollLink
            to="top"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeNav}
            href="#"
            style={{
              position: "fixed",
              bottom: "2.7rem",
              right: "1rem",
              padding: "1rem",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              backgroundColor: "#000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "3",
            }}
          >
            <FaChevronUp />
          </ScrollLink>
        </nav>
      )}
    </>
  );
};

export default Navigation;
