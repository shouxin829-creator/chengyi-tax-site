import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { services, site, WEB3FORMS_ACCESS_KEY } from "../config/site";
import { SectionHeading } from "./Section";

const field =
  "w-full rounded-2xl border border-white/80 bg-white/70 px-4 py-3.5 text-[15px] outline-none transition placeholder:text-ink-soft/60 focus:border-gold/50 focus:bg-white focus:ring-4 focus:ring-gold/10";

export default function ContactSection() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", `誠誼事務所｜諮詢需求｜${data.get("name") || ""}`);
    data.append("from_name", "誠誼事務所網站");

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const contacts = [
    { icon: Phone, label: "電話", value: site.phone, href: site.phoneHref },
    { icon: MessageCircle, label: "LINE", value: site.lineId, href: site.lineUrl, external: true },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "地址", value: site.address },
    { icon: Clock, label: "營業時間", value: site.hours },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="CONTACT"
        title="預約初步諮詢"
        desc="留下您的聯絡方式與想了解的問題，我們會在一個工作天內與您聯繫。收費依營業規模與服務內容而定，歡迎洽詢。"
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="glass rounded-[32px] p-6 sm:p-9">
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">姓名 *</span>
              <input name="name" required autoComplete="name" className={field} placeholder="王小明" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">聯絡電話 *</span>
              <input name="phone" required type="tel" autoComplete="tel" className={field} placeholder="0912-345-678" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">Email</span>
              <input name="email" type="email" autoComplete="email" className={field} placeholder="name@example.com" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">想諮詢的服務 *</span>
              <select name="topic" required defaultValue="" className={field}>
                <option value="" disabled>請選擇</option>
                {services.map((s) => (
                  <option key={s.id}>{s.title}</option>
                ))}
                <option>稅務問題／國稅局函查</option>
                <option>其他</option>
              </select>
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-sm font-semibold">補充說明</span>
            <textarea
              name="message"
              rows="4"
              className={`${field} resize-none`}
              placeholder="例如：行業別、預計開業時間、目前遇到的問題⋯⋯"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-[#183a5e] disabled:opacity-60"
          >
            {status === "sending" ? "傳送中…" : "送出諮詢需求"}
          </button>

          <div aria-live="polite">
            {status === "success" && (
              <p className="mt-4 text-center font-semibold text-sage">
                已收到您的需求，我們會盡快與您聯繫！
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-center text-sm font-semibold text-red-600">
                送出失敗，請直接來電 {site.phone}、LINE {site.lineId} 或來信 {site.email}
              </p>
            )}
          </div>
        </form>

        <div className="flex flex-col gap-5">
          <div className="glass rounded-[32px] p-6 sm:p-8">
            <ul className="space-y-4">
              {contacts.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-gold">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-ink-soft">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="block break-all font-semibold hover:text-gold"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="block font-semibold">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass flex-1 overflow-hidden rounded-[32px] p-2">
            <iframe
              title="誠誼稅務記帳士事務所地圖"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=16&output=embed`}
              className="h-64 w-full rounded-[26px] border-0 lg:h-full lg:min-h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
