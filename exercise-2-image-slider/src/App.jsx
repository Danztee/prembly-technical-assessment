import "./App.css";
import ImageSlider from "./components/ImageSlider";

import slides from "../slides.json";

function App() {
  return <ImageSlider slides={slides} />;
}

export default App;
