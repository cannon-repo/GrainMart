import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../Hooks/ResizeHook";

const SideNav = ({trigger}) => {
  const user = useSelector((state) => state.userData);

  const size = useWindowSize()[0];

  const [navClass, setNavClass] = useState(
    size <= 700 ? "SlideNavOut" : "SlideNavIn"
  );

  useEffect(() => {
    if (size <= 700) {
      if (trigger) {
        setNavClass("SlideNavIn");
      } else {
        setNavClass("SlideNavOut");
      }
    } else {
      setNavClass("");
    }
  }, [size, navClass, trigger]);

  const navLinkStyles = {
    width: "100%",
    textDecoration: "none",
    color: "#444",
    padding: "15px 20px",
  };

  return (
    <section className={`SideNav ${navClass}`}>
      <section className="NavHead">
        <p>
          <p>Hello,</p> <b>{user.userName}</b>
        </p>
        <div className="UserImg"></div>
      </section>
      <section className="NavData">
        <div className="Nav1">
          <p>
            <NavLink
              className={({ isActive }) => (isActive ? "dimmed" : "")}
              style={navLinkStyles}
              to="info"
            >
              Info
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive }) => (isActive ? "dimmed" : "")}
              style={navLinkStyles}
              to="sellerinfo"
            >
              Seller Info
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive }) => (isActive ? "dimmed" : "")}
              style={navLinkStyles}
              to="addresses"
            >
              Addresses
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive }) => (isActive ? "dimmed" : "")}
              style={navLinkStyles}
              to="orders"
            >
              Orders
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive }) => (isActive ? "dimmed" : "")}
              style={navLinkStyles}
              to="/wishlist"
            >
              Wishlist
            </NavLink>
          </p>
        </div>
        <div className="Nav2">
          <p>Logout</p>
        </div>
      </section>
    </section>
  );
};

export default SideNav;
