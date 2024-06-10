import Image from "next/image";
import styles from "./page.module.css";
import DashboardPage from "./dashboard";
import IndexPage from "./layouts/dashboard/layout";
import { LayoutDashboard } from "./layouts";
import LoginPage from "./login";

export default function Home() {
 return (
  <>
   {/* <LayoutDashboard>
    <DashboardPage />
   </LayoutDashboard> */}
   <LoginPage />
  </>
 );
}
