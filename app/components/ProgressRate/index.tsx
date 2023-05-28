import styles from "./index.module.scss";
import Image from "next/image";

function ProgressRate(props: {
  date?: string;
  radius?: number;
  stroke?: number;
  progress?: number;
}) {
  const { date = "05/21", radius = 90, stroke = 3, progress = 75 } = props;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`${styles["progress-rate"]} flex-none`}>
      <Image
        src="/img/meals/d01.jpg"
        alt="Set meal"
        className="object-cover"
        fill
      />
      <div
        className={`${styles["progress-rate__result"]} flex justify-center items-center`}
      >
        <svg height={radius * 2} width={radius * 2}>
          <circle
            className={`${styles.circle} ${styles["drop-shadow"]}`}
            stroke="white"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            stroke-width={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
      </div>
      <div
        className={`${styles["progress-rate__result"]} flex justify-center items-center`}
      >
        <p
          className={`${styles["progress-rate__result-date"]} ${styles["drop-shadow"]}`}
        >
          {date}
        </p>
        <p
          className={`${styles["progress-rate__result-progress"]} ${styles["drop-shadow"]}`}
        >
          {progress}%
        </p>
      </div>
    </div>
  );
}

export default ProgressRate;
