---
sidebar_position: 3
---

# Soveltavat tehtävät

Tämän sivun tehtävät käsittelevät TypeScriptin edistyneempiä tyyppejä. Tehtäviä on tarkoitus suorittaa samalla, kun perehdyt kurssin materiaaleissa [map-tyyppeihin](../tyypit/06-mapped-types.md) sekä [aputyyppeihin](../tyypit/08-utility-types.md).

Tehtävät palautetaan kerralla kurssin Teams-ryhmästä löytyvään tehtävään. Ohjeita tehtävän palauttamiseen löydät [Microsoftin ohjeista](https://support.microsoft.com/en-au/topic/turn-in-an-assignment-in-microsoft-teams-e25f383a-b747-4a0b-b6d5-a2845a52092b) ja tarvittaessa voit kysyä apua Teams-kanavalla. Palauta kaikki tiedostot mieluiten yhtenä zip-pakettina.


## Nämä tehtävät julkaistaa kurssin kolmannella viikolla

<!--
```ts
type MyTodoExercise = {
    title: string;
    description: string;
    completed: boolean;
}
```

## 1. Implement the Typescript pick type (fairly easy)


```ts
type MyPickExercise<T, K> = ???

//should be a type with only title, description, without completed
type OnlyTitleAndDesc = MyPickExercise<MyTodoExercise, 'title' | 'description'>
```

## 2. Implement the Typescript Omit type without using existing utility types ("medium")

You can remap keys in mapped types using the "as" keyword. "T extends string" is like T=string.

In addition need to utilise a conditional deduction logic with the keys in the type (with ? : -syntax).

The never keyword can be used to represent something that should never occur.

```ts
type MyOmitExercise<T, K> = ???
```

## 3: Type that will remove all string elements (medium+)

```ts
type MyRemoveBooleansExercise<T> = ???
```

## 4. Bonus: Or even more generic "OmitByType", where type is e.g. string (hard-)

```ts
type OmitByTypeSolutionExercise<T, U> = ???
```
-->
