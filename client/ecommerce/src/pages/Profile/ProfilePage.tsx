import React from "react";
import classes from "./Profile.module.css";
import { AuthContext } from "../../store/auth-store";
import { useContext } from "react";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    authCtx?.logout();
    navigate("/");
  };

  return (
    <div className={classes.profile}>
      <div className={classes.header}>
        <h3 className={classes.title}>My Profile</h3>
        <button className={classes.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className={classes.profileItems}>
        <div className={classes.profileItem}>
          <div className={classes.profileItemTitle}>My customer data</div>
          <div className={classes.profileItemBody}>
            <button className={classes.profileItemButton}>
              Show customer data
            </button>
          </div>
        </div>
        <div className={classes.profileItem}>
          <div className={classes.profileItemTitle}>My Orders</div>
          <div className={classes.profileItemBody}>
            <button
              className={classes.profileItemButton}
              onClick={() => {
                navigate("/profile/orders");
              }}
            >
              Show orders
            </button>
          </div>
        </div>
        <div className={classes.profileItem}>
          <div className={classes.profileItemTitle}>My addresses</div>
          <div className={classes.profileItemBody}>
            <button className={classes.profileItemButton}>
              Show addresses
            </button>
          </div>
        </div>
        <div className={classes.profileItem}>
          <div className={classes.profileItemTitle}>My wishlist</div>
          <div className={classes.profileItemBody}>
            <button className={classes.profileItemButton}>Show wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
