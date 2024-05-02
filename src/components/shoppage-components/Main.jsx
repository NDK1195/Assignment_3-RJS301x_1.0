import { useSelector } from "react-redux";
import ProductList from "../Products/ProductList";
import { useLoaderData } from "react-router-dom";

export default function Main() {
  const data = useLoaderData();
  const category = useSelector((state) => state.category.category);

  let renderData = [];
  if (category === "all") {
    renderData = [...data];
  } else {
    renderData = data.filter((product) => {
      return category === product.category;
    });
  }

  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-between">
          <input
            type="text"
            placeholder="Enter Search Here!"
            className="appearance-none border px-5 py-2"
          />
          <select name="sort" id="sort" className="border">
            <option value="default">Default sorting</option>
            <option value="asc">Price: Ascending</option>
            <option value="desc">Price: Descending</option>
          </select>
        </div>
        {/* Search & sort */}
        <div className="my-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {renderData.length < 1 ? (
            <p className=" text-2xl">No product found</p>
          ) : (
            <ProductList data={renderData} />
          )}
        </div>
        {/* Product list */}
        <div className="mb-5 text-right">
          <span className="cursor-pointer border p-3">&lt;&lt;</span>
          <span className="border bg-black p-3 text-white">1</span>
          <span className="cursor-pointer border p-3">&gt;&gt;</span>
          <p className="mt-5 text-[--color-text-primary]">
            Showing 1-9 of 9 results
          </p>
        </div>
        {/* Pagination */}
      </div>
    </>
  );
}
