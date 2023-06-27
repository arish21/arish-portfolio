import React from "react";
import css from "./Skills.module.scss";
import "boxicons";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const Skills = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <a className="anchor" id="skills"></a>
      <motion.div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <motion.div variants={textVariant(0.5)} className={css.upElements}>
          <h1 className="primaryText yPaddings">My Expertise</h1>
        </motion.div>
        <motion.div variants={textVariant(0.5)} className={css.lowElements}>
          <p>
            I bring a powerful array of skills to the table, enabling me to
            drive remarkable outcomes.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 1, 1)}
        className={`paddings yPaddings flexCenter innerWidth ${css.lowerElements}`}
      >
        <box-icon name="html5" type="logo" size="6rem"></box-icon>
        <box-icon name="sass" type="logo" size="6rem"></box-icon>
        <box-icon name="javascript" type="logo" size="6rem"></box-icon>
        <box-icon name="java" type="logo" size="6rem"></box-icon>
        <box-icon name="react" type="logo" size="6rem"></box-icon>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 1, 1)}
        className={`paddings yPaddings flexCenter ${css.lowerElements2}`}
      >
        <box-icon name="aws" type="logo" size="6rem" ></box-icon>
        <box-icon name="figma" type="logo" size="6rem"></box-icon>
        <box-icon name="mongodb" type="logo" size="6rem"></box-icon>
        <box-icon name="git" type="logo" size="6rem"></box-icon>
        <box-icon name="bootstrap" type="logo" size="6rem"></box-icon>
        <box-icon name="kubernetes" type="logo" size="6rem"></box-icon>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 1, 1)}
        className={`paddings yPaddings flexCenter innerWidth ${css.lowerElements3}`}
      >
        <box-icon name="c-plus-plus" type="logo" size="6rem"></box-icon>
        <box-icon name="python" type="logo" size="6rem"></box-icon>
        <box-icon name="wordpress" type="logo" size="6rem"></box-icon>
        <box-icon name="nodejs" type="logo" size="6rem"></box-icon>
        <box-icon type="logo" name="visual-studio" size="6rem"></box-icon>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 1, 1)}
        className={`paddings yPaddings flexCenter bottomPaddings ${css.lowerElements4}`}
      >
        <box-icon name="spring-boot" type="logo" size="6rem"></box-icon>
        <box-icon name="angular" type="logo" size="6rem"></box-icon>
        <box-icon name="redux" type="logo" size="6rem"></box-icon>
        <box-icon name="docker" type="logo" size="6rem"></box-icon>
        <box-icon name="css3" type="logo" size="6rem"></box-icon>
        <box-icon type="logo" name="jquery" size="6rem"></box-icon>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
