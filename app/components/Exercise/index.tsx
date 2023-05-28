import styles from "./index.module.scss";

function Exercise(props: { title?: string; energy?: number; time?: string }) {
  const {
    title = "家事全般（立位・軽い）",
    energy = 26,
    time = "10 min",
  } = props;
  return (
    <div className={`${styles.exercise} flex justify-between pb-1 pt-2 pr-4`}>
      <div className="flex">
        <i className={styles.exercise__icon} />
        <div>
          <p className={`${styles.exercise__title} text-light`}>{title}</p>
          <p className={`${styles.exercise__energy} text-primary`}>
            {energy}kcal
          </p>
        </div>
      </div>
      <p className={`${styles.exercise__time} text-primary`}>{time}</p>
    </div>
  );
}

export default Exercise;
