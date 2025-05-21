import React from "react";
import styles from "./Menu.module.css";
import Menu from "../../menus";
import { Link } from "react-router-dom";
import { emailPrimary, phoneUS } from "../../PhoneNumber";

const Menus = (props) => {
  const { menu } = props;
  const handleHide = () => {
    props.setMenu("");
    props.setToggle("");
  };

  return (
    <div
      className={`${styles.menu} ${
        menu === "show" ? styles.show : styles.hide
      }`}
    >
      <ul>
        <div className={styles.closeMenu}>
          <button className={styles.closeButton} onClick={handleHide}></button>
        </div>
        {Menu.map((menuItem, index) => {
          return (
            <li key={index}>
              <Link className={styles.menuItem} to={menuItem.slug}>
                {menuItem.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className={styles.conatct}>
        <a href="tel:289-294-0515">{phoneUS}</a>
        <a href={`mailto:${emailPrimary}`}>{emailPrimary}</a>
      </div>
    </div>
  );
};

export default Menus;
