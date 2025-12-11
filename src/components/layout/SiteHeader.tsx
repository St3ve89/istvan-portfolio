"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-bg-deep/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-accent-purple via-accent-pink to-accent-cyan shadow-soft-card" />
          <span className="text-sm font-semibold tracking-wide">
            Istvan Studio
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 sm:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}

          <Button variant="outline" size="sm" className="ml-2" asChild>
            <a href="#contact">Book a free call</a>
          </Button>
        </div>

        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20">
                <span className="sr-only">Open menu</span>
                <div className="space-y-1">
                  <span className="block h-0.5 w-4 bg-slate-100" />
                  <span className="block h-0.5 w-4 bg-slate-100" />
                </div>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-bg-deep/95 border-l border-white/10 px-5 py-4"
            >
              <SheetHeader className="mb-4">
                <SheetTitle className="flex items-center gap-2 text-sm">
                  <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-accent-purple via-accent-pink to-accent-cyan shadow-soft-card" />
                  <span>Istvan Studio</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4 text-sm text-slate-200">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-1 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}

                <Button className="mt-2" size="sm" asChild>
                  <a href="#contact">Book a free call</a>
                </Button>
              </div>

              <div className="mt-6 text-[11px] text-slate-500">
                {pathname === "/" ? "Portfolio home" : pathname}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
