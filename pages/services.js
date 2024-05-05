import Layout from "../components/layout";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import Head from "next/head";
import Testimonials from "../sections/Testimonials";

const ServicePage = () => {
  return (
    <Layout>
      <Services />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default ServicePage;
