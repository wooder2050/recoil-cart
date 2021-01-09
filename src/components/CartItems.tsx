import { useRecoilValue } from "recoil";
import { cartState } from "../atoms";
import { CartItemsModel } from "../entity";

export default function CartItems() {
  const cart = useRecoilValue<CartItemsModel[]>(cartState);

  if (cart.length === 0) return <p>No items.</p>;
  const TShirts = cart.filter((item) => item.name === "👕 T-Shirts");
  const Jeans = cart.filter((item) => item.name === "👖 Jeans");
  const Shoe = cart.filter((item) => item.name === "👟 Shoe");

  return (
    <ul>
      {TShirts.length > 0 && (
        <li>
          👕 T-Shirts @ ${(10).toFixed(2)} X {TShirts.length}
        </li>
      )}
      {Jeans.length > 0 && (
        <li>
          👖 Jeans @ ${(15).toFixed(2)} X {Jeans.length}
        </li>
      )}
      {Shoe.length > 0 && (
        <li>
          👟 Shoe @ ${(7.5).toFixed(2)} X {Shoe.length}
        </li>
      )}
    </ul>
  );
}
