import React from "react";
import styles from "./shared.module.css";
const Heading = ({ text, className }: { text: string; className?: string }) => {
  return <h1 className={`${styles.heading} ${className}`}>{text}</h1>;
};

export default Heading;
