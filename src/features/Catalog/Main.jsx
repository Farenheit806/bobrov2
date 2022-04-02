import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../app/slices/cartSlice";
import { selectDisplayedList } from "../../app/slices/catalogSlice";
import { Product } from "../../utils/Product";

export const NoMatches = () => (
  <div className="no-matches">
    <h2>No matches! Try Again!</h2>
  </div>
);

export const List = () => {
  const products = useSelector(selectDisplayedList);

  return (
    <div className="product-list">
      {products.map(({ id, title, text, img, price }) => (
        <Product
          key={id}
          id={id}
          title={title}
          text={text}
          img={img}
          price={price}
        />
      ))}
    </div>
  );
};
