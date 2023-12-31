import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import formatPrice from "../utils/formatPrice";
import { Product } from "./ItemCard";

interface CartItemProps extends Product {
  quantity?: number;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  image,
  name,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="item-price">{formatPrice(price)}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeFromCart({ id }))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="quantity-btn"
          onClick={() => dispatch(increaseQuantity({ id, price }))}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <p className="quantity">{quantity}</p>
        <button
          className="quantity-btn"
          onClick={() => dispatch(decreaseQuantity({ id, price }))}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
