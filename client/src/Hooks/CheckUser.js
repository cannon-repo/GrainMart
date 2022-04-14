import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, resetUser } from "../Redux/UserDataSlice";

const useCheckUser = () => {
    const dispatch = useDispatch();
    const hasUser = useSelector((state) => state.userData.hasUser);
    const success = useRef(false);

    useEffect(() => {
        fetch('/api/user/loggedUser').then((res) => res.json()).then((data) => {
            if (data.success) {
                // console.log('Data from checkUser Hook',data);
                dispatch(setUser({ name: data.msg.Name, userId: data.msg.UserId, isSeller: data.msg.IsSeller }));
                localStorage.setItem('loggedin', true);
                success.current = true;
            } else {
                localStorage.removeItem('loggedin');
                dispatch(resetUser());
            }
        }).catch((err) => console.log(err));
    }, [dispatch, hasUser]);
    return success.current === true ? true : false;
}

export default useCheckUser;