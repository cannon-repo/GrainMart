import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setCartSize } from "../Redux/CartSlice";

const useFetchCartSize = () => {
    const dispatch = useDispatch();
    const CartToggle = useSelector((state) => state.cartData.CartToggle);
    const hasUser = useSelector((state) => state.userData.hasUser);
    const userId = useSelector((state) => state.userData.userId);

    useEffect(() => {
        if(hasUser || localStorage.getItem("loggedin") === true) {
            fetch(`/api/user/getusercart/${userId}`).then((res) => res.json()).then((data) => {
                dispatch(setCartSize({size:(data.data).length}));
            }).catch((err) => console.log(err));
        }
        return;
    }, [dispatch, CartToggle, userId, hasUser]);
}

export default useFetchCartSize;