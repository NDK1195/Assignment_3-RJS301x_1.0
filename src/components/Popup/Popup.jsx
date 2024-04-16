import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../store/popupSlice";
import { useNavigate } from "react-router-dom";

export default function Popup() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.popup.product);
  const navigate = useNavigate();

  const price = new Intl.NumberFormat("vi-VN").format(product.price);

  function handleClosePopup() {
    dispatch(popupActions.HIDE_POPUP());
  }

  return (
    <>
      <div className="backdrop" onClick={handleClosePopup}></div>
      {/* backdrop */}
      <div className="popup">
        <p className="pr-5 pt-5 text-right">
          <span
            onClick={handleClosePopup}
            className="cursor-pointer font-bold not-italic"
          >
            X
          </span>
        </p>
        {/* close icon */}
        <div className="flex justify-between gap-5 px-3 pb-5">
          <div className="hidden lg:block lg:basis-1/2">
            <img src={product.img} alt="Product image" />
          </div>
          {/* image */}
          <div className="lg:basis-1/2">
            <p className="py-2 lg:text-2xl">{product.name}</p>
            <p className="pb-1 font-light text-[#aaa] lg:text-lg">
              {price} VND
            </p>
            <p className="pb-4 font-light tracking-wide text-[#aaa]">
              {product.desc}
            </p>
            <button
              className="btn flex items-center gap-2 px-6 py-2"
              onClick={() => {
                navigate("/shop");
              }}
            >
              <span>
                <i className="fa-solid fa-cart-flatbed text-[#aaa]"></i>
              </span>
              <span>View Detail</span>
            </button>
          </div>
          {/* content */}
        </div>
      </div>
    </>
  );
}
