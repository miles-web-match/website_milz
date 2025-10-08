export default function Page() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#EAEAEA]">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <a href="/" className="text-xs text-white/50 hover:text-white">← Milztech</a>
        <h1 className="mt-6 text-3xl md:text-5xl font-light tracking-wide">AI Solution</h1>
        <p className="mt-6 text-white/70 leading-8">
          LLM設計・RAG・自動化・ガバナンス。静かな導入で業務を滑らかにし、体験を高めます。
        </p>
        <ul className="mt-8 space-y-4 text-white/70">
          <li>・Discovery & Prototyping（要件定義〜小さく試す）</li>
          <li>・Retrieval / RAG（安全で遅延の少ない検索）</li>
          <li>・Workflow Automation（人の判断を残した自動化）</li>
          <li>・Evaluation / Guardrails / Observability</li>
        </ul>
      </section>
    </main>
  );
}
