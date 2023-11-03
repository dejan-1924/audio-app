import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginModal from "./Login/LoginModal";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../store/shop-store";
import { Badge } from "@mui/material";
import Backdrop from "./Backdrop";
import SideMenu from "./SideMenu";

const Navbar = (props: any) => {
  const { getDiffItemsInCart } = useContext(ShopContext);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleOpenLoginModal = () => {
    props.setOpenModal(true);
  };

  const handleOpenSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSideMenuOpen]);

  const closeSideMenuHandler = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <div className={classes.navbar}>
      {isSideMenuOpen && (
        <SideMenu closeModal={closeSideMenuHandler}></SideMenu>
      )}
      {isSideMenuOpen && (
        <Backdrop closeSideMenu={closeSideMenuHandler}></Backdrop>
      )}
      <div className={classes.navbarContent}>
        <div className={classes.navbarLeft}>
          <div onClick={handleOpenSideMenu}>
            <MenuIcon></MenuIcon>
          </div>
          <div>
            <SearchIcon></SearchIcon>
          </div>
        </div>
        <div className={classes.navbarLeftPC}>
          <Link to="/shop" className={classes.navbarItem}>
            Records
          </Link>
          <Link to="/" className={classes.navbarItem}>
            Clothing
          </Link>
        </div>
        <div className={classes.logo}>
          <Link to="/" className={classes.navbarItem}>
            LOGO
          </Link>
        </div>
        <div className={classes.navbarRight}>
          <Link to="/login" className={classes.navbarItem}>
            <PersonOutlineIcon></PersonOutlineIcon>
          </Link>
          <Link to="/wishlist" className={classes.navbarItem}>
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </Link>
          <Link to="/cart" className={classes.navbarItem}>
            <Badge badgeContent={getDiffItemsInCart()} color="primary">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
