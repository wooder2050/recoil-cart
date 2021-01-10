import { useRecoilState } from "recoil";
import { shippingState } from "../atoms";
import { destinations } from "../constant";
import "./Shipping.scss";

export default function Shipping() {
  const [shipping, setShipping] = useRecoilState(shippingState);

  return (
    <div>
      <div className="shipping-title">Shipping 🚚</div>
      <div className="shipping-btn-wrapper">
        {Object.entries(destinations).map(([city, price], index) => (
          <div
            className={
              city === shipping ? "shipping-btn-active" : "shipping-btn"
            }
            key={index}
            onClick={() => {
              setShipping(city);
            }}
          >
            {city} @ {`${price.toLocaleString()}원`}
            {city === shipping ? <span> 🛵</span> : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
