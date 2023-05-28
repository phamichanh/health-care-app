// import styles from "./index.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-dark-500 w-full py-8 md:py-14">
      <div className="max-w-screen-xl sm:flex sm:flex-wrap items-center mx-auto px-5 sm:px-20 md:px-40">
        <ul className="sm:flex sm:flex-wrap sm:flex-row sm:space-x-11 text-light text-xs sm:mr-11">
          <li className="my-2">
            <Link href="#">会員登録</Link>
          </li>
          <li className="my-2">
            <Link href="#">運営会社</Link>
          </li>
          <li className="my-2">
            <Link href="#">利用規約</Link>
          </li>
        </ul>
        <ul className="sm:flex sm:flex-wrap sm:flex-row sm:space-x-11 text-light text-xs">
          <li className="my-2">
            <Link href="#">個人情報の取扱について</Link>
          </li>
          <li className="my-2">
            <Link href="#">特定商取引法に基づく表記</Link>
          </li>
          <li className="my-2">
            <Link href="#">お問い合わせ</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
