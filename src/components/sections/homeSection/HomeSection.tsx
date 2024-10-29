import Image from "next/image";
import HomeImage from "@/assets/images/home-img.jpg";
import styles from "./home.module.css";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";

const HomeSection = () => {
  return (
    <Wrapper>
      <div className={styles.home}>
        <div className={styles.imageContainer}>
          <Image src={HomeImage} alt="profile picture" className={styles.profileImage} />
        </div>
        <h2 className={styles.greeting}>Hi, I’m Nadeem 👋</h2>
        <h1 className={styles.heading}>
          Building digital products, brands, and experiences.
        </h1>
        <p className={styles.description}>
          A Frontend Developer specializing in UI/UX Design, Responsive Web Design, and Visual Development.
        </p>
        <Button text="Connect with me" />
      </div>
    </Wrapper>
  );
};

export default HomeSection;
