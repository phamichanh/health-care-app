import styles from "./my-record.module.scss";
import Recommend from "../components/Recommend";
import BodyGraph from "../components/BodyGraph";
import Diary from "../components/Diary";
import BtnGradient from "../components/BtnGradient";
import Exercise from "../components/Exercise";
import BtnPeriodTime from "../components/BtnPeriodTime";

async function getDiaries() {
  const res = await fetch("http://localhost:6767/api/diaries", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch diaries");
  }

  return res.json();
}

export default async function MyRecord() {
  const diaries = await getDiaries();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="section flex justify-between mt-5">
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
      <section className={`${styles["body-record"]} section py-4 px-6`}>
        <div className="flex mb-1">
          <p className={`${styles["my-exercise__title"]} text-light`}>
            MY RECORD
          </p>
          <p className={`${styles["my-exercise__date"]} text-light`}>
            2021.05.21
          </p>
        </div>
        <div className="px-5 mb-2">
          <BodyGraph width={960} height={210} />
        </div>
        <div>
          <BtnPeriodTime id="day-filter" label="日" />
          <BtnPeriodTime id="week-filter" label="週" />
          <BtnPeriodTime id="month-filter" label="月" />
          <BtnPeriodTime id="year-filter" label="年" />
        </div>
      </section>
      <section className={`${styles["my-exercise"]} section py-4 px-6`}>
        <div className="flex">
          <p className={`${styles["my-exercise__title"]} text-light`}>
            MY EXERCISE
          </p>
          <p className={`${styles["my-exercise__date"]} text-light`}>
            2021.05.21
          </p>
        </div>
        <div className="overflow-y-scroll h-48 flex justify-between">
          <div>
            {(() => {
              const elements = [];
              for (let i = 0; i < 8; i++) {
                elements.push(<Exercise />);
              }
              return elements;
            })()}
          </div>
          <div>
            {(() => {
              const elements = [];
              for (let i = 0; i < 8; i++) {
                elements.push(<Exercise />);
              }
              return elements;
            })()}
          </div>
        </div>
      </section>
      <section className={`${styles["my-diary"]} section mb-7`}>
        <p className={`${styles["my-diary__title"]}`}>MY DIARY</p>
        <div id="diaries-container" className={`${styles["my-diary__container"]} flex flex-wrap justify-between overflow-hidden`}>
          {diaries.map(
            (
              diary: { date?: string; time?: string; text?: string },
              idx: number
            ) => (
              <Diary key={idx} date={diary.date} time={diary.time} text={diary.text} />
            )
          )}
        </div>
      </section>
      <BtnGradient label="自分の日記をもっと見る" targetId="diaries-container" />
    </main>
  );
}
