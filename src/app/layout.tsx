import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vo Quang Chien",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
