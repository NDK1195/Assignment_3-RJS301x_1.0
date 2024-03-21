import { useNavigate } from "react-router-dom";
import banner from "../assets/banner1.jpg";
export default function Banner() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <img src={banner} alt="banner" />
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 md:w-1/4">
        <p className="text-lg font-light uppercase tracking-wider text-[#aaa] md:mb-2 lg:text-xl">
          new inspiration 2020
        </p>
        <p className="text-2xl uppercase tracking-wider md:mb-4 lg:text-4xl">
          20% off on new season
        </p>
        <button
          className="bg-[#383838] px-6 py-2 text-lg font-light italic text-white hover:text-[--color-primary]"
          onClick={() => navigate("/shop")}
        >
          Browse collections
        </button>
      </div>
    </div>
  );
}
