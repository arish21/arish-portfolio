import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {color, motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:arishdakhani07@gmail.com">saying hi.</a>
          </span>

          {/* Website counter to be implemented at a later point in time. */}
          {/* <span className="primaryText">
            No. of Times Viewed:
          </span>
          <p className="primaryText">
            10 Views
          </p> */}

        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>9433 Lee Hwy, Fairfax, VA 22031, USA</p>
          </div>
          <ul className={css.menu}>
            <li><a href="mailto:arishdakhani07@gmail.com">arishdakhani99@gmail.com</a></li>
            <li>+1 703-577-5992</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
