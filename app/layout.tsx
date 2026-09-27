import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { dictionaries } from "./i18n/dictionaries";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const dict = dictionaries.fr;

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${lato.variable} h-full antialiased`}>
      <head>
        <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=b47db33f"></script>
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
