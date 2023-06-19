import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { dashboardRoutes } from "../../constants/router";

const PageHeader = () => {
  const location = useLocation();
  const route = dashboardRoutes.find(
    (route) => route.path === location.pathname
  );
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const styles = {
    container: "flex justify-between items-center py-10",
    header: "text-3xl font-bold flex gap-4 items-center",
    btn: "px-4 py-2 bg-red-600 text-white rounded-md text-3xl",
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        {route.icon} {route.name}
      </h1>
      <button className={styles.btn} onClick={onLogout}>
        <AiOutlineLogout />
      </button>
    </div>
  );
};

export default PageHeader;
