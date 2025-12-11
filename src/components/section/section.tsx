import type { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx("space-y-6", className)}>
      {children}
    </section>
  );
}
