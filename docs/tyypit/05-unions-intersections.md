---
sidebar_position: 6
---

# Tyyppien unionit ja leikkaukset


https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html

A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members. What about mathematical union & intersection vs. typescript versions, a bit confusing?

```ts
type StringNumberBool = string | number | boolean;
```

If we have a value that is a union type, we can only access members that are common to all types in the union.

:::warning käännösvirhe
```ts
const printId = (id: number | string) => {
  id.toUpperCase();
};
```
Virhe: **toUpperCase does not exist in number | string**
:::

## Discriminated unions

https://www.typescriptlang.org/docs/handbook/2/objects.html

```ts
interface Rectangle {
    kind: "rectangle"; //discriminant property
    width: number;
    height: number;
}

interface Circle {
  kind: "circle"; //discriminant property
  radius: number;
}

type Shape = Rectangle | Circle; //discriminated union https://basarat.gitbook.io/typescript/type-system/discriminated-unions

const shape: Shape = { kind: "circle", radius: 5 };
shape; // circle

const shape2: Shape = { kind: "rectangle", radius: 5 }; //not a valid type found from Shape union
```

## What about intersection of these two?

```ts
type RectangleCircleNever = Rectangle & Circle; //never union because of kind-property
type RectangleCircle = Omit<Rectangle, "kind"> &
  Omit<Circle, "kind"> & { kind: "circlerect" }; //union with Omit utility type

const shape4: RectangleCircle = {
  kind: "circlerect",
  radius: 5,
  width: 3,
  height: 4,
};
```


## Intersection type

https://javascript.plainenglish.io/using-typescript-intersection-types-like-a-pro-a55da6a6a5f7

```ts
//An intersection type combines multiple types into one
type Qube = Rectangle & { length: number };
//or with extends and interfaces
interface QubeInterface extends Rectangle {
  length: number;
}
//another example
interface RequestWithPatientId extends Request {
  patientId: number;
}
```


### Taulukot (array)

Myös taulukot ovat tyypitettyjä siinä missä yksittäiset muuttujat, esim. `string[]` tai `number[]`.

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

