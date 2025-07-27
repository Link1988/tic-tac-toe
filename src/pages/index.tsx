import { Geist, Geist_Mono } from "next/font/google";

import Board from "@/components/Board";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex flex-col h-screen duration-700 p-6 bg-neutral-800 items-center justify-center`}
    >
      <Board />
    </div>
  );
}
