import { popupActions } from "../../store/popupSlice";
import { useDispatch } from "react-redux";

export default function ProductItem(props) {
  const price = new Intl.NumberFormat("vi-VN").format(props.price);

  const dispatch = useDispatch();

  function handleShowPopup() {
    dispatch(
      popupActions.SHOW_POPUP({
        id: props.id,
        img: props.img,
        name: props.name,
        price: props.price,
        desc: props.desc,
      }),
    );
    return;
  }

  return (
    <>
      <div
        className="show flex cursor-pointer flex-col items-center justify-center gap-3 transition hover:opacity-60 "
        onClick={handleShowPopup}
      >
        <img src={props.img} alt="product image" className="mb-2" />
        <p className="text-center lg:text-xl">{props.name}</p>
        <p className="font-light text-[#aaa] lg:text-lg">{price} VND</p>
      </div>
    </>
  );
}
