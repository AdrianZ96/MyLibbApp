import React from 'react';
import styles from './Home.module.css';

const Home = ({ books, setActiveTab }) => {
  const ownedCount = books.filter(b => b.progress !== 'wanted').length;
  const wishlistCount = books.filter(b => b.progress === 'wanted').length;
  const favoriteBook = [...books].reverse().find(b => b.isFavorite);
  const readCount = books.filter(b => b.progress === 'fulfilled').length;

  return (
    <div className={styles.homeDashboard}>
      <div className={styles.welcomeHero}>
        <h1>Witaj w Twojej Bibliotece</h1>
        <p>"Czytanie to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła."</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard} onClick={() => setActiveTab('library')}>
          <h3>{ownedCount}</h3>
          <p>Książek na półce</p>
        </div>
        <div className={styles.statCard} onClick={() => setActiveTab('wishlist')}>
          <h3>{wishlistCount}</h3>
          <p>W koszyku</p>
        </div>
        <div className={`${styles.statCard} ${styles.statRead}`}>
          <h3>{readCount}</h3>
          <p>Przeczytane</p>
        </div>
      </div>

      {favoriteBook && (
        <div className={styles.featuredFavorite}>
          <h2>Twoja Perełka</h2>
          <div className={styles.featuredContent}>
             <img src={favoriteBook.image || 'pusta.jpg'} alt="Ulubiona" />
             <div>
                <h3>{favoriteBook.title}</h3>
                <p>To Twoja ulubiona pozycja. Może warto do niej wrócić?</p>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;