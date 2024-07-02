import Link from "next/link";
import React from "react";
import Image from "next/image";
import Pagination from "@/app/ui/dashboardComponents/pagination/Pagination";
import Search from "@/app/ui/dashboardComponents/searchComponent/Search";
import styles from "../../ui/dashboardComponents/products/products.module.css";
function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/addProduct">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeadings}>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  className={styles.productImage}
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                ></Image>
                <span>Shirt</span>
              </div>
            </td>
            <td>Desc</td>
            <td>3400 PKR</td>
            <td>07-02-2024</td>
            <td>74</td>
            <td>
              <div className={styles.actionButtons}>
                <Link href="/dashboard/products/testid">
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
        </tbody>
      </table>

      <Pagination />
    </div>
  );
}

export default Products;
