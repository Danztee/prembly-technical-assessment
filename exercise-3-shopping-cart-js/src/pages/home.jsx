import ItemCard from "../components/ItemCard";
import products from "../../products.json";

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ALL PRODUCTS</h1>

      <div className="product-container">
        {products.map((product, index) => (
          <ItemCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
