import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import English from '../posts/en/to-parents';
import Russian from '../posts/ru/to-parents';
import PageContainer from '../components/UI/PageContainer';
import styles from '../styles/General.module.css';

export default function ToParents() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? English : Russian;

  return (
    <Fragment>
      <Head>
        <title>{t.header}</title>
        <meta name='To parents' content={t.content} />
      </Head>
      <PageContainer>
        <div className={styles.everything}>
          <div className={styles.headline}>
            <h1>{t.header}</h1>
          </div>
          <section>
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
          </section>        
          <div className={styles.imgAkira}>
              <Image                            
                layout='intrinsic'
                alt='photo'
                src='/photos/Akira.jpg'
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
