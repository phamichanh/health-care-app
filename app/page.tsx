import styles from "./home.module.scss";
import ProgressRate from "./components/ProgressRate";
import BodyGraph from "./components/BodyGraph";
import BtnGradient from "./components/BtnGradient";
import BtnHex from "./components/BtnHex";
import Meal from "./components/Meal";

async function getMeals() {
  const res = await fetch("http://localhost:6767/api/meals", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch meals");
  }

  return res.json();
}

async function getProgress() {
  const res = await fetch("http://localhost:6767/api/progress", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch progress");
  }

  return res.json();
}

export default async function Home() {
  const meals = await getMeals();
  const progress = await getProgress();
  return (
    <main className="flex min-h-screen flex-col items-center my-16">
      <section className={`${styles.result} flex w-full`}>
        <ProgressRate date={progress.date} progress={progress.value} />
        <div className="bg-dark grow py-3 px-10">
          <BodyGraph />
        </div>
      </section>
      <section className="section mt-6 mb-7">
        <div className="flex justify-between px-32">
          <BtnHex label="Morning" />
          <BtnHex label="Lunch" />
          <BtnHex label="Dinner" />
          <BtnHex label="Snack" icon="cup" />
        </div>
        <div className="flex flex-wrap justify-between mt-5">
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
      <BtnGradient label="記録をもっと見る" />
    </main>
  );
}
