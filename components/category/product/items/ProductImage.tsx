"use client";

import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/sanity.types";

const ProductImage = ({ product }: { product: Product }) => {
  return (
    <div className="relative group overflow-hidden bg-shop_light_bg">
      {product?.images && (
        <Link href={`/product/${product?.slug?.current}`}>
          <Image
            src={urlFor(product?.images[0]).url()}
            alt={product?.name || "product image"}
            loading="lazy"
            width={500}
            height={500}
            className={`w-full h-64 object-contain transition-transform duration-500
              ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}
            `}
          />
        </Link>
      )}
      {product?.status === "sale" ? (
        <p className="absolute top-2 left-2 text-xs border px-2 rounded-full border-shop_darkColor/50 group-hover:border-shop_light_green hover:text-shop_dark_green hoverEffect">
          Sale!
        </p>
      ) : (
        <Link
          href={"/deal"}
          className="absolute top-2 left-2 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hoverEffect"
        >
          <Flame
            size={18}
            fill="#fb6c08"
            className="text-shop_orange/50 group-hover:text-shop_orange"
          />
        </Link>
      )}
    </div>
  );
};

export default ProductImage;
