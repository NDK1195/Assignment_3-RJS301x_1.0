import { useLoaderData } from "react-router-dom";
import ProductItem from "./ProductItem";

export default function ProductListHome() {
  const data = useLoaderData();
  // get first 8 products
  const loadData = data.slice(0, 8);
  console.log(loadData);
  return (
    <>
      <div className="container mx-auto mb-5 mt-10">
        <p className="font-light uppercase tracking-wider text-[#aaa] lg:text-lg">
          made the hard way
        </p>
        <p className="mb-4 text-xl uppercase tracking-wider lg:text-3xl">
          top trending products
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          {loadData.map((product) => (
            <ProductItem
              key={product["_id"].$oid}
              id={product["_id"].$oid}
              img={product.img1}
              name={product.name}
              price={product.price}
              desc={product["short_desc"]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
