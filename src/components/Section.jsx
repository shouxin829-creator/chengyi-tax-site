// 各區塊共用的標題
export function SectionHeading({ eyebrow, title, desc, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-[13px] font-semibold tracking-[0.22em] text-gold">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-8 text-ink-soft sm:text-lg">{desc}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, desc }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-6 pt-14 sm:pt-20">
      <p className="text-[13px] font-semibold tracking-[0.22em] text-gold">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {desc && <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">{desc}</p>}
    </section>
  );
}
