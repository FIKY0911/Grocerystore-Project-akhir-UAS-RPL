import { type SchemaTypeDefinition } from "sanity";
import { category } from "./category";
import { productType } from "./productType";
import { orderType } from "./orderType";
import { brandType } from "./brandTypes";
import { blogType } from "./blogType";
import { authorType } from "./authorType";
import { addressType } from "./addressType";
import { blogCategoryType } from "./blogCategoryType";
import { blockContentType } from "./blockContentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,
    blockContentType,
    productType,
    orderType,
    brandType,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
  ],
};
