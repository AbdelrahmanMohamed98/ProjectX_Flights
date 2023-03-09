import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { BsPhoneVibrate } from "react-icons/bs";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [acitve, setAcitve] =
    useState("navBarMenu");
  const showNavBar = () => {
    setAcitve("navBarMenu showNavBar");
  };
  const removeNavBar = () => {
    setAcitve("navBarMenu");
  };

  const [noBg, AddBg] = useState("navBarTwo");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      AddBg("navBarTwo navBarWithBg");
    } else {
      AddBg("navBarTwo");
    }
  };

  window.addEventListener("scroll", addBgColor);
  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Login</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="logo" />
        </div>

        <div className={acitve}>
          <ul className="menu flex">
            <li
              onClick={removeNavBar}
              className="listItem">
              Home
            </li>
            <li
              onClick={removeNavBar}
              className="listItem">
              About
            </li>
            <li
              onClick={removeNavBar}
              className="listItem">
              Offers
            </li>
            <li
              onClick={removeNavBar}
              className="listItem">
              Seats
            </li>
            <li
              onClick={removeNavBar}
              className="listItem">
              Destinations
            </li>
          </ul>
          <button
            onClick={removeNavBar}
            className="btn flex btnOne ">
            Contact
          </button>
        </div>
        <button className="btn flex btnTwo ">
          Contact
        </button>
        <div
          className="toggleIcon"
          onClick={showNavBar}
          onDoubleClick={removeNavBar}>
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
