import React from "react";
import Navbar from "../ui/dashboardComponents/navbarComponents/Navbar";
import Sidebar from "../ui/dashboardComponents/sidebarComponent/Sidebar";
import styles from "../ui/dashboardComponents/dashboard.module.css";
import Footer from "../ui/dashboardComponents/footer/footer";
//This is the layout page for DashBoard Page.Every component called in this layout page will be present in every page of the DashBoard
function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
