export default function ProductItem(props) {
  const price = new Intl.NumberFormat("vi-VN").format(props.price);
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center gap-3 transition hover:opacity-70">
      <img src={props.src} alt="product image" className="mb-2" />
      <p className="text-center lg:text-xl">{props.name}</p>
      <p className="font-light text-[#aaa] lg:text-lg">{price} VND</p>
    </div>
  );
}
