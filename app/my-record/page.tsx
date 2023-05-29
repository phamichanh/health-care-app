import styles from "./my-record.module.scss";
import Recommend from "../components/Recommend";
import BodyGraph from "../components/BodyGraph";
import Diary from "../components/Diary";
import BtnGradient from "../components/BtnGradient";
import Exercise from "../components/Exercise";
import BtnPeriodTime from "../components/BtnPeriodTime";

async function getDiaries() {
  try {
    const res = await fetch("http://localhost:6767/api/diaries", {
      cache: "no-store",
    });

    return res.json();
  } catch (e) {
    return [
      {
        date: "2021.05.21",
        time: "23:25",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        date: "2021.05.20",
        time: "22:25",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        date: "2021.05.19",
        time: "20:15",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        date: "2021.05.18",
        time: "23:20",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        date: "2021.05.17",
        time: "18:45",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        date: "2021.05.16",
        time: "23:25",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        date: "2021.05.15",
        time: "23:25",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        date: "2021.05.14",
        time: "23:25",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        date: "2021.05.13",
        time: "23:25",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        date: "2021.05.12",
        time: "23:25",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        date: "2021.05.11",
        time: "23:25",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
      {
        date: "2021.05.10",
        time: "23:25",
        text: "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      },
    ];
  }
}

async function getBodyData() {
  try {
    const res = await fetch("http://localhost:6767/api/body", {
      cache: "no-store",
    });
    return res.json();
  } catch (e) {
    return {
      months: [
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
      ],
      data1: [1, 0.95, 0.7, 0.8, 0.75, 0.7, 0.8, 0.7, 0.55, 0.5, 0.45, 0.5],
      data2: [1, 0.9, 0.75, 0.7, 0.65, 0.65, 0.5, 0.45, 0.4, 0.3, 0.25, 0.15],
    };
  }
}

export default async function MyRecord() {
  const diaries = await getDiaries();
  const bodyData = await getBodyData();

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
          <BodyGraph
            width={960}
            height={210}
            months={bodyData.months}
            data1={bodyData.data1}
            data2={bodyData.data2}
          />
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
        <div
          id="diaries-container"
          className={`${styles["my-diary__container"]} flex flex-wrap justify-between overflow-hidden`}
        >
          {diaries.map(
            (
              diary: { date?: string; time?: string; text?: string },
              idx: number
            ) => (
              <Diary
                key={idx}
                date={diary.date}
                time={diary.time}
                text={diary.text}
              />
            )
          )}
        </div>
      </section>
      <BtnGradient
        label="自分の日記をもっと見る"
        targetId="diaries-container"
      />
    </main>
  );
}
