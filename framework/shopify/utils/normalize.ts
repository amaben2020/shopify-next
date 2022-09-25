import { ImageEdge, Product as ShopifyProduct } from "../schema";

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) => {
  console.log('edges', edges)
  return edges.map(({ node: { originalSrc: url, ...rest } }: ImageEdge) => {

    return {
      url: `/images/${url}`, ...rest,
    }
  })
}

export const normalizeProduct = (productNode: ShopifyProduct) => {
  const { id, title: name, handle, vendor, images: imageCollection, description, ...rest } = productNode;

  const product = {
    id, name, handle, vendor, description, path: `/${handle}`, slug: handle.replace(/^\/+|\/+$/g, ""), images: normalizeProductImages(imageCollection), ...rest
  }

  return product
}