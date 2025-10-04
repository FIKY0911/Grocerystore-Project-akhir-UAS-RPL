"use client";
import { Product } from "@/sanity.types";
import QuantityButtons from "../../QuantityButtons";
import CartSubTotal from "../../CartSubTotal";

interface Props {
  product: Product;
  itemCount: number;
}

const CartQuantity = ({ product, itemCount }: Props) => {
  return (
    <div className="text-sm w-full">
      <div className="flex items-center justify-between">
        <span className="text-xs text-darkColor/80">Quantity</span>
        <QuantityButtons product={product} />
      </div>
      <CartSubTotal
        amount={product?.price ? product.price * itemCount : 0}
      />
    </div>
  );
};

export default CartQuantity;
