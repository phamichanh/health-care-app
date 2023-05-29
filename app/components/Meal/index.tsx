import styles from "./index.module.scss";
import Image from "next/image";

function Meal(props: { time?: string; src?: string; alt?: string }) {
  const {
    time = "5.21.Morning",
    src = "/img/m01.jpg",
    alt = "sandwiches",
  } = props;
  return (
    <div className={`${styles.meal} my-1`}>
      <Image src={src} alt={alt} className="object-cover" sizes="(max-width: 640px) 100vw, 50vw, 33vw" fill />
      <p className={styles.meal__time}>{time}</p>
    </div>
  );
}

export default Meal;
