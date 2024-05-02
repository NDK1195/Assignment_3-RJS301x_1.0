import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { categoryActions } from "../../store/categorySlice";
export default function SideBar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    dispatch(categoryActions.setCategory(category));
  }, [category]);

  return (
    <aside className="lg:w-[20%]">
      <h2 className="text-2xl tracking-wide">CATEGORIES</h2>
      <ul className="py-3">
        <h3 className="bg-black px-6 py-2 text-white">APPLE</h3>
        <li className="px-6 py-2 text-[--color-text-primary]">
          <NavLink
            to="?category=all"
            className={category === "all" ? "active" : ""}
          >
            All
          </NavLink>
        </li>
        <ul>
          <h4 className="bg-[--color-secondary] px-6 py-2 font-semibold">
            IPHONE & MAC
          </h4>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink
              to="?category=iphone"
              className={category === "iphone" ? "active" : ""}
            >
              IPhone
            </NavLink>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink
              to="?category=ipad"
              className={category === "ipad" ? "active" : ""}
            >
              IPad
            </NavLink>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink
              to="?category=macbook"
              className={category === "macbook" ? "active" : ""}
            >
              Macbook
            </NavLink>
          </li>
        </ul>
        <ul>
          <h4 className="bg-[--color-secondary] px-6 py-2 font-semibold">
            WIRELESS
          </h4>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink
              to="?category=airpod"
              className={category === "airpod" ? "active" : ""}
            >
              Airpod
            </NavLink>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink
              to="?category=watch"
              className={category === "watch" ? "active" : ""}
            >
              Watch
            </NavLink>
          </li>
        </ul>
        <ul>
          <h4 className="bg-[--color-secondary] px-6 py-2 font-semibold">
            OTHER
          </h4>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink
              to="?category=mouse"
              className={category === "mouse" ? "active" : ""}
            >
              Mouse
            </NavLink>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink
              to="?category=keyboard"
              className={category === "keyboard" ? "active" : ""}
            >
              Keyboard
            </NavLink>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink
              to="?category=other"
              className={category === "other" ? "active" : ""}
            >
              Other
            </NavLink>
          </li>
        </ul>
      </ul>
    </aside>
  );
}
