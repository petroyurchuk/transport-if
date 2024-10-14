import type { Metadata } from "next";
import { Header } from "@/components";
import Footer from "@/components/Footer";
import { locales } from "@/i18n";
import path from "path";
import fs from "fs";

export const metadata: Metadata = {
  title: "Transport IF",
  description: "Transportation in Ivano-Frankivsk district",
};

type Messages = {
  Header?: Record<string, string>;
  Footer?: Record<string, string>;
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const fs = require("fs");
  const path = require("path");

  const localePath = path.resolve(
    process.cwd(),
    `../../../messages/${params.locale}.json`
  );

  // Перевірка наявності файлу перед читанням
  let parsed: Messages = {};
  if (fs.existsSync(localePath)) {
    try {
      const fileContent = fs.readFileSync(localePath, "utf8");
      parsed = JSON.parse(fileContent);
    } catch (error) {
      console.error("Error parsing JSON file:", error);
    }
  }

  return (
    // <html lang={params.locale}>
    // <body className="bg-black/90">
    <div className="bg-black/90">
      <Header messages={parsed.Header ? parsed.Header : {}} />
      {children}
      <Footer messages={parsed.Footer ? parsed.Footer : {}} />
    </div>
    // </body>
    // </html>
  );
}
