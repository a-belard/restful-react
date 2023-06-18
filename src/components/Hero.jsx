import { AiFillCar } from "react-icons/ai";

export default function Hero() {
  const styles = {
    container: "flex flex-col items-center justify-center gap-5 md:gap-20",
    logoContainer: "text-[6em] font-bold text-[color:var(--frontColor)]",
    logoText:
      "text-3xl font-bold text-[color:var(--primaryColor)] text-center tracking-[20px]",
    appDesc: "flex flex-col items-center justify-center gap-4",
    desc: "text-xl text-center text-[color:var(--secondaryFrontColor)]",
  };
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <AiFillCar />
      </div>
      <div className={styles.appDesc}>
        <p className={styles.logoText}>VMS</p>
        <p className={styles.desc}>Vehicle Management System</p>
      </div>
    </div>
  );
}
