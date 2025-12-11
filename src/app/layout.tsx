import "./globals.css";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Istvan Studio – Frontend & UI",
  description: "Frontend & UI for creators and small brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
