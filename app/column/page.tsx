import ColRecommend from "../components/ColumnRecommend";

export default function Column() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="section flex justify-between mt-5">
        <ColRecommend title="RECOMMENDED COLUMN" subTitle="オススメ" />
        <ColRecommend title="RECOMMENDED DIET" subTitle="ダイエット" />
        <ColRecommend title="RECOMMENDED BEAUTY" subTitle="美容" />
        <ColRecommend title="RECOMMENDED HEALTH" subTitle="健康" />
      </section>

      <section className="section"></section>
    </main>
  );
}
