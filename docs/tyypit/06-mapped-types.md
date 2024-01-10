---
sidebar_position: 6
---

# Map-tyypit (mapped types)


JavaScriptissä olioita (object) käytetään usein avain-arvo-pareja sisältävänä map-tietorakenteena, esimerkiksi seuraavasti:

```ts
let postinumerot = {
    "74701": "Kiuruvesi",
    "35540": "Juupajoki",
    "74700": "Kiuruvesi",
    "73460": "Muuruvesi"
};
```

Tämä poikkeaa oppimateriaalin aikaisemmista tyypeistä siten, että olion attribuuttien nimet, eli tässä tpaauksessa postinumerot, eivät ole ennalta tiedossa. Tähän tietorakenteeseen voidaankin lisätä myöhemmin uusia avain-arvo-pareja:

```ts
postinumerot["00730"] = "Helsinki";
```

## Map-tyypin määrittely

Postinumeroesimerkin tapauksessa olion tyyppi halutaan määritellä siten, että sen avaimiksi hyväksytään mikä tahansa merkkijono, ja arvojen on oltava merkkijonoja. TypeScript mahdollistaa ns. [index signaturen](https://basarat.gitbook.io/typescript/type-system/index-signatures#declaring-an-index-signature), jolla voidaan määritellä objektin avainten sekä arvojen tyypit:

```ts
let postinumerot: { [key: string]: string } = {
    "74701": "Kiuruvesi",
    "35540": "Juupajoki",
    "74700": "Kiuruvesi",
    "73460": "Muuruvesi"
};
```

Yllä muuttujan tyyppinä on siis `{ [key: string]: string }`, joka määrittelee vasemmalla puolella avaimen tyypiksi `string` ja vasemmalla puolella arvon tyypiksi `string`. Nyt `postinumerot`-muuttujassa olevaan olioon voidaan asettaa ainoastaan avaimiksi ja arvoiksi ainoastaan merkkijonoja.

Kokeile esimerkiksi suorittaa ja muokata seuraavaa koodiesimerkkiä omassa editorissasi:

```ts
let emojis: { [key: string]: string } = {};
emojis['smile'] = '🙂';
emojis['laugh'] = '😄';


// objektin kaikki avaimet saadaan array:na JS:n Object.keys-metodilla:
console.log(Object.keys(emojis));   // [ 'smile', 'laugh' ]

// objektin kaikki arvot saadaan array:na JS:n Object.values-metodilla:
console.log(Object.values(emojis)); // [ '🙂', '😄' ]


// TypeScript ei takaa, että avaimelle löytyy arvoa:
console.log(emojis['angry']);       // undefined

// avain voidaan tarkastaa `in`-operaatiolla:
if ('smile' in emojis) {
    console.log(emojis['smile']);   // 🙂
}

console.table(emojis); /* ┌─────────┬────────┐
                          │ (index) │ Values │
                          ├─────────┼────────┤
                          │  smile  │  '🙂'  │
                          │  laugh  │  '😄'  │
                          └─────────┴────────┘ */

```


## Record-tyyppi

TypeScriptin ["utility types"-tyypeistä](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) löytyy myös valmis `Record`, jonka avulla objektin avainten ja arvojen tyypit on määritettävissä vielä astetta selkeämmin:

> **Record&lt;Keys, Type&gt;**
>
> *"Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type."*
>
> https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type

`Record`-tyypin avulla edellä esitetty `{ [key: string]: string }` voidaankin esittää hieman selkeämmällä tavalla `Record<string, string>`:

```ts
let weekdays: Record<string, string> = {};
weekdays['monday'] = 'maanantai';
weekdays['tuesday'] = 'tiistai';

console.log(weekdays);                  // { monday: 'maanantai', tuesday: 'tiistai' }
console.log('tuesday' in weekdays);     // true

console.log(weekdays['someday']);       // undefined
```

Käytännössä `Record` on vain tyyppialias "index signaturelle", ja se on määritetty [TypeScriptin omassa lähdekoodissa seuraavasti](https://github.com/microsoft/TypeScript/blob/81793210e6337ad8d20f2b7e44e9489687c2d29c/src/lib/es5.d.ts#L1587):

```ts
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```

Yllä `keyof any` tuottaa unionin `string | number | symbol`. `Record`-tyypin avaimina käytetäänkin pääasiassa merkkijonoja ja numeroita. Arvoina voidaan käyttää mitä tahansa tyyppiä `T`. Koska arvon tyypiksi käy mikä vain, voit käyttää myös unioneita ja leikkauksia, kuten:

```ts
let favorites: Record<string, string | number> = {};
```

## Map-tyyppien soveltaminen

### Olemassa olevan tyypin käyttäminen map-tyypissä

Mikäli haluat käydä olemassa olevan tyypin läpi ja muodostaa sen perusteella uuden map-tyypin, onnistuu se `in`-operaattorin avulla. `in` muodostaa esimerkiksi unionin jokaista tyyppiä tyyppiä kohden uuden attribuutin.

Jos koodissamme on esimerkiksi [RGB-arvoja](https://en.wikipedia.org/wiki/RGB_color_model) mallintava `Color`-tyyppi, jossa `red`, `green` ja `blue` saa numeeriset arvot, voimme käyttää tätä tyyppiä uuden `string -> string`-tyyppisen mapin luomiseksi:

```ts
interface Color {
    red: number;
    green: number;
    blue: number;
}

type StringColors = { [c in keyof Color]: string }
/*
 * Sama kuin:
 * type mapped = {
 *   red: string;
 *   green: string;
 *   blue: string;
 * }
*/
```

Sama saadaan aikaiseksi `Record`-tyypin avulla käyttämällä avaimen tyyppinä `keyof Color` ja arvona `string`:

```ts
type StringColors = Record<keyof Color, string>;
```

Lue aiheesta lisää osoitteista [https://learntypescript.dev/08/l2-mapped-type](https://learntypescript.dev/08/l2-mapped-type) ja [https://javascript.plainenglish.io/using-typescript-mapped-types-like-a-pro-be10aef5511a](https://javascript.plainenglish.io/using-typescript-mapped-types-like-a-pro-be10aef5511a).

```ts
type MappedTypeName = { [K in UnionType]: ExistingType };
type MappedTypeName = { [K in keyof ExistingType1]: ExistingType2 };
```

```ts
interface Todo {
    title: string
    description: string
    completed: boolean
}
```

```ts
//k in ...
//..manually. Try adding something else to in
type TodoConstucted = {[K in "title" | "description" | "completed"]: Todo[K]}
//..utilizing keyof
type TodoConstucted2 = {[K in keyof Todo]: Todo[K]}
```

### Esimerkkejä geneerisistä map-tyypeistä

Tutki ja muokkaa omassa koodieditorissasi seuraavia map-tyyppisiä määrityksiä, joissa hyödynnetään geneerisiä tyyppejä:

```ts
type MyMakeOptional<T> = {
    [P in keyof T]?: T[P];
};

//-? expression
type MyRemoveOptional<T> = {
    [P in keyof T]-?: T[P];
};

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

const optionalTodo: MyMakeOptional<Todo> = { title: 'Optional todo' };
const readOnlyTodo: MyReadonly<Todo> = { title: 'Read only todo', description: 'desc', completed: false };
readOnlyTodo.title = 'Todo 2'; // Error: Cannot assign to 'Todo 2' because it mapped to a read-only property.
```

## Union type of the values in an array with [number]-syntax

Tutki ja muokkaa omassa koodieditorissasi seuraavia map-tyyppisiä määrityksiä:

```ts
const myArray = ['one', 'two'] as const
type ArrayType = typeof myArray
type ValidNumber = typeof myArray[number]
//why not this?
type ValidNumber2 = typeof myArray[keyof ArrayType]
//what about this, arrays are actually objects, aren't they? (//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Array_object)?
type ValidNumber3 = typeof myArray[0 | 1]
```

## Index signatures ([key: xxx])

Tutki ja muokkaa omassa koodieditorissasi seuraavia map-tyyppisiä määrityksiä.

Lue aiheesta lisää artikkeleista
[https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures) ja [https://blog.logrocket.com/typescript-mapped-types/](https://blog.logrocket.com/typescript-mapped-types/).

```ts
type User = {
    name: string;
    preferences: {
      [key: string]: string;
    }
};
const currentUser: User = {
    name: 'Foo Bar',
    preferences: {
        lang: 'en',
    },
};
```

## Mapping allows future additions to reflect on depending types "automatically"

Map-tyypit mahdollistavat uusien arvojen huomioimisen automaattisesti, kun ohjelmaan tulee esimerkiksi uusia konfiguraatioihin liittyviä ominaisuuksia.

[https://blog.logrocket.com/typescript-mapped-types/](https://blog.logrocket.com/typescript-mapped-types/)

```ts
type AppConfig = {
    username: string,
    layout: string,
    //more in the future possibly, try adding here something
}

// Whether or not the user has permission to change configuration values
type AppPermissions = {
    // Notice the as-keyword
    // Notice template literal `change${Type}`
    // and "intrinsic string manipulation" (Capitalize)
    //(https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
    [Key in keyof AppConfig as `change${Capitalize<Key>}`]: boolean
}

const appPermission: AppPermissions = {changeUsername: true, changeLayout: false}
```

Tämä esimerkki on jo huomattavasti edistyneempi ja se hyödyntää myös [Capitalize-tyyppiä](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html), johon voit tutustua itsenäisesti [TypeScriptin käsikirjassa](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html).
