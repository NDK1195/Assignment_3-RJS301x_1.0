import Banner from "../components/UI/Banner";
import Categories from "../components/Category/Categories";
import ProductListHome from "../components/Products/ProductListHome";
import Subscribe from "../components/UI/Subscribe";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Categories />
      <ProductListHome />
      <Subscribe />
    </>
  );
}
