import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import styles from "./contact.module.css";
import Heading from "@/components/shared/Heading";
import Button from "@/components/shared/Button";

const ContactPage = () => {
  return (
    <Wrapper>
      <Heading text="Get in touch" className={styles.heading} />
      <div>
        <div className="my-8">
          <form action="#" className="space-y-3">
            <div className={styles.field}>
              <label htmlFor="FullName" className="block text-lg">
                Full Name
              </label>
              <input type="text" id="Full Name" placeholder="John Doe" />
            </div>
            <div className={styles.field}>
              <label htmlFor="Email">Email</label>
              <input type="email" id="Email" placeholder="wWJ9T@example.com" />
            </div>
            <div className={styles.field}>
              <label htmlFor="Number">Phone Number</label>
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
