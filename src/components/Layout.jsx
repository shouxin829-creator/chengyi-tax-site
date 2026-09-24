import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";
import { useScrollToHash } from "../hooks/useScrollToHash";

export default function Layout() {
  useScrollToHash();

  return (
    <div className="relative min-h-screen overflow-x-clip text-ink">
      {/* 背景光暈，讓毛玻璃有東西可以透 */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-gold-light/35 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[520px] w-[520px] rounded-full bg-sage/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-1/4 h-[480px] w-[480px] rounded-full bg-[#9fb6cf]/30 blur-[120px]" />
      </div>

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
