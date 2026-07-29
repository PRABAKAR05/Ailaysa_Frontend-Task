import Link from "next/link";
import { motion } from "framer-motion";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({
  title = "No results found",
  description = "We couldn't find what you were looking for. Try adjusting your search or browse other categories.",
  actionLabel = "Back to Browse",
  actionHref = "/browse",
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-20 px-6 text-center w-full"
    >
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
      <p className="text-[14px] text-[#717171] max-w-[400px] mb-8 leading-relaxed">
        {description}
      </p>
      {actionHref && actionLabel && (
        <Link href={actionHref}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 bg-[#1A1A1A] text-white rounded-xl text-[14px] font-medium transition-colors hover:bg-black shadow-sm"
          >
            {actionLabel}
          </motion.button>
        </Link>
      )}
    </motion.div>
  );
}
