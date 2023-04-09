import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import English from '../posts/en/what-to-do';
import Ukrainian from '../posts/ua/what-to-do';
import PageContainer from '../components/UI/PageContainer';
import styles from '../styles/General.module.css';

export default function ToDo() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? English : Ukrainian;

  return (
    <Fragment>
      <Head>
        <title>{t.header}</title>
        <meta name='What to do' content={t.content} />
      </Head>
      <PageContainer>
        <div className={styles.everything}>
          <div className={styles.headline}>
            <h1>{t.header}</h1>
          </div>
          <section>
            <h2>{t.medications}</h2>

            <p>N.B.&nbsp;{t.medP}</p>
            <ul>
              <li>
                <b>
                  <i>{t.nsaids}</i>
                </b>
                ,&nbsp;{t.nsaidspart1}&nbsp;
                <b>
                  <i>{t.ibuprofen}</i>
                </b>
                .&nbsp;{t.nsaidspart2}&nbsp;
                <a href='https://www.versusarthritis.org/about-arthritis/treatments/drugs/painkillers-and-nsaids/'>
                  {t.here}
                </a>
                ,&nbsp;
                <a href='https://www.medicinenet.com/nonsteroidal_antiinflammatory_drugs/article.htm#what_are_nsaids_and_how_do_they_work'>
                  {t.here}
                </a>
                ,&nbsp;
                <a href='https://www.webmd.com/pain-management/guide/pain-relievers'>
                  {t.here}
                </a>
                ,&nbsp;{t.and}&nbsp;
                <a href='https://www.nhs.uk/live-well/healthy-body/which-painkiller-to-use/'>
                  {t.here}
                </a>
                .&nbsp;
                {t.meditem1}
              </li>
              <li>
                <b>
                  <i>{t.cyclobenzaprine}</i>
                </b>
                &nbsp;{t.meditem2}&nbsp;
                <a href='https://www.webmd.com/drugs/2/drug-8888-8087/cyclobenzaprine-oral/cyclobenzaprine-oral/details'>
                  {t.page}
                </a>
                ;
              </li>
              <li>
                <b>
                  <i>{t.amitriptyline}</i>
                </b>
                &nbsp;{t.amitriptylineP}&nbsp;
                <a href='https://www.webmd.com/drugs/2/drug-8611/amitriptyline-oral/details'>
                  {t.here}
                </a>
                .&nbsp;{t.meditem3}&nbsp;
                <a href='https://www.verywellmind.com/can-antidepressants-make-you-feel-emotionally-numb-1067348'>
                  {t.article}
                </a>
                ;
              </li>
              <li>
                <b>
                  <i>{t.opioids}</i>
                </b>
                &nbsp;{t.like}&nbsp;
                <b>
                  <i>{t.codeine}</i>
                </b>
                &nbsp;{t.meditem4}&nbsp;
                <a href='https://www.verywellmind.com/ten-most-addictive-pain-killers-22506'>
                  {t.here}
                </a>
                ;
              </li>
              <li>
                <b>
                  <i>{t.cannabis}</i>
                </b>
                &nbsp;{t.meditem5}&nbsp;
                <a href='https://www.fda.gov/news-events/public-health-focus/fda-and-cannabis-research-and-drug-approval-process'>
                  {t.here}
                </a>
                .&nbsp;
                {t.cannabisP}
              </li>
              <li>
                <b>
                  <i>{t.antiseizure}</i>
                </b>
                &nbsp;{t.like}&nbsp;
                <b>
                  <i>{t.benzodiazepines}</i>
                </b>
                &nbsp;{t.meditem6}&nbsp;
                <a href='https://www.rxlist.com/seizure_medications/drugs-condition.htm'>
                  {t.website}
                </a>
                ;
              </li>
              <li>
                <b>
                  <i>{t.ointment}</i>
                </b>
                &nbsp;{t.based}&nbsp;
                <b>
                  <i>{t.diclofenac}</i>
                </b>
                &nbsp;{t.meditem7}&nbsp;
                <a href='https://www.verywellhealth.com/pain-relief-patches-can-really-relieve-pain-3860293'>
                  {t.page}
                </a>
                ;
              </li>
              <li>
                {t.some}&nbsp;
                <b>
                  <i>{t.anesthetics}</i>
                </b>
                &nbsp;{t.anestheticsP}&nbsp;
                <b>
                  <i>{t.lidocaine}</i>
                </b>
                &nbsp;{t.lidocaineP}&nbsp;
                <a href='https://www.webmd.com/drugs/2/drug-8532-9170/lidocaine-topical/lidocaine-topical/details'>
                  {t.here}
                </a>
                .&nbsp;
                {t.meditem8}
              </li>
            </ul>
            <h2>{t.food}</h2>
            <p>N.B.&nbsp;{t.foodP}</p>
            <ul>
              <li>
                <b>
                  <i>{t.complexes}</i>
                </b>
                .&nbsp;{t.supplements}&nbsp;
                <b>
                  <i>{t.supplementsN}</i>
                </b>
                .&nbsp;
                {t.supplementsP}&nbsp;
                <b>
                  <i>{t.omega}</i>
                </b>
                &nbsp;{t.fooditem1};
              </li>
              <li>
                <b>
                  <i>{t.magnesium}</i>
                </b>
                &nbsp;{t.fooditem2};
              </li>
              <li>
                <b>
                  <i>B6</i>
                </b>
                &nbsp;{t.fooditem3};
              </li>
              <li>
                {t.homeopathy}&nbsp;
                <b>
                  <i>{t.salts}</i>
                </b>
                &nbsp;{t.fooditem4}&nbsp;
                <a href='https://www.healthline.com/health/tissue-salts'>
                  {t.page}
                </a>
                ;
              </li>
              <li>
                <b>
                  <i>{t.melatonin}</i>
                </b>
                &nbsp;{t.fooditem5}&nbsp;(
                <b>
                  <i>{t.tryptophan}</i>
                </b>
                &nbsp;{t.tryptophanP});
              </li>
              <li>
                {t.homeopathy}&nbsp;
                <b>
                  <i>{t.passionflower}</i>
                </b>
                &nbsp;{t.or}&nbsp;
                <b>
                  <i>{t.ashwagandha}</i>
                </b>
                &nbsp;{t.fooditem6};
              </li>
              <li>
                <b>
                  <i>{t.rhodiola}</i>
                </b>
                &nbsp;{t.adaptogen},&nbsp;
                <b>
                  <i>{t.ginkgo}</i>
                </b>
                &nbsp;{t.fooditem7}&nbsp;
                <b>
                  <i>{t.ginseng}</i>
                </b>
                &nbsp;{t.ginsengP};
              </li>
              <li>
                {t.fooditem8}&nbsp;
                <b>
                  <i>{t.lecithin}</i>
                </b>
                &nbsp;{t.lecithinP},&nbsp;
                <b>
                  <i>{t.aloe}</i>
                </b>
                &nbsp;{t.aloeP},&nbsp;
                <b>
                  <i>{t.hawthorns}</i>
                </b>
                &nbsp;({t.hawthornsP1}&nbsp;
                <b>
                  <i>{t.valeriana}</i>
                </b>
                &nbsp;
                {t.and}&nbsp;
                <b>
                  <i>{t.leonurus}</i>
                </b>
                &nbsp;{t.hawthornsP2}.&nbsp;
                <b>
                  <i>{t.astragalus}</i>
                </b>
                &nbsp;{t.astragalusP}.
              </li>
            </ul>
            <h2>{t.diet}</h2>
            <p>N.B.&nbsp;{t.dietP}</p>
            <ul>
              <li>
                {t.nutritionP}&nbsp;
                <b>
                  <i>{t.nutrition}</i>
                </b>
                ,&nbsp;{t.dietitem1}&nbsp;
                <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2805706/'>
                  {t.here}
                </a>
                ;
              </li>
              <li>
                {t.proper}&nbsp;
                <b>
                  <i>{t.hydration}</i>
                </b>
                &nbsp;{t.dietitem2};
              </li>
              <li>
                <b>
                  <i>{t.teas}</i>
                </b>
                &nbsp;{t.dietitem3}&nbsp;
                <b>
                  <i>{t.teas2}</i>
                </b>
                &nbsp;{t.teaP};
              </li>
              <li>
                {t.seaweeds}&nbsp;
                <b>
                  <i>{t.chlorella}</i>
                </b>
                &nbsp;{t.and}&nbsp;
                <b>
                  <i>{t.spirulina}</i>
                </b>
                &nbsp;{t.dietitem4};
              </li>
              <li>
                <b>
                  <i>{t.mushrooms}</i>
                </b>
                &nbsp;{t.mushroomsP}&nbsp;
                <a href='https://fungi.com/'>{t.stamets}</a>&nbsp;{t.dietitem5}
              </li>
            </ul>
            <h2>{t.alternative}</h2>
            <p>N.B.&nbsp;{t.alternativeP}</p>
            <ul>
              <li>
                {t.iceP}&nbsp;
                <b>
                  <i>{t.ice}</i>
                </b>
                &nbsp;{t.alternativeitem1};
              </li>
              <li>
                <b>
                  <i>{t.outside}</i>
                </b>
                &nbsp;{t.alternativeitem2};
              </li>
              <li>
                {t.applying}&nbsp;
                <b>
                  <i>{t.wrap}</i>
                </b>
                &nbsp;{t.herbs};
              </li>
              <li>
                <b>
                  <i>{t.massage}</i>
                </b>
                &nbsp;{t.alternativeitem3}&nbsp;
                <a href='https://ergonomictrends.com/common-types-massages-benefits/'>
                  {t.page}
                </a>
                ;
              </li>
              <li>
                <b>
                  <i>{t.walking}</i>
                </b>
                &nbsp;{t.alternativeitem4};
              </li>
              <li>
                {t.applying}&nbsp;
                <b>
                  <i>{t.mixture}</i>
                </b>
                &nbsp;{t.recipe}:<br />
                {t.recipeP1}
                <br />
                {t.recipeP2}
              </li>
            </ul>
            <h2>{t.physiotherapy}</h2>
            <p>N.B.&nbsp;{t.physiotherapyP}</p>
            <ul>
              <li>
                <b>
                  <i>{t.yoga}</i>
                </b>
                &nbsp;({t.physiotherapyitem1}&nbsp;
                <a href='https://www.youtube.com/c/yogawithkassandra/featured'>
                  {t.here}
                </a>
                );
              </li>
              <li>
                {t.bandsP}&nbsp;
                <b>
                  <i>{t.bands}</i>
                </b>
                .&nbsp;{t.physiotherapyitem2}&nbsp;
                <a href='https://undersunfitness.com/'>Undersun Fitness</a>
                &nbsp;{t.podcast};
              </li>
              <li>
                <b>
                  <i>{t.stretching}</i>
                </b>
                &nbsp;{t.physiotherapyitem3}.&nbsp;
                <a href='https://www.adidas.com/us/blog/533438-the-three-biggest-myths-about-stretching'>
                  {t.hereCap}
                </a>
                &nbsp;{t.adidas}.
              </li>
            </ul>
          </section>
        </div>
      </PageContainer>
    </Fragment>
  );
}
