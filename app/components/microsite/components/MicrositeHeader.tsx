"use client";

import Link from "next/link";
import { micrositeNavigation } from "../data/navigation";
import { useMicrositeNav } from "../hooks/useMicrositeNav";
import styles from "../styles/microsite.module.css";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const isActive = useMicrositeNav(href);
  const className = isActive
    ? `${styles.navLink} ${styles.activeLink}`
    : styles.navLink;

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};

const MicrositeHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.brand}>Dummy Microsite</div>
        <nav className={styles.nav} aria-label="Microsite navigation">
          {micrositeNavigation.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MicrositeHeader;
