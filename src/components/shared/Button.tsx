import React from "react";
import styles from "./shared.module.css";
const Button = ({ text, className }: { text: string; className?: string }) => {
  return <button className={`${styles.button} ${className}`}>{text}</button>;
};

export default Button;
