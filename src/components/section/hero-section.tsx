// src/components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { AnimatedSection as Section } from "@/components/section";
import { Button } from "@/components/ui/button";

const audiences = [
  "Coaches & trainers",
  "Beauty & lifestyle businesses",
  "Streamers & creators",
];

export function HeroSection() {
  return (
    <Section className="grid items-center gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      {/* Left side – text */}
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
          Hey, I&apos;m Istvan 👋
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.4rem]">
          <span>Frontend &amp; UI for</span>{" "}
          <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent">
            creators and small brands.
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
          I design and build fast, modern websites that look great on every
          screen and actually help you get clients.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button variant="outline" asChild>
            <a href="#contact">Book a free call</a>
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-400">
          <span className="rounded-full bg-white/5 px-3 py-1">
            +8 years experience
          </span>
          <span className="rounded-full bg-white/5 px-3 py-1">
            Web &amp; mobile friendly
          </span>
          <span className="rounded-full bg-white/5 px-3 py-1">
            Based in the UK · remote
          </span>
        </div>

        {/* Audiences card */}
        <div className="mt-8 rounded-2xl border border-white/5 bg-black/20 px-3 py-3 text-xs">
          <p className="flex items-center gap-2 text-slate-300">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-accent-purple via-accent-pink to-accent-cyan text-[10px]">
              ✨
            </span>
            <span>I mainly work with:</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full bg-white/5 px-3 py-1 text-slate-200"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right side – animated preview card */}
      <motion.div
        className="relative mx-auto w-full max-w-sm"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
        whileTap={{ scale: 0.99, y: 0 }}
      >
        {/* animated glow */}
        <motion.div
          className="absolute -inset-10 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent-purple/40 via-accent-pink/40 to-accent-cyan/40 blur-3xl"
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="rounded-3xl border border-white/10 bg-card/80 p-4 shadow-soft-card backdrop-blur"
          layout
        >
          {/* Window header */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <span className="flex h-2.5 w-7 items-center justify-between">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              </span>
              <span>istvan-studio.dev</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                  animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
              <span>Preview</span>
            </span>
          </div>

          {/* Code + UI preview */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="space-y-2 rounded-2xl bg-black/40 p-3 text-[10px] text-slate-300">
              <div className="mb-1 text-[11px] font-semibold text-slate-100">
                Code
              </div>
              <div className="space-y-1 font-mono">
                <div>
                  <span className="text-slate-500">const</span>{" "}
                  <span className="text-emerald-300">project</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-pink-300">
                    &quot;Landing Page&quot;
                  </span>
                  ;
                </div>
                <div>
                  <span className="text-slate-500">return</span>{" "}
                  <span className="text-purple-300">&lt;Hero /&gt;</span>;
                </div>
              </div>
            </div>

            <div className="space-y-2 rounded-2xl bg-gradient-to-br from-accent-purple/40 via-accent-pink/40 to-accent-cyan/40 p-3 text-[10px] text-slate-100">
              <div className="mb-1 text-[11px] font-semibold">UI preview</div>
              <div className="space-y-1">
                <div className="h-2 rounded-full bg-white/60" />
                <div className="h-1.5 w-16 rounded-full bg-white/30" />
                <div className="mt-2 h-12 rounded-xl bg-black/30" />
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-black/40 px-3 py-2 text-[11px] text-slate-300">
            <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] text-emerald-300">
              Available for projects in 2026
            </span>
            <span>Avg. timeline: 7–14 days</span>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
