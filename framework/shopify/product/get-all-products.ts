import { ProductConnection } from "../schema"
import { fetchApi } from "../utils/fetch-api"
import { getAllProductsQuery } from "../utils/queries/get-all-products"
import { normalizeProduct } from "../utils/normalize";
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


