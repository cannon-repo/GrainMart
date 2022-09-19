import React, { useEffect } from "react";
import { useWindowSize } from "../../Hooks/ResizeHook";
import ProductL from "./ProductL";
import ProductM from "./ProductM";
import ProductS from "./ProductS";
import {useSelector} from "react-redux";

const EachProduct = () => {
  const size = useWindowSize()[0];

  const style = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "auto",
    zIndex: "9999999"
  };

  const flag = useSelector((state) => state.eachProductData.toggle);
  const prod = useSelector((state) => state.eachProductData);

  useEffect(() => {
    console.log(prod);
  }, [flag, prod]);

  return (
    <div className="EachProductWrap" style={style}>
      {size >= 1000 && <ProductL prod={prod} />}
      {size < 1000 && size >= 450 && <ProductM prod={prod} />}
      {size < 450 && <ProductS prod={prod} />}
    </div>
  );
};

export default EachProduct;
