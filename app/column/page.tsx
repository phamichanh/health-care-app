import styles from "./column.module.scss";
import ColRecommend from "../components/ColumnRecommend";
import ColumnItem from "../components/ColumnItem";
import BtnGradient from "../components/BtnGradient";

async function getColumns() {
  try {
    const res = await fetch("http://localhost:6767/api/columns", {
      cache: "no-store",
    });
  
    return res.json();
  } catch(e) {
    return [
      { "time": ["2021.05.21", "23:15"], "src": "/img/columns/column-1.jpg", "alt": "grilled fish" },
      { "time": ["2021.05.20", "13:20"], "src": "/img/columns/column-2.jpg", "alt": "sleeping woman" },
      { "time": ["2021.05.19", "20:35"], "src": "/img/columns/column-3.jpg", "alt": "drinking juice man" },
      { "time": ["2021.05.18", "09:55"], "src": "/img/columns/column-4.jpg", "alt": "vegetables" },
      { "time": ["2021.05.17", "11:22"], "src": "/img/columns/column-5.jpg", "alt": "cup of water" },
      { "time": ["2021.05.16", "16:48"], "src": "/img/columns/column-6.jpg", "alt": "gym woman" },
      { "time": ["2021.05.15", "23:33"], "src": "/img/columns/column-7.jpg", "alt": "drugs" },
      { "time": ["2021.05.14", "18:25"], "src": "/img/columns/column-8.jpg", "alt": "beautiful woman" }
    ];
  }
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
