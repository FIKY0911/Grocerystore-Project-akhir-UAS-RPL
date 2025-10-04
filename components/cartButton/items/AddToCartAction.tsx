"use client";
import { Product } from "@/sanity.types";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import { Button } from "../../ui/button";

interface Props {
  product: Product;
  onAdd: () => void;
  disabled?: boolean;
  className?: string;
}

const AddToCartAction = ({ product, onAdd, disabled, className }: Props) => {
  return (
    <Button
      onClick={onAdd}
      disabled={disabled}
      className={cn(
        "w-full bg-shop_dark_green/80 text-lightBg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect",
        className
      )}
    >
      <ShoppingBag /> {disabled ? "Out of Stock" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartAction;
