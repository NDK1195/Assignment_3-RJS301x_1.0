import ProductItem from "./ProductItem";

export default function ProductList(props) {
  return (
    <>
      {props.data.map((product) => (
        <ProductItem
          key={product["_id"].$oid}
          id={product["_id"].$oid}
          img={product.img1}
          name={product.name}
          price={product.price}
          desc={product["short_desc"]}
          popup={props.popup}
        />
      ))}
    </>
  );
}
