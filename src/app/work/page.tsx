import Heading from "@/components/shared/Heading";
import Wrapper from "@/components/shared/Wrapper";
import { cardData } from "@/data/data";
import { ICard } from "@/types/types";
import React from "react";
import WorkCard from "./WorkCard";
import styles from "./work.module.css";
const AboutPage = () => {
  return (
    <Wrapper>
      <div>
        <div className={styles.left}>
          <Heading text="Check out our work" className={styles.heading} />
        </div>
        <div>
          {cardData.map((card: ICard, index: number) => (
            <WorkCard key={index} data={card} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
