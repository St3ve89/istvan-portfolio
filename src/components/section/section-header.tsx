// src/components/section/section-header.tsx
import type { ReactNode } from "react";
import clsx from "clsx";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClasses =
    align === "center" ? "mx-auto max-w-2xl text-center" : "";

  return (
    <div className={clsx("space-y-2", alignClasses)}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
      {description && <p className="text-sm text-slate-300">{description}</p>}
    </div>
  );
}
