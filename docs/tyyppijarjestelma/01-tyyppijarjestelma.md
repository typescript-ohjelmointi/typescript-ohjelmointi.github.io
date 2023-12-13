---
sidebar_position: 1
---

# Perustietotyypit

Monet TypeScriptin oppaat keskittyvät omien tyyppien määrittelyyn, mutta pääset hyvin liikkeelle myös ilman omia tyyppejä. TypeScriptissä on mm. valmiit tyypit `string`, `number` ja `boolean`, jotka vastaavat JavaScriptin arvoja:

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

Tyyppien määrittely tällä tarkkuudella on kuitenkin usein turhaa, koska TypeScript osaa päätellä asiayhteydestä mm. muuttujien sekä funktioiden paluuarvojen tyypit.

> *"For the most part you don’t need to explicitly learn the rules of inference. If you’re starting out, try using fewer type annotations than you think - you might be surprised how few you need for TypeScript to fully understand what’s going on."*
>
> https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

Ilman yllä esitettyä vapaaehtoista tyyppien määrittelyä koodi näyttääkin JavaScriptiltä, joskin kääntäjä päättelee tyypit ja osaa huomioida ne myöhemmin näitä muuttujia käytettäessä:

```ts
let language = 'TypeScript';        // language: string

let wholeNumber = 2023;             // wholeNumber: number
let decimalNumber = 3.14;           // decimalNumber: number

let positive = [1, 2, 3, 4];        // positive: number[]
let negative = [-1, -2, -3, -4];    // negative: number[]
```

Tyypin määritteleminen eksplisiittisesti on välttämätöntöntä erityisesti silloin, kun luot tyhjiä tietorakenteita, joista TS ei pysty päättelemään niiden myöhempää tyyppiä:

```ts
let empty = [];                     // never[] -> tähän ei voida lisätä arvoja, koska tyyppiä ei tiedetä
let numbers: number[] = [];         // number[] -> tähän voidaan jatkossa lisätä vain numeroita
```

### Funktioiden tyypit

> *"Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions."*
>
> https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions

```ts
// funktion parametrille ja paluuarvolle määritellään tyypit:
function shout(str1: string): string {
    return str1.toUpperCase() + '!!!';
}
```

TypeScript ei osaa päätellä parametrin tyyppiä, joten sen määritteleminen on tarpeen. Sen sijaan yllä **paluuaron tyyppi** `string` voidaan päätellä automaattisesti `return`-lausekkeessa olevasta tyypistä, eikä sitä tarvitse välttämättä kirjoittaa itse.


### Any ja unknown

Toisinaan datan tyyppi ei ole tiedossa tai sillä ei ole merkitystä:

```ts
// `any` tyyppiä voidaan käyttää silloin, kun arvon tyypillä ei ole merkitystä:
function logAnything(thing: any) {
    console.log(new Date(), thing);
}

// usein on kuitenkin parempi käyttää tyyppiä `unknown`:
function logUnknown(thing: unknown) {
    console.log(new Date(), thing);
}
```

Edellä esitetyistä tyypeistä `any` on siinä mielessä riskialttiimpi, että sen kautta tehtävien operaatioiden osalta TS ei tee tarkastuksia:

```ts
function doSomething(bar: any) {
    bar.toUpperCase();  // ei virhettä käännettäessä, mutta kaatuu suoritettaessa!
}

doSomething(1);
doSomething('hello');
```

`unknown` ei puolestaan salli mahdollisesti virheellisiä operaatioita:

```ts
function doSomething(bar: unknown) {
    bar.toUpperCase();  // käännösvirhe!
}

doSomething(1);
doSomething('hello');
```

Kun tiedon tyyppi ei ole ennalta tiedossa, voidaan se selvittää ajonaikaisesti ehtorakenteilla ja mm. JavaScriptin `typeof`-operaation avulla:

```ts
function doSomething(bar: unknown) {
    if (typeof bar === 'string') {
        // TypeScript osaa nyt tunnistaa `bar`-arvon tyypiksi merkkijonon:
        console.log(bar.toUpperCase());
    } else {
        console.log(bar);
    }
}

doSomething(0);         // 0
doSomething('hello');   // 'HELLO'
```

### Taulukot (array)

Taulukot ovat tyypitettyjä siinä missä yksittäiset muuttujat, esim. `string[]` tai `number[]`. Eri tyyppisiä arvoja lisättäessä TS luo "union"-tyyppejä, kuten `(string | number)[]`.

Seuraavat esimerkit näyttävät, miten puuttuviin arvoihin varautuminen voidaan ohittaa (`!`) ja miten tietyn arvon tyyppi voidaan itse määrittää `as`:

```ts
let faces = ['😀', '🙁'];          // string[]
let numbers = [7, 100, 42];         // number[]

let all = [...faces, ...numbers];   // (string | number)[]

// `at` saattaa palauttaa merkkijonon, numeron tai `undefined`:
let something = all.at(-1);         // something: (string | number | undefined)

// huutomerkki `!` kertoo TypeScriptille, että arvo on olemassa:
let thing = all.at(-1)!;            // thing: (string | number)

// `as`-avainsanalla voidaan ohittaa tyypin päättely ja kertoa se itse:
let answer = all.at(-1) as number;  // answer: number

console.table({ something, thing, answer });
```

Vaikka edellä kolmen viimeisen muuttujan tyypit ovat TypeScriptin näkökulmasta eri, on niissä luonnollisesti tasan sama arvo, eli taulukon viimeinen numero `42`:

```
┌───────────┬────────┐
│  (index)  │ Values │
├───────────┼────────┤
│ something │   42   │   // string | number | undefined
│   thing   │   42   │   // string | number
│  answer   │   42   │   // number
└───────────┴────────┘
```

Edellä käytetty `at`-metodi toimii sekä positiivisilla että negatiivisilla indekseillä:

> *"The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array."*
>
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at


### Tuplet (monikko)

TS tukee JavaScriptin taulukoille myös erityistä [tuple-tyyppiä](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types), jossa voidaan ennalta määritellä taulukon pituus ja kunkin eri indeksin tyyppi:

```ts
type NameAndAge = [string, number];

let alice: NameAndAge = ['Alice', 29];  // ok!
let bob: NameAndAge = ['Bob', 28, 1];   // käännösvirhe! `Source has 3 element(s) but target allows only 2`
```


### Suorituksen aikaiset tyypit (runtime)

Koska TypeScript-koodi käännetään JavaScriptiksi, ei koodia suoritettaessa voida käyttää TypeScriptin tyyppejä. Kaikki tieto TypeScriptin tyypeistä "katoaakin" suoritettaessa ja jäljelle jää vain JavaScriptin tyypit:

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
let strings = ['apotti', 'sarastia'];


// tieto "luokista" katoaa käännettäessä:
console.log(typeof animal);     // 'object'
console.log(typeof automobile); // 'object'
console.log(typeof strings);    // 'object'


// JS:n perustyyppien osalta `typeof` palauttaa kuitenkin oikeat tiedot:
console.log(typeof 1);          // 'number'
console.log(typeof true);       // 'boolean'
console.log(typeof 'hello');    // 'string'
```
