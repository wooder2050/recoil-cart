import { CartItems, Shipping, Totals } from "../components";
import "./Cart.scss";

export default function Cart() {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">Cart 🛒</div>
      <CartItems />
      <Shipping />
      <Totals />
    </div>
  );
}
