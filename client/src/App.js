import "./App.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./views/Navbar/Navbar";
import Homepage from "./views/Homepage/Homepage";
import Processor from "./views/Processor/Processor";
import GraphicCard from "./views/GraphicCard/GraphicCard";
import MotherBoard from "./views/MotherBoard/MotherBoard";
import Cooler from "./views/Cooler/Cooler";
import Memory from "./views/Memory/Memory";
import Product from "./views/Product/Product";

export const Context = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Ako je string duži od 45 funkcija vraća string do zadnjeg razmaka
  const shortenedString = (originalString) => {
    if (originalString.length > 45) {
      // Pronađi posljednji razmak prije maksimalne duljine
      let lastSpaceIndex = originalString.lastIndexOf(" ", 45);
      // Izdvoji dio stringa koji ide do tog razmaka
      let truncatedString = originalString.substring(0, lastSpaceIndex);
      return truncatedString;
    } else {
      // Ako string nije duži od maksimalne duljine, vrati originalni string
      return originalString;
    }
  };

  // Sprema se id odabranog proizvoda zbog prosljeđivanja parametra Product komponenti
  const selectProduct = (productId) => {
    setSelectedProductId(productId);
  };

  const renderProducts = (categoryId = null) => {
    return (
      <div className="d-flex flex-wrap justify-content-evenly mt-4">
        {products.map((product, product_id) => {
          if (categoryId === null || product.category_id === categoryId) {
            return (
              <div
                className="product-card mb-4 p-3"
                key={product_id}
                onClick={() => selectProduct(() => product_id + 1)}
              >
                <Link
                  to={`/products/${product.product_name}`}
                  className="product-link"
                >
                  <div>{shortenedString(product.product_name)}</div>
                  <img
                    className="product-image"
                    src={`/${product.product_image}`}
                    alt={product.product_name}
                  />
                  <div className="product-price">{product.product_price} €</div>
                </Link>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <>
      <Router>
        <Navbar />
        <Context.Provider
          value={{
            products,
            setProducts,
            shortenedString,
            renderProducts,
            selectedProductId,
          }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/categories/1" element={<Processor />} />
            <Route path="/categories/2" element={<GraphicCard />} />
            <Route path="/categories/3" element={<MotherBoard />} />
            <Route path="/categories/4" element={<Cooler />} />
            <Route path="/categories/5" element={<Memory />} />
            <Route path="/products/:productName/*" element={<Product />} />
          </Routes>
        </Context.Provider>
      </Router>
    </>
  );
}

export default App;
