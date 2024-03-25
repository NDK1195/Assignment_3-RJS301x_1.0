import CategoryItem from "./CategoryItem";
import product1 from "../../assets/product_1.png";
import product2 from "../../assets/product_2.png";
import product3 from "../../assets/product_3.png";
import product4 from "../../assets/product_4.png";
import product5 from "../../assets/product_5.png";

export default function Categories() {
  return (
    <div className="mb-5 mt-10 text-center">
      <p className="font-light uppercase tracking-wider text-[#aaa] lg:text-lg">
        carefully created collections
      </p>
      <p className="mb-4 text-xl uppercase tracking-wider lg:text-3xl">
        browse our categories
      </p>
      <div className="grid gap-3 md:grid-cols-6 md:grid-rows-2">
        <CategoryItem className="md:col-span-3" src={product1} />
        <CategoryItem className="md:col-span-3" src={product2} />
        <CategoryItem className="md:col-span-2" src={product3} />
        <CategoryItem className="md:col-span-2" src={product4} />
        <CategoryItem className="md:col-span-2" src={product5} />
      </div>
    </div>
  );
}
