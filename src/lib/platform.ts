export type AppPlatform = "web" | "ios" | "android";

export function getPlatform(): AppPlatform {
  if (typeof window === "undefined") {
    return "web";
  }

  const capacitor = (
    window as Window & { Capacitor?: { getPlatform?: () => string } }
  ).Capacitor;

  const nativePlatform = capacitor?.getPlatform?.();

  if (nativePlatform === "ios" || nativePlatform === "android") {
    return nativePlatform;
  }

  return "web";
}

export function isNativePlatform(): boolean {
  const platform = getPlatform();
  return platform === "ios" || platform === "android";
}
