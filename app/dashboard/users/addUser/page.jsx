import React from "react";
import styles from "@/app/ui/dashboardComponents/users/addUser/addUser.module.css";
function page() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="number" name="phone" placeholder="Phone#" />
        <select name="adminCheck" id="adminCheck">
          <option value={false} selected>
            Is Admin?
          </option>

          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="activeCheck" id="activeCheck">
          <option value={true} selected>
            Is Active?
          </option>

          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Adress"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default page;
