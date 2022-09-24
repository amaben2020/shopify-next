import type { InferGetStaticPropsType } from 'next';

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{products}</div>;
}

export async function getStaticProps() {
  const products = [1, 2, 4];
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60, // every 4hrs in production, chack if there's new data in the database and update
  };
}
