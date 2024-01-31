import { useContext } from "react";
import { Context } from "../../App";

function GraphicCard() {
  const { renderProducts } = useContext(Context);

  return <>{renderProducts(2)}</>;
}

export default GraphicCard;
