import { useDispatch } from "react-redux";
import { CartItem, addToCart } from "../features/cart/cartSlice";
import formatPrice from "../utils/formatPrice";
import toast from "react-hot-toast";

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

interface ItemCardProps {
  product: Product;
}

const ItemCard: React.FC<ItemCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt="" className="product-image" />
      <div className="product-cover">
        <div>
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">{formatPrice(product.price)}</p>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(addToCart(product as CartItem));
            toast.success("Product added successfully");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
