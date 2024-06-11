import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipe Blog",
  description: "All Awesome Recipes at one place",
};

let header = (
  <header>
    <Link href={"/"}>
      <h1>ToolMate Recipes..</h1>
    </Link>
  </header>
);
let footer = (
  <footer>
    <p>Made with 💘 from 🇮🇳</p>
  </footer>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
