import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import aboutImage from "@/assets/images/about-img.jpg";
import Heading from "@/components/shared/Heading";
import styles from "./about.module.css";
const HomeSection = () => {
  return (
    <Wrapper>
      <Heading text="About Us" className={styles.heading} />
      <div className={styles.about}>
        <div className={styles.left}>
          <p className="text-sm sm:text-lg font-medium py-2 pb-4">
            At our company, we are a team of innovative thinkers and passionate
            developers dedicated to crafting exceptional digital experiences.
            With a deep understanding of the latest technologies and trends, we
            specialize in designing and developing custom software solutions
            that drive business growth and success. From bespoke web
            applications to mobile apps and e-commerce platforms, our expertise
            is focused on delivering tailored solutions that meet the unique
            needs of our clients.
          </p>
          <Button text="More information" />
        </div>
        <div className={styles.right}>
          <Image src={aboutImage} alt="developers team image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSection;
