import { TrustStrip } from "@/components/TrustStrip";

const researchAreas = [
  "Biomarker profile",
  "Evidence confidence",
  "Trial readiness",
  "Physician brief",
];

const worksheetPanels = [
  { label: "Evidence confidence", value: "Organize sources", detail: "Research signals collected into clinician-safe summaries." },
  { label: "Trial readiness", value: "Checklist view", detail: "Shows what is missing before trial exploration — not eligibility." },
  { label: "Research gaps", value: "Open questions", detail: "Questions to bring to a licensed clinician." },
];

const steps = [
  "Select a condition area",
  "Add biomarkers and care goals",
  "Generate a research landscape",
  "Export a physician discussion brief",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <TrustStrip />
      </div>

      <section className="relative px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,.16),transparent_30%),linear-gradient(180deg,#05070d,#080b14_45%,#05070d)]" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
          <div className="text-sm font-semibold tracking-[0.3em] text-cyan-200">N1 THERAPEUTICS</div>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#demo" className="hover:text-white">Worksheet</a>
            <a href="#platform" className="hover:text-white">How it works</a>
            <a href="#boundary" className="hover:text-white">Boundary</a>
          </div>
          <a href="#demo" className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(103,232,249,.35)]">
            Build research brief
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              An educational worksheet, not medical advice.
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Turn complex therapy research into a clearer clinician conversation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              N1 Therapeutics helps a person organize biomarkers, symptoms, care goals, evidence notes, and trial-readiness questions into a worksheet for licensed clinicians. It does not recommend treatment, dosing, or a protocol.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#demo" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950">
                Try the research worksheet
              </a>
              <a href="#platform" className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white">
                View how it works
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/80 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Research profile</p>
                  <h2 className="text-2xl font-semibold">Patient discussion brief</h2>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">Educational</div>
              </div>

              <div className="grid gap-3">
                {researchAreas.map((area, index) => (
                  <div key={area} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-400">Module {index + 1}</p>
                        <p className="font-medium text-white">{area}</p>
                      </div>
                      <div className="h-2 w-28 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-2/3 rounded-full bg-cyan-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-violet-300/20 bg-violet-300/10 p-4">
                <p className="text-sm font-medium text-violet-100">Generated output</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Evidence map, trial-readiness checklist, clinician questions, and research gaps prepared for a care-team conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Interactive MVP</p>
            <h2 className="mt-3 text-4xl font-semibold">Therapy research worksheet</h2>
            <p className="mt-4 text-slate-300">
              This MVP shows the core workflow: collect structured context, organize research signals, and generate a physician discussion brief. No treatment or dosing is selected.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {worksheetPanels.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm text-slate-400">{metric.label}</p>
                <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{metric.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold">Research intake</h3>
              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl bg-black/30 p-4">
                  <p className="text-sm text-slate-400">Condition area</p>
                  <p className="mt-1 font-medium">Autoimmune / inflammatory research</p>
                </div>
                <div className="rounded-2xl bg-black/30 p-4">
                  <p className="text-sm text-slate-400">Biomarkers</p>
                  <p className="mt-1 font-medium">CRP, ANA, HLA markers, inflammatory panels</p>
                </div>
                <div className="rounded-2xl bg-black/30 p-4">
                  <p className="text-sm text-slate-400">Care goal</p>
                  <p className="mt-1 font-medium">Prepare smarter questions for a specialist visit</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-6">
              <h3 className="text-xl font-semibold">Generated clinician brief</h3>
              <div className="mt-5 space-y-4">
                {[
                  "What research areas match this biomarker profile?",
                  "What evidence gaps should be clarified before discussing options?",
                  "What trial-readiness items are missing?",
                  "Which symptoms and labs should be organized before the appointment?",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950 font-semibold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold">{step}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Built for research organization, care-team discussion, and safer clinical navigation.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="boundary" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Boundary</p>
          <h2 className="mt-3 text-4xl font-semibold">Start with research clarity.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            N1 is a worksheet for organizing questions. Pricing, if offered later, will be listed only when a real plan exists. No customer counts or outcome rates appear here.
          </p>
          <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
            N1 Therapeutics is not a medical provider and does not diagnose, treat, prescribe, or replace licensed medical advice. Outputs are educational and designed to support conversations with qualified clinicians.
          </div>
        </div>
      </section>
    </main>
  );
}
