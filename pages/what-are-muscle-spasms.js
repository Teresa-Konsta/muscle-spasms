import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import English from '../posts/en/what-are-spasms';
import Ukrainian from '../posts/ua/what-are-spasms';
import PageContainer from '../components/UI/PageContainer';
import styles from '../styles/General.module.css';

export default function MuscleSpasms(props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? English : Ukrainian;

  return (
    <Fragment>
      <Head>
        <title>{t.header}</title>
        <meta name='What are muscle spasms' content={t.content} />
      </Head>
      <PageContainer>
        <div className={styles.everything}>
          <div className={styles.headline}>
            <h1>{t.header}</h1>
          </div>
          <section>
            <p>
              {t.p1}&nbsp;
              <a href='https://www.webmd.com/fitness-exercise/types-of-muscle-contractions#2'>
                {t.here}
              </a>
              &nbsp;{t.and}&nbsp;
              <a href='https://www.visiblebody.com/learn/muscular/muscle-contractions'>
                {t.here}
              </a>
              .
            </p>
            <p>
              {t.p2}&nbsp;
              <a href='https://www.mda.org/disease/list'>{t.here}</a>.
            </p>
            <p>
              {t.p3}&nbsp;
              <a href='https://www.verywellhealth.com/muscle-pain-what-you-should-know-190093#localized-muscle-pain'>
                {t.here}
              </a>
              &nbsp;{t.and}&nbsp;
              <a href='https://www.spine-health.com/conditions'>{t.here}</a>.
            </p>
            <p>{t.p4}</p>
            <ul>
              <li>{t.listitem1}</li>
              <li>{t.listitem2}</li>
              <li>{t.listitem3}</li>
              <li>{t.listitem4}</li>
              <li>{t.listitem5}</li>
              <li>{t.listitem6}</li>
              <li>{t.listitem7}</li>
            </ul>
          </section>
        </div>
      </PageContainer>
    </Fragment>
  );
}
