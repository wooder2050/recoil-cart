import { atom } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [{ name: "empty", price: 0 }],
});

export const shippingState = atom({
  key: "shippingState",
  default: "seoul",
});

export const inventoryState = atom({
  key: "inventoryState",
  default: [
    {
      name: "empty",
      price: 0,
      img: "empty",
      name_eng: "empty",
      category: "empty",
    },
  ],
});
