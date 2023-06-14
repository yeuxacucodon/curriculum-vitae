import { Inter } from "next/font/google";
import { Metadata } from "next";
import "boxicons/css/boxicons.min.css";
import "./global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vo Quang Chien",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
