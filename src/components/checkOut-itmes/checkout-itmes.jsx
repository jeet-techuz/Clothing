import "./check-out-itmes.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItmes } from "../../Store/cart/cart-selector";
import {
  addItemToCart,
  clearItemsFromCart,
  removeItmesFromCart,
} from "../../Store/cart/cart-action";

const CheckOutItmes = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItmes);

  const clearItemsHandler = () =>
    dispatch(clearItemsFromCart(cartItems, cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const removeItemsHandler = () =>
    dispatch(removeItmesFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemsHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemsHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckOutItmes;
