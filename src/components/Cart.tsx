import { CartItems, Shipping, Totals } from "../components";

export default function Cart() {
  return (
    <div>
      <h2>Cart</h2>
      <CartItems />
      <Shipping />
      <Totals />
    </div>
  );
}
