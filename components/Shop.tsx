"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useSearchParams } from "next/navigation";
import ShopHeader from "./shopItems/ShopHeader";
import ShopFilters from "./shopItems/ShopFilters";
import ShopLoader from "./shopItems/ShopLoader";
import Container from "./footer/Container";
import { BRANDS_QUERYResult, Category, Product } from "@/sanity.types";
import ShopProductGrid from "./shopItems/ShopProductGrid";


interface Props {
  categories: Category[];
  brands: BRANDS_QUERYResult<Product>;
}

const Shop = ({ categories, brands }: Props) => {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const categoryParams = searchParams?.get("category");

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParams || null
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    brandParams || null
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let minPrice = 0;
      let maxPrice = 10000;
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        minPrice = min;
        maxPrice = max;
      }
      const query = `
        *[_type == 'product' 
          && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
          && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id))
          && price >= $minPrice && price <= $maxPrice
        ] 
        | order(name asc) {
          ...,"categories": categories[]->title
        }
      `;
      const data = await client.fetch(
        query,
        { selectedCategory, selectedBrand, minPrice, maxPrice },
        { next: { revalidate: 0 } }
      );
      setProducts(data);
    } catch (error) {
      console.log("Shop product fetching Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedBrand, selectedPrice]);

  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setSelectedPrice(null);
  };

  return (
    <div className="border-t">
      <Container className="mt-5">
        <ShopHeader
          hasFilter={
            selectedCategory !== null ||
            selectedBrand !== null ||
            selectedPrice !== null
          }
          onReset={handleReset}
        />
        <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop_dark_green/50">
          <ShopFilters
            categories={categories}
            brands={brands}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
          <div className="flex-1 pt-5">
            <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-hide">
              {loading ? (
                <ShopLoader />
              ) : (
                <ShopProductGrid products={products} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
