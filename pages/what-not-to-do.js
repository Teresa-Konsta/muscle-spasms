import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import English from '../posts/en/what-not-to-do';
import Russian from '../posts/ru/what-not-to-do';
import PageContainer from '../components/UI/PageContainer';
import styles from '../styles/General.module.css';

export default function NotToDo() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? English : Russian;

  return (
    <Fragment>
      <Head>
        <title>{t.header}</title>
        <meta name='What not to do' content={t.content} />
      </Head>
      <PageContainer>
        <div className={styles.everything}>
          <div className={styles.headline}>
            <h1>{t.header}</h1>
          </div>
          <section>
            <p>{t.firstP}:</p>
            <ul>
              <li>
                <b>
                  <i>{t.stress}</i>
                </b>
                &nbsp;{t.stressP};
              </li>
              <li>
                {t.sleepP}&nbsp;
                <b>
                  <i>{t.sleep}</i>
                </b>;
              </li>
              <li>
                <b>
                  <i>{t.work}</i>
                </b>
                &nbsp;{t.workP};
              </li>
              <li>
                <b>
                  <i>{t.oxygen}</i>
                </b>
                &nbsp;{t.oxygenP};
              </li>
              <li>
                <b>
                  <i>{t.overuse}</i>
                </b>
                &nbsp;{t.overuseP};
              </li>
              <li>
                <b>
                  <i>{t.diet}</i>
                </b>
                &nbsp;{t.dietP};
              </li>
              <li>
                <b>
                  <i>{t.hydration}</i>
                </b>
                &nbsp;{t.hydrationP};
              </li>
              <li>
                {t.liftingS}&nbsp;
                <b>
                  <i>{t.lifting}</i>
                </b>
                &nbsp;{t.liftingP}
              </li>
            </ul>
            <div className={styles.imgNeck}>
              <Image                            
                layout='intrinsic'
                alt='photo'
                src='/photos/neck.jpg'
                width={833.5}
                height={240}
                quality='75'
              />
          </div>
            <p>
              {t.mainS}&nbsp;
              <b>
                <i>{t.osteopathy}</i>
              </b>
              .&nbsp;{t.mainP}
            </p>
          </section>
        </div>
      </PageContainer>
    </Fragment>
  );
}
