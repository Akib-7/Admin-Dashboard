import React from "react";
import styles from "@/app/ui/dashboardComponents/products/fetchSingleProduct/fetchSingleProduct.module.css";
import Image from "next/image";
function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Product Name</label>
          <input type="text" name="username" placeholder="Iphone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="PKR" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="98" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Black" />
          <label>Size</label>
          <input name="text" id="size" placeholder="Medium" />
          <label>Category</label>
          <select name="category" id="category">
            <option value="Phones">Phone</option>
            <option value="Jeans">Jeans</option>
          </select>
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows="10"
            placeholder="Description"
          ></textarea>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default SingleProductPage;
