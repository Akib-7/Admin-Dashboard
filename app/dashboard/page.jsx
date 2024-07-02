import React from "react";
import Card from "../ui/dashboardComponents/cards/Card";
import styles from "../ui/dashboardComponents/dashboard.module.css";
import RightBar from "../ui/dashboardComponents/rightBar/Rightbar";
import Transaction from "../ui/dashboardComponents/transactions/Transaction";
import Chart from "../ui/dashboardComponents/charts/Chart";
function Dashoard() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>

      <div className={styles.rightContainer}>
        <RightBar />
      </div>
    </div>
  );
}

export default Dashoard;
