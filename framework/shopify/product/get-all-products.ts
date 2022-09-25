import { fetchApi } from "../utils/fetch-api"
import { getAllProductsQuery } from "../utils/queries/get-all-products"

export const getAllProducts = async (): Promise<any[]> => {

  const data = await fetchApi({ query: getAllProductsQuery })

  return data.data
}


