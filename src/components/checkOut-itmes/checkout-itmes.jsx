import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./check-out-itmes-style";
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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemsHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemsHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckOutItmes;
