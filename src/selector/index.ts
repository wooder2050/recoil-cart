import { selector } from "recoil";
import { cartState, shippingState } from "../atoms";
import { destinations } from "../constant";

export const totalsState = selector({
  key: "totalsState",
  get: ({ get }) => {
    const cart = get(cartState);
    const shipping = get(shippingState);
    const subtotal = cart.reduce((acc, { name, price }) => acc + price, 0);
    const shippingTotal = destinations[shipping];

    return {
      subtotal,
      shipping: shippingTotal,
      total: subtotal + shippingTotal,
    };
  },
});
