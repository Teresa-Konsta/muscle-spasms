import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import English from '../posts/en/to-beloved';
import Ukrainian from '../posts/ua/to-beloved';
import PageContainer from '../components/UI/PageContainer';
import styles from '../styles/General.module.css';

export default function ToBeloved() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? English : Ukrainian;

  return (
    <Fragment>
      <Head>
        <title>{t.header}</title>
        <meta name='To beloved' content={t.content} />
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
            <p>{t.p5}</p>
            <div className={styles.imgWorld}>
              <Image                            
                layout='intrinsic'
                alt='photo'
                src='/photos/world.jpg'
                width={669}
                height={501}
                quality='75'
              />
            </div>
            <p>P.S.&nbsp;{t.p6}</p>
          </section>
        </div>
      </PageContainer>
    </Fragment>
  );
}
