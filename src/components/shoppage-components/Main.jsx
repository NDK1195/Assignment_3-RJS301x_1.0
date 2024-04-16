export default function Main() {
  return (
    <div>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter Search Here!"
          className="appearance-none border px-5 py-2"
        />
        <select name="sort" id="sort" className="border">
          <option value="default">Default sorting</option>
          <option value="asc">Price: Ascending</option>
          <option value="desc">Price: Descending</option>
        </select>
      </div>
    </div>
  );
}
