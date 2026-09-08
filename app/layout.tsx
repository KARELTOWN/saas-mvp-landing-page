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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
