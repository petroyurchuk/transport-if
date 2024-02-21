import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Transport IF",
  description: "Transportation in Ivano-Frankivsk district",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="uk">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
