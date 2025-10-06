import { Product } from "@/sanity.types";
import Title from "./items/Title";
import PriceView from "./items/PriceView";
import ProductSideMenu from "./items/ProductSideMenu";
import AddToCartButton from "../../AddToCartButton";
import ProductImage from "./items/ProductImage";
import ProductStockInfo from "./items/ProductStockInfo";
import ProductRating from "./items/ProductRating";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border rounded-md border-shop_dark_green/20 group bg-white">
      {/* Jadikan container gambar relative */}
      <div className="relative">
        <ProductImage product={product} />
        {/* Favorite button masuk ke dalam gambar */}
        <ProductSideMenu product={product} />
      </div>

      {/* Konten bawah */}
      <div className="p-3 flex flex-col gap-2">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs font-medium text-lightText">
            {product.categories.map((cat) => cat).join(", ")}
          </p>
        )}
        <Title className="text-sm line-clamp-1">{product?.name}</Title>
        <ProductRating rating={4} reviews={5} />
        <ProductStockInfo product={product} />
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />
        <AddToCartButton product={product} className="w-36 rounded-full" />
      </div>
    </div>
  );
};

export default ProductCard;
