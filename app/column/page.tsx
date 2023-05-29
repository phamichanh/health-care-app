import styles from "./column.module.scss";
import ColRecommend from "../components/ColumnRecommend";
import ColumnItem from "../components/ColumnItem";
import BtnGradient from "../components/BtnGradient";

async function getColumns() {
  const res = await fetch("http://localhost:6767/api/columns", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch columns");
  }

  return res.json();
}

export default async function Column() {
  const columnItems = await getColumns();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="section flex justify-between mt-5">
        <ColRecommend title="RECOMMENDED COLUMN" subTitle="オススメ" />
        <ColRecommend title="RECOMMENDED DIET" subTitle="ダイエット" />
        <ColRecommend title="RECOMMENDED BEAUTY" subTitle="美容" />
        <ColRecommend title="RECOMMENDED HEALTH" subTitle="健康" />
      </section>

      <section id="columns-container" className={`${styles["columns-container"]} section flex flex-wrap justify-between overflow-hidden mt-14 mb-7`}>
        {columnItems.map(
          (
            column: {
              time?: string[];
              src?: string;
              alt?: string;
              title?: string;
              tags?: string[];
            },
            idx: number
          ) => (
            <ColumnItem key={idx} time={column.time} src={column.src} alt={column.alt} />
          )
        )}
      </section>

      <BtnGradient label="コラムをもっと見る" targetId="columns-container" />
    </main>
  );
}
