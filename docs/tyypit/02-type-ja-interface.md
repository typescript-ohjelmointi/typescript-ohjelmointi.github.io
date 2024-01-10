---
sidebar_position: 2
---

# Type ja interface

Edellisissä kappaleissa olemme perehtyneet siihen, miten TypeScriptillä voidaan määritellä eri muuttujille ja funktioille JavaScriptin perustietotyyppejä kuten `string` ja `number`. TypeScriptistä on kuitenkin vielä huomattavasti enemmän hyötyä silloin, kun omassa ohjelmalogiikassa hyödynnetään monipuolisesti omia ja eri kirjastoista löytyviä tietotyyppejä.

Tyypillisimmät tavat määritellä omia tyyppejä TypeScriptissä ovat `type`, `interface` ja `class`.


## Type

Yksinkertaisimmillaan tietyn olion yyppi voidaan määritellä suoraan muuttujaan:

```ts
let user: { id: number, username: string } = { id: 1, username: 'Alice'};
```

Yllä sijoitusoperaattorin `=` vasemmalla puolella on määritetty olion tyyppi, ja oikealla puolella itse sijoitettava olio. TypeScript varmistaa, että muuttujaan sijoitettava arvo sisältää tarvittavat attribuutit ja että ne ovat oikean tyyppisiä.

Kuten huomaat, tyypin määritteleminen suoraan muuttujaan on luettavuuden ja usein myös uudelleenkäytettävyyden näkökulmasta huono idea. Tyypeille voidaankin määritellä "aliaksia", jotka tekevät niistä uudelleenkäytettäviä:

```ts
type User = {
    id: number;
    username: string;
};

let user1: User = { id: 1, username: 'Alice' };
let user2: User = { id: 2, username: 'Bob' };
```

> *"Think of Types Like Variables*
>
> *Much like how you can create variables with the same name in different scopes, a type has similar semantics."*
>
> Microsoft. [TypeScript Cheat Sheet (Type)](https://www.typescriptlang.org/static/TypeScript%20Types-ae199d69aeecf7d4a2704a528d0fd3f9.png)


## Interface

`type`-avainsanan lisäksi TypeScriptissä omia oliotyyppejä voidaan määritellä myös rajapintoina `interface`-avainsanalla. Syntaktisesti `interface` näyttää hyvin samalta kuin `type`, mutta siinä ei käytetä "sijoitusoperaattoria" `=`:

```ts
interface User {
    id: number;
    username: string;
}

let user1: User = { id: 1, username: 'Alice' };
let user2: User = { id: 2, username: 'Bob' };
```

Sekä `type` että `interface` toimivat monilta osin samalla tavalla. Niillä on kuitenkin tiettyjä eroja liittyen erityisesti eri tyyppien yhdistelemiseen. Hyödynnämme tällä sivulla pääasiassa `type`-määrityksiä

Voit lukea lisää rajapinnoista [TypeScriptin käsikirjasta](https://www.typescriptlang.org/docs/handbook/interfaces.html).


:::info Puolipisteet ja pilkut

TypeScript on erittäin salliva sen suhteen, käytetäänkö tyyppien määrittelyssä eri attribuuttien välillä pilkkuja tai puolipisteitä, tai jätetäänkö ne kokonaan kirjoittamatta:

```ts
// puolipisteillä:
type User = {
    id: number;
    username: string;
};
```

```ts
// pilkuilla:
type User = {
    id: number,
    username: string
}
```

```ts
// ilman:
type User = {
    id: number
    username: string
}
```

Tämä on makuasia ja "oikea" tapa riippuu osin henkilökohtaisista ja tiimin mieltymyksistä. TypeScriptin omassa dokumentaatiossa suositaan ylintä tapaa (`;`), joten sitä käytetään myös tämän kurssin esimerkeissä.
:::


## Valinnaiset attribuutit

Eri tyypeissä voi olla myös valinnaisia attribuutteja, jolloin niiden nimen perään kirjoitetaan kysymysmerkki `?`:

```ts
type User = {
    id: number;
    username: string;
    email?: string;  // `?` tarkoittaa valinnaista arvoa
};

let user1: User = { id: 1, username: 'alice' };
let user2: User = { id: 2, username: 'bob', email: 'bob@example.com' };
```

Yllä `User`-olioita voidaan siis luoda joko `email`-attribuutilla tai ilman. Koska attribuutti on määritetty valinnaiseksi, TypeScript-kääntäjä huolehtii siitä, että koodissa varaudutaan myös tilanteisiin, joissa arvoa ei ole asetettu:

```ts
console.log(user2.email.toLowerCase());   // käännösvirhe, koska email saattaa olla `undefined`
```

Tyhjien arvojen tarkastamiseksi on useita eri lähestymistapoja, mutta esimerkiksi JavaScriptin ["optional chaining"-operaattori](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) eli `?` auttaa varautumaan puuttuvaan arvoon:

```ts
console.log(user2.email?.toLowerCase());  // ei virhettä
```

### Rakenteellinen tyypitys (structural typing)

Toisin kuin monissa muissa kielissä, TypeScriptissä tyyppijärjestelmä ei itse asiassa perustu siihen, että arvojen tyypit vastaisivat täsmälleen muuttujien tai parametrien tyyppejä. Sen sijaan TypeScript tarkastaa, että tyypit **yhteensopivia**. Yhteensopivuus määräytyy eri arvojen rakenteen mukaan.

Esimerkiksi seuraavassa koodissa on tyypit `Movie` ja `Book` sekä `printMovie`, joka tulostaa elokuvan nimen:

```ts
type Movie = {
    title: string;
};

type Book = {
    title: string;
};


let borat: Movie = { title: 'Borat' };
let cleanCode: Book = { title: 'Clean code' };


function printMovie(m: Movie) {
    console.log(m.title);
}

printMovie(borat);
printMovie(cleanCode); // cleanCode on `Book`, mutta tämä toimii silti
```

Koodissa `printMovie`-funktiota voidaan kutsua sekä `Movie`- että `Book`-tyyppisten muuttujien kanssa, koska `Book` sisältää kaikki samat attribuutit kuin `Movie`.

Yhteensopivuus toimii samalla tavoin, vaikka tyypit olisivat määriteltynä ristiin `type`-, `interface`- ja `class`-tyyppisinä. Voit halutessasi perehtyä olioiden yhteensopivuuteen lisää [TypeScriptin käsikirjassa](https://www.typescriptlang.org/docs/handbook/type-compatibility.html).


## Sisäkkäiset tyypit

Tyyppejä voidaan määritellä myös sisäkkäin siten, että yhden "oliotyypin" sisällä on toinen oliotyyppi. Esimerkiksi seuraavassa tapauksessa `User`-tyypillä on `address`, joka määrittelee käyttäjän osoitteen omana erillisenä oliona:

```ts
type User = {
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
        postalCode: string;
    };
};
```

Mikäli sisäkkäinen tyyppi on luonteeltaan sellainen, jota tarvitaan mahdollisesti erillään `User`-tyypistä, kannattaa se määritellä erillisenä tyyppinä, johon viitataan `User`-tyypistä:

```ts
type Address = {
    street: string;
    city: string;
    postalCode: string;
};

type User = {
    name: string;
    email: string;
    address: Address;
};
```


## Tuplet (monikko)

TS tukee JavaScriptin taulukoille myös erityistä [tuple-tyyppiä](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types). Tuple on käytännössä taulukko, mutta siihen voidaan määritellä ennalta taulukon pituus sekä jokaisessa eri solussa olevan arvon tyyppi. Esimerkiksi seuraavassa koodissa määritellään tyyppi `NameAndAge`, joka on käytännössä taulukko, mutta siihen voidaan asettaa vain kaksi arvoa, joiden tyyppien on oltava `string` ja `number`:

```ts
type NameAndAge = [string, number];

let alice: NameAndAge = ['Alice', 29];  // ok!
let bob: NameAndAge = ['Bob', 28, 1];   // käännösvirhe! `Source has 3 element(s) but target allows only 2`
```


## Muita hyödyllisiä ominaisuuksia


### `readonly` ja `as const`

TypeScript mahdollistaa useita erilaisia käteviä tapoja edistää oman koodin ylläpidettävyyttä, kuten `private` ja `readonly` -attribuutit sekä `as const`. Näiden avulla voidaan varmistaa, että dataan ei tehdä esimerkiksi tahattomia muutoksia.

Seuraavassa esimerkissä taulukko määritellään vakioksi `as const` -syntaksilla:

```ts
const days = ['ma', 'ti', 'ke', 'to', 'pe', 'la', 'su'] as const;
days[0] = 'måndag'; // error: Cannot assign to '0' because it is a read-only property.
```

Vaihtoehtoisesti tyypiksi voidaan määritellä `readonly string[]`, jolla on samankaltainen vaikutus:

```ts
const days: readonly string[] = ['ma', 'ti', 'ke', 'to', 'pe', 'la', 'su'];
days[0] = 'måndag'; // error: Index signature in type 'readonly string[]' only permits reading.
```


**JavaScriptin** `const` varmistaa, että muuttujaan ei voida asettaa uutta arvoa. `const`-muuttujaan asetetun arvon muuttaminen on kuitenkin mahdollista, esimerkiksi lisäämällä listaan uusia arvoja.

**TypeScriptin** `as const` ja `readonly` varmistavat muuttujan lisäksi myös siihen asetetun arvon muuttumattomuuden. Näihin ominaisuuksiin voit perehtyä lisää itsenäisesti.


