import "./check-out-itmes.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

const CheckOutItmes = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemsFromCart, addItemToCart, removeItmesFromCart } =
    useContext(CartContext);
  const clearItemsHandler = () => clearItemsFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemsHandler = () => removeItmesFromCart(cartItem);

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
