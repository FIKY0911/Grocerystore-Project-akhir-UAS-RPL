"use client";

import React, { useState } from "react";
import { SanityImageCrop, SanityImageHotspot } from "@/sanity.types";
import ThumbnailList from "./imageView/ThumbnailList";
import MainImage from "./imageView/MainImage";

interface Props {
  images?: Array<{
    asset?: { _ref: string };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  isStock?: number;
}

const ImageView = ({ images = [], isStock }: Props) => {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
      <MainImage active={active} isStock={isStock} />
      <ThumbnailList
        images={images}
        activeKey={active?._key}
        onSelect={setActive}
      />
    </div>
  );
};

export default ImageView;
