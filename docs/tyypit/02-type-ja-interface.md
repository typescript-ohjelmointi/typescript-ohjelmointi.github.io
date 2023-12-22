---
sidebar_position: 2
---

# Type ja interface

https://www.typescriptlang.org/docs/handbook/interfaces.html

TypeScriptistä on merkittävää hyötyä silloin, kun omassa ohjelmalogiikassa hyödynnetään eri tyyppisiä olioita. Yksinkertaisimmillaan "oliotyyppi" voidaan määritellä suoraan muuttujaan:

```ts
let user: { id: number, name: string } = { id: 1, name: 'Alice'};
```

Tyypin määritteleminen muuttujaan on kuitenkin usein erityisesti uudelleenkäytettävyyden näkökulmasta huono idea. Tyypeille voidaankin määritellä "aliaksia", jotka tekevät niistä uudelleenkäytettäviä:

```ts
type User = {
    id: number;
    name: string;
};

let user1: User = { id: 1, name: 'Alice' };
let user2: User = { id: 2, name: 'Bob' };
```

Eri tyypeissä voi olla myös valinnaisia attribuutteja:

```ts
type User = {
    id: number;
    name: string;
    email?: string;  // `?` tarkoittaa valinnaista arvoa
};

let user1: User = { id: 1, name: 'Alice' };
let user2: User = { id: 2, name: 'Bob', email: 'bob@example.com' };

console.log(user2.email.toLowerCase());   // käännösvirhe, koska email saattaa olla `undefined`
console.log(user2.email?.toLowerCase());  // JS:n "optional chaining" -> ei virhettä
```


### Union (`number | string`)

Uusia tyyppejä voidaan myös luoda yhdistelemällä vakioita tai olemassa olevia tyyppejä:

```ts
type Size = 's' | 'm' | 'l'; // sallii vain nämä ennalta määrätyt merkkijonot

type Shirt = {
    size: Size;
}

let smallShirt = { size: 's' }; // ok

let unknownShirt = { size: 'tall' }; // käännösvirhe!
```

Yleinen käyttötapaus union-tyypeille on myös esimerkiksi joko numeron tai merkkijonon salliminen parametrina:

```ts
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
```

### Intersection (`&`)

Uusia tyyppejä voidaan myös yhdistellä olemassa olevista tyypeistä *intersection* -operaatiolla. Seuraavassa esimerkissä on määritetty tyypit `Coordinate` ja `Address`, sekä `MapMarker`, joka sisältää molempien edellä mainittujen tyyppien attribuutit:

```ts
type Coordinate = {
    lat: number;
    lon: number;
};

type Address = {
    street: string;
    city: string;
};

type MapMarker = Address & Coordinate;

let haagaHelia: MapMarker = {
    lat: 60,
    lon: 24,
    street: 'Ratapihantie 13',
    city: 'Helsinki'
};
```

Eri tyyppien yhdistäminen voi olla kätevää esimerkiksi tapauksissa, joissa käyttäisit perintää. Esimerkiksi tietokannasta luettujen tietojen yhteiset osat `id`, `createdAt` ja `updatedAt` voidaan sisällyttää muihin tyyppeihi, kuten `Author` ja `Book`:

```ts
type Entity = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
};

type Author = Entity & { name: string };
type Book = Entity & { title: string, author: Author };
```


### Tuplet (monikko)

TS tukee JavaScriptin taulukoille myös erityistä [tuple-tyyppiä](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types), jossa voidaan ennalta määritellä taulukon pituus ja kunkin eri indeksin tyyppi:

```ts
type NameAndAge = [string, number];

let alice: NameAndAge = ['Alice', 29];  // ok!
let bob: NameAndAge = ['Bob', 28, 1];   // käännösvirhe! `Source has 3 element(s) but target allows only 2`
```


### Muita kiinnostavia ominaisuuksia

TypeScript mahdollistaa useita erilaisia käteviä tapoja edistää oman koodin ylläpidettävyyttä, kuten `private` ja `readonly` -attribuutit sekä `as const`:

```ts
const days = ['ma', 'ti', 'ke', 'to', 'pe', 'la', 'su'] as const;
days[0] = 'måndag'; // error: "Index signature in type 'readonly string[]' only permits reading."
```

JavaScriptin `const` varmistaa, että muuttujaan ei voida asettaa uutta arvoa. `const`-muuttujaan asetetun arvon muuttaminen on kuitenkin mahdollista, esimerkiksi lisäämällä listaan uusia arvoja. TypeScriptin `as const` varmistaa muuttujan lisäksi myös siihen asetetun arvon muuttumattomuuden. Näihin ominaisuuksiin voit perehtyä lisää itsenäisesti.


## Structural typing:

```ts
class Foo {
  x: number = 0;
}
class Blaa {
  x: number = 0;
}
let f: Foo = new Blaa();
let b: Blaa = new Foo();

const c = b as Foo;
```


## Literals and narrowing down to narrowest type:

```ts
let limitToOnlyHello = "Hello" as const;
limitToOnlyHello = "World"; //error, only Hello allowed
```

## Using control flow analysis (CFA) to narrow down the type with following the JavaScript logic.
```ts
const square = (x: number | undefined) => {
  if (!x) {
    throw "Undefined";
  }
  return x * x;
};
const square2 = (x: number | undefined) => {
  if (typeof x !== "number") {
    //typeof type guard
    throw "Not a number";
  }
  return x * x;
};
const square3 = (x: number | undefined | string) => {
  if (typeof x === "string") {
    //typeof type guard
    throw "Not a number";
  } else if (!x) {
    throw "Undefined";
  }
  return x * x;
};
const square4 = (x: number | Date) => {
  if (x instanceof Date) {
    //Date is a class that can be initialized
    throw "Invalid type";
  }
  if (typeof x === "Date") {
    //Error: This comparison appears to be unintentional because the types '"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"' and '"Date"' have no overlap.
    throw "Invalid type";
  }
  return x * x;
};
```

## Another example of (nested) CFA https://retool.com/blog/typescript-control-flow-analysis-best-of/

```ts
const doSomething = (x: string | number | boolean) => {
  const isString = typeof x === "string";
  const isNumber = typeof x === "number";
  const isStringOrNumber = isString || isNumber;

  if (isStringOrNumber) {
    x; // string | number
    if (typeof x === "number") {
      x; //number
    }
  } else {
    x; //boolean
  }
};
```

## Conditional types + extends keyword

```ts
//"T extends string", T=string
//In addition need to utilise a conditional deduction logic with the types (with ternary ? : -syntax).
type DerivedType = typeof c extends Foo ? Foo : Blaa;
```

## Bonus: still some peculiarities about narrowing

https://www.typescriptlang.org/docs/handbook/2/narrowing.html

```ts
//JavaScript has an operator for determining if an object has a property with a name: the in operator.
//TypeScript takes this into account as a way to narrow down potential types.
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
type Animal = Fish | Bird | Human;
function move(animal: Animal) {
  if ("swim" in animal) {
    //Narrow down the type with JavaScript in operator
    animal; //animal narrowed to Fish | Human
    if ("fly" in animal) {
      animal; //animal narrowed to Human
    } else {
      animal; //here it's still a Fish or Human, because TypeScript uses a concept called "control flow based type analysis" to determine the types of variables. This means that TypeScript can infer the type of a variable based on the control flow of the program, but it doesn't keep track of the types of variables within the different branches of the control flow. So, even though the type of animal was narrowed to Human in the previous block, TypeScript doesn't know that the type of animal is not Fish in the surrounding if-else block.
    }
  } else {
    animal; //animal narrowed to Bird | Human
  }
  if (animal instanceof Fish) {
    //The instanceof operator is used to check the constructor of an object, but it doesn't work with discriminated unions. instanceof works by checking the prototype chain of an object, but since a union type can have multiple different prototypes, it can't determine the type correctly.
    animal;
  }
}

type Foo3 = {
  x: number;
};
type NumberType = Foo3["x"];
```

## Bonus: Some confusing examples of Accessing type of a property

```ts
const x = new Foo().x;
type FooType = {
  x: number;
};
type XConst = typeof x;
type X = Foo["x"];
type XType = FooType["x"];
```

## Bonus: Additional advanced features like the "infer" keyword are left for self study..
