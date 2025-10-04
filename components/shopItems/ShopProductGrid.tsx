"use client";
import { Product } from "@/sanity.types";
import NoProductAvailable from "../NoProductAvailable";
import ProductCard from "../category/product/ProductCard";

interface Props {
  products: Product[];
}

const ShopProductGrid = ({ products }: Props) => {
  if (products.length === 0) {
    return <NoProductAvailable className="bg-white mt-0" />;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
      {products.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
  );
};

export default ShopProductGrid;
