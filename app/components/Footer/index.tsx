// import styles from "./index.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-dark-500 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-14 px-40">
        <ul className="flex space-x-11 text-light text-xs">
          <li>
            <Link href="#">会員登録</Link>
          </li>
          <li>
            <Link href="#">運営会社</Link>
          </li>
          <li>
            <Link href="#">利用規約</Link>
          </li>
          <li>
            <Link href="#">個人情報の取扱について</Link>
          </li>
          <li>
            <Link href="#">特定商取引法に基づく表記</Link>
          </li>
          <li>
            <Link href="#">お問い合わせ</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
