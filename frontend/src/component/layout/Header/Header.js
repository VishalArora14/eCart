import React from "react";
// import { ReactNavbar } from "overlay-navbar";
import logo from "../../../Images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";

const options = {
  burgerColor : "grey",
  burgerColorHover: "rgb(236, 236, 236)",
  logo,
  logoWidth: "20vmax",
  navColor1: "rgb(52, 52, 52)",
  logoHoverSize: "10px",
  logoHoverColor: "rgb(236, 236, 236)",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  // link4Url: "/about",
  link1Size: "2.3vmax",
  link1Color: "rgb(236, 236, 236)",
  link1ColorHover: "#ff9f1c",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1Margin: "2vmax",
  link1Family: "cursive",
  profileIconUrl: "/login",
  searchIconUrl: "/search",
  cartIconUrl: "/cart",
  profileIconColor: "rgb(236, 236, 236)",
  searchIconColor: "rgb(236, 236, 236)",
  cartIconColor: "rgb(236, 236, 236)",
  profileIconColorHover: "#ff9f1c",
  searchIconColorHover: "#ff9f1c",
  cartIconColorHover: "#ff9f1c",
  cartIconMargin: "1vmax",
  profileIconMargin: "1vmax",
  searchIconMargin: "1vmax",
  profileIcon: true,
  searchIcon: true,
  cartIcon: true,
  ProfileIconElement: FaUserAlt,
  CartIconElement: FaShoppingCart,
  SearchIconElement: FaSearch,
  logoTransition: "0.1",
  logoAnimationTime: "0.1",

  nav1Transition: "0.1",
  nav2Transition: "0.2",
  nav3Transition: "0.3",
  nav4Transition: "0.4",

  link1Transition: "0.1",
  link2Transition: "0.2",
  link3Transition: "0.3",
  link4Transition: "0.4",

  link1AnimationTime: "0.1",
  link2AnimationTime: "0.2",
  link3AnimationTime: "0.3",
  link4AnimationTime: "0.4",

  searchIconTransition: "0.2",
  cartIconTransition: "0.2",
  profileIconTransition: "0.2",

  searchIconAnimationTime: "0.2",
  cartIconAnimationTime: "0.2",
  profileIconAnimationTime: "0.2",
};

const Header = () => {
  return (
    <div>
      {/* <ReactNavbar {...options} /> */}
      <div className="context">
        <Link className="context" to={"/"}>GenZCart</Link>
      </div>
      <div className="titleBar">
        <Link className="titleBarHeading" to={"/"}>Home</Link>
        <Link className="titleBarHeading" to={"/products"}>Products</Link>
        <Link className="titleBarHeading" to={"/search"}>Search <FaSearch/></Link>
        <Link className="titleBarHeading" to={"/cart"}>Cart <FaShoppingCart/></Link>
        <Link className="titleBarHeading" to={"/login"}>Profile <FaUserAlt/></Link>
      </div>
    </div>
  );
};

export default Header;
