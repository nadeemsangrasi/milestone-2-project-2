import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import SImg1 from "@/assets/images/s-1-img.jpg";
import SImg2 from "@/assets/images/s-2-img.jpg";
import SImg3 from "@/assets/images/s-3-img.jpg";
import styles from "./Services.module.css";

const ServicesSection = () => {
  return (
    <Wrapper>
      <div
        id="services"
        className={`${styles.container} flex flex-col lg:flex-row gap-8 lg:gap-16 p-6 lg:p-16`}
      >
        <div className={`${styles.imageContainer} w-full lg:w-1/2`}>
          <Image
            src={SImg1}
            alt="service image"
            className={`${styles.image} w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-95`}
          />
        </div>
        <div
          className={`${styles.textContainer} w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left space-y-6 bg-white p-8 rounded-lg shadow-md`}
        >
          <h6 className="text-primary text-lg font-semibold tracking-widest">
            SERVICES
          </h6>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            We Provide Best Web Development Services
          </h1>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            We specialize in creating stunning and functional websites. Our team
            of experts uses the latest technologies to ensure your site is not
            only visually appealing but also user-friendly and responsive.
            Partner with us to bring your web presence to life.
          </p>
          <div
            className={`${styles.imageGallery} flex flex-col sm:flex-row gap-4 justify-center`}
          >
            <Image
              src={SImg2}
              alt="service image"
              className={`${styles.galleryImage} w-40 sm:w-48 h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-95`}
            />
            <Image
              src={SImg3}
              alt="service image"
              className={`${styles.galleryImage} w-40 sm:w-48 h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-95`}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesSection;
