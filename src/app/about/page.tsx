import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import aboutImage from "@/assets/images/about-img.jpg";
import Heading from "@/components/shared/Heading";
import styles from "./about.module.css";

const HomeSection = () => {
  return (
    <Wrapper>
      <section className={styles.aboutSection}>
        <div className={styles.imageContainer}>
          <Image
            src={aboutImage}
            alt="Our team of developers"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.contentContainer}>
          <Heading text="About Us" className={styles.heading} />
          <p className={styles.description}>
            We are a team of innovative thinkers and passionate developers,
            dedicated to crafting exceptional digital experiences. With a deep
            understanding of the latest technologies, we specialize in designing
            and developing custom software solutions that drive business growth.
            From bespoke web applications to mobile platforms and e-commerce
            sites, we provide tailored solutions that empower our clients and
            fuel their success.
          </p>
          <div className={styles.buttonContainer}>
            <Button text="Learn More" className={styles.ctaButton} />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default HomeSection;
