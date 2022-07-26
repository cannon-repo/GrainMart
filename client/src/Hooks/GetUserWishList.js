import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetWishlist, updateWishlist } from "../Redux/WishlistSlice";

const useGetUserWishList = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userData.userId);
    const hasUser = useSelector((state) => state.userData.hasUser);
    const toggle = useSelector((state) => state.wishlistData.WishlistToggle);

    useEffect(() => {
        if(hasUser || localStorage.getItem("loggedin") === true) {
            fetch(`/api/user/getuserwishlist/${userId}`).then((res) => res.json()).then((data) => {
                if(data.data) {
                    dispatch(updateWishlist({newWishlist: data.data}));
                } else {
                    alert(data.msg);
                }
            }).catch((err) => console.log(err));
        } else {
            dispatch(resetWishlist());
        }
    }, [dispatch, hasUser, userId, toggle]);
}

export default useGetUserWishList;