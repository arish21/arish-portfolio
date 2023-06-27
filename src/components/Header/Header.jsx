import React, { useState, useEffect, useRef } from "react";
import css from "./Header.module.scss";
import { FaAlignRight, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-primary paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow, position: "sticky" }}
    >
      <div className={` innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Arish Dakhani</div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+1703 577 5992</p>
            <FaPhoneAlt size={"40px"} />
          </li>
        </ul>
        {/* for medium and small screen */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <FaAlignRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
