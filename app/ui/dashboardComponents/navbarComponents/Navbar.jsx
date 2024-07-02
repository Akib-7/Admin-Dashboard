"use client";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { MdOutlineChat, MdNotifications, MdPublic } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        {/*
if routes are like this : /dashboard/users 
{pathname.split('/').pop} 
it will give us "users"

*/}
        {pathname.split("/").pop( )}
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.searchBox}>
          <MdSearch />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
        <div className={styles.menuIcons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
