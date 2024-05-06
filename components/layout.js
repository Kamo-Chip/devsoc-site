import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Bubble from "./Bubble";

const Layout = ({ children, blog, isScrollLinksHidden }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Navigation blog={blog} isScrollLinksHidden={isScrollLinksHidden} />
      <Bubble
        style={{
          position: "fixed",
          backgroundColor: "var(--blue-1)",
          height: "200px",
          width: "200px",
          left: "1rem",
          top: "0",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      />
      <Bubble
        style={{
          position: "fixed",
          backgroundColor: "var(--blue-1)",
          height: "500px",
          width: "500px",
          left: "30vw",
          top: "45vh",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      />
      <Bubble
        style={{
          position: "fixed",
          backgroundColor: "var(--blue-1)",
          height: "350px",
          width: "350px",
          right: "1rem",
          bottom: "0",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      />
      <main className="layoutMain">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
