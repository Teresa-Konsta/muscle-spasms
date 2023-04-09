import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import English from '../posts/en/why-dangerous';
import Ukrainian from '../posts/ua/why-dangerous';
import PageContainer from '../components/UI/PageContainer';
import styles from '../styles/General.module.css';

export default function WhyDangerous() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? English : Ukrainian;

  return (
    <Fragment>
      <Head>
        <title>{t.header}</title>
        <meta name='Why is it dangerous' content={t.content} />
      </Head>
      <PageContainer>
        <div className={styles.everything}>
          <div className={styles.headline}>
            <h1>{t.header}</h1>
          </div>
          <section>
            <p>{t.pF}</p>
            <p>
              <b>{t.kid}</b>
            </p>
            <ul>
              <li>{t.kiditem1}</li>
              <li>{t.kiditem2}</li>
              <li>{t.kiditem3}</li>
              <li>{t.kiditem4}</li>
              <li>{t.kiditem5}</li>
            </ul>
            <p>
              <b>{t.teen}</b>
            </p>
            <ul>
              <li>{t.teenitem1}</li>
              <li>{t.teenitem2}</li>
              <li>{t.teenitem3}</li>
              <li>{t.teenitem4}</li>
              <li>{t.teenitem5}</li>
              <li>{t.teenitem6}</li>
            </ul>
            <p>
              <b>{t.adult}</b>
            </p>
            <ul>
              <li>{t.adultitem1}</li>
              <li>{t.adultitem2}</li>
              <li>{t.adultitem3}</li>
              <li>{t.adultitem4}</li>
              <li>{t.adultitem5}</li>
              <li>{t.adultitem6}</li>
              <li>{t.adultitem7}</li>
            </ul>
          </section>
          <div className={styles.imgApathy}>
              <Image                            
                layout='intrinsic'
                alt='photo'
                src='/photos/apathy.jpg'
                width={401.4}
                height={546}
                quality='75'
              />
            </div>
        </div>
      </PageContainer>
    </Fragment>
  );
}
