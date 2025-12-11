// src/components/sections/ServicesSection.tsx
import {
  AnimatedSection as Section,
  SectionHeader,
} from "@/components/section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title={
          <>
            Ways we can{" "}
            <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent">
              work together.
            </span>
          </>
        }
        description="Pick what fits your current stage. We can always start small and expand later."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            className="relative flex h-full flex-col bg-card/80 border-white/10 shadow-soft-card transition duration-200 hover:-translate-y-1 hover:border-accent-cyan/50"
          >
            {/* Top-center pill like pricing tables */}
            {service.tag && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan px-4 py-1 text-[11px] font-medium tracking-wide text-white shadow-soft-card">
                {service.tag}
              </span>
            )}

            <CardHeader className="pb-4 pt-6">
              <CardTitle className="text-base font-semibold text-slate-50 sm:text-lg">
                {service.title}
              </CardTitle>

              {service.description && (
                <CardDescription className="mt-3 text-sm leading-relaxed text-slate-300">
                  {service.description}
                </CardDescription>
              )}
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="mt-1 space-y-2 text-sm leading-relaxed text-slate-200">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-cyan" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto flex items-center justify-between pt-4 text-xs text-slate-400 sm:text-[13px]">
              <span className="font-medium text-slate-100">
                {service.price}
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] sm:text-xs">
                Project-based pricing
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>

      <p className="mt-3 text-xs text-slate-400 sm:text-sm">
        Not sure which one fits? Tell me where you are now and I&apos;ll suggest
        the best starting point on our intro call.
      </p>
    </Section>
  );
}
