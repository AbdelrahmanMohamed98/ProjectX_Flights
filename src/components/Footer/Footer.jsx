import React from "react";
import logo from "../../assets/logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa";
import {
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="logo" />
          </div>
          <p>
            Your mind should be stronger than your
            feeling, Fly!
          </p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="footerlink">
          <span className="linkTitle">
            Quick Guide
          </span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How To</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Our Communities</a>
          </li>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="footerlink">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="">Chauffeur</a>
          </li>
          <li>
            <a href="">Our Partners</a>
          </li>
          <li>
            <a href="">Destinations</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programme Rules</a>
          </li>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="footerlink">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-IN</a>
          </li>
          <li>
            <a href="">Manage Your Booking</a>
          </li>
        </div>
      </div>

      <div className="copyRight flex">
        <p>
          ProjectX Design | Developed by{" "}
          <a
            href="https://www.linkedin.com/in/abdelrahman-muhamed/"
            target="_blank">
            Abdelrahman ALi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
