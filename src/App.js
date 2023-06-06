import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "./Router/Home/home";
import Navigation from "./Router/navigation/navigation";
import Authentication from "./Router/authentication/authentication";
import Shop from "./Router/shop/shop-component";
import CheckOut from "./Router/check-out/checkout";
import { checkUserSession } from "./Store/user/user-action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};
export default App;
