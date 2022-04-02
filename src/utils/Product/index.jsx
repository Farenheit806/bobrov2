import { useDispatch } from "react-redux";
import { addProduct } from "../../app/slices/cartSlice";
import "./product.scss";

export const Product = ({
  title = "title",
  text = "text",
  img = "img/catalog/no-image.jpg",
  price = 1,
  id,
}) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    dispatch(addProduct({ img, title, price, id }));
  };
  return (
    <div className="product">
      <div className="product__img" onClick={onAddToCart}>
        <img id={id} src={img} alt="product image" />
      </div>
      <div className="product__info">
        <h3>{title}</h3>
        <p>{text}</p>
        <p className="product__price">{price}$</p>
      </div>
    </div>
  );
};
