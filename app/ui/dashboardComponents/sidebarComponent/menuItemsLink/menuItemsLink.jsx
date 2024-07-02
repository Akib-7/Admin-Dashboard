"use client";
import React from "react";
import Link from "next/link";
import styles from "./menuItemsLink.module.css";
import { usePathname } from "next/navigation";
function MenuItemsLink({ item }) {
  //path name hook tells about the current route we are in
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.activeItem
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuItemsLink;
