"use client";

import { Logo, LogoSmall } from "@/components/Logo/Logo";
import React, { useContext, useEffect, useRef } from "react";
import s from "./HomePage.module.scss";
import Image from "next/image";
import Paragraph from "../Paragraph/Paragraph";
import { LoaderContext } from "@/providers/LoaderProvider/LoaderProvider";
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";
import { presenceAnim, WordsAnim } from "@/helpers/anim";
import { ease } from "@/helpers/ease";
import { Button } from "@/components/Button/Button";
import { Menu } from "@/components/Menu/Menu";

export default function HomePage() {
  const { loaderFinished } = useContext(LoaderContext);

  return (
    <div className={s.home}>
      <div className={`${s.row} ${s.grid}`}>
        <div className="bold">
          <Paragraph text="Late Latin word" />
        </div>
        <div>
          <Paragraph text="to an ancient Roman coin used" />
          <Paragraph text="in the Byzantine Empire." index={1} />
        </div>
        <p></p>
        <div className="bold">
          <Paragraph text="Empire" />
        </div>
        <div className={s.row__button}>
          <Menu />
        </div>
      </div>
      <div className={`${s.row} ${s.grid}`}>
        <p></p>
        <Paragraph text="Byzantine Empire" />
        <p></p>
        <div className="bold">
          <Paragraph text="one having pay" />
        </div>
        <div>
          <Paragraph text="meaning shilling's worth or" />
          <Paragraph text="wage, from sou or soud, shilling." index={1} />
          <Paragraph text="The word" index={2} />
        </div>
      </div>
      <div className={`${s.grid}`}>
        <Button
          {...presenceAnim(WordsAnim, loaderFinished)}
          custom={{ id: 4, duration: 1 }}
        >
          <svg
            viewBox="0 0 24 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.20312 0L11.6719 13.0781L18.0938 0H23.1094L14.2266 16.8984L23.2969 34.125H18.2344L11.6719 20.7891L5.08594 34.125H0L9.09375 16.8984L0.1875 0H5.20312Z"
              fill="black"
            />
          </svg>
        </Button>

        <Background />
        <p></p>
        <Paragraph text="is also related to the Medieval Latin soldarius" />
      </div>
      <div className={`${s.row} ${s.row__bottom} ${s.grid}`}>
        <LogoSmall
          className={s.logo}
          {...presenceAnim(WordsAnim, loaderFinished)}
          custom={{ id: 5, duration: 1 }}
        />
        <div>
          <Paragraph text="The word soldier" />
          <Paragraph text="derives from the Middle" index={1} />
          <Paragraph text="English word soudeour, from" index={2} />
        </div>
        <div>
          <Paragraph text="platforms" />
          <Paragraph text="resolutionsand" index={1} />
        </div>
        <p></p>
        <div className={s.row__element}>
          {/* <p>World War II</p> */}
          <Paragraph text="World War II" />
          <Button
            {...presenceAnim(WordsAnim, loaderFinished)}
            custom={{ id: 5, duration: 1 }}
          >
            <svg
              width="22"
              height="29"
              viewBox="0 0 22 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.99832 28.7368L8.6436 0H11.8059L6.13719 28.7368H2.99832ZM10.9626 28.7368L16.6313 0H19.7702L14.1249 28.7368H10.9626ZM21.9721 10.9539H1.49916V8.21053H21.9721V10.9539ZM20.4963 20.6447H0V17.9211H20.4963V20.6447Z"
                fill="black"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

const Background = () => {
  const { loaderFinished, setLoaderFinished } = useContext(LoaderContext);
  const bgRef = useRef();
  const animate = useAnimation();

  const mouseRef = useRef();

  const positionX = useMotionValue(0);
  const positionY = useMotionValue(0);

  // Spring physics for mouse movement
  const springConfig = { damping: 180, stiffness: 1500, mass: 0.1 };

  // Mouse movement transforms
  const plane1X = useSpring(positionX, springConfig);
  const plane1Y = useSpring(positionY, springConfig);

  const handleMouseMove = (event) => {
    const speed = 0.05;
    positionX.set(positionX.get() + event.movementX * speed);
    positionY.set(positionY.get() + event.movementY * speed);
  };

  const handleMouseLeave = () => {
    const speed = 0.05;
    positionX.set(0 + positionX.get() * speed);
    positionY.set(0 + positionY.get() * speed);
  };

  useEffect(() => {
    animate.set({ clipPath: "inset(0% 100% 0% 0%)" });
    animate.start({
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 1.3,
        delay: 1,
        ease: ease.inOutCirc,
      },
    });

    setTimeout(() => {
      setLoaderFinished(true);
    }, 600);
  }, [bgRef]);

  return (
    <motion.div className={s.background} ref={bgRef} animate={animate}>
      <span
        className={s.background__mouse}
        ref={mouseRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      ></span>
      <motion.img
        src="/images/background.jpg"
        alt=""
        style={{
          y: plane1Y,
          x: plane1X,
        }}
      />
    </motion.div>
  );
};
