"use client";
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.footerCon}>
      <footer className={styles.footer}>
        <div className={styles.ftPt2}>
          <h1>Lets talk</h1>
          <button onClick={() => router.push("/contact")}>Get in touch</button>
        </div>
        <div className={styles.ftPt3}>
          <div id="ft-link-1" className={styles.ftLinks}>
            <h3>(Pages)</h3>
            <h4>
              <Link href="/">Home</Link>
            </h4>
            <h4>
              <Link href="/about">About</Link>
            </h4>
            <h4>
              <Link href="/contact">Contact</Link>
            </h4>
            <h4>
              <Link href="/work">Work</Link>
            </h4>
          </div>
          <div id="ft-link-2" className={styles.ftLinks}>
            <h3>(CMS)</h3>
            <h4>Work</h4>
            <h4>Work Single</h4>
            <h4>Blog</h4>
            <h4>Blog Single</h4>
            <h4>Shop</h4>
            <h4>Shop Single</h4>
          </div>
          <div id="ft-link-3" className={styles.ftLinks}>
            <h3>(Utility Pages)</h3>
            <h4>404 Error</h4>
            <h4>Password</h4>
            <h4>Styleguide</h4>
            <h4>Licensing</h4>
            <h4>Changing</h4>
          </div>
        </div>
        <h1>&copy; 2024 all rights reserved</h1>
      </footer>
    </div>
  );
};

export default Footer;
