import React from "react";
import { RecoilRoot } from "recoil";
import { AvailableItems, Cart } from "./components";

function App() {
  return (
    <RecoilRoot>
      <AvailableItems />
      <Cart />
    </RecoilRoot>
  );
}

export default App;
