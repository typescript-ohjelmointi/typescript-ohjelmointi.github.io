---
sidebar_position: 5
---

# Geneeriset tyypit

TypeScript tukee geneerisiä tyyppejä (generics) niin [tyyppien määrityksissä](https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types) kuin esimerkiksi [funktioiden parametreissa ja paluuarvoissa](https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions). Lyhyesti kuvailtuna geneeriset tyypit edesauttavat koodin uudelleenkäytettävyyttä tilanteissa, joissa sama funktio tai tyyppi voi käsitellä monen tyyppistä dataa.

Aiheeseen perehtymiseksi suosittelemme seuraavaa lyhyttä videota:

[**Learn TypeScript Generics In 13 Minutes. Web Dev Simplified. YouTube**](https://www.youtube.com/watch?v=EcCTIExsqmI)


## Geneeriset funktiot

Mikäli haluat toteuttaa esimerkiksi funktion, joka palauttaa merkkijonotaulukosta satunnaisen arvon, voisit toteuttaa sen esimerkiksi seuraavasti:

```ts
/** Returns a random string from the given array of strings */
function getRandom(collection: string[]): string {
    let randomIndex = Math.trunc(Math.random() * collection.length);
    return collection[randomIndex];
}

console.log(getRandom(['kivi', 'paperi', 'sakset']));
```

Funktion parametreissa määritellään, että se saa parametrinaan merkkijonotaulukon `string[]` ja että se palauttaa merkkijonon. Funktion sisällä ei kuitenkaan ole lainkaan merkkijonoihin liittyvää logiikkaa, joten samaa koodia voitaisiin uudelleenkäyttää minkä tahansa tyyppisen taulukon käsittelemiseksi. Materiaalin [aikaisemmassa osassa](./01-tyyppijarjestelma.md) esittelimme `any`-tyypin, joka tavallaan voisi olla osa ratkaisua. Mikäli vaihtaisimme parametrin tyypiksi `any[]` ja paluuarvon tyypiksi `any`, koodi toimisi minkä tahansa tyyppisten taulukkojen kanssa. Tällöin paluuarvo olisi kuitenkin tyyppiä `any`, joka aiheuttaisi ylimääräistä työtä funktiota kutsuvassa koodissa. Sen sijaan voimme määritellä funktiolle geneerisen tyyppiparametrin, jonka avulla sekä parametrin että paluuarvon tyyppi saadaan määritettyä samaksi:

> *"In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature."*
>
> Microsoft. More on Functions. [typescriptlang.org](https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions)

Tyyppiparametri määritellään funktion nimen ja sulkujen välissä kulmasulkujen (`<` `>`) sisällä. Tyyppiparametrin nimi voidaan valita itse, mutta tyypillisesti parametrin nimenä käytetään kirjaimia `T`, `U`, `V`...

Kun funktion otsikoksi määritellään `function getRandom<T>(collection: T[]): T` funktio hyväksyy minkä tahansa taulukon ja TypeScript tietää paluuarvon olevan aina samaa tyyppiä kuin annettu taulukko. Tämän muutoksen jälkeen funktiota voidaankin kutsua yhtä hyvin merkkijono- kuin numerotaulukon kanssa:

```ts
/** Returns a random item from the given array */
function getRandom<T>(collection: T[]): T {
    let randomIndex = Math.trunc(Math.random() * collection.length);
    return collection[randomIndex];
}

console.log(getRandom(['kivi', 'paperi', 'sakset']));
console.log(getRandom([0, 1, 2]));
```


## Geneeriset tyyppimäärittelyt

Toisinaan on myös tarpeen määritellä tyyppejä, joiden attribuutteina voi olla eri tyyppisiä arvoja. Seuraavassa koodiesimerkissä onkin määriteltynä tyyppi `Box`, jonka sisältönä voi olla eri tyyppisiä arvoja:

```ts
interface Box<Type> {
    contents: Type;
}


const greeting: Box<string> = { contents: 'hello' }

// TypeScript tarkastaa parametrisoidun tyypin ja huomaa virheen:
greeting = { contents: 1 } // error


// uusi alias `Box`-tyypille, joka sisältää merkkijonon:
type StringBox = Box<string>

const feedback: StringBox = { contents: 'good job!' }
```

Eräs hyvin yleinen parametrisoitu tyyppi on JavaScriptin `Promise`, joka käyttötapauksesta riippuen pitää sisällään eri tyyppisiä arvoja. [TypeScriptin lähdekoodissa](https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts) `Promise`-tyyppi onkin määritetty seuraavasti:

```ts
interface Promise<T> {
  //...
}
```

Voit lukea aiheesta lisää [TypeScriptin käsikirjasta](https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types).
