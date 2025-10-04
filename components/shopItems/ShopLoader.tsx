"use client";
import { Loader2 } from "lucide-react";

const ShopLoader = () => (
  <div className="p-20 flex flex-col gap-2 items-center justify-center bg-white">
    <Loader2 className="w-10 h-10 text-shop_dark_green animate-spin" />
    <p className="font-semibold tracking-wide text-base">
      Product is loading . . .
    </p>
  </div>
);

export default ShopLoader;
