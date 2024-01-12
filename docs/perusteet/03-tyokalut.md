---
sidebar_position: 3
sidebar_label: Työkalut
---

# Työkalut

Koska TypeScript ja JavaScript ovat monilta osin sama asia, monet JS-koodin kehittämiseksi käytettävät työkalut soveltuvat myös TypeScriptin kehitykseen. TypeScript-koodia kehitettäessä kaksi tärkeintä työkalua ovat TypeScript-kääntäjä eli **tsc**, sekä TypeScript-kieltä tukeva koodieditori.

Kurssin puolesta suosittelemme editoriksi [Visual Studio Code:a (VS Code)](https://code.visualstudio.com/). VS Code sisältää valmiiksi tuen TypeScript-kielelle ja itseasiassa se [on myös itse toteutettu TypeScript-kielellä](https://github.com/Microsoft/vscode/).

Vaikka käyttäisit koodin editoimisessa VS Code:a, tarvitset silti erikseen TypeScript-kääntäjän. Kääntäjä asennetaan [Node.js](https://nodejs.org/en)-ajoympäristön [npm-pakettienhallinnan (Node Package Manager)](https://www.npmjs.com/) avulla. Npm asentuu Node.js:n mukana. Mikäli sinulla ei ole vielä Node.js-ympäristöä asennettuna, voit asentaa sen [Node.js:n asennusohjeiden mukaisesti](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).

:::info Online-editorit

Kurssin puitteissa sinun ei ole aivan välttämätöntä asentaa kaikkia työkaluja omalle koneellesi. Vaihtoehtoisesti voit hyödyntää online-palveluita, kuten [TypeScript playground](https://www.typescriptlang.org/play). Myös ilmaiset selainpohjaiset koodieditorit, kuten [GitHub codespaces](https://github.com/features/codespaces), [CodePen](https://codepen.io/) tai [StackBlitz](https://stackblitz.com/) voivat soveltua kurssin suorittamiseen. Näihin palveluihin voidaan kuitenkin kurssin puolesta tarjota vain hyvin rajallista tukea.

:::

Tarkempaa tietoa työkaluista löydät tiiviissä muodossa TypeScriptin käsikirjasta luvusta [TypeScript Tooling in 5 minutes (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html). Myös Node.js:n dokumentaation artikkeli [Node.js with TypeScript (nodejs.org)](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript) sisältää hyvän johdannon TypeScript-kehityksen työkaluihin ja työvaiheisiin.


## Paikallinen tai globaali asennus

TypeScript voidaan asentaa joko **globaalisti** koko käyttöjärjestelmään tai **paikallisesti** yksittäiseen projektiin. Globaali ja paikallinen asennus jakavat mielipiteitä[<sup>1</sup>](https://github.com/loopbackio/loopback.io/issues/509) ja jopa TypeScriptin omat ohjeet vaihtelevat asennustavan suhteen. [Käsikirjan ohjeessa asennus tehdään globaalisti](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html) kun taas [download-sivulla asennus tehdään paikallisesti](https://www.typescriptlang.org/download).

Download-sivulla paikallista eli projektikohtaista asennusta perustellaan seuraavasti:

> *"Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently."*
>
> Microsoft. [Download TypeScript](https://www.typescriptlang.org/download)

Mikäli et työskentele samanaikaisesti lukuisten eri TypeScript-projektien parissa tai tee yhteistyötä muiden kehittäjien kanssa, ei asennustavalla ole suurta merkitystä.

**Tämän kurssin esimerkeissä asennus tehdään paikallisesti**. Paikallisen asennuksen etuina koko projekti riippuvuuksineen asentuu kerralla yhdellä `npm install` -komennolla  ja kaikilla kehittäjillä on käytössään sama versio TypeScriptistä. Paikallisen asennuksen haittapuolena joudut kirjoittamaan `tsc`-komennon sijasta `npx tsc` tai `npm exec tsc`. Voit lukea lisää `npx`- ja `npm exec`-komennoista [npm:n dokumentaatiosta](https://docs.npmjs.com/cli/v8/commands/npx).


## Asennuskomennot

Asenna TypeScript itsellesi uuteen projektiin luomalla tyhjä hakemisto, siirtymällä siihen komentorivillä ja suorittamalla komento `npm install typescript --save-dev`.

> *"TypeScript is available as a [package on the npm registry](https://www.npmjs.com/package/typescript) available as "typescript". You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project."*
>
> ```
> npm install typescript --save-dev
> ```
>
> https://www.typescriptlang.org/download

Asennuksen jälkeen voit varmistaa, että se toimii oikein:

```
npx tsc --version
```

Edellä tehty asennus luo hakemistoosi `node_modules`-alihakemiston sekä `package.json`-tiedoston, jossa on määritettynä projektissa käytettävä TypeScript-versio. Tiedosto voi näyttää aluksi tältä, ja siihen voidaan lisätä myöhemmin projektin muut riippuvuudet:

```json
{
  "devDependencies": {
      "typescript": "^5"
  }
}
```

:::info Development dependency

Kuten yltä huomaat, TypeScript asennetaan **development**-riippuvuudeksi `--save-dev`-vivulla. Koska TypeScript-koodi käännetään JavaScriptiksi, TypeScriptiä ei tosiaan tarvita varsinaisessa tuotantoympäristössä, eli esimerkiksi selaimessa tai palvelimella.

Voit lukea lisää eri tyyppisistä riippuvuuksista artikkelista [Specifying dependencies and devDependencies in a package.json file (docs.npmjs.com)](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file).
:::


## Kääntäminen eli transpilointi

TypeScriptin omissa dokumenteissa käytetään pääsääntöisesti termiä **"kääntäminen"** (compiling), kun puhutaan TS-koodin muuntamisesta JS-koodiksi. Käytämme myös tämän kurssin materiaalissa samaa termiä.

Kääntämiselle tarkoitetaan perinteisesti operaatiota, jossa ihmisen luettava lähdekoodi muunnetaan matalamman abstraktiotason muotoon, joka on tyypillisesti konekielistä ja siten ihmisen vaikeasti luettavaa. TS-koodi käännetään kuitenkin "saman abstraktiotason" JavaScript-koodiksi, joten joissain lähteissä samasta asiasta käytetään termiä **"transpilointi"** (transpiling). [(StackOverflow: Compiling vs Transpiling)](https://stackoverflow.com/a/44932758)

TypeScript-koodin kääntämistä voidaan kokeilla kätevästi sivulla [TypeScript Playground](https://www.typescriptlang.org/play).

Kääntäjä osaa huomioida eri ECMAScript-versioita, eli sillä pystytään tuottamaan myös vanhempien JavaScript-suoritusympäristöjen ymmärtämää koodia modernista TypeScript-koodista. Esimerkiksi oheinen oleva TypeScript-koodi hyödyntää JavaScriptin ominaisuuksia, joita erityisesti vanhemmissa selaimissa ei ole

```ts
class Person {
    constructor(readonly firstName: string, readonly lastName: string) {
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

[Katso TypeScript playgroundista, miten TypeScript kääntää yllä olevan koodin ES5:n mukaiseen muotoon](https://www.typescriptlang.org/play?target=1#code/MYGwhgzhAEAKCmAnCB7AdtA3gWAFDQOmHQgBdEBXYUlRACkXjABN0QBPaAMwEtlSAcmAC28AFzQyiHmgDmAGmiMWbTuDJDREqTNkBKLHkLQAvniOFZ8UtwogQm+HQM58xwo1IVEGAAYASTFIACx4IADpefkcTaECQsPD1QRF4E18AbgsCM1xcvBBraAAHaABeaDR4AHc4JFQ0OgByACkUYLQmxSaAERR4Jr0s3GI0VEKklFk6Ysi7B1ShoA).

Voit myös itse kokeilla kääntää koodia eri ES-versioiden tukemaan muotoon [TypeScript playground -palvelussa](https://www.typescriptlang.org/play?target=1#code/MYGwhgzhAEAKCmAnCB7AdtA3gWAFDQOmHQgBdEBXYUlRACkXjABN0QBPaAMwEtlSAcmAC28AFzQyiHmgDmAGmiMWbTuDJDREqTNkBKLHkLQAvniOFZ8UtwogQm+HQM58xwo1IVEGAAYASTFIACx4IADpefkcTaECQsPD1QRF4E18AbgsCM1xcvBBraAAHaABeaDR4AHc4JFQ0OgByACkUYLQmxSaAERR4Jr0s3GI0VEKklFk6Ysi7B1ShoA).


## Yleisimmät komennot

TypeScript-koodia kirjoittaessasi tarvitset `tsc`-komentoa, eli TypeScript-kääntäjää. Kääntäjää käytetään pääasiassa komentoriviltä käsin, joten [komentorivin peruskäytön](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) on hyvä olla tuttua. Peruskäyttöön riittää tässä yhteydessä hakemistojen välillä siirtyminen sekä komentojen suorittaminen.


### tsc

Jos haluat kääntää kirjoittamasi TypeScript-kielisen ohjelman lähdekoodit JavaScript-kielisiksi lähdekoodeiksi, onnistuu se `tsc`-komennolla (TypeScript compiler). Yksittäinen `.ts`-päätteinen lähdekooditiedosto saadaan käännettyä JavaScript-koodiksi seuraavalla komennolla:

```
tsc helloWorld.ts       # TypeScript asennettu globaalisti
npx tsc helloWorld.ts   # TypeScript asennettu paikallisesti
```

`tsc`-komento kääntää kirjoittamasi TypeScript-tiedostot JavaScript-tiedostoiksi. Kääntäjälle voidaan antaa useita eri komentoriviparametreja, jotka vaikuttavat kääntämisen lopputulokseen. Näistä löydät lisätietoa [TypeScriptin käsikirjasta](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

Käännetyt JavaScript-tiedostot voidaan suorittaa selaimessa tai komentorivillä aivan kuten mitkä tahansa `.js`-tiedostot. Käännetyn tiedoston suorittaminen komentorivillä `node`-komennolla onnistuu esimerkiksi seuraavasti:

```
node helloWorld.js
```

:::info tsconfig.json
Usein projektit koostuvat lukuisista tiedostoista, jotka sijaitsevat tarkoituksenmukaisen hakemistorakenteen sisällä. Projektit myös usein haluavat vaikuttaa siihen, millä asetuksilla kääntäminen tehdään. Tämän vuoksi projekteihin toteutetaan usein `tsconfig.json`-niminen tiedosto, johon voidaan määritellä käytettävä hakemistorakenne sekä kääntämisen asetukset.
:::

### ts-node

Lähdekoodin kääntäminen ja suorittaminen kahdessa eri vaiheessa voi pidemmän päälle tuntua kömpelöltä. Työkalut osaavat kuitenkin onneksi huolehtia kääntämisestä automaattisesti taustalla. `tsc`-kääntäjä voidaan käynnistää siten, että se [kääntää tiedostot taustalla niiden muuttuessa](https://www.typescriptlang.org/docs/handbook/compiler-options.html). Vaihtoehtoisesti voit käynnistää Node.js-ohjelman suoraan TypeScript-muotoisesta tiedostosta [**ts-node**-työkalulla](https://www.npmjs.com/package/ts-node), joka kääntää koodia sen suorituksen aikana:

> *"`ts-node` is a TypeScript execution engine and REPL for Node.js. It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling. "*
>
> https://www.npmjs.com/package/ts-node

`ts-node` mahdollistaa siis TypeScript-koodin suorittamisen ilman etukäteen tehtävää käännösvaihetta:

```bash
npm install ts-node --save-dev    # asentaa ts-noden paikallisesti

npx ts-node src/skripti.ts        # suorittaa skriptin `src/skripti.ts`

npx ts-node                       # käynnistää ts-noden REPL-tilan
```


## tsconfig.json

TypeScript-kääntäjä `tsc` sekä työkalut kuten `ts-node` ja `ts-jest`, tukevat lukuisia TS-koodin kääntämiseen liittyviä asetuksia. Nämä asetukset voidaan antaa komentoriviparametreina, mutta tyypillisesti niitä on niin paljon, että ne kannattaa tallentaa erilliseen asetustiedostoon.

> *"The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project"*
>
> https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

`tsconfig.json`-asetustiedostoon voidaan määritellä lukuisia kääntäjän toimintaan vaikuttavia asetuksia. Voit luoda itsellesi uuden `tsconfig.json`-tiedoston `tsc`-komennon avulla:

```bash
npx tsc --init
```
```
Created a new tsconfig.json with:

  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```

Monet tiedoston asetukset liittyvät kääntäjän tekemiin tarkastuksiin, kuten siihen, sallitaanko koodissa funktion parametreissa tai paluuarvoissa puuttuvia tietotyyppejä. Kääntäjän tekemät tarkastukset ja varoitukset ovat  lähtökohtaisesti hyödyllisiä, joten suosittelemme hyödyntämään niitä laajasti. `strict`-asetuksella saadaankin asetettua kerralla monet erilliset asetukset päälle:

> *"The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness. Turning this on is equivalent to enabling all of the strict mode family options, which are outlined below. You can then turn off individual strict mode family checks as needed."*
>
> https://www.typescriptlang.org/tsconfig#strict

Minimalistinen mutta toimiva asetustiedosto voi näyttää esimerkiksi tältä:

```js
/* Visit https://aka.ms/tsconfig to read more about this file */
{
    "compilerOptions": {
        /* Set the JavaScript language version for emitted JavaScript
         * and include compatible library declarations. */
        "target": "es2016",

        /* Specify the root folder within your source files. */
        "rootDir": "./src/",

        /* Specify an output folder for all emitted files. */
        "outDir": "./build/",

        /* Emit additional JavaScript to ease support for importing CommonJS modules.
         * This enables 'allowSyntheticDefaultImports' for type compatibility. */
        "esModuleInterop": true,

        /* Enable all strict type-checking options. */
        "strict": true,
    }
}
```

## Tehtävät

Perehdyttyäsi materiaaliin ja asennettuasi ohjelmointiin tarvittavat työkalut, olet valmis ensimmäisiin tehtäviin! [Löydät TypeScript-ohjelmoinnin aloittamiseen liittyvät tehtävät omalta sivultaan](../harjoitukset/01-perusteet.md).

Tehtävien jälkeen etene TypeScriptin tyyppijärjestelmän pariin.
