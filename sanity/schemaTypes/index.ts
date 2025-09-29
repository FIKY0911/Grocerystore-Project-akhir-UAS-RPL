import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { productType } from './productType'
import { orderType } from './orderType'
import { blogType } from './blogType'
import { blogCategoryType } from './blogCategoryType'
import { authorType } from './authorType'
import { addressType } from './addressType'
import { blockContentType } from './blogContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    blockContentType,
    productType,
    orderType,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
  ],
}
