export default function Page() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#EAEAEA]">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <a href="/" className="text-xs text-white/50 hover:text-white">← Milztech</a>
        <h1 className="mt-6 text-3xl md:text-5xl font-light tracking-wide">Photo & Video</h1>
        <p className="mt-6 text-white/70 leading-8">
          建築・不動産・ブランド撮影。色調は抑制し、素材本来の質感を最大化。動画は静かなモーションで印象を残します。
        </p>
        <ul className="mt-8 space-y-4 text-white/70">
          <li>・Real Estate / Architecture / Brand</li>
          <li>・Retouching Policy（正確・誠実・過度な演出なし）</li>
          <li>・Short Film（静かなカメラワークと音）</li>
          <li>・Delivery（色管理・OG/サムネ一式）</li>
        </ul>
      </section>
    </main>
  );
}
