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

export const inventoryData = selector({
  key: "getInventoryData",
  get: async () => {
    const response = await fetch("http://localhost:5000/product", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => res.product);
    return response;
  },
});
