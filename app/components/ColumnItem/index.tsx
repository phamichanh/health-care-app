import styles from "./index.module.scss";
import Image from "next/image";

function ColumnItem(props: {
  time?: string[];
  src?: string;
  alt?: string;
  title?: string;
  tags?: string[];
}) {
  const {
    time = ["2021.05.17", "23:25"],
    src = "/img/column-1.jpg",
    alt = "grilled fish",
    title = "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags = ["魚料理", "和食", "DHA"],
  } = props;
  return (
    <div className={`${styles["col-item"]} my-1`}>
      <div className={styles["col-item__thumb"]}>
        <Image src={src} alt={alt} className="object-cover" fill />
        <p className={`${styles["col-item__time"]} flex justify-between`}>
          <span>{time[0]}</span>
          <span>{time[1]}</span>
        </p>
      </div>
      <div className={styles["col-item__title"]}>
        <p>{title}</p>
      </div>
      <div className={styles["col-item__tags"]}>
        {tags.map((tag, idx) => (
          <span key={idx} className="mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ColumnItem;
