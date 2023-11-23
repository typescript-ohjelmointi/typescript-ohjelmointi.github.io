import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Miksi TypeScript?',
    img: '/img/ts-js.png',
    description: (
      <>
        TypeScript-kieli on käänteentekevä ratkaisu JavaScript-kielisten ohjelmistojen kehittäjäkokemuksen, ylläpidettävyyden ja kehitystyökalujen saralla.
        TypeScript on saavuttanut lyhyessä ajassa suuren käyttäjäkunnan ja sen osaajille on merkittävästi kysyntää.
      </>
    ),
  },
  {
    title: 'Oppimistavat',
    img: '/img/robo-study.png',
    description: (
      <>
        Tämä opintojakso toteutetaan virtuaalisesti itseopiskeluun nojautuen. Oppiminen toteutetaan sekä teorian että harjoitustehtävien avulla.
        Ohjaajat ja muut osallistujat ovat kurssin aikana tavoitettavissa MS Teams -palvelun kautta.
      </>
    ),
  },
  {
    title: 'Osaamistavoitteet',
    img: '/img/ts-learning-goals.png',
    description: (
      <>
        Kurssin käytyäsi osaat hyödyntää TypeScript-ohjelmointikielen tyyppijärjestelmää. Osaat hyödyntää sekä kielen
        valmiita tyyppejä että luoda omia. Opit myös yhdistelemään ja tekemään erilaisia variaatioita tyypeistä.
      </>
    ),
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
