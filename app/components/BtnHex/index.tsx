import styles from "./index.module.scss";

type BtnIcon = "knife" | "cup";

function BtnHex(props: { label?: string; icon?: BtnIcon; href?: string }) {
  const { label = "Button", icon = "knife", href = "#" } = props;
  const classIcon = styles[`btn-hex__icon-${icon}`];
  return (
    <a
      href={href}
      className={`${styles["btn-hex"]} flex flex-col items-center justify-center`}
    >
      <span className={`${styles["btn-hex__icon"]} ${classIcon}`}></span>
      <p className={styles["btn-hex__label"]}>{label}</p>
    </a>
  );
}

export default BtnHex;
