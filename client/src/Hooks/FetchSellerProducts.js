const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { setProducts } = require("../Redux/ProductsSlice");

const useFetchSellerProducts = () => {
    const dispatch = useDispatch();

    const sellerId = useSelector((state) => state.userData.sellerId);
    const flag = useSelector((state) => state.productData.flag);

    useEffect(() => {
        if (!sellerId) {
          return;
        }
        fetch("/api/seller/myproducts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Name: sellerId }),
        })
          .then((res) => res.json())
          .then((data) => {
            // add Better Error handling 
              console.log('Hemlo', data);
            dispatch(setProducts({ products: data.data }));
          })
          .catch((err) => console.log(err));
        // eslint-disable-next-line
      }, [sellerId, flag]);
}

export default useFetchSellerProducts;