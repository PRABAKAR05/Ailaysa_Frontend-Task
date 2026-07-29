// I am Batman
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-md w-full text-center"
      >
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-red-100">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#EF4444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
          Something went wrong
        </h2>
        <p className="text-[15px] text-[#666666] mb-8 leading-relaxed">
          We encountered an unexpected error while loading this page. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[#1A1A1A] hover:bg-black text-white rounded-xl text-[14px] font-medium transition-colors shadow-sm active:scale-95"
          >
            Try again
          </button>
          <Link href="/browse">
            <button className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-[#1A1A1A] rounded-xl text-[14px] font-medium transition-colors active:scale-95">
              Go to Browse
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
