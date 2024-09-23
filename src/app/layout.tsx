import type { Metadata } from "next";
import { StoreProvider } from "@/providers/StoreProvider";
import "./globals.css";
import { Sidebar } from "@/components";

export const metadata: Metadata = {
  title: "Main",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html>
        <body>
          {children}
          <Sidebar />
        </body>
      </html>
    </StoreProvider>
  );
}
