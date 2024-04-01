export default function Banner(props) {
  return (
    <div className="container mx-auto my-20 flex flex-col items-center justify-between gap-3 bg-[#f4f5f9] px-10 py-8 md:flex-row md:px-20 md:py-16">
      <h2 className="text-xl uppercase md:text-4xl">{props.page}</h2>
      <p className="text-lg text-[#aaa] md:text-2xl">{props.page}</p>
    </div>
  );
}
