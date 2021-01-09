import { useRecoilState } from "recoil";
import { cartState } from "../atoms";
import { inventory } from "../constant";
import { CartItemsModel } from "../entity";

export default function AvailableItems() {
  const [cart, setCart] = useRecoilState<CartItemsModel[]>(cartState);
  const cartNames = cart.map((item) => item.name);

  return (
    <div>
      <h2>Available Items</h2>
      <ul>
        {inventory.map(({ name, price }, id) => (
          <li key={id}>
            {name} @ ${price.toFixed(2)}
            <button
              onClick={() => {
                setCart((cart: any) => [...cart, { name, price }]);
              }}
            >
              add
            </button>
            {cartNames.includes(name) && (
              <button
                onClick={() => {
                  const itemWithIndex = cart
                    .map((item, index) => ({ ...item, index }))
                    .filter((item) => item.name === name);
                  const front = cart.slice(0, itemWithIndex[0].index);
                  const back = cart.slice(itemWithIndex[0].index + 1);
                  setCart(() => [...front, ...back]);
                }}
              >
                rem
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
