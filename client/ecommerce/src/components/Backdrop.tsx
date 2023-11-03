import React from "react";
import classes from "./styles/Navbar.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backDrop} onClick={props.closeSideMenu}>
      Backdrop
    </div>
  );
};

export default Backdrop;
