import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginModal from "./Login/LoginModal";
import { useContext } from "react";
import { ShopContext } from "../store/shop-store";
import { Badge } from "@mui/material";

const Navbar = (props: any) => {
  const { getDiffItemsInCart } = useContext(ShopContext);

  const handleOpenLoginModal = () => {
    props.setOpenModal(true);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navbarContent}>
        <div className={classes.navbarLeft}>
          <div>
            <MenuIcon></MenuIcon>
          </div>
          <div>
            {" "}
            <SearchIcon></SearchIcon>
          </div>
        </div>
        <div className={classes.logo}>
          <Link to="/shop" className={classes.navbarItem}>
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
