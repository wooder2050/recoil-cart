import { logo } from "../assets/img";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header-inner">
      <div className="header-content-wrapper">
        <a href="./index.html">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <span className="starbucks-title">STARBUCKS</span>
      </div>
    </div>
  );
}
