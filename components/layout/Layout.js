import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Navigation from './Navigation';
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import styles from './Layout.module.css';

const Layout = (props) => {
  const smallScreen = useMediaQuery({ query: '(max-width: 499px)' });
  const bigScreen = useMediaQuery({ query: '(min-width: 500px)' });

  const [showMenu, setShowMenu] = useState(false);

  let menuTxt;
  if (showMenu) {
    menuTxt = <ImMenu4 className={styles.icon} />;
  } else {
    menuTxt = <ImMenu3 className={styles.icon} />;
  }

  const toggleMenuHandler = (event) => {
    event.preventDefault();
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <Header />
      {smallScreen && (
        <div>
          <button className={styles.menubtn} onClick={toggleMenuHandler}>
            {menuTxt}
          </button>
          {showMenu && <Navigation />}
        </div>
      )}
      {bigScreen && <Navigation />}
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        &copy;&nbsp;Copyright&nbsp;
        <a href='https://www.linkedin.com/in/tereza-teresa-konstari-8b9594131/'>
          Tereza Konstari
        </a>
        &nbsp;2021
        <br />
        Design and information by Tereza Konstari
        <br />
        Photos by Diana Kolomiitseva and Tereza Konstari
        <br />
        MIT License
      </footer>
    </div>
  );
};

export default Layout;
