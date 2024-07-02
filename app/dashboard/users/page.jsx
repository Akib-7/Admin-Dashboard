import React from "react";
import styles from "../../ui/dashboardComponents/users/users.module.css";
import Search from "@/app/ui/dashboardComponents/searchComponent/Search";
import Link from "next/link";

import Pagination from "./../../ui/dashboardComponents/pagination/Pagination";
import { fetchAllUsers } from "@/app/lib/data";
import Image from "next/image";
const Users = async () => {
  const allUsers = await fetchAllUsers();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/addUser">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeadings}>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    className={styles.userImage}
                    src={user.image || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    priority
                  />
                  <span>{user.username}</span>
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>

              <td>
                <div className={styles.actionButtons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default Users;
