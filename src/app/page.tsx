import { AppShell } from "@/components/layout";
import { APP_NAME } from "@/lib/constants";

export default function HomePage() {
  return (
    <AppShell>
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">{APP_NAME}</h1>
        <p className="max-w-md text-center text-sm text-[var(--muted)]">
          Next.js 14 + TypeScript + Tailwind. Structured for a future Capacitor
          mobile wrapper.
        </p>
      </main>
    </AppShell>
  );
}
