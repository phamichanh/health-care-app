"use client";
import styles from "./index.module.scss";

function HamburgerMenu() {
  const toggleMenu = () => {
    console.log("click");
    const toggleMenu = document.getElementById("myDropdown");
    const dropBtn = document.getElementById("myDropBtn");
    if (toggleMenu) {
      toggleMenu.classList.toggle(styles.show);
    }
    if (dropBtn) {
      dropBtn.classList.toggle(styles["drop-btn--close"]);
    }
  };

  return (
    <div className={styles.dropdown}>
      <button
        id="myDropBtn"
        onClick={toggleMenu}
        className={styles["drop-btn"]}
      />
      <div id="myDropdown" className={styles["dropdown-content"]}>
        <a href="/my-record">自分の記録</a>
        <a href="#">体重グラフ</a>
        <a href="#">目標</a>
        <a href="#">選択中のコース</a>
        <a href="/column">コラム一覧</a>
        <a href="#">設定</a>
      </div>
    </div>
  );
}

export default HamburgerMenu;
