export default function Footer() {
  return (
    <footer className="bg-[#111] py-14 tracking-wide">
      <div className="container mx-auto flex flex-col justify-between gap-3 px-3 sm:flex-row sm:items-center">
        <div>
          <h3 className="mb-5 text-2xl uppercase tracking-wider text-[#dee0dc]">
            Customer Services
          </h3>
          <ul className="flex flex-col gap-2 text-lg text-[#595959]">
            <li>
              <a href="#">Help & Contact Us</a>
            </li>
            <li>
              <a href="#">Returns & Refunds</a>
            </li>
            <li>
              <a href="#">Online Stores</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        {/* column */}
        <div>
          <h3 className="mb-5 text-2xl uppercase tracking-wider text-[#dee0dc]">
            Company
          </h3>
          <ul className="flex flex-col gap-2 text-lg text-[#595959]">
            <li>
              <a href="#">What We Do</a>
            </li>
            <li>
              <a href="#">Available Services</a>
            </li>
            <li>
              <a href="#">Latest Posts</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        {/* column */}
        <div>
          <h3 className="mb-5 text-2xl uppercase tracking-wider text-[#dee0dc]">
            Social Media
          </h3>
          <ul className="flex flex-col gap-2 text-lg text-[#595959]">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
          </ul>
        </div>
        {/* column */}
      </div>
    </footer>
  );
}
