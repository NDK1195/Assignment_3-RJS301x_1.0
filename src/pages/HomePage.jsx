import Categories from "../components/Category/Categories";
import ProductListHome from "../components/Products/ProductListHome";
import Subscribe from "../components/UI/Subscribe";
import HomeBanner from "../components/UI/HomeBanner";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <Categories />
      <ProductListHome />
      <Subscribe />
    </>
  );
}
