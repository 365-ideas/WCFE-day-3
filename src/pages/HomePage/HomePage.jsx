import { Logo, LogoSmall } from "@/components/Logo/Logo";
import React from "react";
import s from "./HomePage.module.scss";
import Image from "next/image";
import clsx from "clsx";

export default function HomePage() {
  return (
    <div className={s.home}>
      <div className={`${s.row} ${s.grid}`}>
        <p className="bold">Late Latin word</p>
        <p>
          to an ancient Roman coin used
          <br />
          in the Byzantine Empire.
        </p>
        <p></p>
        <p className="bold">Empire</p>
        <span className={s.row__button}>
          <Button rotateAnim>
            <svg
              viewBox="0 0 20 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6406 9.96094V14.0391H9.95281H0V9.96094H19.6406ZM11.9297 0V24.8438H7.78125V0H11.9297Z"
                fill="black"
              />
              <path
                d="M19.6406 9.96094V14.0391H9.95281H0V9.96094H19.6406ZM11.9297 0V24.8438H7.78125V0H11.9297Z"
                fill="black"
              />
            </svg>
          </Button>
        </span>
      </div>
      <div className={`${s.row} ${s.grid}`}>
        <p className="bold"></p>
        <p>Byzantine Empire</p>
        <p></p>
        <p className="bold">one having pay</p>
        <p>
          meaning shilling's worth or
          <br />
          wage, from sou or soud, shilling.
          <br />
          The word
        </p>
      </div>
      <div className={`${s.grid}`}>
        <Button>
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
        <p>is also related to the Medieval Latin soldarius</p>
      </div>
      <div className={`${s.row} ${s.row__bottom} ${s.grid}`}>
        <LogoSmall className={s.logo} />
        <p>
          The word soldier
          <br />
          derives from the Middle
          <br />
          English word soudeour, from
        </p>
        <p>
          platforms
          <br />
          resolutionsand
        </p>
        <p></p>
        <div className={s.row__element}>
          <p>World War II</p>
          <Button>
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

const Button = ({ children, rotateAnim }) => {
  return (
    <div className={s.button}>
      <span className={s.bracket_icon}>
        <svg viewBox="0 0 8 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.80469 42.75L7.80469 46.3125L0 46.3125L2.02438e-06 23.1562L4.04877e-06 -6.82307e-07L7.80469 0L7.80469 3.5625L4.14844 3.5625L4.14844 42.75L7.80469 42.75Z"
            fill="black"
          />
        </svg>
      </span>
      <span className={clsx(s.main_icon, {
        [s.main_icon__rotate]: rotateAnim
      })}>{children}</span>
      <span className={s.bracket_icon}>
        <svg viewBox="0 0 8 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 3.5625V0H7.80469V23.1562V46.3125H0V42.75H3.65625V3.5625H0Z"
            fill="black"
          />
        </svg>
      </span>
    </div>
  );
};

const Background = () => {
  return (
    <div className={s.background}>
      <Image src="/images/background.jpg" fill alt="" />
    </div>
  );
};
