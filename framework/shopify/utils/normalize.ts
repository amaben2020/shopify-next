import { Product as ShopifyProduct } from "../schema";

export const normalizeProduct = (productNode: ShopifyProduct) => {
  const { id, title: name, handle, vendor, description, ...rest } = productNode;

  const product = {
    id, name, handle, vendor, description, path: `/${handle}`, slug: handle.replace(/^\/+|\/+$/g, ""), ...rest
  }

  return product
}