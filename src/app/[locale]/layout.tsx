import type { Metadata } from "next";
import { Header } from "@/components";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Transport IF",
  description: "Transportation in Ivano-Frankivsk district",
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  return (
    // <html lang={params.locale}>
    // <body className="bg-black/90">
    <div className="bg-black/90">
      <Header />
      {children}
      <Footer />
    </div>
    // </body>
    // </html>
  );
}
