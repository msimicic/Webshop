import { useContext } from "react";
import { Context } from "../../App";

function Cooler() {
  const { renderProducts } = useContext(Context);

  return <>{renderProducts(4)}</>;
}

export default Cooler;
