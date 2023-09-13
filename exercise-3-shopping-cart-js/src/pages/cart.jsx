import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/cartItem";
import formatPrice from "../utils/formatPrice";
import { clear } from "../features/cart/cartSlice";

const Cart = () => {
  const { cart: cartItems, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section className="cart">
      <header>
        <h2>your cart</h2>
      </header>
      {cartItems.length > 0 ? (
        <>
          <div>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                total <span>{formatPrice(total)}</span>
              </h4>
            </div>

            <button className="btn clear-btn" onClick={() => dispatch(clear())}>
              clear cart
            </button>
          </footer>
        </>
      ) : (
        <p className="empty-cart">
          You have no items in your cart yet! check back later.
        </p>
      )}
    </section>
  );
};

export default Cart;
