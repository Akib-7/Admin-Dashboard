import React from "react";
import styles from "@/app/ui/dashboardComponents/products/addProduct/addProduct.module.css";
function page() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Product Name" name="title" required />
        <select name="category" id="category">
          <option value="general">Choose a category</option>

          <option value="kitchen">Kitchen</option>
          <option value="computer">Computer</option>
          <option value="phone">Phone</option>
          <option value="denim">Denim</option>
          <option value="bottle">Bottle</option>
        </select>
        <input type="number" name="price" placeholder="Price" />
        <input type="number" name="stock" placeholder="Stock" />
        <input type="text" name="color" placeholder="Color" />
        <input type="text" name="size" placeholder="Size" />
        <textarea
          name="description"
          id="description"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default page;
