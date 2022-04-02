import { useSelector } from "react-redux";
import { selectCartTotal } from "../../app/slices/cartSlice";
import { Button } from "../../utils/Button";
export const CartInfo = () => {
  const cartTotalPrice = useSelector(selectCartTotal);
  return (
    <div className="cart__info">
      <h3>Total: {cartTotalPrice}$</h3>
      <Button
        btnText="Purchase"
        onClick={() => {
          console.log("Here is have to be something big");
        }}
      />
    </div>
  );
};
