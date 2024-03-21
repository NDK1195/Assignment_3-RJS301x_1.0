import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="py-5">
      <nav className="container mx-auto flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-5">
          <NavLink to="/" className="text-lg">
            Home
          </NavLink>
          <NavLink to="/shop" className="text-lg">
            Shop
          </NavLink>
        </div>
        <h1 className="text-3xl">BOUTIQUE</h1>
        <div className="flex items-center gap-5">
          <NavLink to="/cart">
            <span>
              <i className="fa-solid fa-cart-flatbed text-[#aaa]"></i>
            </span>
            <span className="ml-1 text-lg">Cart</span>
          </NavLink>
          <NavLink to="/login">
            <span>
              <i className="fa-solid fa-user text-[#aaa]"></i>
            </span>
            <span className="ml-1 text-lg">Login</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
