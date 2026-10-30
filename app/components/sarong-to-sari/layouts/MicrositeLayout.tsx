import type { ReactNode } from "react";
import MicrositeHeader from "../components/MicrositeHeader";
import MicrositeFooter from "../components/MicrositeFooter";
import styles from "../styles/microsite.module.css";
// import Sidebar from "../../layout/sidebar";

type MicrositeLayoutProps = {
  children: ReactNode;
};

const MicrositeLayout = ({ children }: MicrositeLayoutProps) => {
  return (
    <div className={styles.shell}>
      <MicrositeHeader />
      <main className={styles.main}>{children}</main>
      <MicrositeFooter />
      {/* <Sidebar skip={["sidebar"]} /> */}
    </div>
  );
};

export default MicrositeLayout;
