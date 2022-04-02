import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCounter } from "../../app/slices/cartSlice";

export const CartLink = () => {
  const counter = useSelector(selectCounter);
  return (
    <NavLink to="cart" className="cart-btn">
      {counter !== 0 && <span>(Items in: {counter})</span>} go to cart
    </NavLink>
  );
};
