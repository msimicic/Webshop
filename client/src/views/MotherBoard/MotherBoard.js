import { useContext } from "react";
import { Context } from "../../App";

function MotherBoard() {
  const { renderProducts } = useContext(Context);

  return <>{renderProducts(3)}</>;
}

export default MotherBoard;
