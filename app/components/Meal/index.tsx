import styles from "./index.module.scss";
import Image from "next/image";

function Meal(props: { time?: string; src?: string; alt?: string }) {
  const {
    time = "5.21.Morning",
    src = "/img/m01.jpg",
    alt = "sandwiches",
  } = props;
  return (
    <div className={styles.meal}>
      <Image src={src} alt={alt} className="object-cover" fill />
      <p className={styles.meal__time}>{time}</p>
    </div>
  );
}

export default Meal;
