import { CartItemContainer, ItemDetails } from "./cart-itmes-style";

const CartItem = ({ cartItems }) => {
  const { name, imageUrl, price, quantity } = cartItems;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
