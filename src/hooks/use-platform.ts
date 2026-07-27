// I am Batman
"use client";

import { useEffect, useState } from "react";

import { type AppPlatform, getPlatform } from "@/lib/platform";

export function usePlatform(): AppPlatform {
  const [platform, setPlatform] = useState<AppPlatform>("web");

  useEffect(() => {
    setPlatform(getPlatform());
  }, []);

  return platform;
}
