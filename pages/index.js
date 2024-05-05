import Layout from "../components/layout";
import { PageWrapper } from "../components/page-wrapper";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Team from "../sections/Team";
import Testimonials from "../sections/Testimonials";

export default function Home() {
  return (
    <Layout>
      <PageWrapper>
        <Hero />
        <About />
        <Services />
        <Team />
        <Testimonials />
      </PageWrapper>
    </Layout>
  );
}
