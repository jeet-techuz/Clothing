import "./checkout.scss";
import { useSelector } from "react-redux";
import CheckOutItmes from "../../components/checkOut-itmes/checkout-itmes";
import {
  selectCartItmes,
  selectCartTotal,
} from "../../Store/cart/cart-selector";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItmes);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block ">
          <span>Product</span>
        </div>
        <div className="header-block ">
          <span>Discription</span>
        </div>
        <div className="header-block ">
          <span>Quantity</span>
        </div>
        <div className="header-block ">
          <span>Price</span>
        </div>
        <div className="header-block ">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItmes key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
};

export default CheckOut;
