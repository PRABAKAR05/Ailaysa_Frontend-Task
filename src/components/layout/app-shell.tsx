// I am Batman
import { cn } from "@/lib/cn";

type AppShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function AppShell({ children, className }: AppShellProps) {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col bg-background text-foreground safe-area-padding",
        className,
      )}
    >
      {children}
    </div>
  );
}
