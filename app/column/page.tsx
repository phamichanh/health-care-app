import ColRecommend from "../components/ColumnRecommend";
import ColumnItem from "../components/ColumnItem";
import BtnGradient from "../components/BtnGradient";

export default function Column() {
  const columnItems = [
    { src: "/img/columns/column-1.jpg", alt: "grilled fish" },
    { src: "/img/columns/column-2.jpg", alt: "sleeping woman" },
    { src: "/img/columns/column-3.jpg", alt: "drinking juice man" },
    { src: "/img/columns/column-4.jpg", alt: "vegetables" },
    { src: "/img/columns/column-5.jpg", alt: "cup of water" },
    { src: "/img/columns/column-6.jpg", alt: "gym woman" },
    { src: "/img/columns/column-7.jpg", alt: "drugs" },
    { src: "/img/columns/column-8.jpg", alt: "beautiful woman" },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="section flex justify-between mt-5">
        <ColRecommend title="RECOMMENDED COLUMN" subTitle="オススメ" />
        <ColRecommend title="RECOMMENDED DIET" subTitle="ダイエット" />
        <ColRecommend title="RECOMMENDED BEAUTY" subTitle="美容" />
        <ColRecommend title="RECOMMENDED HEALTH" subTitle="健康" />
      </section>

      <section className="section flex flex-wrap justify-between mt-14 mb-7">
        {columnItems.map((item, idx) => (
          <ColumnItem key={idx} src={item.src} alt={item.alt} />
        ))}
      </section>

      <BtnGradient label="コラムをもっと見る" />
    </main>
  );
}
