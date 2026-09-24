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
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(160deg,#fbfaf7_0%,#f5f7fa_50%,#eef3f9_100%)]"
      >
        <div className="absolute -left-[8%] -top-[12%] h-[55vh] w-[55vh] rounded-full bg-[#f1dfb8]/40 blur-[110px]" />
        <div className="absolute -right-[10%] top-[5%] h-[60vh] w-[60vh] rounded-full bg-[#b9d0ee]/45 blur-[110px]" />
        <div className="absolute left-[35%] top-[48%] h-[50vh] w-[50vh] rounded-full bg-[#c4e0d4]/35 blur-[120px]" />
        <div className="absolute -bottom-[18%] -left-[6%] h-[55vh] w-[55vh] rounded-full bg-[#c9d8f2]/40 blur-[120px]" />
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
