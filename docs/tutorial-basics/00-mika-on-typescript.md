---
sidebar_position: 0
sidebar_label: 'Mikä TypeScript?'
---

# Mikä TypeScript?

TypeScriptin omilla sivuilla kerrotaan, että "TypeScript is JavaScript with syntax for types" ([typescriptlang.org](https://www.typescriptlang.org/)). TypeScriptin [GitHub-sivulla](https://github.com/microsoft/TypeScript) puolestaan kieltä kuvaillaan seuraavasti:

> *"TypeScript is a language for **application-scale JavaScript**. TypeScript adds **optional types** to JavaScript that support tools for large-scale JavaScript applications for **any browser, for any host, on any OS**. **TypeScript compiles to readable, standards-based JavaScript**."*
>
> Microsoft. [TypeScript at GitHub.com](https://github.com/microsoft/TypeScript)

TypeScriptiä voidaankin luonnehtia seuraavien edellä mainittujen ominaisuuksien kautta:

## JavaScript with syntax for types

TypeScript tuo dynaamisesti tyypitettyyn JavaScriptiin tuen staattisille tyyppimäärityksille.


### Dynaaminen tyypitys

Eri ohjelmointikielissä on erilaisia lähestymistapoja arvojen tyyppien käsittelemiseksi. JavaScript-kielessä kaikilla arvoilla on olemassa jokin tyyppi, kuten numero, merkkijono, objekti tai taulukko. Tyypitys on kuitenkin **dynaamista**, eli muuttujiin voidaan asettaa vapaasti eri tyyppisiä arvoja ja funktiot voivat vastaanottaa ja niistä voidaan palauttaa eri tyyppisiä arvoja. Koska muuttujien, parametrien ja paluuarvojen tyypit riippuvat suoritusaikaisesta datasta, tyyppejä käsitellään ja mahdollisesti tarkastetaan ajonaikaisesti ohjelmaa suoritettaessa.

Katsotaan esimerkiksi seuraavaa JavaScript-kielistä esimerkkikoodia, jossa etsitään numeerisen taulukon suurinta arvoa [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#syntax)-funktion avulla. Mitä seuraava koodi tulostaa?

```js title="demo.js"
let numbers = [42, 0, -1, 100, 9];
let largest = Math.max(numbers);

console.log({ largest });   // mitä tämä rivi tulostaa?
```

Yllä oleva koodiesimerkki tulostaa hieman yllättäen `{ largest: NaN }`. Tämä johtuu siitä, että [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#syntax) odottaa saavansa joukon arvoja erillisinä parametreina, *eikä taulukkona*.

Tämänkaltaiset virheet voidaan tyypillisesti havaita jo koodia kirjoitettaessa, mikäli funktioioden parametrit sekä muuttujat tyypitetään staattisesti.


### Staattinen tyypitys

**Staattista tyypitystä** hyödynnettäessä ohjelman muuttujille, parametreille ja paluuarvoille määritellään etukäteen tyypit, joita hyödynnetään käännösvaiheessa ohjelmakoodin oikeellisuuden tarkastamiseksi.

Edellinen koodiesimerkki voidaankin kirjoittaa täsmälleen samalla tavalla TypeScript-kielellä:

```ts title="demo.ts"
let numbers = [42, 0, -1, 100];
let largest = Math.max(numbers);  // käännösvirhe

console.log({ largest });
```

Kun TypeScript-kielistä koodiesimerkkiä käännetään, havaitaan virhe jo käännösvaiheessa:

:::danger käännösvirhe
Käännetään koodinpätkä `npx tsc demo.ts`-komennolla:

```
error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'number'.

2 let largest = Math.max(numbers);
                         ~~~~~~~
```
:::

TypeScript-kääntäjä `tsc` havaitsi siis yllä virheen, jossa `Math.max`-metodille annettiin numeron sijasta numerotaulukko. Käytännössä tulet kirjoittamaan TypeScript-koodia editorilla, joka tarkastaa koodia jo sitä kirjoitettaessa. Editorisi siis varoittaa todennäköisesti virheistä jo ennen kuin ehdit itse kääntää koodiasi.

Jos katsot tarkemmin edellä esitettyä `demo.ts`-esimerkkikoodia, huomaat, että siinä ei itseasiassa ole määritetty lainkaan tyyppejä, vaikka TypeScriptiä juuri väitettiin staattisesti tyypitetyksi kieleksi 🤔. Tyyppien määritteleminen itse ei olekaan monessa tapauksessa tarpeen, koska TypeScript osaa päätellä arvojen tyypit esimerkiksi sijoitusperaatioiden ja `return`-lauseiden perusteella. Tyyppien päättelemisestä käytetään tarkemmin termiä [**Type Inference**](https://www.typescriptlang.org/docs/handbook/type-inference.html).

Koska `numbers`-muuttujaan asetetaan taulukko, joka sisältää vain numeroita, päättelee TypeScript sen tyyliksi numerotaulukon eli `number[]`. Numerotaulukko saadaan puolestaan purettua erillisiksi parameteriksi [JavaScriptin **spread**-operaattorilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), eli `Math.max(...numbers)`. Pidemmin kirjoitettuna koodi saadaan siis toimimaan seuraavasti:

```ts title="demo.ts"
let numbers: number[] = [42, 0, -1, 100];
let largest: number = Math.max(...numbers);

console.log({ largest });   // tulostaa { largest: 100 }
```



## Application-scale JavaScript

TypeScriptin [käsikirjassa](https://www.typescriptlang.org/docs/handbook/intro.html#about-this-handbook) todetaan osuvasti, että JavaScriptin käyttö on viime vuosikymmeninä laajentunut pienistä verkkosivuille kehitettävistä interaktiivisista elementeistä [miljoonien koodirivien kokoisiksi ohjelmiksi](https://stripe.com/blog/migrating-to-typescript). Samalla JavaScript-kielen kyky tukea suurempia projekteja sekä niissä esiityviä monimutkaisia sisäisiä suhteita ei ole kehittynyt.

Pienemmissä ohjelmistoprojekteissa TypeScriptin käyttöönotto voi tuntua turhalta ja peräti ylimääräiseltä työltä. Suurempia kokonaisuuksia hallittaessa se kuitenkin helpottaa ohjelmistojen kehittämistä merkittävästi. Kääntäjä havaitsee koodin muutosten, poistamisen ja lisäysten vaikutukset, ja löytää mahdollisia virheitä niihin liittyen ohjelmiston eri osien välillä. Ohjelmistojen riippuvuuksia voidaan myös päivittää huolettomammin, kun kääntäjä tarkistaa jokaisen rivin automaattisesti.


## Any browser, any host, any OS

TypeScript-kääntäjä kääntää TypeScript-kielisen lähdekoodin standardin mukaiseksi JavaScript-koodiksi, jota voidaan suorittaa missä vain JavaScript-suoritusympäristössä, esimerkiksi selaimessa tai Node.js:llä. TypeScript tukee myös eri [ECMAScript-versioita](https://ecma-international.org/publications-and-standards/standards/ecma-262/), joten voit halutessasi kääntää nykyaikaista syntaksia hyödyntävän koodisi myös vanhempien selainten tukemaan muotoon.

Käytännössä JavaScript-koodin suoritusympäristöön vaikuttaa monta tekijää. Esimerkiksi selaimessa on käytössä [WHATWG](https://html.spec.whatwg.org/multipage/)-spesifikaation mukaiset ominaisuudet kuten "dom". Vastaavasti Node.js-ympäristössä on [oma standardikirjastonsa](https://nodejs.org/api/modules.html).

TypeScript-kääntäjän toimintaa konfiguroidaan [`tsconfig.json`-tiedoston](https://www.typescriptlang.org/tsconfig) avulla, ja käännetyn koodin suoritusympäristö voidaan asettaa [target](https://www.typescriptlang.org/tsconfig#target)- sekä [lib](https://www.typescriptlang.org/tsconfig#lib)-arvojen avulla vastaamaan oman sovelluksen käyttötapauksia.


## TypeScript compiles to JavaScript

Kääntäjän tuottama JavaScript-koodi on "puhdasta" JavaScriptiä, eikä siinä ole merkkejä TypeScriptistä.
