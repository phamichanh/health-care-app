"use client";
import styles from "./index.module.scss";

function BtnGradient(props: { label?: string, targetId?: string; }) {
  const { label = "Button", targetId = "" } = props;

  const expandContent = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.classList.toggle('expand-content');
    }
  };

  return (
    <button onClick={expandContent} className={`${styles["btn-gradient"]} rounded py-4`}>
      {label}
    </button>
  );
}

export default BtnGradient;
