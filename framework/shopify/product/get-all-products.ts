import { ProductConnection } from "../schema"
import { fetchApi, normalizeProduct, getAllProductsQuery } from "../utils"

import { Product } from "@/framework/common/types/product";

type ReturnType = {
  products: ProductConnection
}

export const getAllProducts = async (): Promise<Product[]> => {

  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery })


  return data.products.edges.map(({ node: product }) => {
    // data normalization
    return normalizeProduct(product)
  }) ?? []
}


