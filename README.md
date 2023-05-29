## 健康管理アプリ

健康管理のための WEB アプリケーションです。

**1. トップページ**

- 日付・達成率
- 体重・体脂肪率グラフ
- 食事履歴

**2. 自分の記録ページ**

- 各記録画面に遷移するボタン
- 体重・体脂肪率グラフ
- 運動記録
- 日記

**3. コラムページ**

- 健康に関するカラム

### 構築

**1. フレームワーク・ライブラリ**

- [Next.js](https://nextjs.org/)
- [React.js](https://react.dev/)
- [tailwindcss](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)

**2. モック API**

- [restapify](https://restapify.vercel.app/)でモックテストデータを作る

### ライブデモ

- [健康管理アプリ](https://health-care-app-sable.vercel.app/)を[vercel](https://vercel.com/)でデプロイしました。

## 始め方

### 前提条件

1. [Nodejs](https://nodejs.org/en)ホームページにアクセスしてインストラクターの通りにインストールする

2. npm をインストールする

```sh
npm install npm@latest -g
```

3. [yarn](https://yarnpkg.com/)をインストールする

```sh
npm install --global yarn
```

4. [restapify](https://restapify.vercel.app/)をインストールする

```sh
yarn global add restapify
```

### アプリのインストール

1. リポジトリのクローンを作成する

```sh
git clone https://github.com/phamichanh/health-care-app.git
```

2. アプリのディレクトリでパッケージをインストールする

```sh
cd /{your-path}/health-care-app
yarn install
```

3. モック API サーバーを実行する

_※モック API を起動しないと、デフォルトデータが反映されます。_

```sh
cd /{your-path}/health-care-app/mockedApi
restapify serve .
```

4. アプリの開発サーバーを実行する

```sh
cd /{your-path}/health-care-app
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認します。

### ディレクトリ構造

```
├── app
│   ├── components
│   ├── column
│   ├── my-record
│   ├── layout.tsx
│   └── page.tsx
├── mockedApi
└── public
    └── img
```

- app: ソースディレクトリ
- app/components: 再利用可能な UI コンポーネントのディレクトリ
- app/column: カラム一覧ページのディレクトリ
- app/my-record: 自分の記録ページのディレクトリ
- app/layout.tsx: デフォルトレイアウトファイル
- app/page.tsx: ホームページの HTML ファイル
- mockedApi: モック API のディレクトリ。ダミーデータを置くディレクトリ
- public: 公開ファイルを置くディレクトリ
- public/img: アプリの画像を置くディレクトリ

### マニュアル

#### ページ遷移

**1. [トップページ](http://localhost:3000)**

- [http://localhost:3000](http://localhost:3000)にアクセスできる
- ページで左上にある**Healthy**ロゴをクリックする

**2. [自分の記録](http://localhost:3000/my-record)**

- [http://localhost:3000/my-record](http://localhost:3000/my-record)にアクセスできる
- ページでヘッダーのにある**自分の記録**リンクをクリックする
- 右上にある**ハンバーガーボタン**をクリックして、ドロップダウンリストにある**自分の記録**をクリックする

**3. [カラム一覧](http://localhost:3000/column)**

- [http://localhost:3000/column](http://localhost:3000/column)にアクセスできる
- 右上にある**ハンバーガーボタン**をクリックして、ドロップダウンリストにある**カラム一覧**をクリックする

#### 隠しアイテムの表示

**1. トップページ**

- **記録をもっと見る**ボタンをクリックすると、隠し食事が**表示**される
- 表示状態で**記録をもっと見る**ボタンをクリックすると、食事が**非表示**される

**2. 自分の記録**

- **自分の日記をもっと見る**ボタンをクリックすると、隠し日記が**表示**される
- 表示状態で**自分の日記をもっと見る**ボタンをクリックすると、日記が**非表示**される

**3. カラム一覧**

- **カラムをもっと見る**ボタンをクリックすると、隠しカラムが**表示**される
- 表示状態で**カラムをもっと見る**ボタンをクリックすると、カラムが**非表示**される

### モックデータの調整

**1. トップページ**

- 日時・達成率

```
/{your-path}/health-care-app/mockedApi/progress/_.json
```

```JSON
{
  "date": "05/21",
  "value": 75
}
```

- 体重・体脂肪率グラフ

```
/{your-path}/health-care-app/mockedApi/body/_.json
```

```JSON
{
  "months": ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月","5月"],
  "data1": [1, 0.95, 0.7, 0.8, 0.75, 0.7, 0.8, 0.7, 0.55, 0.5, 0.45, 0.5],
  "data2": [1, 0.9, 0.75, 0.7, 0.65, 0.65, 0.5, 0.45, 0.4, 0.3, 0.25, 0.15]
}
```

- 食事履歴

```
/{your-path}/health-care-app/mockedApi/meals/_.json
```

```JSON
[
  {
    "time": "05.21.Morning",
    "src": "/img/meals/m01.jpg",
    "alt": "Sandwiches"
  },
  ...
  {
    "time": "05.18.Snack",
    "src": "/img/meals/s01.jpg",
    "alt": "Ice cream"
  }
]
```

**2. 自分の記録**

- 体重・体脂肪率グラフ

```
トップページの体重・体脂肪率グラフと同じです。
```

- 日記

```
/{your-path}/health-care-app/mockedApi/diaries/_.json
```

```JSON
[
  {
    "date": "2021.05.21",
    "time": "23:25",
    "text": "私の日記の記録が一部表示されます…"
  },
  ...
  {
    "date": "2021.05.06",
    "time": "23:25",
    "text": "私の日記の記録が一部表示されます…"
  }
]
```

**3. カラム一覧**

- カラム

```
/{your-path}/health-care-app/mockedApi/columns/_.json
```

```JSON
[
  { "time": ["2021.05.21", "23:15"], "src": "/img/columns/column-1.jpg", "alt": "grilled fish" },
  ...
  { "time": ["2021.05.06", "18:25"], "src": "/img/columns/column-8.jpg", "alt": "beautiful woman" }
]
```
