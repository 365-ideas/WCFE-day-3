import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import s from "./Menu.module.scss";
import Link from "next/link";
import { LogoSmall } from "../Logo/Logo";
import clsx from "clsx";
import { anim, MenuAnim } from "@/helpers/anim";

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

  return (
    <>
      <Button isActive={isActive} onClick={() => setIsActive(!isActive)} />

      <AnimatePresence mode="wait">
        {isActive && (
          <>
            <motion.span
              {...anim(MenuAnim.opacityPresence({animateDelay: 0, exitDelay: 0.55}))}
              className={s.bg}
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
                <Link href="/">
                  <h2>we’recreatingforemotions@gmail.com</h2>
                </Link>
                <div className={s.socials}>
                  <Link href="/">X</Link>
                  <Link href="/">Instagram</Link>
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
  return (
    <Link href={currLink.link}>
      <h1>
        {currLink.text.split("").map((char, i) => (
          <motion.span {...anim(MenuAnim.link)} custom={i + id} key={i}>
            {char}
          </motion.span>
        ))}
      </h1>
    </Link>
  );
};
