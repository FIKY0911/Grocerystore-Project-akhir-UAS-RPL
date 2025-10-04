import { Product } from "@/sanity.types";

const ProductStockInfo = ({ product }: { product: Product }) => {
  return (
    <div className="flex items-center gap-2.5">
      <p className="font-medium">stok tersisa</p>
      <p
        className={`${
          product?.stock === 0
            ? "text-red-600"
            : "text-shop_dark_green/80 font-semibold"
        }`}
      >
        {(product?.stock as number) > 0 ? product?.stock : "unavailable"}
      </p>
    </div>
  );
};

export default ProductStockInfo;
