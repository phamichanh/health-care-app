"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

function BtnToTop() {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollWindow = () => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  const normalStyle = {
    opacity: 0,
    transition: "0.5s",
    pointerEvents: "none",
  };
  const activeStyle = {
    opacity: 1,
    transition: "0.5s",
  };
  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    <button
      onClick={returnTop}
      className={styles["btn-to-top"]}
      style={style}
    />
  );
}

export default BtnToTop;
