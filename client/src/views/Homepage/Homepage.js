import { useContext, useEffect } from "react";
import Axios from "axios";
import { Context } from "../../App";

function Homepage() {
  const { setProducts, renderProducts } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/api/products");

        setProducts(response.data);
      } catch (error) {
        console.error("Greška prilikom dohvaćanja podataka s API-a:", error);
      }
    };
    fetchData();
  }, []);

  return <>{renderProducts()}</>;
}

export default Homepage;
