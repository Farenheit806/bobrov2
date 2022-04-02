import { CartList } from "./CartList";
import "./cart.scss";
import { CartInfo } from "./CartInfo";
const Cart = () => {
  return (
    <main className="cart">
      <div className="cart__flex container">
        <h1>cart</h1>
        <CartList />
        <CartInfo />
      </div>
    </main>
  );
};
export default Cart;
