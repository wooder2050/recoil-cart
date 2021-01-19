import { useRecoilValue } from "recoil";
import { cartState } from "../atoms";
import { CartItemsModel } from "../entity";
import "./CartItems.scss";

export default function CartItems() {
  const cart = useRecoilValue<CartItemsModel[]>(cartState);

  const cartNames = cart
    .map((item) => item.name)
    .filter((name) => name !== "empty");

  const uniquecartNames = cartNames
    .filter((element, index) => {
      return cartNames.indexOf(element) === index;
    })
    .map((name) => {
      const cartWithPrice = cart.filter((cart) => cart.name === name);
      return { name, price: cartWithPrice[0].price };
    });
  const cartTotalInfo = uniquecartNames.map((cart) => {
    const cartNamesFilter = cartNames.filter(
      (cartName) => cart.name === cartName
    );
    return {
      name: cart.name,
      count: cartNamesFilter.length,
      price: cart.price,
    };
  });

  if (cartTotalInfo.length === 0)
    return (
      <ul className="cart-list">
        <p>No items.</p>
      </ul>
    );

  return (
    <ul className="cart-list">
      {cartTotalInfo.length > 0 &&
        cartTotalInfo.map((cart, index) => (
          <li className="cart" key={cart.name + index}>
            {cart.name} @ {`${cart.price.toLocaleString()}원`} X {cart.count}
          </li>
        ))}
    </ul>
  );
}
