import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import English from '../posts/en/psychological-help';
import Russian from '../posts/ru/psychological-help';
import PageContainer from '../components/UI/PageContainer';
import styles from '../styles/General.module.css';

export default function PsychologicalHelp() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? English : Russian;

  return (
    <Fragment>
      <Head>
        <title>{t.header}</title>
        <meta name='Psychological help' content={t.content} />
      </Head>
      <PageContainer>
        <div className={styles.everything}>
          <div className={styles.headline}>
            <h1>{t.header}</h1>
          </div>
          <section>
            <p>{t.intro}</p>
            <h3>{t.ulHeader}:</h3>
            <ul>
              <li>
                {t.visit}&nbsp;
                <b>
                  <i>{t.psychologist}</i>
                </b>
                &nbsp;{t.item1a}&nbsp;
                <b>
                  <i>{t.psychiatrist}</i>
                </b>
                &nbsp;{t.item1b};
              </li>
              <li>
                {t.item2a}&nbsp;
                <b>
                  <i>{t.communication}</i>
                </b>
                &nbsp;{t.item2b};
              </li>
              <li>
                {t.item3a}&nbsp;
                <b>
                  <i>{t.events}</i>
                </b>
                &nbsp;{t.item3b};
              </li>
              <li>
                {t.get}&nbsp;
                <b>
                  <i>{t.support}</i>
                </b>
                &nbsp;{t.item4}
              </li>
              <li>
                <b>
                  <i>{t.stress}</i>
                </b>
                &nbsp;{t.item5}
              </li>
              <li>
                <b>
                  <i>{t.problem}</i>
                </b>
                &nbsp;{t.item6};
              </li>
              <li>
                {t.item7a}&nbsp;
                <b>
                  <i>{t.hobby}</i>
                </b>
                &nbsp;{t.item7b}&nbsp;(
                <a href='https://www.draft2digital.com/book/733658'>{t.here}</a>
                &nbsp;
                {t.item7c};
              </li>
              <li>
                {t.try}&nbsp;
                <b>
                  <i>{t.animal}</i>
                </b>
                &nbsp;{t.item8}
              </li>
            </ul>
            <div className={styles.imgYacht}>
              <Image                            
                layout='intrinsic'
                alt='photo'
                src='/photos/yachts.jpg'
                width={669}
                height={501}
                quality='75'
              />
            </div>
            <h3>{t.questionsH}:</h3>
            <ul>
              <li>
                <b>
                  <i>{t.question1}</i>
                </b>
                <br />
                {t.answer1}
              </li>
              <br />
              <li>
                <b>
                  <i>{t.question2}</i>
                </b>
                <br />
                {t.answer2}
              </li>
              <br />
              <li>
                <b>
                  <i>{t.question3}</i>
                </b>
                <br />
                {t.answer3}
              </li>
              <br />
              <li>
                <b>
                  <i>{t.question4}</i>
                </b>
                <br />
                {t.answer4}
              </li>
              <br />
              <li>
                <b>
                  <i>{t.question5}...</i>
                </b>
                <br />
                {t.answer5}
              </li>
              <br />
            </ul>
            <p>{t.lastP}</p>
          </section>
        </div>
      </PageContainer>
    </Fragment>
  );
}
