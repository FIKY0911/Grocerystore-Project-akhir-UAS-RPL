"use client";

import Title from "../category/product/items/Title";

interface Props {
  onReset: () => void;
  hasFilter: boolean;
}

const ShopHeader = ({ onReset, hasFilter }: Props) => {
  return (
    <div className="sticky top-0 z-10 mb-5">
      <div className="flex items-center justify-between">
        <Title className="text-lg uppercase tracking-wide">
          Get the products as your needs
        </Title>
        {hasFilter && (
          <button
            onClick={onReset}
            className="text-shop_dark_green underline text-sm mt-2 font-medium hover:text-darkRed hoverEffect"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default ShopHeader;
