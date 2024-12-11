import clsx from "clsx";
import { motion } from "framer-motion";

import s from "./Button.module.scss";

export const Button = ({ children, rotateAnim, ...rest }) => {
  return (
    <motion.div className={s.button} {...rest}>
      <span className={s.bracket_icon}>
        <svg viewBox="0 0 8 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.80469 42.75L7.80469 46.3125L0 46.3125L2.02438e-06 23.1562L4.04877e-06 -6.82307e-07L7.80469 0L7.80469 3.5625L4.14844 3.5625L4.14844 42.75L7.80469 42.75Z"
            fill="black"
          />
        </svg>
      </span>
      <span
        className={clsx(s.main_icon, {
          [s.main_icon__rotate]: rotateAnim,
        })}
      >
        {children}
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
