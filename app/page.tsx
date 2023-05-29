import styles from "./home.module.scss";
import ProgressRate from "./components/ProgressRate";
import BodyGraph from "./components/BodyGraph";
import BtnGradient from "./components/BtnGradient";
import BtnHex from "./components/BtnHex";
import Meal from "./components/Meal";

async function getMeals() {
  try {
    const res = await fetch("http://localhost:6767/api/meals", {
      cache: "no-store",
    });
    return res.json();
  } catch(e) {
    return [
      { "time": "05.21.Morning", "src": "/img/meals/m01.jpg", "alt": "Sandwiches" },
      { "time": "05.21.Lunch", "src": "/img/meals/l03.jpg", "alt": "Lunch Box" },
      { "time": "05.21.Dinner", "src": "/img/meals/d01.jpg", "alt": "Set meal" },
      { "time": "05.21.Snack", "src": "/img/meals/l01.jpg", "alt": "Ramen" },
      { "time": "05.20.Morning", "src": "/img/meals/m02.jpg", "alt": "Sandwiches" },
      { "time": "05.20.Lunch", "src": "/img/meals/l02.jpg", "alt": "Hotdog" },
      { "time": "05.20.Dinner", "src": "/img/meals/d02.jpg", "alt": "Set meal" },
      { "time": "05.20.Snack", "src": "/img/meals/s01.jpg", "alt": "Ice cream" }
    ]
    ;
  }
}

async function getProgress() {
  try {
    const res = await fetch("http://localhost:6767/api/progress", {
      cache: "no-store",
    });
    return res.json();
  } catch(e) {
    return {
      "date": "05/21",
      "value": 75
    };
  }
}

async function getBodyData() {
  try {
    const res = await fetch("http://localhost:6767/api/body", {
      cache: "no-store",
    });
    return res.json();
  } catch(e) {
    return {
      "months": ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月","5月"],
      "data1": [1, 0.95, 0.7, 0.8, 0.75, 0.7, 0.8, 0.7, 0.55, 0.5, 0.45, 0.5],
      "data2": [1, 0.9, 0.75, 0.7, 0.65, 0.65, 0.5, 0.45, 0.4, 0.3, 0.25, 0.15]
    };
  }
}

export default async function Home() {
  const meals = await getMeals();
  const progress = await getProgress();
  const bodyData = await getBodyData();
  return (
    <main className="flex min-h-screen flex-col items-center my-16">
      <section className={`${styles.result} flex w-full`}>
        <ProgressRate date={progress.date} progress={progress.value} />
        <div className="bg-dark grow py-3 px-10">
          <BodyGraph months={bodyData.months} data1={bodyData.data1} data2={bodyData.data2} />
        </div>
      </section>
      <section className="section mt-6 mb-7">
        <div className="flex justify-between px-32">
          <BtnHex label="Morning" />
          <BtnHex label="Lunch" />
          <BtnHex label="Dinner" />
          <BtnHex label="Snack" icon="cup" />
        </div>
        <div id="meals-container" className={`${styles["meals-container"]} overflow-hidden flex flex-wrap justify-between mt-5`}>
          {meals.map(
            (
              meal: { time?: string; src?: string; alt?: string },
              idx: number
            ) => (
              <Meal key={idx} time={meal.time} src={meal.src} alt={meal.alt} />
            )
          )}
        </div>
      </section>
      <BtnGradient label="記録をもっと見る" targetId="meals-container" />
    </main>
  );
}
