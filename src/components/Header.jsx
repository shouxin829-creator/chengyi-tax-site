import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navigation, site } from "../config/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="glass-bar mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full py-2 pl-4 pr-2 sm:pl-5">
        <Link to="/" aria-label={`${site.brand} 首頁`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-ink/[0.07] text-ink" : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-ink-soft transition hover:text-ink xl:flex"
          >
            <Phone size={15} />
            {site.phone}
          </a>
          <Link
            to="/#contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#183a5e] sm:block"
          >
            預約諮詢
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "關閉選單" : "開啟選單"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 手機選單 */}
      <div
        className={`glass-bar mx-auto mt-2 max-w-6xl overflow-hidden rounded-[28px] transition-all duration-300 lg:hidden ${
          open ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-3">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3.5 text-base font-semibold ${
                  isActive ? "bg-ink/[0.07]" : "text-ink-soft"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-2xl bg-white/80 py-3.5 font-semibold"
            >
              <Phone size={16} /> 撥打電話
            </a>
            <Link
              to="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-ink py-3.5 text-center font-semibold text-white"
            >
              預約諮詢
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
