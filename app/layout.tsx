import Header from "@/components/header/Header";
import "./globals.scss";
import { Noto_Sans, Caveat_Brush } from "next/font/google";

const noto = Noto_Sans({
  weight: ["400", "700"],
  variable: "--font-body",
  subsets: ["latin-ext"],
});

const caveat = Caveat_Brush({
  weight: ["400"],
  variable: "--font-head",
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "fe-task",
  description: "Task for frontend development position in RatePunk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${noto.variable} ${caveat.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
