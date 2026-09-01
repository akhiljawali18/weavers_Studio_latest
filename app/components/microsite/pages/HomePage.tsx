import styles from "../styles/microsite.module.css";

const HomePage = () => {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Microsite Home</h1>
      <p className={styles.description}>
        This is a self-contained microsite module. All microsite-related
        components, pages, styles, and hooks live inside one folder.
      </p>
    </section>
  );
};

export default HomePage;
