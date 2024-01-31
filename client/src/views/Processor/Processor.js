import { useContext } from "react";
import { Context } from "../../App";

function Processor() {
  const { renderProducts } = useContext(Context);

  return <>{renderProducts(1)}</>;
}

export default Processor;
