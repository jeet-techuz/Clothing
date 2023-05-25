import { Route, Routes } from "react-router-dom";
import Home from "./Router/Home/home";
import Navigation from "./Router/navigation/navigation";
import Authentication from "./Router/authentication/authentication";
import Shop from "./Router/shop/shop-component";
import CheckOut from "./Router/check-out/checkout";

const App = () => {
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
