import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { services } from "../config/site";
import { PageHero } from "../components/Section";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Services() {
  usePageMeta({
    title: "服務項目｜公司設立・記帳報稅・營所稅・綜所稅｜誠誼稅務記帳士事務所",
    description:
      "台中西屯誠誼稅務記帳士事務所服務項目：公司行號設立登記、每月記帳與營業稅申報、營利事業所得稅結算、個人綜合所得稅、扣繳與二代健保、工商變更與解散登記。",
  });

  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="服務項目"
        desc="企業經營各階段的帳務與稅務需求，都可以交給我們。收費依營業規模與服務內容評估，歡迎洽詢。"
      />

      <nav aria-label="服務項目快速連結" className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="glass rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-white/80"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl space-y-5 px-5 py-12">
        {services.map(({ id, icon: Icon, title, desc, items }, i) => (
          <section
            key={id}
            id={id}
            className="glass grid gap-8 rounded-[32px] p-7 sm:p-10 lg:grid-cols-[1fr_1fr]"
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c9a25c] to-[#9a7434] text-white shadow-md">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-bold text-ink-soft">0{i + 1}</span>
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
              <p className="mt-4 leading-8 text-ink-soft">{desc}</p>
              <Link
                to="/#contact"
                className="mt-6 inline-flex items-center gap-1.5 font-semibold text-ink underline-offset-4 hover:underline"
              >
                諮詢這項服務 <ArrowRight size={15} />
              </Link>
            </div>

            <ul className="space-y-3 self-center">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/60 px-4 py-3.5">
                  <Check size={18} className="mt-0.5 shrink-0 text-sage" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <CtaBanner />
    </>
  );
}

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10">
      <div className="glass-dark flex flex-col items-start justify-between gap-6 rounded-[32px] px-8 py-10 text-white sm:flex-row sm:items-center sm:px-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">不確定需要哪些服務？</h2>
          <p className="mt-2 text-white/70">先聊聊您的狀況，我們幫您整理該做的事。</p>
        </div>
        <Link
          to="/#contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5"
        >
          預約初步諮詢 <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
