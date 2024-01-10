---
sidebar_position: 7
---

# Tyyppivahdit ja -predikaatit

Erilaiset tyyppien tarkastukset ovat TypeScriptissä varsin yleisiä. Tarkastuksia, jotka rajaavat esimerkiksi unionityypin mahdollisia arvoja ohjelmakoodissa kutsutaan [tyyppivahdeiksi (type guard)](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards). Usein tyyppien tarkastamista joudutaan tekemään niin usein, että tarkastusta varten kannattaa toteuttaa myös erillinen [predikaattifunktio (type predicate)](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates).

## Tyyppivahdit (type guard)

Otetaan esimerkiksi seuraava `formatDate`-funktio, joka ottaa parametrinaan tietyn ajanhetken joko `Date`-oliona tai ISO-muotoisena merkkijonona, ja palauttaa päivämäärää vastaavan merkkijonon kuten `"31.12.2023"`:

```ts
function formatDate(input: Date | string): string {
    let date: Date;

    if (typeof input === 'string') {
        // tyypiksi on rajattu `string`
        date = new Date(input);
    } else {
        // tyypiksi on nyt rajattu `Date`
        date = input;
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Palautetaan päivä merkkijonona:
    return `${day}.${month}.${year}`;
}

console.log(formatDate(new Date(2023, 11, 31)));
console.log(formatDate("2023-12-31"));
```

TypeScriptin tarkastukset, kuten `typeof input === 'string'`, rajaavat mahdollisia tyyppejä siten, että kyseisessä if-lohkossa `input`-muuttujan tyypiksi tiedetään `string`, ja vastaavasti `else`-lohkossa sen tiedetään olevan `Date`.


## Predikaatit (type predicates)

Tyyppien tarkastusta varten on usein hyödyllistä tehdä erillisiä funktioita, joissa monimutkaisemmat tarkastukset voidaan tehdä uudelleenkäytettävällä ja ylläpidettävällä tavalla. Kun funktion paluuarvon paikalle määritellään *tyyppipredikaatti* (*type predicate*) muodossa `value is string`, jossa `value` vastaa funktion parametrin nimeä ja `string` tarkastettavaa tyyppiä, osaa TypeScript hyödyntää omaa funktiotasi osana tyyppien rajausta:

```ts
const isString = (value: any): value is string => { // "value is xxx" = type predicate
    return typeof value === 'string';
}

const printLength = (value: string | number) => {
    if (isString(value)) {
        console.log(value.length);
    } else {
        console.log("Not a string");
    }
}
```

Tyyppien tarkastaminen ei usein ole aivan yhtä yksinkertaista kuin edellä `string`- ja `Date`-tyyppien vertaileminen. Esimerkiksi omien luokkien olioita tutkittaessa `typeof`-operaattori tuottaa aina tulokseksi `object` eikä olion oikeaa tyyppiä. Sen vuoksi koodissa joudutaan usein tekemään tarkastuksia olion attribuutteihin liittyen.

Tarkastellaan esimerkiksi seuraavaa esimerkkiä, jossa väriä voidaan esittää joko `RGB`- tai `CMYK`-muodossa:

```ts
type RGBColor = {
    red: number;
    green: number;
    blue: number;
};

type CMYKColor = {
    cyan: number;
    magenta: number;
    yellow: number;
    key: number;
};
```

Kun muodostamme kaksi eri tyyppistä oliota ja hyödynnämme JavaScriptin `typeof`-tarkastusta, saamme molemmille tulokseksi vain `object`:

```ts
let flag: RGBColor = { red: 0, green: 56, blue: 168 };
let cross: CMYKColor = { cyan: 100, magenta: 67, yellow: 0, key: 34 };

console.log(typeof flag);  // object
console.log(typeof cross); // object
```

Ongelman ratkaisemiseksi voimme tarkastaa ajonaikaisesti, löytyykö oliosta esimerkiksi muuttujat `red`, `green` ja `blue`, ja tämän tiedon perusteella palauttaa joko `true` tai `false`:

```ts
/** Returns true if the given color matches the RGBColor type */
function isRGB(color: RGBColor | CMYKColor): color is RGBColor {
    return 'red' in color && 'green' in color && 'blue' in color;
}
```

Nyt koodissa voidaan kutsua predikaattifunktioita ja TypeScript osaa hyödyntää niiden paluuarvoja tyypin rajaamisessa:

```ts {2}
function printColor(color: RGBColor | CMYKColor) {
    if (isRGB(color)) {
        // TypeScript ymmärtää predikaatin perusteella, että color on tyyppiä RGBColor
        console.log(`red: ${color.red}, green: ${color.green}, blue: ${color.blue}`);
    } else {
        // color ei ollut RGBColor, joten se on CMYKColor
        console.log(`cyan: ${color.cyan}, magenta: ${color.magenta}, yellow: ${color.yellow}, key: ${color.key}`);
    }
}

printColor(flag);   // red: 0, green: 56, blue: 168
printColor(cross);  // cyan: 100, magenta: 67, yellow: 0, key: 34
```
