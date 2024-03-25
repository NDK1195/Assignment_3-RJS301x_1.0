import { useLoaderData } from "react-router-dom";
import ProductItem from "./ProductItem";

export default function ProductListHome() {
  const data = useLoaderData();

  const loadData = data.slice(0, 8);

  return (
    <div className="mb-5 mt-10">
      <p className="font-light uppercase tracking-wider text-[#aaa] lg:text-lg">
        made the hard way
      </p>
      <p className="text-xl uppercase tracking-wider md:mb-4 lg:text-3xl">
        top trending products
      </p>
      <div className="grid grid-cols-4 gap-5">
        {loadData.map((product) => (
          <ProductItem
            key={product.id}
            src={product.img1}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
