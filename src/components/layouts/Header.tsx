import React from "react";

import Link from "next/link";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Logo</h1>
      <div>
        <ul className={styles.menu}>
          <li className="li">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="li">
            <Link href={"/work"}>Work</Link>
          </li>
          <li className="li">
            <Link href={"/about"}>About us</Link>
          </li>
          <li className="li">
            <Link href={"/contact"}>Contact us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
