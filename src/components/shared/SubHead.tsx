import React from "react";
import styles from "./shared.module.css";
const SubHead = ({ text, className }: { text: string; className?: string }) => {
  return <h1 className={`${styles.subHead} ${className}`}>{text}</h1>;
};

export default SubHead;
