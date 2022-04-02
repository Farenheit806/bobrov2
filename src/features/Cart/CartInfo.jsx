import { useSelector } from "react-redux";
import { selectCartTotal } from "../../app/slices/cartSlice";

export const CartInfo = () => {
  const cartTotalPrice = useSelector(selectCartTotal);
  return (
    <div>
      <h3>{cartTotalPrice}$</h3>
    </div>
  );
};
