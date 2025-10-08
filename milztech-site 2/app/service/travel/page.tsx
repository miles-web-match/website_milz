export default function Page() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#EAEAEA]">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <a href="/" className="text-xs text-white/50 hover:text-white">← Milztech</a>
        <h1 className="mt-6 text-3xl md:text-5xl font-light tracking-wide">Travel Experience</h1>
        <p className="mt-6 text-white/70 leading-8">
          都市/施設の体験設計と上質なツアー。地図・音・光を用いて、静かなインタラクションを編成します。
        </p>
        <ul className="mt-8 space-y-4 text-white/70">
          <li>・City & Venue Curation（地図×音×光）</li>
          <li>・Accessibility / Wayfinding（迷わない設計）</li>
          <li>・Editorial & Content（読み心地と余白）</li>
          <li>・Safety / Logistics（穏やかな運用）</li>
        </ul>
      </section>
    </main>
  );
}
