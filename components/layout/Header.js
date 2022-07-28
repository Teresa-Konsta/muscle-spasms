import Link from 'next/link';
import { useRouter } from 'next/router';
import English from '../../posts/en/skeleton';
import Russian from '../../posts/ru/skeleton';
import {GiWorld} from 'react-icons/gi';
import styles from './Header.module.css';

const Header = (props) => {
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? English : Russian;

    const setENHandler = (event) => {
        const locale = 'en';
        router.push('/', '/', {locale});
    };

    const setRUHandler = (event) => {
        const locale = 'ru';
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
                <button className={styles.singlebtn} onClick={setRUHandler}>
                    <h2>&nbsp;RU</h2>
                </button>
            </div>                                     
        </header>
    );
};

export default Header;