import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import AppTitle from "./AppTitle";
const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <AppTitle />
      <Outlet />
    </div>
  );
};
export default Mainpage;
