import Rightside from "@/components/authshared/Rightside";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-wrap p-5 gap-4 min-h-screen w-full items-center justify-center">
        <div className="w-[592px] h-[780px] pt-5">
        {children}
        </div>
        <Rightside />
      </div>
    </>
  );
}
