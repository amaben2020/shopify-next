import { ProductConnection } from "../schema"
import { fetchApi } from "../utils/fetch-api"
import { getAllProductsQuery } from "../utils/queries/get-all-products"
import { normalizeProduct } from "../utils/normalize";

type ReturnType = {
  products: ProductConnection
}

export const getAllProducts = async (): Promise<any> => {

  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery })

  // data normalization
  return data.products.edges.map(({ node: product }) => {
    return normalizeProduct(product)
  }) ?? []
}


