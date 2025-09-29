"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { PackageX } from "lucide-react";

const NoProductAvailable = ({
  selectedTab,
  className,
}: {
  selectedTab?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12 px-6 min-h-80 space-y-8 text-center bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-sm w-full mt-10",
        className
      )}
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md"
      >
        <PackageX className="w-10 h-10 text-red-500" />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent"
      >
        No Products Found
      </motion.h2>

      {/* Desc */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 max-w-md leading-relaxed"
      >
        We couldn&apos;t find any items under{" "}
        <span className="font-semibold text-green-600">{selectedTab}</span>.
        Don&apos;t worry—we&apos;re updating our inventory soon!
      </motion.p>

      {/* Skeleton Loading Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-4xl mt-6"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border bg-white p-4 shadow-sm space-y-3 animate-pulse"
          >
            <div className="h-32 w-full rounded-lg bg-gray-200" />
            <div className="h-4 w-3/4 rounded bg-gray-200" />
            <div className="h-4 w-1/2 rounded bg-gray-200" />
          </div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-sm text-gray-500"
      >
        Try browsing other categories while we refresh our stock ✨
      </motion.p>
    </div>
  );
};

export default NoProductAvailable;
