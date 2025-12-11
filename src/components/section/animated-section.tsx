"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

type AnimatedSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function AnimatedSection({
  id,
  children,
  className,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -15% 0px",
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={clsx("space-y-6", className)}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
