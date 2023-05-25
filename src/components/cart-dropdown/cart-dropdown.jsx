import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import Button from "../button/button";
import CartItem from "../card-items/cart-itmes";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.style";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigtion = useNavigate();
  const goToCheckOutHandler = () => {
    navigtion("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItems={item} />)
        ) : (
          <EmptyMessage as="span">Your Cart Is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>Go TO CheckOut</Button>
    </CartDropDownContainer>
  );
};
export default CartDropdown;
