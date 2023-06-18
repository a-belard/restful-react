import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const styles = {
    container: "flex flex-row items-center relative",
    content: "w-4/5 h-screen bg-[color:var(--secondaryFrontColor)]",
  };
  return (
    <div className={styles.container}>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
