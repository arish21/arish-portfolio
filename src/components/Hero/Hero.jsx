import React from "react";
import css from "./Hero.module.scss";
// import './Hero.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import arish from "./Images/arish.png";
import Pdf from "./Resume/Aarish.pdf";
import Typed from "react-typed";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <a className="anchor" id="home"></a>
        <div className={css.left}>
          <div className={css.upperElements}>
            <motion.span variants={fadeIn("right", "tween", 0.2, 1)}>
              Hey There, <br /> I'm Arish.
            </motion.span>
          </div>
          <motion.div
            variants={fadeIn("right", "tween", 0.8, 1)}
            className={css.middleElements}
          >
            <h1>
              And I'm{" "}
              <span>
                <Typed
                  className={`${css.textline}`}
                  strings={[
                    "a Frontend Developer.",
                    "a Web Designer.",
                    "a Software Developer.",
                    "a FullStack Developer.",
                  ]}
                  typeSpeed={50}
                  backSpeed={50}
                  backDelay={500}
                  loop={true}
                />
              </span>
            </h1>
            <p>
              Experienced web developer with expertise in HTML, CSS, JavaScript,
              and React. Passionate about expanding knowledge and staying
              updated with the latest advancements in web development. Seeking a
              company that values skill development and emphasizes understanding
              the business model. Believes in comprehending the bigger picture
              to effectively contribute towards solving company challenges and
              providing impactful solutions.
            </p>
            <div className={`${css.social}`}>
              <a href="https://github.com/arish21">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/arish21/?original_referer=">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", "tween", 1, 1)}
            className={`${css.lowerElements}`}
          >
            <a className={`${css.downloadbtn}`} href={Pdf} target="_blank">
              Download Resume
            </a>
          </motion.div>
        </div>
        {/* Person Image */}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={css.right}
        >
          <div className={`${css.person}`}>
            <img src={arish} alt="Arish Dakhani"></img>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
