import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import PageHeader from "../components/Dashboard/PageHeader";

export default function Dashboard() {
  const styles = {
    container: "flex flex-row items-start relative",
    content: "w-4/5 h-screen px-6",
  };
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <PageHeader />
        <Outlet />
      </div>
    </div>
  );
}
