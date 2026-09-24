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
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(160deg,#f7efe2_0%,#eef1ec_45%,#e8eef5_100%)]"
      >
        <div className="absolute -left-[10%] -top-[15%] h-[70vh] w-[70vh] rounded-full bg-[#e2b765]/55 blur-[100px]" />
        <div className="absolute -right-[12%] top-[8%] h-[60vh] w-[60vh] rounded-full bg-[#7fa7d8]/45 blur-[100px]" />
        <div className="absolute left-[30%] top-[45%] h-[55vh] w-[55vh] rounded-full bg-[#6fa58c]/40 blur-[110px]" />
        <div className="absolute -bottom-[20%] -left-[8%] h-[60vh] w-[60vh] rounded-full bg-[#f0ad8e]/35 blur-[110px]" />
        <div className="absolute -bottom-[15%] right-[5%] h-[50vh] w-[50vh] rounded-full bg-[#c9a25c]/40 blur-[100px]" />
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
