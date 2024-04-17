import Categories from "../components/homepage-components/Categories";
import ProductListHome from "../components/homepage-components/ProductListHome";
import Subscribe from "../components/homepage-components/Subscribe";
import HomeBanner from "../components/homepage-components/HomeBanner";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../components/Popup/Popup";
export default function HomePage() {
  const isShowPopup = useSelector((state) => state.popup.isShow);
  const product = useSelector((state) => state.popup.product);

  return (
    <>
      {isShowPopup ? (
        <Popup
          id={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          desc={product.desc}
        />
      ) : null}
      <HomeBanner />
      <Categories />
      <ProductListHome />
      <Subscribe />
    </>
  );
}
