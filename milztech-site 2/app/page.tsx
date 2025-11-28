"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function QuietIntelligenceSite() {
  const [lang, setLang] = useState<"ja" | "en">("ja");
  const t = (k: keyof typeof dict["ja"]) => dict[lang][k];

  const safeGetLang = () => {
    try {
      if (typeof window !== "undefined" && window?.localStorage) {
        const v = window.localStorage.getItem("milz_lang");
        if (v === "ja" || v === "en") return v as "ja" | "en";
      }
    } catch {}
    return null;
  };

  const detectBrowserLang = () => {
    if (typeof navigator === "undefined") return null;
    const lang = navigator.language || navigator.languages?.[0];
    if (!lang) return null;
    if (lang.startsWith("ja")) return "ja";
    if (lang.startsWith("en")) return "en";
    return null;
  };

  useEffect(() => {
    const stored = safeGetLang();
    if (stored) {
      setLang(stored);
      return;
    }
    const browser = detectBrowserLang();
    if (browser) {
      setLang(browser as "ja" | "en");
      try {
        if (typeof window !== "undefined" && window?.localStorage) {
          window.localStorage.setItem("milz_lang", browser);
        }
      } catch {}
    }
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window?.localStorage) {
        window.localStorage.setItem("milz_lang", lang);
      }
    } catch {}
  }, [lang]);

  const glowBg = useMemo(
    () =>
      [
        "radial-gradient(32rem 32rem at 20% 10%, rgba(56,189,248,0.12), transparent 60%)",
        "radial-gradient(36rem 36rem at 80% 80%, rgba(180,83,9,0.12), transparent 60%)",
      ].join(", "),
    []
  );

  const subtleBg = useMemo(
    () =>
      [
        "radial-gradient(28rem 28rem at 0% 0%, rgba(56,189,248,0.16), transparent 60%)",
        "radial-gradient(40rem 40rem at 100% 100%, rgba(180,83,9,0.12), transparent 70%)",
      ].join(", "),
    []
  );

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#EAEAEA] selection:bg-white/10 selection:text-white">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a
            href="#top"
            className="text-xs tracking-[0.3em] text-white/70 hover:text-white"
          >
            Milztech
          </a>
          <nav className="hidden md:flex items-center gap-6 text-xs text-white/70">
            <a href="#about" className="hover:text-white">
              {t("nav_about")}
            </a>
            <a href="#service" className="hover:text-white">
              {t("nav_service")}
            </a>
            <a href="#contact" className="hover:text-white">
              {t("nav_contact")}
            </a>
          </nav>
          <LangToggle lang={lang} onChange={setLang} />
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute -inset-40"
          style={{ backgroundImage: glowBg, filter: "blur(20px)" }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative z-10 text-center px-6 flex flex-col items-center"
        >
          <div className="mb-4 text-[11px] tracking-[0.45em] text-white/60">
            AI · EXPERIENCE · EXTREME
          </div>
          <h1 className="text-3xl md:text-6xl font-light tracking-wider leading-tight">
            CREATIVITY & TECHNOLOGY
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-white/60">
            {t("hero_tagline")}
          </p>
        </motion.div>

        <div
          id="cursorMask"
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(400px_400px_at_var(--x)_var(--y),black,transparent)]"
        />
      </section>

      {/* ABOUT — Vision */}
      <section
        id="about"
        className="relative isolate py-20 md:py-28 border-t border-white/10"
      >
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-14 px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="relative aspect-[4/3] rounded-2xl bg-[#111] ring-1 ring-white/10 overflow-hidden"
          >
            <Image
              src="/about.webp"
              alt="Milztech process"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="self-start flex flex-col justify-start"
          >
            <h2 className="text-xl md:text-3xl font-light tracking-wide mb-6 text-center">
              From Creative Eyes<br />to Intelligent Systems.
            </h2>

            <p className="text-white/70 leading-8 whitespace-pre-line">
              {t("vision_body").replace(
                "From Creative Eyes to Intelligent Systems.\n",
                ""
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE PHILOSOPHY */}
      <section className="relative py-20 md:py-28 border-t border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundImage: subtleBg, filter: "blur(18px)" }}
        />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-xl md:text-3xl font-light tracking-wide mb-4 whitespace-pre-line">
            {t("core_title")}
          </h2>
          <p className="text-sm md:text-base text-white/70 leading-7 whitespace-pre-line">
            {t("core_body")}
          </p>
        </div>
      </section>

      {/* SERVICE */}
      <section
        id="service"
        className="relative py-20 md:py-28 border-t border-white/10 overflow-hidden"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-baseline justify-between gap-4 mb-10">
            <h2 className="text-lg md:text-xl tracking-[0.3em] text-white/60 uppercase">
              {t("service_title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* AI Solution */}
            <ServiceCard
              href="/service/ai"
              label="AI Solution"
              title={t("svc_ai_title")}
              body={t("svc_ai")}
              badge="AI / Automation"
            />

            {/* Photo & Video */}
            <ServiceCard
              href="/service/photo-video"
              label="Photo & Video"
              title={t("svc_pv_title")}
              body={t("svc_pv")}
              badge="Photography"
            />

            {/* Travel */}
            <ServiceCard
              href="/service/travel"
              label="Travel Experience"
              title={t("svc_travel_title")}
              body={t("svc_travel")}
              badge="Experience"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative py-20 md:py-28 border-t border-white/10 overflow-hidden"
      >
        <div className="mx-auto max-w-3xl px-6 text-center space-y-6">
          <h2 className="text-xl md:text-2xl font-light tracking-wide mb-3">
            {t("contact_title")}
          </h2>
          <p className="text-sm md:text-base text-white/70 leading-7 whitespace-pre-line">
            {t("contact_body")}
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="mailto:info@milz.tech"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-2.5 text-sm text-white/90 hover:bg-white/10 transition-colors"
            >
              {t("contact_cta")}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-xs text-white/40 text-center">
        <p>© {new Date().getFullYear()} Milztech. All rights reserved.</p>
      </footer>
    </main>
  );
}

function LangToggle({
  lang,
  onChange,
}: {
  lang: "ja" | "en";
  onChange: (lang: "ja" | "en") => void;
}) {
  return (
    <div className="flex items-center rounded-full border border-white/20 text-[10px] overflow-hidden">
      <button
        onClick={() => onChange("ja")}
        className={`px-3 py-[5px] ${
          lang === "ja" ? "bg-white text-black" : "text-white/70"
        }`}
      >
        JA
      </button>
      <button
        onClick={() => onChange("en")}
        className={`px-3 py-[5px] border-l border-white/20 ${
          lang === "en" ? "bg-white text-black" : "text-white/70"
        }`}
      >
        EN
      </button>
    </div>
  );
}

function ServiceCard({
  href,
  label,
  title,
  body,
  badge,
}: {
  href: string;
  label: string;
  title: string;
  body: string;
  badge: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-5 md:p-6 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between gap-2 mb-1">
        <span className="text-xs tracking-[0.25em] text-white/50 uppercase">
          {label}
        </span>
        <span className="inline-flex items-center rounded-full border border-white/20 px-2.5 py-0.5 text-[10px] text-white/70">
          {badge}
        </span>
      </div>
      <h3 className="text-base md:text-lg font-light tracking-wide">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-white/60 leading-6">{body}</p>
      <div className="mt-2 text-[11px] text-white/50 group-hover:text-white/80 flex items-center gap-1">
        <span>View detail</span>
        <span aria-hidden>↗</span>
      </div>
    </motion.a>
  );
}

const dict = {
  ja: {
    nav_about: "About",
    nav_service: "Service",
    nav_contact: "Contact",
    hero_tagline: "",
    service_title: "Selected Services",
    items: "items",

    vision_body:
      "From Creative Eyes to Intelligent Systems.\nMILZTECHは、“感性×テクノロジー”を軸にした次世代型クリエイティブ・テックカンパニーです。フォトグラファーとして磨いた観察力、構成力、表現力、それらをAI、データ、そしてデザインに融合させ、人や企業、そして世界をつなぐ新しい「体験のプラットフォーム」を創造します。",

    core_title: "極限まで磨く\nAccessibility & Lean Innovation",
    core_body:
      "アートとアルゴリズム、直感とロジック、世界とローカル。\nそのあいだに橋をかけ、すべての人がクリエイティブにアクセスできる社会をつくります。",

    svc_ai_title: "静かに効くAIの導入と運用設計",
    svc_ai:
      "生成AI/LLMの設計・プロトタイプ・運用支援。ワークフロー自動化や知識検索、ガバナンス設計まで静かに効く導入を。",

    svc_pv_title: "建築・不動産・ブランドのための撮影",
    svc_pv:
      "建築・不動産・ブランドの撮影と編集。色調は抑えつつ、素材の質感と空気感を最大限に引き出すビジュアルを制作します。",

    svc_travel_title: "都市と体験をつなぐデザイン",
    svc_travel:
      "都市や施設の体験設計。地図や動線設計、音・光・情報のレイヤーを使い、移動時間や待ち時間も含めて心地よい体験をデザインします。",

    contact_title: "静かに、しかし確かに前進させるために。",
    contact_body:
      "プロダクトづくり、オペレーション改善、撮影、体験設計など、まだ言語化しきれていない段階の相談でも構いません。\n要件が固まっていないフェーズから伴走し、必要に応じて小さく検証を重ねながら、一緒に形にしていきます。",
    contact_cta: "メールで相談する",
  },

  en: {
    nav_about: "About",
    nav_service: "Service",
    nav_contact: "Contact",
    hero_tagline: "",
    service_title: "Selected Services",
    items: "items",

    vision_body:
      "From Creative Eyes to Intelligent Systems.\nMILZTECH is a next-generation creative tech company built on the harmony of sensitivity and technology. The observational power, composition, and expressive skills refined through photography are integrated with AI, data, and design to create a new “experience platform” that connects people, businesses, and the world.",

    core_title: "Extreme Refinement\nAccessibility & Lean Innovation",
    core_body:
      "We bridge art and algorithms, intuition and logic, the global and the local—building a society where everyone can access creativity.",

    svc_ai_title: "Quietly Effective AI Implementation",
    svc_ai:
      "Design, prototyping, and operational support for generative AI/LLM. From workflow automation and knowledge search to governance design, we help you introduce AI in a way that quietly but surely works.",

    svc_pv_title: "Photography for Architecture, Real Estate & Brands",
    svc_pv:
      "Photography and retouching for architecture, real estate, and brands. We keep the color grading calm and minimal while maximizing material texture and atmosphere.",

    svc_travel_title: "Designing Urban & Spatial Experiences",
    svc_travel:
      "Experience design for cities and venues. Using maps, wayfinding, sound, light, and information layers, we design journeys where even transit and waiting become part of a pleasant experience.",

    contact_title: "Move Forward Quietly, Yet Decisively.",
    contact_body:
      "Whether it is product creation, operations improvement, photography, or experience design, you are welcome to come to us even if things are not fully defined yet.\nWe can start from the early, fuzzy phase and gradually give shape to ideas through small, low-risk experiments.",
    contact_cta: "Contact via Email",
  },
} as const;
