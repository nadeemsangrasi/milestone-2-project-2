import Heading from "@/components/shared/Heading";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import OurTeamCard from "./OurTeamCard";

import styles from "./OurTeamMember.module.css";
import { StaticImageData } from "next/image";
import teamImg1 from "@/assets/images/team-1.jpg";
import teamImg2 from "@/assets/images/team-2.jpg";
import teamImg3 from "@/assets/images/team-3.jpg";
export interface OurTeamCardType {
  img: StaticImageData;
  name: string;
  about: string;
}
export const ourTeamData: OurTeamCardType[] = [
  {
    img: teamImg1,
    name: "Jane Smith",
    about: "Project Manager",
  },
  {
    img: teamImg2,
    name: "John doe",
    about: "Lead Developer",
  },
  {
    img: teamImg3,
    name: "Emily Johnson",
    about: "UI/UX Designer",
  },
];
const OurTeamSection = () => {
  return (
    <Wrapper>
      <Heading text="My Team Members" className={styles.center} />
      <div className={styles.teamSection}>
        {ourTeamData.map(
          ({ img, name, about }: OurTeamCardType, index: number) => (
            <OurTeamCard key={index} img={img} name={name} about={about} />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default OurTeamSection;
