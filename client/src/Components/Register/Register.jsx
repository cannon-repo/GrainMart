import React, { useEffect, useRef, useState } from "react";
import "./Register.css";
import { useDynamicBannerSize } from "../../Hooks/GetDynamicWidth";
import RegFormControls from "./RegFormControls";
import { useDispatch, useSelector } from "react-redux";
import {setRegisterActive, setRegisterDisabled, getPrevSection} from "../../Redux/RegisterDataSlice";
import {useNavigate, NavLink} from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [pwd,setPwd] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');

  const formRef = useRef(null);
  const formWidth = useDynamicBannerSize(formRef);

  const sectionWrapStyles = {
    minWidth: `${formWidth}px`,
  };

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const sectionNum = useSelector((state) => state.regData.sectionNum);

  const swipeLeftStyle = {
    transform: `translateX(-${formWidth}px)`,
  }

  const swipeRightStyle = {
    transform: `translateX(0px)`,
  }

  const [swipeStyle, setSwipeStyle] = useState({});
  const isFirstRender = useRef(true);

  useEffect(() => {
    if(isFirstRender.current){
      setSwipeStyle(swipeRightStyle);
      isFirstRender.current = false;
      return;
    }
    if(sectionNum === 1) {
      setSwipeStyle(swipeRightStyle);
    } else if(sectionNum === 2) {
      setSwipeStyle(swipeLeftStyle);
    }
    // eslint-disable-next-line
  },[sectionNum]);

  useEffect(() => {
    if(!name || !userId || !pwd || !pwdCheck) {
      dispatch(setRegisterDisabled());
      return;
    }
    if(pwd !== pwdCheck || userId.length < 4 || pwd.length < 6) {
      dispatch(setRegisterDisabled());
      return;
    }
    dispatch(setRegisterActive());
  }, [name, userId, pwd, pwdCheck,dispatch]);

  const registerClickHandler = (e) => {
    e.preventDefault();
    fetch('/api/user/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({Name: name, UserId: userId, Pwd: pwd})
    }).then((res) => res.json()).then((data) => {
      if(data.success) {
        if(sectionNum === 2) {
          dispatch(getPrevSection());
          navigate("/login");
        }
      } else {
        alert(data.msg);
      }
    }).catch((err) => console.log(err));
  }

  return (
    <section className="RegisterWrap">
      <form className="RegisterForm" ref={formRef}>
        <div className="SwitchWrap">
          <span className="RegisterSwitch" style={{borderBottom: '2px solid rgb(255,200,0)'}}>REGISTER</span>
          <NavLink to="/login" className="LoginSwitch" style={{backgroundColor: 'gainsboro', color: '#999', cursor: 'pointer'}}>LOGIN</NavLink>
        </div>
        <div className="RegisterBind" style={swipeStyle}>
          <div className="RegPart1" ref={section1Ref} style={sectionWrapStyles}>
            <div className="RegFieldWrap">
              <label>Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
            </div>
            <div className="RegFieldWrap">
              <label>UserId</label>
              <input value={userId} onChange={(e) => setUserId(e.target.value)} type="text" placeholder="Enter UserId" />
            </div>
          </div>
          <div className="RegPart2" ref={section2Ref} style={sectionWrapStyles}>
            <div className="RegFieldWrap">
              <label>Password</label>
              <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="Enter Password" />
            </div>
            <div className="RegFieldWrap">
              <label>Re-enter Password</label>
              <input value={pwdCheck} onChange={(e) => setPwdCheck(e.target.value)} type="password" placeholder="Re-enter Password" />
            </div>
          </div>
        </div>
        <RegFormControls registerHandler={registerClickHandler}/>
      </form>
    </section>
  );
};

export default Register;