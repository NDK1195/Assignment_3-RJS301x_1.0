import { popupActions } from "../../store/popupSlice";
import Popup from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";

export default function ProductItem(props) {
  const price = new Intl.NumberFormat("vi-VN").format(props.price);

  const isShowPopup = useSelector((state) => state.popup.isShow);
  const product = useSelector((state) => state.popup.product);
  const dispatch = useDispatch();

  function handleShowPopup() {
    if (product.id !== props.id) {
      dispatch(
        popupActions.SHOW_POPUP({
          id: props.id,
          img: props.img,
          name: props.name,
          price: props.price,
          desc: props.desc,
        }),
      );
    }
    return;
  }

  return (
    <>
      {isShowPopup ? <Popup /> : null}
      <div
        className="flex cursor-pointer flex-col items-center justify-center gap-3 transition hover:opacity-70"
        onClick={handleShowPopup}
      >
        <img src={props.img} alt="product image" className="mb-2" />
        <p className="text-center lg:text-xl">{props.name}</p>
        <p className="font-light text-[#aaa] lg:text-lg">{price} VND</p>
      </div>
    </>
  );
}
