import React from "react";
import styles from "@/app/ui/dashboardComponents/users/fetchSingleUser/fetchSingleUser.module.css";
import Image from "next/image";
function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Akib
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Akib" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Akib" />
          <label>Password</label>
          <input type="password" name="password" placeholder="********" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder="03144088517" />
          <label>Address</label>
          <textarea name="address" id="address" rows="10" />
          <label>Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default SingleUserPage;
