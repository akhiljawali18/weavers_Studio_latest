import type { ReactNode } from "react";
import MicrositeHeader from "../components/MicrositeHeader";
import MicrositeFooter from "../components/MicrositeFooter";
import styles from "../styles/microsite.module.css";

type MicrositeLayoutProps = {
  children: ReactNode;
};

const MicrositeLayout = ({ children }: MicrositeLayoutProps) => {
  return (
    <div className={styles.shell}>
      <MicrositeHeader />
      <main className={styles.main}>{children}</main>
      <MicrositeFooter />
    </div>
  );
};

export default MicrositeLayout;
