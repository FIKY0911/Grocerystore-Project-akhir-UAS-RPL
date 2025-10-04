"use client";
import { Category, BRANDS_QUERYResult } from "@/sanity.types";
import CategoryList from "../shop/CategoryList";
import PriceList from "../shop/PriceList";

interface Props {
  categories: Category[];
  brands: BRANDS_QUERYResult;
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
  selectedPrice: string | null;
  setSelectedPrice: (price: string | null) => void;
}

const ShopFilters = ({
  categories,
  brands,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  selectedPrice,
  setSelectedPrice,
}: Props) => {
  return (
    <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 md:border-r border-r-shop_btn_dark_green/50 scrollbar-hide">
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <BrandList
        brands={brands}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
      <PriceList
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
    </div>
  );
};

export default ShopFilters;
