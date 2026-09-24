import { useEffect } from "react";
import { faqs } from "../config/site";
import { PageHero } from "../components/Section";
import { CtaBanner } from "./Services";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Faq() {
  usePageMeta({
    title: "常見問題｜公司設立・記帳・報稅 Q&A｜誠誼稅務記帳士事務所",
    description:
      "設公司還是行號？小規模營業人要記帳嗎？收到國稅局函查怎麼辦？台中西屯誠誼稅務記帳士事務所整理記帳報稅常見問題。",
  });

  // FAQ 結構化資料，讓 Google 搜尋結果有機會直接顯示問答
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="常見問題"
        desc="整理創業、記帳與報稅最常被問到的問題。沒看到您的問題？歡迎直接來電或 LINE 詢問。"
      />

      <section className="mx-auto max-w-4xl space-y-3 px-5 py-10">
        {faqs.map((f, i) => (
          <details key={f.q} open={i === 0} className="glass group rounded-3xl px-6 py-5 sm:px-8">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
              {f.q}
              <span className="text-2xl text-ink-soft transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-8 text-ink-soft">{f.a}</p>
          </details>
        ))}
      </section>

      <CtaBanner />
    </>
  );
}
