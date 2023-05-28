import styles from "./my-record.module.scss";
import Recommend from "../components/Recommend";
import BodyGraph from "../components/BodyGraph";
import Diary from "../components/Diary";
import BtnGradient from "../components/BtnGradient";

export default function MyRecord() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="section flex justify-between">
        <Recommend />
        <Recommend
          title="my exercise"
          btnLabel="自分の運動の記録"
          src="/img/recommends/MyRecommend-2.jpg"
          alt="runner"
        />
        <Recommend
          title="my diary"
          btnLabel="自分の日記"
          src="/img/recommends/MyRecommend-3.jpg"
          alt="using phone"
        />
      </section>
      <section className={`${styles["body-record"]} section`}>
        <BodyGraph width={960} height={210} />
      </section>
      <section className={`${styles["my-exercise"]} section`}></section>
      <section className={`${styles["my-diary"]} section mb-7`}>
        <p className={`${styles["my-diary__title"]}`}>MY DIARY</p>
        <div className="flex flex-wrap justify-between">
          {(() => {
            const elements = [];
            for (let i = 0; i < 8; i++) {
              elements.push(<Diary />);
            }
            return elements;
          })()}
        </div>
      </section>
      <BtnGradient label="自分の日記をもっと見る" />
    </main>
  );
}
