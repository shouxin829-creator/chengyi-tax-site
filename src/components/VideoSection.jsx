import { useState } from "react";
import { ArrowRight, Play, Youtube } from "lucide-react";
import { site, videos } from "../config/site";
import { SectionHeading } from "./Section";

// 先顯示縮圖，點了才載入 YouTube 播放器，避免一次載入 8 個 iframe 拖慢網站
function VideoCard({ id, title, tag }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="glass w-[64vw] max-w-[260px] shrink-0 snap-start rounded-[28px] p-2 sm:w-auto sm:max-w-none">
      <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-ink/10">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`播放影片：${title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/oar2.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/25 text-white shadow-lg backdrop-blur-md transition group-hover:scale-110 group-hover:bg-white/40">
              <Play size={22} fill="currentColor" className="ml-0.5" />
            </span>
          </button>
        )}
      </div>
      <div className="px-2.5 pb-2.5 pt-3">
        <span className="rounded-full bg-ink/[0.06] px-2.5 py-0.5 text-xs font-semibold text-ink-soft">
          {tag}
        </span>
        <h3 className="mt-2 line-clamp-2 text-[15px] font-semibold leading-6">{title}</h3>
      </div>
    </article>
  );
}

export default function VideoSection() {
  return (
    <section id="videos" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="YOUTUBE"
          title="稅務短影音"
          desc="一分鐘看懂老闆最容易踩的稅務地雷，都是實務上常見的真實情境。"
        />
        <a
          href={site.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1 font-semibold text-ink sm:inline-flex"
        >
          前往 YouTube 頻道 <ArrowRight size={16} />
        </a>
      </div>

      {/* 手機左右滑動，桌機 4 欄 */}
      <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((v) => (
          <VideoCard key={v.id} {...v} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={site.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition hover:-translate-y-0.5"
        >
          <Youtube size={20} className="text-[#FF0000]" />
          看更多影片・訂閱頻道
        </a>
      </div>
    </section>
  );
}
