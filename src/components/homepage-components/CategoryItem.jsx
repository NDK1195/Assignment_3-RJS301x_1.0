import { useNavigate } from "react-router-dom";

export default function CategoryItem(props) {
  const navigate = useNavigate();
  return (
    <div
      className={`cursor-pointer rounded transition hover:opacity-70 ${props.className} show`}
      onClick={() => navigate("/shop?category=all")}
    >
      <img src={props.src} alt="Category Image" className="w-full rounded" />
    </div>
  );
}
