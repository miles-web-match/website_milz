"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function QuietIntelligenceSite() {
  const [lang, setLang] = useState<"ja" | "en">("ja");
  const t = (k: keyof typeof dict["ja"]) => dict[lang][k];

  const glowBg = useMemo(
    () =>
      [
        "radial-gradient(40rem 40rem at 50% 30%, rgba(108,207,246,0.12), transparent 60%)",
        "radial-gradient(28rem 28rem at 20% 80%, rgba(184,163,229,0.12), transparent 60%)",
      ].join(", "),
    []
  );

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#EAEAEA] selection:bg-white/10 selection:text-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#top" className="text-xs tracking-[0.3em] text-white/70 hover:text-white">Milztech</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-white">{t("nav_about")}</a>
            <a href="#service" className="hover:text-white">{t("nav_service")}</a>
            <a href="#contact" className="hover:text-white">{t("nav_contact")}</a>
          </nav>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </header>

      <section id="top" className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
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
            AI · EXPERIENCE · SKILL
          </div>
          <h1 className="text-3xl md:text-6xl font-light tracking-wider leading-tight">
            CREATIVITY & TECHNOLOGY
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-white/60">{t("hero_tagline")}</p>
        </motion.div>

        <div
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(400px_400px_at_var(--x)_var(--y),black,transparent)]"
          id="cursorMask"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const root = document.getElementById('cursorMask');
            window.addEventListener('pointermove', (e) => {
              root?.style.setProperty('--x', e.clientX + 'px');
              root?.style.setProperty('--y', e.clientY + 'px');
            });
          `,
          }}
        />
      </section>

      <section id="about" className="relative isolate py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="aspect-[4/3] rounded-2xl bg-[#111] ring-1 ring-white/10 overflow-hidden"
          >
            <GenerativeBackdrop />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="self-center"
          >
            <h2 className="text-xl md:text-3xl font-light tracking-wide">{t("about_title")}</h2>
            <p className="mt-4 text-white/70 leading-8">{t("about_body")}</p>
          </motion.div>
        </div>
      </section>

      <section id="service" className="py-14 md:py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 md:mb-10 flex items-end justify-between">
            <h3 className="text-lg md:text-2xl font-light tracking-wide">{t("service_title")}</h3>
            <span className="text-xs text-white/50">3 {t("items")}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((title, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#111]"
              >
                <a href={serviceHref(title)} className="block focus:outline-none focus:ring-2 focus:ring-white/30">
                  <div className="aspect-[4/3] overflow-hidden">
                    <PlaceholderVisual index={i} />
                  </div>
                  <div className="p-4">
                    <div className="text-sm tracking-wide mb-1">{title}</div>
                    <p className="text-xs text-white/60 leading-6">
                      {title === "AI Solution" ? t("svc_ai") : title === "Photo & Video" ? t("svc_pv") : t("svc_travel")}
                    </p>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h3 className="text-lg md:text-2xl font-light tracking-wide">{t("contact_title")}</h3>
          <p className="mt-4 text-white/70 leading-8">{t("contact_body")}</p>
          <div className="mt-8">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
            >
              {t("contact_cta")}
            </a>
          </div>
        </div>
      </section>

      <footer className="py-14 border-t border-white/10 text-center text-white/50 text-xs">
        ©2025 Milztech — Creativity & Technology
      </footer>

      {process.env.NODE_ENV !== "production" && <DevTests />}
    </main>
  );
}

function serviceHref(title: (typeof serviceItems)[number]) {
  switch (title) {
    case "AI Solution":
      return "/service/ai";
    case "Photo & Video":
      return "/service/photo-video";
    default:
      return "/service/travel";
  }
}

function LangToggle({ lang, setLang }: { lang: "ja" | "en"; setLang: (v: "ja" | "en") => void }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <button
        onClick={() => setLang("ja")}
        className={`px-2 py-1 rounded ${lang === "ja" ? "bg-white/10 text-white" : "text-white/60 hover:text-white"}`}
        aria-pressed={lang === "ja"}
      >
        JA
      </button>
      <span className="text-white/30">/</span>
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 rounded ${lang === "en" ? "bg-white/10 text-white" : "text-white/60 hover:text-white"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

const serviceItems = ["AI Solution", "Photo & Video", "Travel Experience"] as const;

const dict = {
  ja: {
    nav_about: "About",
    nav_service: "Service",
    nav_contact: "Contact",
    hero_tagline: "",
    about_title: "Milztech",
    about_body:
      "私たちは、テクノロジーとクリエイティビティの交差点で体験の美学を設計します。余白、タイポグラフィ、そして静かに息づくモーション。騒がしくない未来を、丁寧に。",
    service_title: "Selected Services",
    items: "items",
    svc_ai:
      "生成AI/LLMの設計・プロトタイプ・運用支援。ワークフロー自動化や知識検索、ガバナンス設計まで静かに効く導入を。",
    svc_pv:
      "建築・不動産・ブランド向けの撮影/編集。色調は抑制し、素材本来の質感を最大化。動画は静かなモーションで。",
    svc_travel:
      "都市/施設の体験設計と上質なツアー制作。地図・音・光を用いた穏やかなインタラクションを提供。",
    contact_title: "お問い合わせ",
    contact_body:
      "まずは簡単にプロジェクトの内容や目標、スケジュール感をお知らせください。静かな体験を一緒に設計します。",
    contact_cta: "メールで相談する",
  },
  en: {
    nav_about: "About",
    nav_service: "Service",
    nav_contact: "Contact",
    hero_tagline: "",
    about_title: "Milztech",
    about_body:
      "We design the aesthetic of experience at the intersection of technology and creativity: whitespace, typography, and calm motion—crafting a future without noise.",
    service_title: "Selected Services",
    items: "items",
    svc_ai:
      "Designing and operating LLM / generative AI systems: prototyping, workflow automation, retrieval, and governance.",
    svc_pv:
      "Photography & film for architecture, real estate, and brands—restrained grading, honest texture, and calm motion.",
    svc_travel:
      "Experience design and curated travel for cities and venues—maps, sound, and light for gentle interactions.",
    contact_title: "Contact",
    contact_body:
      "Tell us briefly about your project, objectives, and timing. We'll craft a calm, intelligent experience together.",
    contact_cta: "Email us",
  },
};

function PlaceholderVisual({ index }: { index: number }) {
  const hues = [190, 265, 210];
  const h = hues[index % hues.length];
  return (
    <div
      className="w-full h-full scale-105 transition-transform duration-500 group-hover:scale-110"
      style={{
        background:
          `radial-gradient(24rem 16rem at 30% 30%, hsla(${h}, 90%, 62%, .12), transparent 60%),` +
          `radial-gradient(18rem 14rem at 70% 70%, hsla(${(h + 40) % 360}, 80%, 62%, .10), transparent 60%),` +
          `linear-gradient(180deg, #0f0f0f, #0c0c0c)`,
      }}
    />
  );
}

function GenerativeBackdrop() {
  return (
    <canvas
      id="g"
      className="w-full h-full block"
      ref={(c) => {
        if (!c) return;
        const ctx = c.getContext("2d");
        const dpr = Math.max(1, (window as any).devicePixelRatio || 1);
        const resize = () => {
          c.width = c.clientWidth * dpr;
          c.height = c.clientHeight * dpr;
        };
        resize();
        let t = 0;
        let raf = 0;
        const loop = () => {
          if (!ctx) return;
          t += 0.006;
          ctx.clearRect(0, 0, c.width, c.height);
          for (let i = 0; i < 1800; i++) {
            const a = i * 0.007 + t;
            const r = 90 + 60 * Math.sin(i * 0.003 + t);
            const x = c.width / 2 + Math.cos(a) * r * dpr;
            const y = c.height / 2 + Math.sin(a * 1.2) * r * dpr;
            ctx.fillStyle = `rgba(108,207,246,${0.015})`;
            ctx.fillRect(x, y, 1, 1);
          }
          raf = requestAnimationFrame(loop);
        };
        const ro = new (window as any).ResizeObserver(resize);
        ro.observe(c);
        loop();
        return () => {
          cancelAnimationFrame(raf);
          ro.disconnect();
        };
      }}
    />
  );
}

function DevTests() {
  useEffect(() => {
    console.group("[DevTests] QuietIntelligenceSite");
    try {
      const required = [
        "nav_about","nav_service","nav_contact","hero_tagline","about_title","about_body","service_title","items","svc_ai","svc_pv","svc_travel","contact_title","contact_body","contact_cta"
      ];
      Object.keys(dict).forEach((lng) => {
        required.forEach((k) => console.assert(k in (dict as any)[lng], `Missing key "${k}" in lang ${lng}`));
      });
      console.assert(serviceItems.length === 3, "Expected 3 service items");
      console.assert(serviceItems.includes("AI Solution"), 'Service "AI Solution" missing');
      const heroBadgeOk = document.body.textContent?.includes("AI · EXPERIENCE · SKILL");
      console.assert(heroBadgeOk, 'Expected hero badge "AI · EXPERIENCE · SKILL"');
      const heroTitleOk = document.body.textContent?.includes("CREATIVITY & TECHNOLOGY");
      console.assert(heroTitleOk, 'Expected hero title "CREATIVITY & TECHNOLOGY"');
      const brandOk = document.body.textContent?.includes("Milztech") && !document.body.textContent?.includes("Milztech.inc");
      console.assert(brandOk, 'Brand should be "Milztech" (no .inc)');
      const anchors = Array.from(document.querySelectorAll('a[href^="/service/"]'));
      const hrefs = anchors.map(a => a.getAttribute('href'));
      console.assert(hrefs.includes('/service/ai'), 'Missing /service/ai link');
      console.assert(hrefs.includes('/service/photo-video'), 'Missing /service/photo-video link');
      console.assert(hrefs.includes('/service/travel'), 'Missing /service/travel link');
      console.log("All dev tests passed ✔");
    } catch (e) {
      console.error(e);
    } finally {
      console.groupEnd();
    }
  }, []);
  return null;
}
