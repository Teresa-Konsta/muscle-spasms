import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import English from '../posts/en/home';
import Ukrainian from '../posts/ua/home';
import PageContainer from '../components/UI/PageContainer';
import styles from '../styles/General.module.css';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? English : Ukrainian;

  return (
    <Fragment>
      <Head>
        <title>{t.header}</title>
        <meta
          name='google-site-verification'
          content='Ehs1IfoAXebTI9snYl_M8o6u8dRmYSJmcdgZD54IAJE'
        />
        <meta name='description' content={t.content} />
        <meta name='keywords' content='chronic muscle pain, myalgia, fibromyalgia, muscle contractions pain, muscle aches and pain' />
      </Head>
      <PageContainer>
        <div className={styles.everything}>
          <div className={styles.headline}>
            <h1>{t.headline}</h1>
          </div>
          <section>
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>
              <b>{t.disclaimer}</b>
            </p>
            <p>{t.p3}</p>
          </section>
        </div>
      </PageContainer>
    </Fragment>
  );
}
