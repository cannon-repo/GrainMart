import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { setUser } from "../../Redux/UserDataSlice";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");
  const [loginBtnActive, setLoginBtnActive] = useState(false);

  useEffect(() => {
    if(!userId || !pwd) {
        setLoginBtnActive(false);
        return;
    }
    if(pwd.length < 6) {
        setLoginBtnActive(false);
        return;
    }
    setLoginBtnActive(true);
  }, [userId, pwd]);

  const disabledBg = {
      backgroundColor: loginBtnActive ? 'transparent' : 'gainsboro',
  }

  const loginClickHandler = (e) => {
    e.preventDefault();
    fetch('api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({UserId: userId, Pwd: pwd})
    }).then((res) => res.json()).then((data) => {
      if(data.success) {
        dispatch(setUser({name: data.msg.Name, userId: data.msg.UserId}));
        navigate("/");
      } else {
        alert(data.msg);
      }
    }).catch((err) => console.log(err));
  }

  return (
    <section className="LoginWrap">
      <form className="LoginForm">
        <div className="SwitchWrap">
          <NavLink
            to="/register"
            className="RegisterSwitch"
            style={{
              backgroundColor: "gainsboro",
              color: "#999",
              cursor: "pointer",
            }}
          >
            REGISTER
          </NavLink>
          <span
            className="LoginSwitch"
            style={{ borderBottom: "2px solid limegreen" }}
          >
            LOGIN
          </span>
        </div>
        <div className="LoginBind">
          <div className="LoginFieldWrap">
            <label>UserId</label>
            <input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              type="text"
              placeholder="Enter UserId"
            />
          </div>
          <div className="LoginFieldWrap">
            <label>Password</label>
            <input
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <button className="LoginBtn" style={disabledBg} disabled={!loginBtnActive} onClick={loginClickHandler}>Login</button>
      </form>
    </section>
  );
};

export default Login;
