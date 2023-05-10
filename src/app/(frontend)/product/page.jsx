import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const metadata = {
  title: "Product",
  description: "Product by create next app",
};

export default async function ProductPage() {
  const data = await getData();
  return (
    <section className="product">
      <h1>Product Home Page</h1>
      <ul>
        <Suspense fallback={<Loading />}>
          {data &&
            data.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={`/product/${item.id}`}>{item.title}</Link>
                </li>
              );
            })}
        </Suspense>
      </ul>
    </section>
  );
}
