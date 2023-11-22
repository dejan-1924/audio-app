import React from "react";
import classes from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
const SideMenu = (props) => {
  return (
    <div className={classes.sideMenu}>
      <div className={classes.sideMenuHeader}>
        <button
          className={classes.closeSideMenuButton}
          onClick={props.closeModal}
        >
          X
        </button>
      </div>
      <div className={classes.sideMenuBody}>
        <div className={classes.sideMenuItem} onClick={props.closeModal}>
          <Link to="/shop" className={classes.sideMenuLink}>
            Records
          </Link>
        </div>
        <div className={classes.sideMenuItem} onClick={props.closeModal}>
          <Link to="/" className={classes.sideMenuLink}>
            Clothing
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SideMenu;
