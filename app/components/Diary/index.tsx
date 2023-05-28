import styles from "./index.module.scss";

function Diary(props: { date?: string; time?: string; text?: string }) {
  const {
    date = "2021.05.21",
    time = "23:25",
    text = "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  } = props;
  return (
    <div className={`${styles.diary} my-2 p-4`}>
      <p className={`${styles.diary__date}`}>{date}</p>
      <p className={`${styles.diary__time} mb-2`}>{time}</p>
      <p className={`${styles.diary__text}`}>{text}</p>
    </div>
  );
}

export default Diary;
