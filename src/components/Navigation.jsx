import React from 'react';
import styles from './Navigation.module.css';

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className={styles.mainNav}>
      <button 
        className={`${styles.navButton} ${activeTab === 'home' ? styles.active : ''}`} 
        onClick={() => setActiveTab('home')}
      >
        Home
      </button>
      <button 
        className={`${styles.navButton} ${activeTab === 'library' ? styles.active : ''}`} 
        onClick={() => setActiveTab('library')}
      >
        Moja Biblioteka
      </button>
      <button 
        className={`${styles.navButton} ${activeTab === 'wishlist' ? styles.active : ''}`} 
        onClick={() => setActiveTab('wishlist')}
      >
        Koszyk / Planowane
      </button>
    </nav>
  );
};

export default Navigation;