import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { categoryActions } from "../../store/categorySlice";
export default function SideBar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    dispatch(categoryActions.setCategory(category));
  }, [category, dispatch]);

  return (
    <aside className="lg:w-[20%]">
      <h2 className="text-2xl tracking-wide">CATEGORIES</h2>
      <ul className="py-3">
        <h3 className="bg-black px-6 py-2 text-white">APPLE</h3>
        <li className="px-6 py-2 text-[--color-text-primary]">
          <Link
            to="?category=all"
            className={`hover:text-[--color-primary] ${category === "all" ? "active" : ""}`}
          >
            All
          </Link>
        </li>
        <ul>
          <h4 className="bg-[--color-secondary] px-6 py-2 font-semibold">
            IPHONE & MAC
          </h4>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <Link
              to="?category=iphone"
              className={`hover:text-[--color-primary] ${category === "iphone" ? "active" : ""}`}
            >
              IPhone
            </Link>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <Link
              to="?category=ipad"
              className={`hover:text-[--color-primary] ${category === "ipad" ? "active" : ""}`}
            >
              IPad
            </Link>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <Link
              to="?category=macbook"
              className={`hover:text-[--color-primary] ${category === "macbook" ? "active" : ""}`}
            >
              Macbook
            </Link>
          </li>
        </ul>
        <ul>
          <h4 className="bg-[--color-secondary] px-6 py-2 font-semibold">
            WIRELESS
          </h4>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <Link
              to="?category=airpod"
              className={`hover:text-[--color-primary] ${category === "airpod" ? "active" : ""}`}
            >
              Airpod
            </Link>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <Link
              to="?category=watch"
              className={`hover:text-[--color-primary] ${category === "watch" ? "active" : ""}`}
            >
              Watch
            </Link>
          </li>
        </ul>
        <ul>
          <h4 className="bg-[--color-secondary] px-6 py-2 font-semibold">
            OTHER
          </h4>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <Link
              to="?category=mouse"
              className={`hover:text-[--color-primary] ${category === "mouse" ? "active" : ""}`}
            >
              Mouse
            </Link>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <Link
              to="?category=keyboard"
              className={`hover:text-[--color-primary] ${category === "keyboard" ? "active" : ""}`}
            >
              Keyboard
            </Link>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <Link
              to="?category=other"
              className={`hover:text-[--color-primary] ${category === "other" ? "active" : ""}`}
            >
              Other
            </Link>
          </li>
        </ul>
      </ul>
    </aside>
  );
}
