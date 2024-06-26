import type { Metadata } from "next";
import { Header } from "@/components";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Transport IF",
  description: "Transportation in Ivano-Frankivsk district",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={params.locale}>
      <body className="bg-black/90">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
