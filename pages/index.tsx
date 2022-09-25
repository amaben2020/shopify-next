import { Layout } from '@/components/common';
import { getAllProducts } from '@/framework/shopify/product/get-all-products';
import type { InferGetStaticPropsType } from 'next';

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Layout>{JSON.stringify(products)}</Layout>;
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
