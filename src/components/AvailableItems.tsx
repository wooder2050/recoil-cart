import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, inventoryState } from "../atoms";

// import { inventoryData } from "../selector";

import { CartItemsModel, InventoryModel } from "../entity";
import "./AvailableItems.scss";

export default function AvailableItems() {
  const [cart, setCart] = useRecoilState<CartItemsModel[]>(cartState);
  const [inventory, setInventoryState] = useRecoilState<InventoryModel[]>(
    inventoryState
  );

  // const inventoryItems = useRecoilValue<InventoryModel[]>(inventoryData);

  const cartNames = cart.map((item) => item.name);

  useEffect(() => {
    fetch("http://localhost:5000/product", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setInventoryState(res.product);
      });
  }, [setInventoryState]);

  return (
    <div className="available-items-wrapper">
      <h2 className="available-items-title">Drinks ☕</h2>
      <ul className="available-items-list">
        {inventory.map(({ img, category, name, name_eng, price }, index) => (
          <div className="available-items-inner" key={index}>
            <div className="available-items-info-wrapper">
              <div className="available-items-img-wrapper">
                <div className="available-items-img-box">
                  <div className="available-items-img-inner">
                    <img
                      className="available-items-img"
                      src={img}
                      alt="상품이미지"
                    />
                  </div>
                </div>
                <div className="available-items-info-box">
                  <p className="available-items-info-category">{category}</p>
                  <p className="available-items-info-name">{name}</p>
                  <p className="available-items-info-name-eng">{name_eng}</p>
                  <p className="available-items-info-price">
                    {`${price.toLocaleString()}원`}
                  </p>
                </div>
                <div className="available-items-cart-btn-warpper">
                  <div
                    className="available-items-cart-btn-add"
                    onClick={() => {
                      setCart((cart: any) => [...cart, { name, price }]);
                    }}
                  >
                    add
                  </div>
                  {cartNames.includes(name) && (
                    <div
                      className="available-items-cart-btn-add"
                      onClick={() => {
                        const itemWithIndex = cart
                          .map((item, index) => ({ ...item, index }))
                          .filter((item) => item.name === name);
                        if (itemWithIndex.length) {
                          const front = cart.slice(0, itemWithIndex[0].index);
                          const back = cart.slice(itemWithIndex[0].index + 1);
                          setCart(() => [...front, ...back]);
                        }
                      }}
                    >
                      rem
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
