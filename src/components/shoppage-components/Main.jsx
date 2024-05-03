import { useSelector } from "react-redux";
import ProductList from "../Products/ProductList";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Main() {
  const data = useLoaderData();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const category = useSelector((state) => state.category.category);

  // set products list base on category
  useEffect(() => {
    if (category === "all") {
      setProducts(data);
    } else {
      setProducts(
        data.filter((product) => {
          return category === product.category;
        }),
      );
    }
  }, [category]);

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }
  // filter products base on search term with each category
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      }),
    );
  }, [searchTerm, products]);

  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-between">
          <input
            type="text"
            placeholder="Enter Search Here!"
            className="appearance-none border px-5 py-2"
            onChange={handleSearchChange}
          />
          <select name="sort" id="sort" className="border">
            <option value="default">Default sorting</option>
            <option value="asc">Price: Ascending</option>
            <option value="desc">Price: Descending</option>
          </select>
        </div>
        {/* Search & sort */}
        <div className="my-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.length < 1 ? (
            <p className=" text-2xl">No product found</p>
          ) : (
            <ProductList data={filteredProducts} />
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
