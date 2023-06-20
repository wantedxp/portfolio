import { ReactNode } from "react";
import Header from "./Header";
import { JetBrains_Mono } from "next/font/google";


interface LayoutProps {
  children: ReactNode;
}

const jebrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

export function Layout({ children }: LayoutProps) {
  return (
    <div className={`${jebrains_mono.className} mx-auto container`}>
      <Header />
      {children}
    </div>
  );
}
