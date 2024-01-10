---
sidebar_position: 1
---

# Perustietotyypit

Monet TypeScriptin oppaat keskittyvät omien tyyppien määrittelyyn, mutta alkuun pääsemiseksi on hyvä perehtyä TypeScriptin valmiisiin perustietotyyppeihin kuten `string`, `number` ja `boolean`. Perustietotyypit on dokumentoitu selkeästi TypeScript-käsikirjan luvussa [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) ja olemme koonneet tiivistelmän aiheesta myös tälle sivulle.


## Muuttujien tyypit

TypeScriptin tyypit `string`, `number` ja `boolean` vastaavat suoraan JavaScriptin tyyppejä. Selvimpänä erona JavaScriptin muuttujiin nähden TypeScriptin avulla muuttujat ovat *staattisesti tyypitettyjä*, eli niihin voidaan asettaa vain tiettyjä ennalta määriteltyjä tai pääteltyjä arvoja.

Tyypit määritellään muuttujien tapauksessa muuttujan määrittelyn yhteydessä kaksoispisteen jälkeen, eikä muuttujan tyyppiä voida enää myöhemmin muuttaa:

```ts
let language: string = 'TypeScript';
```

Vastaavalla tavalla voidaan määritellä myös muut tyypit, kuten numerot ja totuusarvot:

```ts
// 'number' käsittää sekä kokonais- että liukuluvut:
let wholeNumber: number = 2024;
let decimalNumber: number = 3.14;

// totuusarvot:
let isLeapYear: boolean = true;
```

Myös kokoelmille määritellään TypeScriptissä tyypit. Taulukkojen tyypit voidaan määritellä joko syntaksilla `tyyppi[]` tai `Array<tyyppi>`:

```ts
let words: string[] = ['one', 'two', 'three'];
let numbers: number[] = [1, 2, 3, 4];

let negative: Array<number> = [-1, -2, -3, -4]; // vaihtoehtoinen tapa
```

Edellä mainituista tavoista `tyyppi[]` vaikuttaa olevan yleisesti laajemmin käytössä kuin `Array<tyyppi>`, joten myös kurssin esimerkeissä käytetään jatkossa muotoa `tyyppi[]`.

Tyyppien määrittely tällä tarkkuudella ei onneksi ole usein tarpeen, koska TypeScript osaa myös monessa tapauksessa päätellä tyypit sijoitusoperaatioiden ja `return`-lauseiden perusteella. Tyyppien päättelystä käytetään termiä *type inference* ja sitä käsitellään tarkemmin seuraavissa kappaleissa.


## Tyyppien päätteleminen (type inference)

Tyyppien määrittely yllä esitetyllä tarkkuudella ei ole usein tarpeen, koska TypeScript osaa päätellä asiayhteydestä mm. muuttujien sekä funktioiden paluuarvojen tyypit.

> *"For the most part you don’t need to explicitly learn the rules of inference. If you’re starting out, try using fewer type annotations than you think - you might be surprised how few you need for TypeScript to fully understand what’s going on."*
>
> Microsoft. [TypeScript Handbook. Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

Ilman yllä esitettyä vapaaehtoista tyyppien määrittelyä koodi näyttääkin aivan JavaScriptiltä. Vaikka muuttujille ei ole erikseen määritetty alla tyyppejä, kääntäjä päättelee tyypit ja osaa huomioida ne myöhemmin näitä muuttujia käytettäessä:

```ts
let language = 'TypeScript';        // language: string

let wholeNumber = 2023;             // wholeNumber: number
let decimalNumber = 3.14;           // decimalNumber: number

let positive = [1, 2, 3, 4];        // positive: number[]
let negative = [-1, -2, -3, -4];    // negative: number[]
```


:::danger Käännösvirhe

Vaikka muuttujille ei yllä ole määritetty tyyppejä, osaa TypeScript päätellä niiden oikeat arvot. Jos esimerkiksi `number[]` tyyppiseen taulukkoon yritetään lisätä myöhemmin muuntyyppisiä arvoja, seuraa niistä käännösvirhe:

```ts
let positive = [1, 2, 3, 4];    // muuttujan tyypiksi päätellään number[]
positive.push(42);              // ok

positive.push('AA');            // ei ok, koska taulukon tyypiksi on päätelty number[]
//            ~~~~
// Argument of type 'string' is not assignable to parameter of type 'number'.
```
:::

Tyypin määritteleminen eksplisiittisesti on tarpeen erityisesti tyhjien tietorakenteiden ja funktion parametrien yhteydessä. TypeScript ei pysty etukäteen päättelemään, mitä arvoja tyhjään tietorakenteeseen tullaan tallentamaan tai minkä tyyppisillä parametreilla funktioita tullaan kutsumaan.

```ts
// tämän taulukon tyyppiä ei osata päätellä:
let someValues = [];

// number[] -> tähän voidaan jatkossa lisätä numeroita:
let lottery: number[] = [];
```

### Funktioiden tyypit

> *"Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions."*
>
> Microsoft. [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions)

TypeScript ei osaa päätellä funktioiden parametrien tyyppejä, joten niiden määritteleminen on pääsääntöisesti tarpeen. Sen sijaan **paluuaron tyyppi** voidaan tyypillisesti päätellä automaattisesti `return`-lausekkeessa olevasta tyypistä, eikä sitä tällöin tarvitse kirjoittaa itse.

```ts
/**
 * Splits any multiline string into an array of strings.
 * The line delimiter may be either CRLF or LR.
 */
function splitLines(text: string): string[] {
    return text.split(/\r?\n/);
}
```

Yllä olevassa esimerkissä funktio hyväksyy parametrikseen ainoastaan merkkijonon, joten parametrin tyyppi on määritetty `text: string`. Paluuarvona on taulukko merkkijonoja, eli `string[]`.

Mikäli parametrin tyyppi `text: string` jätettäisiin määrittelemättä, ei TypeScript tietäisi sen tyyppiä, ja metodikutsun `text.split(...)` oikeellisuutta ei voitaisi varmistaa.

Paluuarvon tyyppi `string[]` puolestaan voitaisiin tässä tapauksessa jättää myös kirjoittamatta, koska TypeScript osaa päätellä sen [split-metodin](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) paluuarvosta. Esimerkkikoodissa `text.split(/\r?\n/)` on huomioitu sekä `\r\n`- että `\n`-tyyppiset rivinvaihdot, ja voit perehtyä aiheeseen tarkemmin [tässä StackOverflow-ketjussa](https://stackoverflow.com/q/21711768).


### Taulukot (array)

Taulukot ovat tyypitettyjä siinä missä yksittäiset muuttujat, esim. `string[]`, `number[]` tai `boolean[]`.

```ts
let faces = ['😀', '🙁'];          // string[]
let numbers = [7, 100, 42];         // number[]
```

Arvoja lisättäessä taulukkoon TypeScript varmistaa, että lisättävä arvo on taulukon tyypin mukainen.

TypeScript ei kuitenkaan voi etukäteen tietää, löytyykö halutusta indeksistä koodia suoritettaessa arvoa. Tällöin törmäät helposti tilanteeseen, jossa TypeScript päättelee tyypiksi esimerkiksi `undefined | string`:

:::danger Käännösvirhe

```ts
let days = ['Monday', 'Tuesday', 'Wednesday'];

let first = days.at(0);   // undefined | string
first.toUpperCase();
// Error: 'first' is possibly 'undefined'.
```
:::

Jos olet aivan varma tietyn arvon tyypistä, voit käyttää `as`-avainsanaa, joka ohittaa TypeScriptin päättelylogiikan. Vaihtoehtoisesti voit käyttää ["non-null assertion"-operaattoria](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator), eli huutomerkkiä `!`, joka ohittaa tyhjän arvon tarkastamisen:

```ts
let days = ['Monday', 'Tuesday', 'Wednesday'];

let second = days.at(1) as string;   // string
let last = days.at(-1)!;             // string
```

Huomaa, että `!`- ja `as`-operaattorit eivät takaa, että arvo olisi oikeasti ajonaikaisesti olemassa. Siksi on tärkeää myös tarkastaa esimerkiksi taulukon pituus ennen kuin haet arvoja tietyistä indekseistä.

:::tip at-metodi

Edellä käytetty [`at`-metodi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at) on osa JavaScriptiä ja se toimii monilta osin kuten hakasulkuperaattori `values[0]`. Merkittävämpänä erona `at`-metodi toimii sekä positiivisilla että negatiivisilla indekseillä:

> *"The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array."*
>
> Mozilla. [Array.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

:::

### Suorituksen aikaiset tyypit

Koska TypeScript-koodi käännetään JavaScriptiksi, ei koodia suoritettaessa voida käyttää TypeScriptin tyyppejä. Kaikki tieto TypeScriptin tyypeistä "katoaakin" käännettäessä ja jäljelle jää vain JavaScriptin tyypit:

```ts
class Cat {
    constructor(public name: string) {
    }
}

class Car {
    constructor(public make: string, public model: string) {
     }
}

let animal = new Cat('kisu');
let automobile = new Car('VW', 'Beetle');
let strings = ['typescript', 'javascript'];

// tieto luokista katoaa käännettäessä.
// Koodia suoritettaessa sekä olioista että taulukoista tulostuu tyypiksi `object`:
console.log(typeof animal);     // 'object'
console.log(typeof automobile); // 'object'
console.log(typeof strings);    // 'object'
```

Palaamme tyyppien tarkastamiseen suorituksen aikana myöhemmin mm. ["Tyyppivahdit"-luvussa](./07-type-guards.md).


### Any ja unknown

Toisinaan datan tyyppi ei ole tiedossa tai sillä ei ole merkitystä. TypeScriptin `any`-tyyppi kytkee TypeScriptin tyyppitarkastukset "pois päältä" kyseisen arvon kohdalta:

```ts
// `any` tyyppiä voidaan käyttää silloin, kun arvon tyypillä ei ole merkitystä:
function logAnything(thing: any) {
    console.log(new Date(), thing);
}
```

`any`-tyyppi sallii, että muuttujan kautta kutsutaan mitä tahansa metodia tai että siihen asetettua arvoa käytetään missä tahansa laskuoperaatiossa. Tämä ei ole usein toivottavaa. Esimerkiksi seuraava koodi aiheuttaa virheen vasta koodia suoritettaessa:

```ts
function logAnything(thing: any) {
    console.log(new Date(), thing.substring(0, 10));
}

// aiheuttaa suoritettaessa virheen TypeError: thing.substring is not a function
logAnything(123);
```

Mikäli arvon tyypillä ei ole merkitystä, tai se ei ole ennalta tiedossa, on turvallisempaa käyttää vaihtoehtoista `unknown`-tyyppiä. `unknown` sallii `any`:n tavoin minkä tahansa arvon, mutta se ei kytke tyyppitarkastuksia pois päältä. Sen sijaan se estää kaikki operaatiot, kuten metodikutsut, tuntemattoman muuttujan kautta:

```ts
// usein on kuitenkin turvallisempaa käyttää tyyppiä `unknown`:
function logUnknown(thing: unknown) {
    console.log(new Date(), thing);
}
```

Tällä versiolla `thing.substring(0, 10)` aiheuttaisi "Property 'substring' does not exist on type 'unknown'"-virheen jo koodia kirjoitettaessa tai viimeistään käännösvaiheessa.

Edellä esitetyistä tyypeistä `any` on siis siinä mielessä riskialttiimpi, että sen kautta tehtävien operaatioiden osalta TS ei tee tarkastuksia. Unknown-tyyppi puolestaan aiheuttaa virheen heti käännösvaiheessa, mikäli sen kautta ollaan suorittamassa mahdollisesti virheellisiä operaatioita:

```ts
let a: any = 1;
let u: unknown = 1;

a.toUpperCase(); // aiheuttaa virheen vasta suoritettaessa

u.toUpperCase(); // aiheuttaa virheen kirjoitettaessa tai käännettäessä
// ~~~~~~~~~~~~  Property 'toUpperCase' does not exist on type 'unknown'
```

### Tyypin tarkastaminen ajonaikaisesti

Kuten [TypeScriptin ominaisuuksia käsiteltäessä](../perusteet/00-mika-on-typescript.md) totesimme, TypeScript-koodi käännetään JavaScriptiksi. Siksi on keskeistä hahmottaa, miten tyyppien tarkastaminen TypeScriptillä käännösvaiheessa eroaa mahdollisten tyyppien tarkastamisesta JavaScript-suoritusympäristössä ajonaikaisesti.

TypeScript tarkastaa tyypit automaattisesti käännösvaiheessa hyödyntäen TypeScriptin tyyppijärjestelmää, mutta JavaScriptin ajonaikainen tyyppijärjestelmä on paljon rajoittuneempi. JavaScript osaakin erottaa lähinnä numerot, merkkijonot, totuusarvot, funktiot ja oliot toisistaan.

Jos käsiteltävän arvon tyyppi ei ole ennalta tiedossa, voidaan se selvittää ajonaikaisesti ehtorakenteilla ja mm. [JavaScriptin `typeof`-operaation avulla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

#### Esimerkki: repeat

Seuraavassa esimerkissä `repeat`-funktio toistaa annettua arvoa eri tavoilla riippuen siitä, minkä tyyppinen arvo sinne annettiin. Merkkijonoa toistetaan `repeat`-metodilla tekemällä yksi uusi, pidempi merkkijono, kun taas taulukon tapauksessa taulukon sisältöä toistetaan annettu määrä kertoja:

```ts
function repeat(thing: unknown, times: number) {
    if (typeof thing === 'string') {
        // TypeScript päättelee `thing`-muuttujan tyypiksi `string`
        return thing.repeat(times);
    }

    if (Array.isArray(thing)) {
        // TypeScript päättelee nyt `thing`-muuttujan tyypiksi `any[]`
        return new Array(times).fill(thing).flat();
    }

    // jos annettu tyyppi on tuntematon, heitetään poikkeus
    throw new Error(`Could not repeat ${thing}`);
}
```

Huomaa, että yllä `typeof` on JavaScriptin eikä TypeScriptin ominaisuus. [Se toimiikin ainoastaan JavaScriptin omien perustyyppien tarkastamisessa](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards), eikä sillä voida tarkastaa esimerkiksi luokkia, taulukoita tai TypeScriptin tyyppejä ja rajapintoja.

Koska JavaScriptissä taulukot ovat tyyppiä `object`, on yllä hyödynnetty [JavaScriptin Array.isArray-metodia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) taulukon tarkastamiseksi.


:::tip Taulukon kopiointi

Taulukon toistamiseksi hyödynnetään ominaisuutta, jossa ensin luodaan uusi taulukko `new Array(times)`, jonka pituus määräytyy toistokertojen mukaan.

Tämän jälkeen luodun taulukon jokaiseen soluun lisätään alkuperäinen taulukko [`fill`-metodilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).

Luomamme taulukko sisältää nyt halutun määrän uusia taulukoita, esim. `[[1, 2], [1, 2]]`, jotka saadaan "litistettyä" [`flat`-metodilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) yksitasoiseksi taulukoksi: `[1, 2, 1, 2]`. Ratkaisu perustuu [tässä StackOverflow-ketjussa](https://stackoverflow.com/a/61773807) esitettyihin koodeihin.
:::

Koska edellä esitetty `repeat`-funktio osaa käsitellä ainoastaan taulukoita tai merkkijonoja, olisi siinä parempi käyttää parametrin tyyppinä yhdistelmää: `string | any[]`.

```ts
function repeat(thing: string | any[], times: number) {
    if (typeof thing === 'string') {
        return thing.repeat(times);
    } else {
        return new Array(times).fill(thing).flat();
    }
}
```

Tällöin kääntäjä osaa jo etukäteen varoittaa, jos funktiolle ollaan antamassa epäsopivaa tyyppiä, eikä `throw new Error(...)`-riviä tarvita. Tyyppien yhdistämisestä kerrotaan tarkemmin [omassa luvussaan](./05-unions-intersections.md).
