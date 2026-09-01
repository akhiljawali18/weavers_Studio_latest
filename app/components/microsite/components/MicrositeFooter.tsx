import styles from "../styles/microsite.module.css";

const MicrositeFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        Dummy Microsite Footer - {year}
      </div>
    </footer>
  );
};

export default MicrositeFooter;
