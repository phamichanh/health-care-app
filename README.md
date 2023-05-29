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
