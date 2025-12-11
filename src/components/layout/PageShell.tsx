import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
// import { SiteFooter } from "./SiteFooter";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 pb-20 pt-10 sm:px-6 sm:pt-16 lg:gap-20">
        {children}
      </main>
      {/* <SiteFooter /> */}
    </div>
  );
}
