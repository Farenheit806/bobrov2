import { useSelector } from "react-redux";
import { selectProductsInCart } from "../../app/slices/cartSlice";

export const CartList = () => {
  const products = useSelector(selectProductsInCart);
  return (
    <>
      <h2>Items in cart:</h2>
      <div className="cart__list">
        {products.map(({ title, amount, totalPrice }) => (
          <CartItem title={title} amount={amount} totalPrice={totalPrice} />
        ))}
      </div>
    </>
  );
};

export const CartItem = ({ title, amount, totalPrice }) => {
  return (
    <div className="cart__item">
      <h3>{title}</h3>
      <p>Amount: {amount}</p>
      <p>Total price: {totalPrice}$</p>
    </div>
  );
};
