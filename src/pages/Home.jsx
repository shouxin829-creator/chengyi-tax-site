import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CalendarClock,
  Handshake,
  Landmark,
  MessageCircle,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { faqs, services, site } from "../config/site";
import { SectionHeading } from "../components/Section";
import ContactSection from "../components/ContactSection";
import VideoSection from "../components/VideoSection";
import { usePageMeta } from "../hooks/usePageMeta";

const stats = [
  { value: "25+", label: "年稅務實務經驗" },
  { value: "6", label: "大核心服務" },
  { value: "跨專業", label: "律師・會計師・地政士協作" },
  { value: "中彰投苗", label: "中部地區在地服務" },
];

const experience = [
  { icon: Landmark, title: "國稅局職務代理人", desc: "熟悉稅務申報邏輯與查核實務，知道國稅局在意什麼。" },
  { icon: Briefcase, title: "記帳士事務所", desc: "長年處理各行業帳務、營業稅與所得稅申報。" },
  { icon: ShieldCheck, title: "銀行財富管理・保險", desc: "從企業主的角度看資金、風險與資產配置。" },
];

const partners = ["律師", "會計師", "地政士"];

const calendar = [
  { month: "1 月", title: "扣繳憑單申報", desc: "薪資、租金、勞務報酬等扣繳憑單" },
  { month: "單月 15 日前", title: "營業稅申報", desc: "每兩個月申報一次銷售額與稅額" },
  { month: "5 月", title: "所得稅結算申報", desc: "營利事業所得稅、個人綜合所得稅" },
  { month: "9 月", title: "營所稅暫繳", desc: "依上年度稅額或試算暫繳" },
];

const steps = [
  { no: "01", title: "初步諮詢", desc: "了解行業、規模與目前的帳務狀況。" },
  { no: "02", title: "評估報價", desc: "說明服務內容與費用，確認需要處理的事項。" },
  { no: "03", title: "資料交接", desc: "提供交件清單，協助向前手取得帳冊資料。" },
  { no: "04", title: "定期服務", desc: "每期準時記帳申報，重要期限主動提醒。" },
];

export default function Home() {
  usePageMeta({
    title: "誠誼稅務記帳士事務所｜台中西屯記帳士・公司設立・稅務申報",
    description:
      "誠誼稅務記帳士事務所位於台中西屯，由逾25年實務經驗記帳士主持，提供公司行號設立登記、每月記帳、營業稅、營所稅、綜所稅、扣繳與二代健保申報，服務中彰投苗地區。",
  });

  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-10 pt-10 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-20">
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-ink-soft">{site.brand}</p>
          <div className="mt-5 h-px w-16 bg-gold" />
          <h1 className="mt-7 text-[40px] font-bold leading-[1.18] tracking-tight sm:text-6xl">
            把帳務做好，
            <br />
            更替企業守住
            <br />
            <span className="bg-gradient-to-r from-[#9a7434] to-[#c9a25c] bg-clip-text text-transparent">
              每一分成果。
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ink-soft">
            從公司行號設立、記帳報稅到稅務風險健檢，協助您看懂經營數字，安心做每一個決定。
          </p>
          <span className="sr-only">
            台中記帳士、台中西屯記帳士、西屯公司設立、台中稅務申報，服務台中、彰化、南投、苗栗。
          </span>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white shadow-[0_14px_34px_rgba(14,39,66,0.22)] transition hover:-translate-y-0.5 hover:bg-[#183a5e]"
            >
              預約初步諮詢 <ArrowRight size={18} />
            </Link>
            <a
              href={site.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold transition hover:-translate-y-0.5"
            >
              <MessageCircle size={18} className="text-[#06C755]" /> LINE 詢問
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass rounded-[36px] p-2.5">
            <img
              src="/images/hero-consult.webp"
              alt="誠誼稅務記帳士事務所記帳士與客戶討論帳務"
              width="954"
              height="941"
              fetchPriority="high"
              className="aspect-[5/5] w-full rounded-[28px] object-cover sm:aspect-[4/3.6] lg:aspect-[5/5.2]"
            />
          </div>
          <div className="glass absolute -bottom-6 left-4 rounded-3xl px-5 py-4 sm:-left-6">
            <p className="text-3xl font-bold tracking-tight">
              25+
            </p>
            <p className="text-xs font-semibold text-ink-soft">年稅務實務經驗</p>
          </div>
          <div className="glass absolute -top-4 right-4 hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold sm:flex">
            <span className="h-2 w-2 rounded-full bg-sage" />
            台中西屯・中彰投苗
          </div>
        </div>
      </section>

      {/* 數據 */}
      <section className="mx-auto max-w-6xl px-5 pt-12">
        <div className="glass grid grid-cols-2 gap-y-6 rounded-[32px] px-4 py-7 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-3 text-center">
              <p className="text-2xl font-bold tracking-tight sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-[13px] text-ink-soft sm:text-[15px]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 服務項目 */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="SERVICES"
          title="從開業到每一次申報，都有人幫您顧好"
          desc="公司設立、記帳、營業稅、所得稅到工商變更，企業經營各階段的帳務與稅務，一個窗口處理。"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, title, short }) => (
            <Link
              key={id}
              to={`/services#${id}`}
              className="glass group flex flex-col rounded-[28px] p-7 transition hover:-translate-y-1 hover:bg-white/70"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c9a25c] to-[#9a7434] text-white shadow-md">
                <Icon size={22} />
              </span>
              <h3 className="mt-6 text-lg font-bold">{title}</h3>
              <p className="mt-2 flex-1 text-base leading-7 text-ink-soft">{short}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-[15px] font-semibold text-ink">
                了解內容
                <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 為什麼選擇誠誼 */}
      <section className="mx-auto max-w-6xl px-5">
        <div className="glass-dark relative overflow-hidden rounded-[36px] px-7 py-12 text-white sm:px-12 sm:py-16">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#7fa7d8]/20 blur-[90px]" />
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.22em] text-gold-light">WHY CHENG YI</p>
              <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight sm:text-4xl">
                懂申報，
                <br />
                更懂查核的角度。
              </h2>
              <p className="mt-5 leading-8 text-white/80">
                由具逾 25 年實務經驗之記帳士主持，歷練涵蓋銀行財富管理、保險、國稅局職務代理人及記帳士事務所，熟悉稅務申報邏輯與查核實務。
              </p>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold ring-1 ring-white/20 transition hover:bg-white/20"
              >
                認識事務所 <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-3">
              {experience.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 rounded-3xl bg-white/[0.07] p-5 ring-1 ring-white/10">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-light/15 text-gold-light">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-[15px] leading-7 text-white/80">{desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 rounded-3xl bg-white/[0.07] p-5 ring-1 ring-white/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-light/15 text-gold-light">
                  <Handshake size={20} />
                </span>
                <div>
                  <p className="font-semibold">跨專業協作</p>
                  <p className="mt-1 text-[15px] leading-7 text-white/80">
                    與{partners.join("、")}建立協作機制，處理企業稅務、資產傳承及複雜稅務案件。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoSection />

      {/* 稅務行事曆 */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <SectionHeading
          eyebrow="TAX CALENDAR"
          title="重要申報期限，我們替您記著"
          desc="錯過期限就可能被加徵滯報金或怠報金。委託後，每個期限前都會主動提醒您備妥資料。"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {calendar.map((c) => (
            <div key={c.title} className="glass rounded-[28px] p-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage">
                <CalendarClock size={13} /> {c.month}
              </span>
              <p className="mt-4 text-lg font-bold">{c.title}</p>
              <p className="mt-1.5 text-[15px] leading-7 text-ink-soft">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 服務流程 */}
      <section className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="PROCESS" title="委託流程" center />
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.no} className="glass rounded-[28px] p-6">
              <p className="text-sm font-bold text-ink-soft">{s.no}</p>
              <p className="mt-3 text-lg font-bold">{s.title}</p>
              <p className="mt-1.5 text-[15px] leading-7 text-ink-soft">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 常見問題預覽 */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="FAQ" title="常見問題" />
          <Link to="/faq" className="inline-flex items-center gap-1 font-semibold text-ink">
            看全部問題 <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-8 space-y-3">
          {faqs.slice(0, 3).map((f) => (
            <details key={f.q} className="glass group rounded-3xl px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {f.q}
                <span className="text-xl text-ink-soft transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-7 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
