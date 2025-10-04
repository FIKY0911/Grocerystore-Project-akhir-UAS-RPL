import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { productType } from './productType'
import { orderType } from './orderType'
import { blogType } from './blogType'
import { blogCategoryType } from './blogCategoryType'
import { authorType } from './authorType'
import { addressType } from './addressType'
import { blockContentType } from './blogContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,
    blockContentType,
    productType,
    orderType,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
  ],
}
