import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSellerInfo } from "../Redux/UserDataSlice";

const useGetSellerInfo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('api/user/loggedUser').then((res) => res.json()).then((data) => {
            if(data.success) {
                localStorage.setItem('isSeller', true);
                dispatch(setSellerInfo({sellerId: data.msg.SellerId, sellerName: data.msg.SellerName}));
            }
        }).catch((err) => console.log(err));
    }, [dispatch]);
}

export default useGetSellerInfo;