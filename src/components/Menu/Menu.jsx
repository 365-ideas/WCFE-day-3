import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import s from "./Menu.module.scss";
import Link from "next/link";
import { LogoSmall } from "../Logo/Logo";
import clsx from "clsx";
import { anim, MenuAnim, presenceAnim, WordsAnim } from "@/helpers/anim";
import { LoaderContext } from "@/providers/LoaderProvider/LoaderProvider";

const MenuList = [
  {
    text: "About",
    link: "/",
  },
  {
    text: "Collections",
    link: "/",
  },
  {
    text: "Projects",
    link: "/",
  },
];

export const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const { loaderFinished } = useContext(LoaderContext);

  return (
    <>
      <Button
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
        {...presenceAnim(WordsAnim, loaderFinished)}
        custom={{ id: 5, duration: 1 }}
      />

      <AnimatePresence mode="wait">
        {isActive && (
          <>
            <motion.span
              {...anim(
                MenuAnim.opacityPresence({ animateDelay: 0, exitDelay: 0.55 })
              )}
              className={s.bg}
              onClick={() => setIsActive(false)}
            />
            <motion.div {...anim(MenuAnim.presenceMenu)} className={s.menu}>
              <LogoSmall
                className={s.logo}
                {...anim(MenuAnim.opacityPresence({ animateDelay: 0.6 }))}
              />
              <div className={s.list}>
                {MenuList.map((currLink, i) => (
                  <LinkAnim currLink={currLink} key={i} id={i} />
                ))}
              </div>
              <motion.div
                className={s.bottom}
                {...anim(MenuAnim.opacityPresence({ animateDelay: 0.6 }))}
              >
                <Link href="/" className="hover-anim">
                  <h2>we’recreatingforemotions@gmail.com</h2>
                </Link>
                <div className={s.socials}>
                  <Link href="/" className={s.social_link}>
                    X
                  </Link>
                  <Link href="/" className={s.social_link}>
                    Instagram
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const Button = ({ children, isActive, ...rest }) => {
  return (
    <motion.div
      className={clsx(s.button, {
        [s.button__active]: isActive,
      })}
      {...rest}
    >
      <span className={s.bracket_icon}>
        <svg viewBox="0 0 8 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.80469 42.75L7.80469 46.3125L0 46.3125L2.02438e-06 23.1562L4.04877e-06 -6.82307e-07L7.80469 0L7.80469 3.5625L4.14844 3.5625L4.14844 42.75L7.80469 42.75Z"
            fill="black"
          />
        </svg>
      </span>
      <span className={`${s.main_icon} ${s.main_icon__rotate}`}>
        <svg viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.0352 10.7893V14.8674L0.39453 14.8674L0.394531 10.7893L24.0352 10.7893ZM14.3242 0.828369V25.6721H10.1758V0.828369H14.3242Z"
            fill="black"
          />
        </svg>
      </span>
      <span className={s.bracket_icon}>
        <svg viewBox="0 0 8 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 3.5625V0H7.80469V23.1562V46.3125H0V42.75H3.65625V3.5625H0Z"
            fill="black"
          />
        </svg>
      </span>
    </motion.div>
  );
};

const LinkAnim = ({ currLink, id }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getOpacityForChar = (charIndex) => {
    if (hoveredIndex === null) return 1;

    if (charIndex === hoveredIndex) return 0.3;
    if (charIndex === hoveredIndex - 1 || charIndex === hoveredIndex + 1)
      return 0.7;

    return 1;
  };

  return (
    <Link href={currLink.link} className={s.link_wrapper}>
      <h1>
        {currLink.text.split("").map((char, i) => (
          <motion.span
            custom={i + id}
            key={i}
            className={s.link}
            style={{
              opacity: getOpacityForChar(i),
              transition: "opacity 0.3s ease",
            }}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.span {...anim(MenuAnim.link)} custom={i + id}>
              {char}
            </motion.span>
          </motion.span>
        ))}
      </h1>
    </Link>
  );
};
