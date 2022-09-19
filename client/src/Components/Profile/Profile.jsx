import React, { useState } from "react";
import "./Profile.css";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import { CgMenuLeftAlt } from "react-icons/cg";

const Profile = () => {
  const [hide, setHide] = useState("Hide");
  const [flag, setFlag] = useState(false);

  setTimeout(() => {
    setHide("");
  }, 500);

  return (
    <main className={`ProfileWrap ${hide}`}>
      <SideNav trigger={flag} />
      <section className="Profile">
        <button className="NavTrigger" onClick={() => setFlag(!flag)}>
          <CgMenuLeftAlt />
        </button>
        <div className="ProfileScreens" onClick={() => setFlag(false)}>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Profile;
