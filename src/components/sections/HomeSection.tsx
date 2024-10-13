import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import HomeImage from "@/assets/images/home-img.jpg";
import Heading from "../shared/Heading";
import styles from "./home.module.css";
const HomeSection = () => {
  return (
    <Wrapper>
      <div className={styles.home}>
        <div className={styles.left}>
          <Heading text="Welcome to Our Website" />
          <p className="text-sm sm:text-lg font-medium py-2 pb-4">
            We are a team of passionate developers dedicated to creating
            innovative software solutions. With years of experience in the
            field, we specialize in building robust and user-friendly
            applications. Whether you need a custom web application, mobile app,
            or e-commerce platform, we have the expertise to deliver
            high-quality results.
          </p>
          <Button text="Get Started" />
        </div>
        <div className={styles.right}>
          <Image src={HomeImage} alt="developers team image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSection;
