import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import classes from "./styles/RootLayout.module.css";
import LoginModal from "./Login/LoginModal";
import { useState } from "react";
import Footer from "./Footer";

const RootLayout = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleCloseModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <>
      <div>
        {/*<div className={classes.newsContainer}>
          <div className={classes.news}>
            10% ON TOP MUSIC SALE - Code: recdeal
          </div>
        </div>*/}
        <Navbar setOpenModal={setLoginModalOpen}></Navbar>
        <main className={classes.main}>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
      {loginModalOpen && (
        <>
          <LoginModal setOpenModal={setLoginModalOpen}></LoginModal>
        </>
      )}
    </>
  );
};

export default RootLayout;
