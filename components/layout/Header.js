import Link from 'next/link';
import { useRouter } from 'next/router';
import English from '../../posts/en/skeleton';
import Ukrainian from '../../posts/ua/skeleton';
import { GiWorld } from 'react-icons/gi';
import styles from './Header.module.css';

const Header = () => {
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? English : Ukrainian;

    const setENHandler = (event) => {
        const locale = 'en';
        router.push('/', '/', {locale});
    };

    const setUAHandler = (event) => {
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
                <h2 onClick={setENHandler}>
                    <GiWorld className={styles.icon}/>
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