"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageCrop, SanityImageHotspot } from "@/sanity.types";
import { Any } from "next-sanity";

interface Props {
  images: Array<{
    asset?: { _ref: string };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  activeKey: string | undefined;
  onSelect: (image: Any) => void;
}

const ThumbnailList = ({ images, activeKey, onSelect }: Props) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-20 md:h-24">
      {images?.map((image) => (
        <button
          key={image._key}
          onClick={() => onSelect(image)}
          aria-label={`Select Thumbnail ${image._key}`}
          title={`Select Thumbnail ${image._key}`}
          className={`border rounded-md overflow-hidden ${
            activeKey === image._key
              ? "border-darkColor opacity-100"
              : "opacity-80"
          }`}
        >
          <Image
            src={urlFor(image).url()}
            alt={`Thumbnail ${image._key}`}
            width={100}
            height={100}
            className="w-full h-auto object-contain"
          />
        </button>
      ))}
    </div>
  );
};

export default ThumbnailList;
