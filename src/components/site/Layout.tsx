import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-20 bg-[radial-gradient(circle_at_top_left,_rgba(134,186,151,0.16),_transparent_32%),linear-gradient(180deg,_#fcfbf6_0%,_#ffffff_100%)]">{children}</main>
      <Footer />
    </>
  );
}