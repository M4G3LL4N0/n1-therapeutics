import Link from "next/link";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";

const MODULES = [
  "Evidence confidence maps",
  "Biomarker profile cards",
  "Trial-readiness checklists",
  "Physician discussion briefs",
  "Research gap panels",
  "Care discussion plans",
] as const;

const worksheetAreas = [
  "Biomarker profile",
  "Evidence confidence",
  "Trial readiness",
  "Physician brief",
];

const steps = [
  "Select a condition area to organize questions around",
  "Add biomarkers and care goals you already have",
  "Generate a research landscape worksheet",
  "Export a physician discussion brief",
];

export default function Home() {
  return (
    <div>
      <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
            Educational worksheet
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Organize therapy research into a{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              clearer clinician conversation
            </span>
            .
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-slate-400 sm:text-lg">
            N1 Therapeutics is an educational worksheet. It helps a person structure condition
            context, biomarkers, symptoms, care goals, and trial-readiness questions for a licensed
            clinician. It is not medical advice and does not recommend treatment, dosing, or a protocol.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-400"
            >
              Open the research worksheet
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex rounded-full border border-slate-700 px-6 py-2.5 text-sm font-medium text-slate-200 hover:border-cyan-500/40 hover:bg-slate-900"
            >
              View research profile
            </Link>
            <Link
              href="/about"
              className="inline-flex rounded-full border border-slate-700 px-6 py-2.5 text-sm font-medium text-slate-200 hover:border-cyan-500/40 hover:bg-slate-900"
            >
              Safety philosophy
            </Link>
          </div>
          <div className="motion-card motion-hover-lift mt-10 rounded-2xl border border-indigo-500/20 bg-indigo-950/40 p-5 text-sm text-indigo-100/90">
            <p className="font-medium text-white">Research navigation, not medical advice</p>
            <p className="mt-2 text-slate-300">
              Use N1 to prepare evidence-aware questions for licensed clinicians and trial
              coordinators. Every view includes safety disclaimers and avoids cure or treatment
              selection language.
            </p>
          </div>
        </div>
        <div className="motion-card motion-hover-lift rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl ring-1 ring-cyan-500/10">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-400/90">
            Worksheet outputs
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {MODULES.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-cyan-500">◇</span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-medium text-cyan-400 hover:underline"
          >
            Safety and evidence philosophy →
          </Link>
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Sample worksheet</p>
            <h2 className="text-2xl font-semibold text-white">Patient discussion brief</h2>
          </div>
          <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">Educational</div>
        </div>
        <div className="grid gap-3">
          {worksheetAreas.map((area, index) => (
            <div key={area} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-slate-400">Module {index + 1}</p>
              <p className="font-medium text-white">{area}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-violet-300/20 bg-violet-300/10 p-4">
          <p className="text-sm font-medium text-violet-100">Generated output</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Evidence map, trial-readiness checklist, clinician questions, and research gaps prepared
            for a care-team conversation. No treatment, dosing, or protocol is selected.
          </p>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
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
          <h3 className="text-xl font-semibold">Clinician questions</h3>
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
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950 font-semibold">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold">{step}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Built for research organization and care-team discussion — not diagnosis or treatment.
            </p>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-[2rem] border border-amber-300/20 bg-amber-300/10 p-6 text-sm leading-6 text-amber-100">
        N1 Therapeutics is not a medical provider and does not diagnose, treat, prescribe, or replace
        licensed medical advice. Outputs are educational worksheets designed to support conversations
        with qualified clinicians.
      </section>

      <ProductHonestyNote status="demo" />
    </div>
  );
}
