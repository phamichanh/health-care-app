// import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import BtnMenu from "../BtnMenu";
import HamburgerMenu from "../HamburgerMenu";

function Header() {
  return (
    <nav className="bg-dark-500 fixed w-full z-20 top-0 left-0 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-5 sm:px-20 md:px-40">
        <Link href="/" className="flex items-center pt-2">
          <Image
            src="img/logo.svg"
            width="109"
            height="40"
            alt="Healthy Logo"
            priority
          />
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto">
          <ul className="flex space-x-2 mr-5">
            <li className="w-40">
              <BtnMenu label="自分の記録" icon="memo" href="/my-record" />
            </li>
            <li className="w-40">
              <BtnMenu label="チャレンジ" icon="challenge" />
            </li>
            <li className="w-40">
              <BtnMenu label="お知らせ" icon="info" />
            </li>
          </ul>
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}

export default Header;
