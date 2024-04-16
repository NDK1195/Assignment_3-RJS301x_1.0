export default function Subscribe() {
  return (
    <div className="container mx-auto">
      <div className="my-20 flex flex-col items-center justify-around gap-3 bg-[#f4f5f9] px-10 py-8 md:flex-row md:px-20 md:py-16">
        <div>
          <p className="text-lg uppercase tracking-wider lg:text-2xl">
            free shipping
          </p>
          <p className="font-light tracking-wider text-[#aaa] md:mb-2 lg:text-lg">
            Free shipping worldwide
          </p>
        </div>
        {/* column */}
        <div>
          <p className="text-lg uppercase tracking-wider lg:text-2xl">
            24 x 7 service
          </p>
          <p className="font-light tracking-wider text-[#aaa] md:mb-2 lg:text-lg">
            Free shipping worldwide
          </p>
        </div>
        {/* column */}
        <div>
          <p className="text-lg uppercase tracking-wider lg:text-2xl">
            festival offer
          </p>
          <p className="font-light tracking-wider text-[#aaa] md:mb-2">
            Free shipping worldwide
          </p>
        </div>
        {/* column */}
      </div>
      {/* end section */}

      <div className="mb-20 flex flex-col items-center justify-between gap-3 md:flex-row">
        <div>
          <p className="text-xl uppercase tracking-wider lg:text-3xl">
            let's be friend!
          </p>
          <p className="font-light tracking-wider text-[#aaa] md:mb-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your email address"
            className="appearance-none border px-4 py-4 text-sm md:w-[450px]"
          />
          <button className="btn px-6 py-4">Subscribe</button>
        </div>
      </div>
      {/* subscribe form */}
    </div>
  );
}
