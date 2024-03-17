/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type CategoriesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesGetListQuery = { categories: { data: Array<{ id: string, name: string, description: string, slug: string }>, meta: { total: number, count: number } } };

export type CategoriesGetNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesGetNamesQuery = { categories: { data: Array<{ name: string, slug: string }> } };

export type CategoriesListItemFragment = { id: string, name: string, description: string, slug: string };

export type CategoryGetItemQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoryGetItemQuery = { category?: { id: string, name: string, description: string, slug: string, products: Array<{ id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }>, categories: Array<{ name: string }> }> } | null };

export type CollectionGetItemQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionGetItemQuery = { collection?: { description: string, id: string, name: string, slug: string, products: Array<{ id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }>, categories: Array<{ name: string }> }> } | null };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: { data: Array<{ description: string, id: string, name: string, slug: string }> } };

export type CollectionGetNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionGetNamesQuery = { collections: { data: Array<{ name: string, slug: string }> } };

export type CollectionListItemFragment = { description: string, id: string, name: string, slug: string };

export type ProductGetItemByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetItemByIdQuery = { product?: { id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }>, categories: Array<{ name: string }> } | null };

export type ProductsListCountFragment = { meta: { total: number, count: number } };

export type ProductsListItemFragment = { id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }>, categories: Array<{ name: string }> };

export type ProductsGetListQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetListQuery = { products: { data: Array<{ id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }>, categories: Array<{ name: string }> }>, meta: { total: number, count: number } } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CategoriesListItemFragmentDoc = new TypedDocumentString(`
    fragment CategoriesListItem on Category {
  id
  name
  description
  slug
}
    `, {"fragmentName":"CategoriesListItem"}) as unknown as TypedDocumentString<CategoriesListItemFragment, unknown>;
export const CollectionListItemFragmentDoc = new TypedDocumentString(`
    fragment CollectionListItem on Collection {
  description
  id
  name
  slug
}
    `, {"fragmentName":"CollectionListItem"}) as unknown as TypedDocumentString<CollectionListItemFragment, unknown>;
export const ProductsListCountFragmentDoc = new TypedDocumentString(`
    fragment ProductsListCount on ProductList {
  meta {
    total
    count
  }
}
    `, {"fragmentName":"ProductsListCount"}) as unknown as TypedDocumentString<ProductsListCountFragment, unknown>;
export const ProductsListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductsListItem on Product {
  id
  name
  price
  description
  rating
  images {
    url
  }
  categories {
    name
  }
}
    `, {"fragmentName":"ProductsListItem"}) as unknown as TypedDocumentString<ProductsListItemFragment, unknown>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList {
  categories {
    data {
      ...CategoriesListItem
    }
    meta {
      total
      count
    }
  }
}
    fragment CategoriesListItem on Category {
  id
  name
  description
  slug
}`) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CategoriesGetNamesDocument = new TypedDocumentString(`
    query CategoriesGetNames {
  categories {
    data {
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetNamesQuery, CategoriesGetNamesQueryVariables>;
export const CategoryGetItemDocument = new TypedDocumentString(`
    query CategoryGetItem($slug: String!) {
  category(slug: $slug) {
    ...CategoriesListItem
    products {
      ...ProductsListItem
    }
  }
}
    fragment CategoriesListItem on Category {
  id
  name
  description
  slug
}
fragment ProductsListItem on Product {
  id
  name
  price
  description
  rating
  images {
    url
  }
  categories {
    name
  }
}`) as unknown as TypedDocumentString<CategoryGetItemQuery, CategoryGetItemQueryVariables>;
export const CollectionGetItemDocument = new TypedDocumentString(`
    query CollectionGetItem($slug: String!) {
  collection(slug: $slug) {
    ...CollectionListItem
    products {
      ...ProductsListItem
    }
  }
}
    fragment CollectionListItem on Collection {
  description
  id
  name
  slug
}
fragment ProductsListItem on Product {
  id
  name
  price
  description
  rating
  images {
    url
  }
  categories {
    name
  }
}`) as unknown as TypedDocumentString<CollectionGetItemQuery, CollectionGetItemQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collections(take: 4) {
    data {
      ...CollectionListItem
    }
  }
}
    fragment CollectionListItem on Collection {
  description
  id
  name
  slug
}`) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const CollectionGetNamesDocument = new TypedDocumentString(`
    query CollectionGetNames {
  collections {
    data {
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionGetNamesQuery, CollectionGetNamesQueryVariables>;
export const ProductGetItemByIdDocument = new TypedDocumentString(`
    query ProductGetItemById($id: ID!) {
  product(id: $id) {
    ...ProductsListItem
  }
}
    fragment ProductsListItem on Product {
  id
  name
  price
  description
  rating
  images {
    url
  }
  categories {
    name
  }
}`) as unknown as TypedDocumentString<ProductGetItemByIdQuery, ProductGetItemByIdQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int!, $skip: Int!, $search: String) {
  products(take: $take, skip: $skip, search: $search) {
    data {
      ...ProductsListItem
    }
    ...ProductsListCount
  }
}
    fragment ProductsListCount on ProductList {
  meta {
    total
    count
  }
}
fragment ProductsListItem on Product {
  id
  name
  price
  description
  rating
  images {
    url
  }
  categories {
    name
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;