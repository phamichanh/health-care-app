## 健康管理アプリ
健康管理のためのWEBアプリケーションです。

#### トップページ
- 日付・達成率
- 体重・体脂肪率グラフ
- 食事履歴


#### 自分の記録ページ
- 各記録画面に遷移するボタン
- 体重・体脂肪率グラフ
- 運動記録
- 日記

#### コラムページ
- 健康に関するカラム

### 構築
フレームワークとプラグイン
* [Next.js](https://nextjs.org/)
* [React.js](https://react.dev/)
* [tailwindcss](https://tailwindcss.com/)
* [Chart.js](https://www.chartjs.org/)

[restapify](https://restapify.vercel.app/)でモックテストデータを作る

### ライブデモ
* [健康管理アプリ](https://health-care-app-sable.vercel.app/)を[vercel](https://vercel.com/)でデプロイしました。

## 始め方

#### [yarn](https://yarnpkg.com/)をインストールする
```bash
npm install --global yarn
```

インストール成功確認
```bash
yarn --version
```

#### [restapify](https://restapify.vercel.app/)をインストールする

```bash
yarn global add restapify
```

インストール成功確認
```bash
restapify -version
```



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## install yarn
https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable
npm install --global yarn
yarn --version

## install restapify for fake api
https://restapify.vercel.app/

yarn global add restapify

cd modkedApi
restapify serve .


https://health-care-app-sable.vercel.app/

https://github.com/phamichanh/health-care-app

評価基準
私たちは以下に注目して提出物の確認を行います。
● 忠実さ
  ○ デザインは再現できていますか？
● 明瞭さ
  ○ READMEは問題点と解決策、動作確認手順を明確かつ簡潔に説明しています
か？
● アーキテクチャ
  ○ データと UI の分離はできていますか？
● コード品質
  ○ コードはシンプルで、理解しやすく、保守しやすいですか？
  ○ コーディングスタイルは言語のガイドラインと一致していますか？
  ○ コードベースで一貫していますか？
