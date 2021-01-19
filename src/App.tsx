import React from "react";
import { RecoilRoot } from "recoil";
import { Header, AvailableItems, Cart, Loading } from "./components";
import "./App.scss";

function App() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<Loading />}>
        <div className="wrapper">
          <Header />
          <div className="components-wrapper">
            <AvailableItems />
            <Cart />
          </div>
        </div>
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
