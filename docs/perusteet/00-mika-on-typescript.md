---
sidebar_position: 0
sidebar_label: 'Mikä TypeScript?'
---

# Mikä TypeScript?

TypeScriptin omilla sivuilla kerrotaan, että "TypeScript is JavaScript with syntax for types" ([typescriptlang.org](https://www.typescriptlang.org/)). TypeScriptin [GitHub-sivulla](https://github.com/microsoft/TypeScript) puolestaan kieltä kuvaillaan seuraavasti:

> *"TypeScript is a language for **application-scale JavaScript**. TypeScript adds **optional types** to JavaScript that support tools for large-scale JavaScript applications for **any browser, for any host, on any OS**. **TypeScript compiles to readable, standards-based JavaScript**."*
>
> Microsoft. [TypeScript at GitHub.com](https://github.com/microsoft/TypeScript)

TypeScriptiä luonnehditaankin seuraavissa kappaleissa edellä mainittujen ominaisuuksien kautta.


## JavaScript with syntax for types

Eri ohjelmointikielissä on erilaisia lähestymistapoja arvojen tyyppien käsittelemiseksi. **JavaScript**-kielessä kaikilla arvoilla on olemassa jokin tyyppi, kuten numero, merkkijono, objekti tai taulukko. Tyypitys on kuitenkin **dynaamista**, eli muuttujiin voidaan asettaa vapaasti eri tyyppisiä arvoja ja funktiot voivat vastaanottaa ja niistä voidaan palauttaa eri tyyppisiä arvoja. Koska muuttujien, parametrien ja paluuarvojen tyypit riippuvat suoritusaikaisesta datasta, tyyppejä käsitellään ja mahdollisesti tarkastetaan ajonaikaisesti ohjelmaa suoritettaessa.

**TypeScript** tuo dynaamisesti tyypitettyyn JavaScriptiin tuen **staattisille tyyppimäärityksille**.


### Dynaaminen tyypitys

Eri ohjelmointikielissä on erilaisia lähestymistapoja arvojen tyyppien käsittelemiseksi. JavaScript-kielessä kaikilla arvoilla on olemassa jokin tyyppi, kuten `number`, `string`, `object` tai `array`. Tyypitys on kuitenkin **dynaamista**, eli muuttujiin voidaan asettaa vapaasti eri tyyppisiä arvoja ja funktiot voivat vastaanottaa ja niistä voidaan palauttaa eri tyyppisiä arvoja. Koska muuttujien, parametrien ja paluuarvojen tyypit riippuvat suoritusaikaisesta datasta, tyyppejä käsitellään vain ajonaikaisesti ohjelmaa suoritettaessa.

Dynaamisen tyypityksen heikkous, johon TypeScript pyrkii vastaamaan, on tyyppien tarkastaminen jo ennen koodin suorittamista. Katsotaan esimerkiksi seuraavaa JavaScript-kielistä esimerkkikoodia, jossa etsitään numeroita sisältävän taulukon suurinta arvoa [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#syntax)-metodin avulla. Mitä seuraava koodi tulostaa?

```js title="demo.js"
let numbers = [42, 0, -1, 100, 9];
let largest = Math.max(numbers);

console.log({ largest });   // mitä tämä rivi tulostaa?
```

Yllä oleva koodiesimerkki tulostaa hieman yllättäen `{ largest: NaN }`. Tämä johtuu siitä, että [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#syntax) odottaa saavansa joukon arvoja erillisinä parametreina, *eikä taulukkona*. Paluuarvo on tavallaan perusteltu, koska annettu arvo ei ole numero.

Tämänkaltaiset bugit voivat olla yllättävän työläitä selvittää, koska metodi ei aiheuttanut poikkeusta tai "kaatanut" ohjelmaa, vaan se vain antoi paluuarvoksi ei-toivotun arvon. Tämä bugi ilmenisikin todennäköisesti ohjelmassa vasta myöhemmässä vaiheessa, kun metodin palauttamaa arvoa käytetään laskuoperaatiossa tai tulosteessa.

Virheellisiin metodikutsuihin ja tyyppeihin liittyvät ongelmat voidaan tyypillisesti havaita ja korjata jo koodia kirjoitettaessa, mikäli funktioioden parametrit sekä muuttujat tyypitetään staattisesti.


### Staattinen tyypitys

**Staattista tyypitystä** hyödynnettäessä ohjelman muuttujille, parametreille ja paluuarvoille määritellään etukäteen tyypit, joita hyödynnetään käännösvaiheessa ohjelmakoodin oikeellisuuden tarkastamiseksi.

**TypeScript on JavaScript-kielen laajennos**, joten edellinen JS-koodiesimerkki voidaan kirjoittaa täsmälleen samalla tavalla TypeScript-kielellä:

```ts title="demo.ts"
let numbers = [42, 0, -1, 100];
let largest = Math.max(numbers);  // käännösvirhe

console.log({ largest });
```

Kun tätä TypeScript-koodiesimerkkiä käännetään, havaitaan virhe jo käännösvaiheessa:

:::danger käännösvirhe
Käännetään koodinpätkä `npx tsc demo.ts`-komennolla:

```
error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'number'.

2 let largest = Math.max(numbers);
                         ~~~~~~~
```
:::

[TypeScript-kääntäjä, eli `tsc`](https://www.typescriptlang.org/docs/handbook/compiler-options.html), havaitsi yllä virheen, jossa `Math.max`-metodille annettiin numeron sijasta numerotaulukko. Metodille olisikin pitänyt antaa erillisiä numeroita, esimerkiksi. `Math.max(42, 0, -1, 100)`, eikä taulukkoa `Math.max(numbers)`.

Käytännössä tulet kirjoittamaan TypeScript-koodia editorilla, joka tarkastaa koodia jo sitä kirjoitettaessa. Editorisi siis varoittaa todennäköisesti virheistä jo ennen kuin ehdit itse kääntää koodiasi.


#### Optional types

Jos katsot tarkemmin edellä esitettyä `demo.ts`-esimerkkikoodia, huomaat, että siinä ei itseasiassa ole määritetty lainkaan tyyppejä, vaikka TypeScriptiä juuri väitettiin staattisesti tyypitetyksi kieleksi 🤔. Tyyppien määritteleminen itse ei olekaan monessa tapauksessa tarpeen, koska TypeScript osaa päätellä arvojen tyypit esimerkiksi sijoitusperaatioiden ja `return`-lauseiden perusteella. Tyyppien päättelemisestä käytetään tarkemmin termiä [**Type Inference**](https://www.typescriptlang.org/docs/handbook/type-inference.html).

Koska `numbers`-muuttujaan asetetaan taulukko, joka sisältää vain numeroita, päättelee TypeScript sen tyyliksi numerotaulukon eli `number[]`. TypeScriptin päättelemät tyypit näkyvät mm. ylempänä virheilmoituksessa *"'number[]' is not assignable to parameter of type 'number'"*.


#### Bugin korjaus

`Math.max`-metodille täytyy antaa parametrina taulukon sijasta erilliset numerot. Tämä saadaan ratkaistua siten, että numerotaulukko `number[]` puretaan erillisiksi arvoiksi [JavaScriptin **spread**-operaattorilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Metodin kutsusta tulee siis `Math.max(...numbers)`. Pidemmin kirjoitettuna ja tyyppimääritysten kera koodi saadaan siis korjattua seuraavasti:

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

Käytännössä JavaScript-koodin suoritusympäristöön vaikuttaa monta tekijää. Esimerkiksi selaimessa on käytössä [WHATWG](https://html.spec.whatwg.org/multipage/)-spesifikaation mukaiset ominaisuudet kuten "dom". Vastaavasti Node.js-ympäristössä on [oma standardikirjastonsa](https://nodejs.org/api/modules.html). TypeScript osaa ottaa nämä huomioon ja tarkastaa tyypit, kunhan ECMAScript-versio määritellään [target](https://www.typescriptlang.org/tsconfig#target)-asetuksella ja kirjastot [lib](https://www.typescriptlang.org/tsconfig#lib)-asetuksella. Asetukset voidaan tallentaa projektin [`tsconfig.json`-tiedostoon](https://www.typescriptlang.org/tsconfig).


## TypeScript compiles to JavaScript

Kääntäjän tuottama JavaScript-koodi on "puhdasta" JavaScriptiä, eikä siinä ole merkkejä TypeScriptistä.

> *"Roughly speaking, once TypeScript’s compiler is done with checking your code, it erases the types to produce the resulting "compiled" code. This means that once your code is compiled, the resulting plain JS code has no type information."*
>
> Microsoft. TypeScript for the New Programmer. [typescriptlang.org](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

Jos palaamme vielä ylempänä esitettyyn esimerkkiin, se voidaan kääntää asetuksista riippuen erilaisiin muotoihin.

```ts title="demo.ts"
let numbers: number[] = [42, 0, -1, 100];
let largest: number = Math.max(...numbers);

console.log({ largest });
```

Yllä oleva koodi näyttää käännettynä ES2022-standardin mukaiseksi JavaScriptiksi seuraavalta:

```js title="compiledES2022.js"
let numbers = [42, 0, -1, 100];
let largest = Math.max(...numbers);

console.log({ largest });
```

Koska ES2022 tukee käytännössä kaikkia koodissa esiintyviä ominaisuuksia, ei käännetty koodi eroa juurikaan alkuperäisestä. Vain siinä esiintyvät tyypit on poistettu.

Mikäli koodia on tarkoitus suorittaa vanhemmilla selaimilla, jotka eivät esimerkiksi tue koodissa käytettyjä ["spread"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)- ja ["object property shorthand"](https://javascript.plainenglish.io/object-literals-using-object-property-shorthand-6360825c60ef)-syntakseja, voidaan se kääntää esimerkiksi ES3:n tukemaan muotoon:

```js title="compiledES3.js"
var numbers = [42, 0, -1, 100];
var largest = Math.max.apply(Math, numbers);

console.log({ largest: largest });
```

Tässä viimeisessä versiossa muuttujat on määritetty aikaisemmista esimerkeistä poiketen vanhemmalla `var`-avainsanalla ja `Math.max`-metodin kutsu sekä `{ largest: largest }` on esitetty pidemmässä muodossa.

Voit kokeilla itse kääntää tätä koodia eri asetuksilla [TypeScript playground -palvelussa](https://www.typescriptlang.org/play?target=9#code/DYUwLgBAdgrgtgIxAJwM4C5rycg2gXQgF4JcAWAJgBoIAGGgWgEYanbb8BuAKFEmACGyAOYhUYTLEQpiEALICwACwB0cAQA8AFCt1ScqAJQ9uAYwD2UVOdArg54VoDeEQSLGQAvse5A).
