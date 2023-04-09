import Link from 'next/link';
import { useRouter } from 'next/router';
import English from '../../posts/en/skeleton';
import Ukrainian from '../../posts/ua/skeleton';
import { SiInstagram } from 'react-icons/si';
import styles from './Header.module.css';

const Header = () => {
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? English : Ukrainian;

    const instaHandler = () => {
        router.push('https://instagram.com/chronicmusclepain?igshid=ZDdkNTZiNTM=');
    };

    const setENHandler = () => {
        const locale = 'en';
        router.push('/', '/', {locale});
    };

    const setUAHandler = () => {
        const locale = 'ua';
        router.push('/', '/', {locale});
    };

    return(
        <header className={styles.header}>
            <div>                       
                <h2>
                    <Link href='/'>              
                        {t.header}
                    </Link>
                </h2>
            </div>
            <div className={styles.btns}>
                <h2 onClick={instaHandler}>
                    <SiInstagram className={styles.icon}/>
                </h2>
                <button className={styles.singlebtn} onClick={setENHandler}>
                    <h2>&nbsp;EN</h2>
                </button>
                <button className={styles.singlebtn} onClick={setUAHandler}>
                    <h2>&nbsp;UA</h2>
                </button>
            </div>                                     
        </header>
    );
};

export default Header;