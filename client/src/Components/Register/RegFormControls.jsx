import React from "react";
import { BsDot } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  getNextSection,
  getPrevSection,
} from "../../Redux/RegisterDataSlice";

const RegFormControls = ({registerHandler}) => {
  const dispatch = useDispatch();

  const sectionNum = useSelector((state) => state.regData.sectionNum);
  const prevBtnStatus = useSelector((state) => state.regData.prevActive);
  const nextBtnStatus = useSelector((state) => state.regData.nextActive);
  const regBtnStatus = useSelector((state) => state.regData.regActive);

  const prevBtnClick = () => {
    if (sectionNum === 2) {
      dispatch(getPrevSection());
    }
    return;
  };

  const nextBtnClick = () => {
    if (sectionNum === 1) {
      dispatch(getNextSection());
    }
    return;
  };

  const disabledStyle = {
    prev: {
      backgroundColor: prevBtnStatus ? "transparent" : "gainsboro",
    },
    next: {
      backgroundColor: nextBtnStatus ? "transparent" : "gainsboro",
    },
    reg: {
      backgroundColor: regBtnStatus ? "transparent" : "gainsboro",
    },
  };

  const timeLineDotsStyle = {
    dot1: {
      color: sectionNum === 1 ? "rgb(255,200,0)" : "#999",
    },
    dot2: {
      color: sectionNum === 2 ? "rgb(255,200,0)" : "#999",
    },
  };

  return (
    <div className="RegFormControls">
      <div className="TimelineWrap">
        <span style={timeLineDotsStyle.dot1}>
          <BsDot />
        </span>
        <span style={timeLineDotsStyle.dot2}>
          <BsDot />
        </span>
      </div>
      <div className="RegBtnWrap">
        <button
          className="prevRegSection"
          style={disabledStyle.prev}
          onClick={prevBtnClick}
          disabled={!prevBtnStatus}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="RegBtn"
          style={disabledStyle.reg}
          disabled={!regBtnStatus}
          onClick={registerHandler}
        >
          Register
        </button>
        <button
          className="nextRegSection"
          style={disabledStyle.next}
          onClick={nextBtnClick}
          disabled={!nextBtnStatus}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default RegFormControls;
