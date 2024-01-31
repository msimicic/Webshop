import { useContext } from "react";
import { Context } from "../../App";

function Memory() {
  const { renderProducts } = useContext(Context);

  return <>{renderProducts(5)}</>;
}

export default Memory;
