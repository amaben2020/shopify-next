import { getAllProducts } from '@/framework/shopify/product/get-all-products';
import type { InferGetStaticPropsType } from 'next';

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{JSON.stringify(products)}</div>;
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
    // every 4hrs in production, chack if there's new data in the database and update
  };
}
