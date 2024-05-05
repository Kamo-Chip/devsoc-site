import Image from "next/image";

const Testimonial = ({
  imgSrc,
  testimonialText,
  siteLink,
  profileLink,
  clientDetails,
}) => {
  return (
    <div className="testimonial" data-aos="fade-up" data-aos-easing="ease">
      <Image
        src={imgSrc}
        alt={clientDetails}
        width={100}
        height={100}
        style={{ objectPosition: "center", objectFit: "contain" }}
        className="testimonialImg"
      />
    </div>
  );
};

export default Testimonial;
