// I am Batman
"use client";

import { useEffect } from "react";

export function ClientLogger() {
  useEffect(() => {
    console.log("JARVIS Activated");
  }, []);
  return null;
}
