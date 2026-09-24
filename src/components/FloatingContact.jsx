import { MessageCircle } from "lucide-react";
import { site } from "../config/site";

export default function FloatingContact() {
  return (
    <a
      href={site.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="加入 LINE 諮詢"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#06C755] px-4 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(6,199,85,0.35)] transition hover:-translate-y-0.5 sm:px-5"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">LINE 諮詢</span>
    </a>
  );
}
