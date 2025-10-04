"use client";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import toast from "react-hot-toast";
import CartQuantity from "./cartButton/items/CartQuantity";
import AddToCartAction from "./cartButton/items/AddToCartAction";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const { addItem, getItemCount } = useStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  const handleAddToCart = () => {
    if ((product?.stock as number) > itemCount) {
      addItem(product);
      toast.success(`${product?.name?.substring(0, 12)}... added successfully!`);
    } else {
      toast.error("Can not add more than available stock");
    }
  };

  return (
    <div className="w-full h-12 flex items-center">
      {itemCount ? (
        <CartQuantity product={product} itemCount={itemCount} />
      ) : (
        <AddToCartAction
          product={product}
          onAdd={handleAddToCart}
          disabled={isOutOfStock}
          className={className}
        />
      )}
    </div>
  );
};

export default AddToCartButton;
