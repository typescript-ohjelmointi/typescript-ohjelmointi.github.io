---
sidebar_position: 6
---

# Tyyppien unionit ja leikkaukset

TypeScriptissä eri tyyppejä voidaan ilmaista joukko-opin termien mukaisesti unioneilla (union) ja leikkauksilla (intersection). Unionin tapauksessa tyyppi käsittää ikään kuin vaihtehtoisia toisistaan erillisiä tyyppejä. Leikkaus puolestaan määrittelee tyypin, joka täyttää molempien siihen kuuluvien tyyppien piirteet.


## Unionit (`a | b`)

Uusia tyyppejä voidaan ilmaista yhdistelemällä vakioita tai olemassa olevia tyyppejä. Jos esimerkiksi haluamme luoda tyypin `Size`, joka sallii ainoastaan merkkijonovakiot `s`, `m` ja `l`, voimme luoda sen unionin `|` avulla seuraavasti:

```ts
type Size = 's' | 'm' | 'l'; // sallii vain nämä ennalta määrätyt merkkijonot
```

Tätä uutta `Size`-tyyppiä voidaan sen jälkeen käyttää ohjelmassa kuten mitä tahansa tyyppiä. TypeScript osaa tarkastaa aina sitä käytettäessä, että arvo kuuluu ennalta määritettyyn joukkoon:

```ts
type Shirt = {
    size: Size;
};

let smallShirt = { size: 's' }; // ok

let unknownShirt = { size: 'tall' }; // käännösvirhe!
```

Mikäli muuttujan tyypiksi määritellään unioni, voidaan siihen asettaa arvoja, jotka vastaavat mitä tahansa unionissa määritettyä tyyppiä:

```ts
let id: number | string;

id = 100;       // ok
id = 'a1b2c3';  // ok
```

Yleinen käyttötapaus union-tyypeille on eri tyyppisten arvojen salliminen funktion parametrina. Seuraavassa esimerkissä `printId`-funktiota voidaan kutsua joko `number`- tai `string`-tyyppisellä arvolla:

```ts
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
```

Yllä parametrin tyypiksi on määritetty *unioni* `number | string`, eli funktio sallii kumman tahansa tyyppisen arvon käyttäjän id:nä.

Unioni voidaan määritellä suoraan muuttujan tai parametrin tyypiksi, mutta monessa tilanteessa voi olla kannattavaa määritellä uusi *alias* kuten `UserId`. Tämä edesauttaa koodin luettavuutta ja ylläpidettävyyttä erityisesti mikäli samaa unionia tarvitaan lukuisissa kohdissa:

```ts
type UserId = string | number;

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
function printId(id: UserId) {
    console.log("Your ID is: " + id);
}
```


## Leikkaukset (`a & b`)

Uusia tyyppejä voidaan myös yhdistellä olemassa olevista tyypeistä *intersection* -operaatiolla. Seuraavassa esimerkissä on määritetty tyypit `Coordinate` ja `Address`. Lisäksi siinä on määritetty "karttapistettä" varten tyyppi, joka sisältää sekä osoitteen että koordinaatin attribuutit. Tämä karttapiste on toteutettu `MapMarker`-nimisenä ja se sisältää koordinaatin ja osoitteen unionin `Address & Coordinate`:

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

Yllä `haagaHelia`-oliolla on neljä muuttujaa, joista kaksi ensimmäistä on määritetty `Coordinate`-tyypissä ja kaksi seuraavaa `Address`-tyypissä. Koska olio asetetaan muuttujaan, joka on näiden tyyppien unioni, edellyttää TypeScript että siitä löytyy kaikki molempien tyyppien arvot.

Eri tyyppien yhdistäminen voi olla kätevää esimerkiksi tapauksissa, joissa käyttäisit luokkiin perustuvassa tyypityksessä perintää. Esimerkiksi tietokannasta luettujen tietojen "tavanomaiset" osat `id`, `createdAt` ja `updatedAt` voidaan sisällyttää muihin tyyppeihi, kuten `Author` ja `Book`:

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

Yllä `Author` sisältää kaikki `Entity`-tyypin attribuutit, joiden lisäksi sillä on myös `name`. Vastaavasti `Book`-tyyppi sisältää yhteisten attribuuttien lisäksi nimen ja kirjoittajan.

Voit lukea aiheesta lisää [TypeScriptin käsikirjasta](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html).



## Leikkaukset ja unionit taulukoissa

Myös taulukot voivat sisältää useita eri tyyppisiä arvoja, jos niiden tyypiksi määritellään unioni tai leikkaus. Seuraavissa tapauksissa, kun arvot ovat joko merkkijonoja tai numeroita, päättelee TypeScript taulukon tyypiksi automaattisesti unionin `(string | number)[]`:

```ts
let values = [1, 2, 3, 'one', 'two', 'three'];  // (string | number)[]
let combo = [...faces, ...numbers];             // (string | number)[]
```

Taulukoita käsiteltäessä TypeScript ei aina voi tietää, minkä tyyppinen arvo tietystä indeksistä löytyy, tai löytyykö siitä lainkaan arvoa. Tällöin törmäät helposti tilanteeseen, jossa TypeScript päättelee tyypiksi esimerkiksi `undefined | string | number`.

Mikäli koodissa ollaan varmoja, että arvo löytyy ja että se on tiettyä tyyppiä, voit käyttää `as`-avainsanaa, joka ohittaa TypeScriptin päättelylogiikan:

```ts
let values = [1, 2, 3, 'one', 'two', 'three'];

let first = all.at(0);              // päätelty tyyppi on `first: (string | number)`

let second = all.at(1) as number;   // `as` ohittaa TypeScriptin tyyppien päättelyn
```

### Pohdittavaa

On eri asia, onko taulukkomuuttujan tyypiksi määritetty esimerkiksi `(string | number)[]` tai `(string[] | number[])`. Pohdi tai kokeile omassa koodieditorissasi, miten nämä tyyppien unionit poikkeavat toisistaan.



## Control flow analysis (CFA)

Erityisesti unioneita käytettäessä päädytään usein tilanteisiin, joissa ohjelman loogiset polut eroavat käsiteltävän arvon tyypeistä riippuen.

Seuraavat koodiesimerkit näyttävät, miten TypeScript osaa tulkita JavaScriptin kontrollirakenteita rajatakseen eri arvojen mahdollisia tyyppejä.

Kun koodissa on tehty esimerkiksi tarkastus `if (typeof x !== "number")`, osaa TypeScript automaattisesti rajata `x`:n mahdollisia tyyppejä seuraavilla riveillä.

```ts
const square = (x: number | undefined) => {
    if (!x) {
        throw new Error("Undefined");
    }
    return x * x; // TS tietää tässä vaiheessa, että arvon on oltava numero
};

const square2 = (x: number | undefined) => {
    if (typeof x !== "number") {
        // typeof type guard
        throw new Error("Not a number");
    }
    return x * x;
};

const square3 = (x: number | undefined | string) => {
    if (typeof x === "string") {
        // typeof type guard
        throw new Error("Not a number");
    } else if (!x) {
        throw new Error("Undefined");
    }
    return x * x;
};

const square4 = (x: number | Date) => {
    if (x instanceof Date) {
        // Date is a class that can be initialized
        throw new Error("Invalid type");
    }
    if (typeof x === "Date") {
        // Error: This comparison appears to be unintentional because the types
        //  '"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object"
        //  | "function"' and '"Date"' have no overlap.
        throw new Error("Invalid type");
    }
    return x * x;
};
```

### Sisäkkäinen Control flow analysis -esimerkki

Artikkelissa [Get the best of TypeScript Control Flow Analysis (retool.com)](https://retool.com/blog/typescript-control-flow-analysis-best-of/) käsitellään laajemmin TypeScriptin tyyppianalyysiä. Analyysi mahdollistaa mm. seuraavassa esimerkissä esitetyn logiikan, jossa `x`:n tyyppi saadaan rajattua kolmen tyypin unionista yhteen:

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

<!--

## Conditional types + extends keyword

```ts
//"T extends string", T=string
//In addition need to utilise a conditional deduction logic with the types (with ternary ? : -syntax).
type DerivedType = typeof c extends Foo ? Foo : Blaa;
```
-->

## Bonus: lisää yksityiskohtia tyyppien rajauksesta

Voit tutustua tähän esimerkkii itsenäisesti esimerkiksi koodieditorisi avulla. Tutustu aiheeseen myös [TypeScriptin käsikirjassa](https://www.typescriptlang.org/docs/handbook/2/narrowing.html).

```ts
// JavaScript has an operator for determining if an object has a property with a name: the in operator.
// TypeScript takes this into account as a way to narrow down potential types.
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
type Animal = Fish | Bird | Human;

function move(animal: Animal) {
    if ("swim" in animal) {
        // Narrow down the type with JavaScript in operator
        animal; // animal narrowed to Fish | Human

        if ("fly" in animal) {
            animal; // animal narrowed to Human

        } else {
            animal;
            /* here it's still a Fish or Human, because TypeScript uses a concept called
             *"control flow based type analysis" to determine the types of variables. This
             * means that TypeScript can infer the type of a variable based on the control
             * flow of the program, but it doesn't keep track of the types of variables
             * within the different branches of the control flow. So, even though the type
             * of animal was narrowed to Human in the previous block, TypeScript doesn't
             * know that the type of animal is not Fish in the surrounding if-else block.*/
        }
    } else {
        animal; // animal narrowed to Bird | Human
    }
    if (animal instanceof Fish) {
        /* The instanceof operator is used to check the constructor of an object, but it
         * doesn't work with discriminated unions. instanceof works by checking the prototype
         * chain of an object, but since a union type can have multiple different prototypes,
         * it can't determine the type correctly. */
        animal;
    }
}

type Foo3 = {
    x: number;
};
type NumberType = Foo3["x"];

```

<!--## Bonus: Some confusing examples of Accessing type of a property

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
-->


## Discriminated unions

Unionin tyypeille määritellään toisinaan yksittäinen muuttuja, jonka vakioarvon perusteella eri tyypit voidaan erottaa toisistaan. Esimerkiksi seuraavissa muotoja käsittelevissä `Rectangle`- ja `Circle`-tyypeissä on `kind`-muuttuja, jonka perusteella nelikulmiot ja ympyrät voidaan erottaa toisistaan ohjelmalogiikassa:

```ts
interface Rectangle {
    kind: "rectangle"; // discriminant property
    width: number;
    height: number;
}

interface Circle {
  kind: "circle"; // discriminant property
  radius: number;
}

type Shape = Rectangle | Circle; //discriminated union https://basarat.gitbook.io/typescript/type-system/discriminated-unions

const shape: Shape = { kind: "circle", radius: 5 };
shape; // circle

const shape2: Shape = { kind: "rectangle", radius: 5 }; // not a valid type found from Shape union
```

Mikäli olion `kind`-muuttujan arvo on `"rectangle"`, osaa TypeScript huolehtia siitä, että sillä on oltava juuri `Rectangle`-tyypissä määritellyt muuttujat eikä `Circle`-tyypin muuttujia.


:::info diskriminoivien tyyppien leikkaus

Mikäli kahdessa eri tyypissä on yhteinen attribuutti, jolla on eri tyypeissä eri vakioarvot tai tyypit, ei niistä voida tehdä suoraan leikkausta. Tällöin olisi epäselvää, kumman leikkaukseen kuuluvan tyypin määrittelyä tulisi käyttää.

Leikkaus on kuitenkin mahdollista hyödnytämällä `Omit`-aputyyppiä, jonka avulla voidaan ilmaista mikä tahansa tyyppi ilman tiettyä attribuuttia. [Omit-tyyppiä käsitellään tarkemmin materiaalin myöhemmässä osassa](./08-utility-types.md), mutta käytännössä voisimme sen avulla leikkauksen myös yllä esitetyistä `Rectangle`- ja `Circle`-tyypeistä:

```ts
type RectangleCircleNever = Rectangle & Circle; // never union because of kind-property
type RectangleCircle = Omit<Rectangle, "kind"> &
    Omit<Circle, "kind"> & { kind: "circlerect" }; // union with Omit utility type

const confusingShape: RectangleCircle = {
    kind: "circlerect",
    radius: 5,
    width: 3,
    height: 4,
};
```
:::
Lue lisää aiheesta [TypeScriptin käsikirjasta](https://www.typescriptlang.org/docs/handbook/2/objects.html).
