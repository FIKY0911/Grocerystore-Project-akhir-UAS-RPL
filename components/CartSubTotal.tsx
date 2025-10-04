"use client";

import PriceFormatter from "./subTotal/PriceFormatter";


interface Props {
  amount: number;
}

const CartSubTotal = ({ amount }: Props) => {
  return (
    <div className="flex items-center justify-between border-t pt-1">
      <span className="text-xs font-semibold">Subtotal</span>
      <PriceFormatter amount={amount} />
    </div>
  );
};

export default CartSubTotal;
