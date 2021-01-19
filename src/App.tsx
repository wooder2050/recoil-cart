import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { Header, AvailableItems, Cart, Loading } from "./components";
import "./App.scss";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <div className="wrapper">
          <Header />
          <div className="components-wrapper">
            <AvailableItems />
            <Cart />
          </div>
        </div>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
