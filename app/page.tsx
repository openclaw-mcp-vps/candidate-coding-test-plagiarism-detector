export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For HR &amp; Technical Recruiters
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Plagiarized<br />
          <span className="text-[#58a6ff]">Coding Test Submissions</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload candidate code files and instantly compare them against GitHub repositories,
          Stack Overflow answers, and thousands of common solutions using fuzzy matching and AST parsing.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Detecting Plagiarism — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* How it works */}
      <section className="mb-24 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Upload Code", desc: "Drop candidate submission files in any language." },
          { step: "2", title: "Instant Analysis", desc: "We scan GitHub, Stack Overflow, and known solutions." },
          { step: "3", title: "Get a Score", desc: "Receive a plagiarism score with matched source links." }
        ].map((item) => (
          <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{item.step}</div>
            <div className="text-white font-semibold mb-1">{item.title}</div>
            <div className="text-[#8b949e] text-sm">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited submission uploads",
              "GitHub + Stack Overflow scanning",
              "AST-based similarity detection",
              "Plagiarism score with source links",
              "Submission history dashboard",
              "CSV export of results"
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {feat}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What languages are supported?",
              a: "We support JavaScript, TypeScript, Python, Java, C++, Go, and more. Our AST parser handles most mainstream languages used in coding tests."
            },
            {
              q: "How accurate is the plagiarism detection?",
              a: "Our fuzzy matching combined with AST-level analysis catches copy-paste, variable renaming, and structural rewrites — not just exact matches."
            },
            {
              q: "Is candidate data kept private?",
              a: "Yes. Uploaded submissions are processed securely and never shared. You can delete any submission from your dashboard at any time."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} PlagiarismCheck. All rights reserved.
      </footer>
    </main>
  );
}
