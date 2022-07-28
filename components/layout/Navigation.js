import Link from 'next/link';
import { useRouter } from 'next/router';
import English from '../../posts/en/skeleton';
import Russian from '../../posts/ru/skeleton';
import styles from './Navigation.module.css';

const Navigation = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? English : Russian;

  const navMenu = [
    { title: t.menuitem1, path: '/' },
    { title: t.menuitem2, path: '/what-are-muscle-spasms' },
    { title: t.menuitem3, path: '/why-dangerous' },
    { title: t.menuitem4, path: '/what-to-do' },
    { title: t.menuitem5, path: '/what-not-to-do' },
    { title: t.menuitem6, path: '/psychological-help' },
    { title: t.menuitem7, path: '/to-parents' },
  ];

  return (
    <nav className={`${locale === 'en' ? styles.menuEN : styles.menuRU}`}>
      <ul>
        {navMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link key={index} href={item.path}>
                <a
                  className={`${
                    router.pathname === item.path ? styles.activeLink : null
                  }`}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
        <li className={styles.lastli}>
          <Link href='/to-beloved'>
            <a
              className={`${
                router.pathname === '/to-beloved' ? styles.activeLink : null
              }`}
            >
              {t.lastmenu}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
