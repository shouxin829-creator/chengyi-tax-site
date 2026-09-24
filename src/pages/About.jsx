import { Briefcase, Clock, Handshake, Landmark, MapPin, ShieldCheck } from "lucide-react";
import { site } from "../config/site";
import { PageHero, SectionHeading } from "../components/Section";
import { CtaBanner } from "./Services";
import { usePageMeta } from "../hooks/usePageMeta";

const background = [
  { icon: Landmark, title: "國稅局職務代理人", desc: "熟悉稅務申報邏輯與查核實務，申報時就先想到查核會問什麼。" },
  { icon: Briefcase, title: "記帳士事務所", desc: "長年處理各行業帳務、營業稅與所得稅申報的第一線經驗。" },
  { icon: ShieldCheck, title: "銀行財富管理・保險", desc: "理解企業主在資金運用、風險管理與資產配置上的考量。" },
];

const values = [
  { title: "誠", desc: "帳務據實、說明清楚。能做與不能做的，一開始就講明白。" },
  { title: "誼", desc: "長期往來的夥伴關係，不只是每期交件、申報，而是您經營上可以商量的人。" },
  { title: "守", desc: "準時、細心，替企業守住每一分成果，也守住不該承擔的稅務風險。" },
];

const partners = [
  { title: "律師", desc: "契約、股權、爭議與法律風險" },
  { title: "會計師", desc: "財務簽證、查帳申報與複雜交易" },
  { title: "地政士", desc: "不動產移轉、繼承與贈與登記" },
];

export default function About() {
  usePageMeta({
    title: "關於我們｜逾25年實務經驗記帳士主持｜誠誼稅務記帳士事務所",
    description:
      "誠誼稅務記帳士事務所由逾25年實務經驗記帳士主持，歷練涵蓋銀行財富管理、保險、國稅局職務代理人及記帳士事務所，並與律師、會計師、地政士協作，服務台中與中彰投苗地區。",
  });

  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="關於誠誼"
        desc="由具逾 25 年實務經驗之記帳士主持，熟悉稅務申報邏輯與查核實務，並與律師、會計師、地政士建立協作機制。"
      />

      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-10 lg:grid-cols-[1fr_1fr]">
        <div className="glass overflow-hidden rounded-[32px] p-2.5">
          <img
            src="/images/hero-consult.webp"
            alt="誠誼稅務記帳士事務所諮詢情境"
            width="954"
            height="941"
            loading="lazy"
            className="h-full max-h-[520px] w-full rounded-[26px] object-cover"
          />
        </div>
        <div className="glass flex flex-col justify-center rounded-[32px] p-7 sm:p-10">
          <p className="text-[13px] font-semibold tracking-[0.22em] text-gold">主持記帳士</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            25 年以上的稅務實務歷練
          </h2>
          <p className="mt-4 leading-8 text-ink-soft">
            歷練涵蓋銀行財富管理、保險、國稅局職務代理人及記帳士事務所。因為看過申報的每一端，更知道帳要怎麼做才經得起檢視。
          </p>
          <ul className="mt-6 space-y-3">
            {background.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex gap-4 rounded-2xl bg-white/60 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink/[0.06] text-ink">
                  <Icon size={19} />
                </span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-0.5 text-[15px] leading-7 text-ink-soft">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <SectionHeading eyebrow="OUR VALUES" title="我們的堅持" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-[28px] p-7">
              <p className="text-5xl font-bold text-ink">
                {v.title}
              </p>
              <p className="mt-4 leading-7 text-ink-soft">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="glass rounded-[32px] p-7 sm:p-10">
          <div className="flex items-center gap-3">
            <Handshake className="text-ink" />
            <h2 className="text-2xl font-bold tracking-tight">跨專業協作</h2>
          </div>
          <p className="mt-3 max-w-2xl leading-8 text-ink-soft">
            稅務問題常常牽涉法律與不動產。遇到企業稅務、資產傳承及複雜稅務案件，我們與合作的專業人士共同處理，您只需要一個窗口。
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {partners.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white/60 p-5">
                <p className="text-lg font-bold">{p.title}</p>
                <p className="mt-1 text-[15px] leading-7 text-ink-soft">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="glass grid gap-6 rounded-[32px] p-7 sm:grid-cols-2 sm:p-10">
          <div className="flex gap-4">
            <MapPin className="shrink-0 text-ink" />
            <div>
              <h2 className="font-bold">服務地區</h2>
              <p className="mt-1 leading-7 text-ink-soft">
                事務所位於{site.address}，服務{site.areas.join("、")}等中部地區，外縣市客戶可透過 LINE、Email 遠端委託。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="shrink-0 text-ink" />
            <div>
              <h2 className="font-bold">營業時間</h2>
              <p className="mt-1 leading-7 text-ink-soft">
                {site.hours}，其他時段請先以 LINE 預約。
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
