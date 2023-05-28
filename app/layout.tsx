import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BtnToTop from "./components/BtnToTop";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata = {
  title: "健康管理アプリ",
  description: "Health Care App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansJp.className}>
        <Header />
        {children}
        <BtnToTop />
        <Footer />
      </body>
    </html>
  );
}
