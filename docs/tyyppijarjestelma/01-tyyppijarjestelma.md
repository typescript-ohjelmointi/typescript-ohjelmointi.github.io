---
sidebar_position: 1
---

# Perustietotyypit

Monet TypeScriptin oppaat keskittyvät omien tyyppien määrittelyyn, mutta alkuun pääsemiseksi on hyvä perehtyä TypeScriptin valmiisiin perustietotyyppeihin kuten `string`, `number` ja `boolean`. Perustietotyypit on dokumentoitu selkeästi TypeScript-käsikirjan luvussa [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), mutta olemme koonneet tiivistelmän aiheesta myös tälle sivulle.


## Muuttujien tyypit

TypeScriptin tyypit `string`, `number` ja `boolean` vastaavat suoraan JavaScriptin tyyppejä. Tyypit määritellään muuttujien tapauksessa muuttujan määrittelyn yhteydessä kaksoispisteen jälkeen, eikä muuttujan tyyppiä voida enää myöhemmin muuttaa:

```ts
// merkkijonot eli 'string'
let language: string = 'TypeScript';

// 'number' käsittää sekä kokonais- että liukuluvut:
let wholeNumber: number = 2023;
let decimalNumber: number = 3.14;

// taulukot voidaan määritellä joko `tyyppi[]` tai `Array<tyyppi>`
let positive: number[] = [1, 2, 3, 4];
let negative: Array<number> = [-1, -2, -3, -4];
```

Tyyppien määrittely tällä tarkkuudella ei onneksi ole usein tarpeen, koska TypeScript osaa myös monessa tapauksessa päätellä tyypit sijoitusoperaatioiden ja `return`-lauseiden perusteella.


## Tyyppien päätteleminen (type inference)

Tyyppien määrittely yllä esitetyllä tarkkuudella ei ole usein tarpeen, koska TypeScript osaa päätellä asiayhteydestä mm. muuttujien sekä funktioiden paluuarvojen tyypit.

> *"For the most part you don’t need to explicitly learn the rules of inference. If you’re starting out, try using fewer type annotations than you think - you might be surprised how few you need for TypeScript to fully understand what’s going on."*
>
> Microsoft. [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

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

positive.push('42');            // ei ok, koska arvo on tyyppiä string
//            ~~~~
// Argument of type 'string' is not assignable to parameter of type 'number'.
```
:::

Tyypin määritteleminen eksplisiittisesti on tarpeen erityisesti silloin, kun luot tyhjiä tietorakenteita, joista TS ei pysty päättelemään niiden myöhempää tyyppiä:

```ts
let empty = [];             // tämän taulukon tyyppiä ei osata päätellä
let numbers: number[] = []; // number[] -> tähän voidaan jatkossa lisätä vain numeroita
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

Yllä olevassa esimerkissä funktio hyväksyy parametrikseen ainoastaan merkkijonon, joten parametrin tyyppi on määritetty `text: string`. Paluuarvona on taulukko merkkijonoja, eli `string[]`. Paluuarvo voitaisiin tässä tapauksessa jättää myös kirjoittamatta, koska TypeScript osaa päätellä sen [split-metodin](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) paluuarvosta. Rivinvaihtojen kohdalla pilkkomisessa on huomioitu sekä `\r\n`- että `\n`-tyyppiset rivinvaihdot, ja voit perehtyä aiheeseen tarkemmin [tässä StackOverflow-ketjussa](https://stackoverflow.com/q/21711768).


### Taulukot (array)

Taulukot ovat tyypitettyjä siinä missä yksittäiset muuttujat, esim. `string[]` tai `number[]`.

```ts
let faces = ['😀', '🙁'];          // string[]
let numbers = [7, 100, 42];         // number[]
```

Taulukot voivat sisältää useita eri tyyppisiä arvoja, jos niiden tyypiksi määritellään [tyyppien yhdistelmä, eli "unioni"](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types). Tässä tapauksessa, kun arvot ovat joko merkkijonoja tai numeroita, on taulukon tyyppi `(string | number)[]`:

```ts
let values = [1, 2, 3, 'one', 'two', 'three'];  // (string | number)[]
let combo = [...faces, ...numbers];             // (string | number)[]
```

Taulukoita käsiteltäessä TypeScript ei aina voi tietää, minkä tyyppinen arvo tietystä indeksistä löytyy, tai löytyykö siitä lainkaan arvoa. Tällöin törmäät helposti tilanteeseen, jossa TypeScript päättelee tyypiksi esimerkiksi `undefined | string | number`. Jos olet aivan varma tietyn arvon tyypistä, voit käyttää `as`-avainsanaa, joka ohittaa TypeScriptin päättelylogiikan:

```ts
let values = [1, 2, 3, 'one', 'two', 'three'];

let first = all.at(0);              // päätelty tyyppi on `first: (string | number)`

let second = all.at(1) as number;   // `as` ohittaa TypeScriptin tyyppitarkastuksen
```


Edellä käytetty [`at`-metodi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at) on osa JavaScriptiä ja se toimii sekä positiivisilla että negatiivisilla indekseillä:

> *"The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array."*
>
> Mozilla. [Array.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)


### Tuplet (monikko)

TS tukee JavaScriptin taulukoille myös erityistä [tuple-tyyppiä](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types), jossa voidaan ennalta määritellä taulukon pituus ja kunkin eri indeksin tyyppi:

```ts
type NameAndAge = [string, number];

let alice: NameAndAge = ['Alice', 29];  // ok!
let bob: NameAndAge = ['Bob', 28, 1];   // käännösvirhe! `Source has 3 element(s) but target allows only 2`
```


### Suorituksen aikaiset tyypit (runtime)

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

// tieto "luokista" katoaa käännettäessä:
console.log(typeof animal);     // 'object'
console.log(typeof automobile); // 'object'
console.log(typeof strings);    // 'object'
```


### Any ja unknown

Toisinaan datan tyyppi ei ole tiedossa tai sillä ei ole merkitystä. TypeScriptin `any`-tyyppi kääntää tavallaan TypeScriptin tyyppitarkastukset "pois päältä" kyseisen arvon kohdalta:

```ts
// `any` tyyppiä voidaan käyttää silloin, kun arvon tyypillä ei ole merkitystä:
function logAnything(thing: any) {
    console.log(new Date(), thing);
}
```

`any`-tyyppi sallii, että muuttujan kautta kutsutaan mitä tahansa metodia tai että siihen asetettua arvoa käytetään missä tahansa laskuoperaatiossa. Tämä ei ole usein toivottavaa. Mikäli arvon tyypillä ei ole merkitystä, tai se ei ole ennalta tiedossa, on turvallisempaa käyttää vaihtoehtoista `unknown`-tyyppiä. `unknown` sallii `any`:n tavoin minkä tahansa arvon, mutta se ei kytke tyyppitarkastuksia pois päältä, vaan estää kaikki operaatiot tuntemattoman muuttujan kautta:

```ts
// usein on kuitenkin turvallisempaa käyttää tyyppiä `unknown`:
function logUnknown(thing: unknown) {
    console.log(new Date(), thing);
}
```

Edellä esitetyistä tyypeistä `any` on siinä mielessä riskialttiimpi, että sen kautta tehtävien operaatioiden osalta TS ei tee tarkastuksia. Unknown-tyyppi puolestaan aiheuttaa virheen heti käännösvaiheessa, mikäli sen kautta ollaan suorittamassa mahdollisesti virheellisiä operaatioita:

```ts
let a: any = 1;
let u: unknown = 1;

a.toUpperCase(); // aiheuttaa virheen suoritettaessa

u.toUpperCase(); // aiheuttaa virheen jo käännettäessä
// ~~~~~~~~~~~~  Property 'toUpperCase' does not exist on type 'unknown'
```

### Tyypin tarkastaminen ajonaikaisesti

Jos käsiteltävän arvon tyyppi ei ole ennalta tiedossa, voidaan se selvittää ajonaikaisesti ehtorakenteilla ja mm. JavaScriptin `typeof`-operaation avulla. Seuraavassa esimerkissä `repeat`-funktio toistaa annettua arvoa eri tavoilla riippuen siitä, minkä tyyppinen arvo sinne annettiin. Merkkijonoa toistetaan `repeat`-metodilla, kun taas taulukon tapauksessa taulukon sisältöä toistetaan annettu määrä kertoja:

```ts
function repeat(thing: unknown, times: number) {
    if (typeof thing === 'string') {
        // TypeScript päättelee `thing`-muuttujan tyypiksi `string`
        return thing.repeat(times);
    }

    if (Array.isArray(thing)) {
        // TypeScript päättelee `thing`-muuttujan tyypiksi `any[]`
        return new Array(times).fill(thing).flat();
    }

    // annettu tyyppi on tuntematon, heitetään poikkeus
    throw new Error(`Could not repeat ${thing}`);
}
```

Huomaa, että yllä `typeof` on JavaScriptin eikä TypeScriptin ominaisuus. [Se toimiikin ainoastaan JavaScriptin omien perustyyppien tarkastamisessa](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards), eikä sillä voida tarkastaa esimerkiksi luokkia, taulukoita tai TypeScriptin tyyppejä ja rajapintoja.

:::info
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
:::
