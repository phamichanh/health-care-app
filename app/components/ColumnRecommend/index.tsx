import styles from "./index.module.scss";

function ColRecommend(props: { title?: string; subTitle?: string }) {
  const { title = "recommended column", subTitle = "オススメ" } = props;
  return (
    <div
      className={`${styles["col-recommend"]} flex flex-col text-center justify-center items-center bg-dark`}
    >
      <p
        className={`${styles["col-recommend__title"]} text-primary text-2xl uppercase`}
      >
        {title}
      </p>
      <hr className="my-2" />
      <p className={`${styles["col-recommend__subtitle"]} text-light`}>
        {subTitle}
      </p>
    </div>
  );
}

export default ColRecommend;
