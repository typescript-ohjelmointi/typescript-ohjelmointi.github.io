import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Miksi TypeScript?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        TypeScript-kieli on käänteentekevä ratkaisu JavaScript-kielisten ohjelmistojen kehittäjäkokemuksen, ylläpidettävyyden ja kehitystyökalujen saralla.
        Kieli on saavuttanut lyhyessä ajassa suuren käyttäjäkunnan ja sen osaajille on merkittävästi kysyntää.
      </>
    ),
  },
  {
    title: 'Oppimistavat',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Tämä opintojakso toteutetaan virtuaalisesti itseopiskeluun nojautuen. Oppiminen toteutetaan sekä teorian että harjoitustehtävien avulla.
        Ohjaajat ja muut opiskelijat ovat kurssin aikana tavoitettavissa MS Teams -palvelun kautta.
      </>
    ),
  },
  {
    title: 'Osaamistavoitteet',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Kurssin käytyäsi osaat hyödyntää TypeScript-ohjelmointikielen tyyppijärjestelmää. Osaat hyödyntää sekä kielen 
        valmiita tyyppejä että luoda omia. Opit myös yhdistelemään ja tekemään erilaisia variaatioita tyypeistä.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
