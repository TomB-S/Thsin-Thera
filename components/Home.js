import styles from '../styles/Home.module.css';

function Home() {
  return (

    // all
    <div className={styles.main}>

      {/* Home Page */}
      <div className={styles.homeBar}>
        <span>Barre</span>
      </div>

      <div className={styles.homePage}>
        <div className={styles.homeLogo}>
          <img src='Logo.png' alt='Logo' style={{width: '460px'}} />
        </div>
        <div className={styles.homeDescription}>
          <span>Thsin Théra Sport</span>
          <span>Intervention Non Médicamenteuse</span>
          <span>"Corps & Esprit"</span>
        </div>
      </div>

    </div>

  );
}

export default Home;
