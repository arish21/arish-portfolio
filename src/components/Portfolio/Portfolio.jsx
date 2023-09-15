import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";

import project1 from "./Images/project1.png";
import project2 from "./Images/project2.png";
import project31 from "./Images/project31.png";
import project5 from "./Images/project5.png";
import project6 from "./Images/project6.png";
import project8 from "./Images/project8.png";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`yPaddings innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText flexCenter">My Latest Projects</span>
            <span
              className={`secondaryText yPaddings innerWidth flexCenter ${css.hellotext}`}
            >
              Extensively leveraging technologies like React, JavaScript, SCSS,
              Node.js, MongoDB, and AWS services, these projects were
              meticulously crafted.
            </span>
            <span className="secondaryText flexCenter">
              Check them out below.
            </span>
          </div>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src={project1}
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src={project2}
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src={project31}
            alt="project"
          />
        </div>
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src={project5}
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src={project6}
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src={project8}
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
