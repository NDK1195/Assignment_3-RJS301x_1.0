import Categories from "../components/homepage-components/Categories";
import ProductListHome from "../components/homepage-components/ProductListHome";
import Subscribe from "../components/homepage-components/Subscribe";
import HomeBanner from "../components/homepage-components/HomeBanner";

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
