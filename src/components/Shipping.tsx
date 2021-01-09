import { useRecoilState } from "recoil";
import { shippingState } from "../atoms";
import { destinations } from "../constant";

export default function Shipping() {
  const [shipping, setShipping] = useRecoilState(shippingState);

  return (
    <div>
      <h2>Shipping</h2>
      {Object.entries(destinations).map(([city, price], index) => (
        <button
          key={index}
          onClick={() => {
            setShipping(city);
          }}
        >
          {city} @ {price}
          {city === shipping ? <span> 🚚</span> : ""}
        </button>
      ))}
    </div>
  );
}
