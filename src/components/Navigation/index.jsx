import styles from "./styles.modules.css";

const Navigation = () => {
  const navItems = ["Home", "Tv Shows", "Movies", "New & Popular", "My List"];

  return (
    <div className={styles.navigation}>
      <div className={styles.mainNavigation}>
        <img src={"/"} alt="logo" />
        <ul className={styles.navigationList}>
          {navItems.map((item) => (
            <li className={styles.navigationItem} key={item}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      {/*<SecondaryNavigation />*/}
    </div>
  );
};

export default Navigation;
