"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageCrop, SanityImageHotspot } from "@/sanity.types";

interface Props {
  active: {
    asset?: { _ref: string };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  } | undefined;
  isStock?: number;
}

const MainImage = ({ active, isStock }: Props) => {
  if (!active) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active._key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-h-[550px] min-h-[450px] border border-darkColor/10 rounded-md group overflow-hidden"
      >
        <Image
          src={urlFor(active).url()}
          alt="productImage"
          width={700}
          height={700}
          priority
          className={`w-full h-96 max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md ${
            isStock === 0 ? "opacity-50" : ""
          }`}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default MainImage;
