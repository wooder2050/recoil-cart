import React from "react";
import { RecoilRoot } from "recoil";
import { Header, AvailableItems, Cart } from "./components";
import "./App.scss";

function App() {
  return (
    <RecoilRoot>
      <div className="wrapper">
        <Header />
        <div className="components-wrapper">
          <AvailableItems />
          <Cart />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
