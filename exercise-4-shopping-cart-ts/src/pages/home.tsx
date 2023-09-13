import ItemCard, { Product } from "../components/ItemCard";
import products from "../../products.json";

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ALL PRODUCTS</h1>

      <div className="product-container">
        {products.map((product: Product, index: number) => (
          <ItemCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
