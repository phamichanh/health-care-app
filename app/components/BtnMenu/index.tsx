import styles from "./index.module.scss";

type BtnIcon = "memo" | "challenge" | "info";

function BtnMenu(props: {
  label?: string;
  icon?: BtnIcon;
  href?: string;
  infoCount?: number;
}) {
  const { label = "Button", icon = "memo", href = "#", infoCount = 0 } = props;
  const classIcon = styles[`btn-menu__icon-${icon}`];
  return (
    <a
      href={href}
      className={`${styles["btn-menu"]} flex items-center justify-center`}
    >
      <span className={`${styles["btn-menu__icon"]} ${classIcon} mr-2`}>
        {(() => {
          if (infoCount) {
            return (
              <span className={`${styles["btn-menu__info-count"]}`}>
                {infoCount}
              </span>
            );
          }
        })()}
      </span>
      <p className={styles["btn-menu__label"]}>{label}</p>
    </a>
  );
}

export default BtnMenu;
