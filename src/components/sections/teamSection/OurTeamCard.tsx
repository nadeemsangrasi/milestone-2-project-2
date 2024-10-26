import React from "react";

import Image from "next/image";

import styles from "./OurTeamMember.module.css";
import { OurTeamCardType } from "@/components/sections/teamSection/OurTeamSection";

const OurTeamCard = ({ img, name, about }: OurTeamCardType) => {
  return (
    <div className={styles.teamCard}>
      <div className={styles.cardImage}>
        <Image src={img} alt="img" />
      </div>
      <div>
        <h2 className={styles.cardTitle}>{name}</h2>
        <h2 className={styles.cardAbout}>{about}</h2>
      </div>
    </div>
  );
};

export default OurTeamCard;
