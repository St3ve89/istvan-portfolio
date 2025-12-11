import {
  AnimatedSection as Section,
  SectionHeader,
} from "@/components/section";
import { steps } from "@/data/site";

export function ProcessSection() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="Process"
        title={
          <>
            How a project{" "}
            <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent">
              works with me.
            </span>
          </>
        }
        description="Simple, clear steps. No big agency mystery, just a clear plan from first message to launch."
      />

      <ol className="grid gap-5 md:grid-cols-3" aria-label="Project steps">
        {steps.map((step) => (
          <li
            key={step.title}
            className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-card/80 p-5 shadow-soft-card"
          >
            {/* vertical accent line on the left */}
            <span className="pointer-events-none absolute inset-y-5 left-3 hidden w-px bg-gradient-to-b from-accent-purple via-accent-pink to-accent-cyan md:block" />

            <div className="relative pl-0 md:pl-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                {step.label}
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-50 sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {step.text}
              </p>
            </div>

            <div className="mt-4 flex flex-1 items-end justify-between text-[11px] text-slate-400">
              <span className="rounded-full bg-white/5 px-3 py-1">
                1–2 short check-ins
              </span>
              <span className="hidden md:inline">
                You always see progress early.
              </span>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-4 text-xs text-slate-400 sm:text-sm">
        We can move faster or slower depending on your content and availability.
        The main goal is to keep feedback loops short and clear.
      </p>
    </Section>
  );
}
