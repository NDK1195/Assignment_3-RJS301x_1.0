import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="lg:w-[20%]">
      <h2 className="text-2xl tracking-wide">CATEGORIES</h2>
      <ul className="py-3">
        <h3 className="bg-black px-6 py-2 text-white">APPLE</h3>
        <li className="px-6 py-2 text-[--color-text-primary]">
          <NavLink>All</NavLink>
        </li>
        <ul>
          <h4 className="bg-[--color-secondary] px-6 py-2 font-semibold">
            IPHONE & MAC
          </h4>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink>IPhone</NavLink>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink>IPad</NavLink>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink>Macbook</NavLink>
          </li>
        </ul>
        <ul>
          <h4 className="bg-[--color-secondary] px-6 py-2 font-semibold">
            WIRELESS
          </h4>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink>Airpod</NavLink>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink>Watch</NavLink>
          </li>
        </ul>
        <ul>
          <h4 className="bg-[--color-secondary] px-6 py-2 font-semibold">
            OTHER
          </h4>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink>Mouse</NavLink>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink>Keyboard</NavLink>
          </li>
          <li className="px-6 py-2 text-[--color-text-primary]">
            <NavLink>Other</NavLink>
          </li>
        </ul>
      </ul>
    </aside>
  );
}
