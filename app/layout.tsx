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
        <script
          src="http://localhost:5174/record.js"
          defer
          type="module"
        ></script>
        <script
          id="rrweb-init"
          data-project="6ab6681075340c55186af9b9"
        ></script>
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
