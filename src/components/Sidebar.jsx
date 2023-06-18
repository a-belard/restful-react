import React from "react";
import { AiFillCar } from "react-icons/ai";
import { PrimaryButton } from "./buttons";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { dashboardRoutes } from "../constants/router";

export default function Sidebar() {
  const styles = {
    container:
      "w-1/5 min-w-[300px] h-screen bg-[color:var(--componentBg)] sticky top-0 left-0 flex flex-col items-center justify-between py-10",
    logoContainer: "w-full flex items-center justify-center flex-col",
    logoText:
      "mt-4 text-3xl font-bold text-[color:var(--frontColor)] text-center tracking-[20px]",
    logo: "text-[6em] font-bold text-[color:var(--frontColor)]",
    profile: "w-[80%]",
    profileBtn: "flex items-center justify-center gap-3",
    active:
      "font-bold border-[dodgerblue] text-[color:var(--frontColor)] bg-[rgba(51,153,255,0.02)]",
    nonActive:
      "font-normal border-[rgba(0,0,0,0)] text-[color:var(--secondaryFrontColor)]",
    navlink:
      "border-l-8 flex justify-start items-center py-10 text-xl pl-20 gap-5",
    navlinks: "flex flex-col w-full",
    iconContainer: "text-3xl",
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <AiFillCar className={styles.logo} />
        <p className={styles.logoText}>VMS</p>
      </div>
      <div className={styles.navlinks}>
        {dashboardRoutes.map((route) => (
          <NavLink
            key={route.name}
            to={route.path}
            className={({ isActive }) =>
              styles.navlink +
              " " +
              (isActive ? styles.active : styles.nonActive)
            }
          >
            <div className={styles.iconContainer}>{route.icon}</div>
            {route.name}
          </NavLink>
        ))}
      </div>
      <div className={styles.profile}>
        <PrimaryButton className={styles.profileBtn}>
          <FaUser />
          Profile
        </PrimaryButton>
      </div>
    </div>
  );
}
