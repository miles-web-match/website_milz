// 先頭で
import Image from "next/image";

const photos = ["/pv-01.webp"]; // ← 1枚だけ使う

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#EAEAEA]">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <a href="/" className="text-xs text-white/50 hover:text-white">← Milztech</a>
        <h1 className="mt-6 text-3xl md:text-5xl font-light tracking-wide">Photo & Video</h1>
        <p className="mt-6 text-white/70 leading-8">
          建築・不動産・ブランド撮影。色調は抑制し、素材本来の質感を最大化。動画は静かなモーションで印象を残します。
        </p>

        {/* 1枚だけセンター表示 */}
        <div className="mt-10 grid grid-cols-1 gap-6">
          {photos.map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-[#111] mx-auto">
              <Image
                src={src}
                alt="Milztech Photo & Video — Lens"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
