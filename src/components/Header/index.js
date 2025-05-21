import React, { useState } from "react";
import Menus from "../Menu";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [toogle, setToggle] = useState("");
  const [menu, setMenu] = useState("");
  const [, setSmall] = useState(false);
  const toogleMenu = () => {
    setToggle(toogle === "" ? "on" : "");
    setMenu(menu === "" ? "show" : "");
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setSmall(window.pageYOffset > 10));
  }

  return (
    <div
      className={`${styles.headerWrapper} ${
        window.pageYOffset > 10 ? `${styles.small}` : ""
      }`}
    >
      <div className={styles.headerInner}>
        <div className="container">
          <div className={`d-flex align-items-center ${styles.header}`}>
            <div className="logo">
              <Link to="/">
                <img
                  src="/assets/images/logo.png"
                  alt="logo"
                  height="auto"
                  width="100%"
                />
              </Link>
            </div>
            <div className={`ml-auto ${styles.toggle}`} onClick={toogleMenu}>
              <div className={`${styles.nav}`}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              {/* <img
                  src={`${URL}/assets/images/dots.png`}
                  alt="toggle-icon"
                  className={`${styles.nav} ${
                    toogle === "on" ? styles.toggle : " "
                  }`}
                  onClick={toogleMenu}
                /> */}

              <Menus menu={menu} setMenu={setMenu} setToggle={setToggle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
