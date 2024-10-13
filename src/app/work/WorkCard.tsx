import SubHead from "@/components/shared/SubHead";
import { ICard } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./work.module.css";
const WorkCard = ({ data }: { data: ICard }) => {
  return (
    <div className={styles.card}>
      <SubHead text={data.title} />
      <h2>{data.snug}</h2>
      <div className="overflow-hidden">
        <Link href={data.url}>
          <Image
            src={data.image}
            alt={data.title}
            className="rounded-lg hover:scale-110 hover:duration-500 duration-500"
          />
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
