import type { Metadata } from "next";
import { HeaderTravels } from "@/components";
import FooterTravels from "@/components/FooterTravels";

export const metadata: Metadata = {
  title: "Travels",
};

type TravelsLayoutProps = {
  children: React.ReactNode;
};

export default function TravelsLayout({
  children,
}: Readonly<TravelsLayoutProps>) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderTravels />
      <main className="flex-grow">{children}</main>
      <FooterTravels />
    </div>
  );
}
