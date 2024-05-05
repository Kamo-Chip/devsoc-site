import Testimonial from "../components/Testimonial";
import Aos from "aos";
import "aos/dist/aos.css";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Bubble from "../components/Bubble";
const partners = [
  { name: "BBD", imageSrc: "/assets/partners/bbd.jpg" },
  { name: "Psybergate", imageSrc: "/assets/partners/psyb.jpg" },
  { name: "AWS", imageSrc: "/assets/partners/aws.png" },
  { name: "Entelect", imageSrc: "/assets/partners/ente.png" },
  { name: "Retro Rabbit", imageSrc: "/assets/partners/retrorab.png" },
  { name: "Epiuse", imageSrc: "/assets/partners/epiuse.png" },
  { name: "BSG", imageSrc: "/assets/partners/bsgg.jpg" },
  { name: "Dariel", imageSrc: "/assets/partners/dariel.jpg" },
  { name: "Synthesis", imageSrc: "/assets/partners/synth.png" },
  { name: "MWR", imageSrc: "/assets/partners/mwr.jpg" },
  { name: "BDO", imageSrc: "/assets/partners/bdo.png" },
  { name: "+oneX", imageSrc: "/assets/partners/onexx.png" },
  { name: "Mohara", imageSrc: "/assets/partners/moharaa.png" },
  { name: "Derivico", imageSrc: "/assets/partners/deriv.png" },
  { name: "AdaptIT", imageSrc: "/assets/partners/adapt.png" },
  { name: "YDragon", imageSrc: "/assets/partners/ydar.jpg" },
  { name: "Yellow", imageSrc: "/assets/partners/yello.png" },
  { name: "Zindi", imageSrc: "/assets/partners/zindi.png" },
];
const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnFocusIn: true, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section
      className="testimonials"
      id="testimonials"
      style={{ marginBottom: "5rem", position: "relative" }}
    >
      <h1>Our Partners</h1>
      <div className="testimonialsContainer">
        <div className="testimonialMobile">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {partners.map((partner, idx) => {
                return (
                  <div className="embla__slide" key={`${partner}${idx}`}>
                    <Testimonial
                      imgSrc={partner.imageSrc}
                      name={partner.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
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

export default Testimonials;
