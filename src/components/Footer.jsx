import { Link } from "react-router-dom";
import { navigation, services, site } from "../config/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="px-3 pb-6 pt-10 sm:px-5">
      <div className="glass-dark mx-auto max-w-6xl rounded-[32px] px-7 py-10 text-white/70 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-7">
              台中西屯記帳士事務所，提供公司設立、記帳報稅與各項稅務申報服務，服務台中、彰化、南投、苗栗地區。
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">服務項目</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className="transition hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">聯絡資訊</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={site.phoneHref} className="hover:text-white">電話 {site.phone}</a>
              </li>
              <li>
                <a href={site.lineUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  LINE {site.lineId}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a>
              </li>
              <li>{site.address}</li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.brand}</p>
          <nav className="flex flex-wrap gap-4">
            {navigation.map((n) => (
              <Link key={n.to} to={n.to} className="hover:text-white">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
