import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

function Recommend(props: {
  title?: string;
  btnLabel?: string;
  src?: string;
  alt?: string;
}) {
  const {
    title = "body record",
    btnLabel = "自分のカラダの記録",
    src = "/img/MyRecommend-1.jpg",
    alt = "body",
  } = props;
  return (
    <div className={styles.recommend}>
      <div
        className={`${styles.recommend__content} ${styles["recommend__content--mask"]}`}
      >
        <Image
          src={src}
          alt={alt}
          className="object-cover mix-blend-luminosity"
          fill
        />
      </div>
      <div
        className={`${styles.recommend__content} flex flex-col justify-center items-center`}
      >
        <p className="text-primary text-2xl uppercase mb-3">{title}</p>
        <Link className="bg-primary-400 text-light text-sm py-1 px-4" href="#">
          {btnLabel}
        </Link>
      </div>
    </div>
  );
}

export default Recommend;
