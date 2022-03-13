import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setUser, resetUser} from "../Redux/UserDataSlice";

const useCheckUser = () => {
    const dispatch = useDispatch();
    const hasUser = useSelector((state) => state.userData.hasUser);
    useEffect(() => {
        fetch('api/user/loggedUser').then((res) => res.json()).then((data) => {
            if(data.success) {
              dispatch(setUser({name: data.msg.Name, userId: data.msg.UserId}));
            } else {
                dispatch(resetUser());
            }
        }).catch((err) => console.log(err));
    }, [dispatch, hasUser]);
}

export default useCheckUser;