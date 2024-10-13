"use client";
import Wrapper from "@/components/shared/Wrapper";
import React, { useState } from "react";
import styles from "./contact.module.css";
import Heading from "@/components/shared/Heading";
import Button from "@/components/shared/Button";

const ContactPage = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    console.log(data);
    setData({ email: "", fullName: "", phoneNumber: "", message: "" });
  };
  return (
    <Wrapper>
      <Heading text="Get in touch" className={styles.heading} />
      <div>
        <div className={styles.form}>
          <form action="#" onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="FullName">Full name</label>
              <input type="text" id="FullName" placeholder="John Doe" />
            </div>
            <div className={styles.field}>
              <label htmlFor="Email">Email</label>
              <input type="email" id="Email" placeholder="wWJ9T@example.com" />
            </div>
            <div className={styles.field}>
              <label htmlFor="Number">Phone number</label>
              <input type="text" id="Number" placeholder="123-456-7890" />
            </div>
            <div className={styles.field}>
              <label htmlFor="Message">Message</label>
              <textarea
                name="Message"
                id="Message"
                cols={30}
                rows={10}
                placeholder="Your Message"
              ></textarea>
            </div>
            <Button text="Send" className={styles.btn} />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
