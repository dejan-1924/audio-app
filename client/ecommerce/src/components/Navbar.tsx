import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginModal from "./Login/LoginModal";
import { useContext, useState, useEffect, useRef } from "react";
import { ShopContext } from "../store/shop-store";
import { Badge } from "@mui/material";
import Backdrop from "./Backdrop";
import SideMenu from "./SideMenu";
import { AuthContext } from "../store/auth-store";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = (props: any) => {
  const { getDiffItemsInCart } = useContext(ShopContext);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const authCtx = useContext(AuthContext);
  const shopCtx = useContext(ShopContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleOpenLoginModal = () => {
    props.setOpenModal(true);
  };

  const handleOpenSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const handleSearch = (event: any) => {
    event.preventDefault();
    console.log("as");
    if (search) {
      shopCtx?.setSearchQuery(search);
      shopCtx?.resetPage();
      navigate("/shop");
    } else {
      return;
    }
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
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
        {!isSearchOpen ? (
          <>
            <div className={classes.navbarLeft}>
              <div onClick={handleOpenSideMenu}>
                <MenuIcon></MenuIcon>
              </div>
              <div
                onClick={() => setIsSearchOpen(true)}
                className={classes.search}
              >
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
              <div
                onClick={() => setIsSearchOpen(true)}
                className={classes.searchFS}
              >
                <SearchIcon></SearchIcon>
              </div>
              {!authCtx?.isLoggedIn ? (
                <Link to="/login" className={classes.navbarItem}>
                  <PersonOutlineIcon></PersonOutlineIcon>
                </Link>
              ) : (
                <Link to="/profile" className={classes.navbarItem}>
                  <PersonOutlineIcon></PersonOutlineIcon>
                </Link>
              )}

              <Link to="/wishlist" className={classes.navbarItem}>
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </Link>
              <Link to="/cart" className={classes.navbarItem}>
                <Badge badgeContent={getDiffItemsInCart()} color="primary">
                  <ShoppingCartIcon></ShoppingCartIcon>
                </Badge>
              </Link>
            </div>
          </>
        ) : (
          <div className={classes.searchContainer}>
            <form onSubmit={handleSearch} className={classes.searchForm}>
              <input
                className={classes.searchInput}
                autoFocus
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              ></input>

              <button type="submit" className={classes.formButton}>
                <SearchIcon></SearchIcon>
              </button>
              <button
                onClick={handleSearchClose}
                className={classes.formButton}
              >
                <CloseIcon></CloseIcon>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
