import { useRecoilValue } from "recoil";
import { totalsState } from "../selector";
import "./Totals.scss";

export default function Totals() {
  const totals = useRecoilValue(totalsState);

  return (
    <div>
      <div className="total-title">Totals 💸</div>
      <div className="total-content-wrapper">
        <p>주문금액: {`${totals.subtotal.toLocaleString()}원`}</p>
        <p>배달료: {`${totals.shipping.toLocaleString()}원`}</p>
        <p>
          <strong>전체: {`${totals.total.toLocaleString()}원`}</strong>
        </p>
      </div>
    </div>
  );
}
