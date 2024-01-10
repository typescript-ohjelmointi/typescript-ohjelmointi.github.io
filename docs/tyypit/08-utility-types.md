---
sidebar_position: 8
---

# Aputyypit

Kuten aikaisemmin käsitellyt [unionit ja leikkaukset](./05-unions-intersections.md) sekä [typeof ja keyof](./03-keyof-typeof.md) ovat osoittaneet, uusia tyyppejä voidaan ilmaista monipuolisesti olemassa olevia tyyppejä hyödyntämällä.


## Pick, Omit ja Partial

TypeScript-kielestä löytyy edellä mainittujen tyyppien lisäksi kokoelma valmiita aputyyppejä, joiden avulla voit esimerkiksi poimia olemassa olevasta tyypistä vain tietyt attribuutit uuteen tyyppiin (*pick*) tai vaihtoehtoisesti jättää uudesta tyypistä tietyt attribuutit pois (*omit*). Voit myös luoda tyyppejä, joissa olemassa olevan tyypin kaikki attribuutit ovat valinnaisia (*partial*).

Tutustu aputyyppeihin tarkemmin [TypeScriptin käsikirjassa](https://www.typescriptlang.org/docs/handbook/utility-types.html) ja kokeile tutkia ja muokata esimerkiksi seuraavaa koodiesimerkkiä omassa koodieditorissasi:

```ts
type Todo = {
    title: string;
    description: string;
    completed: boolean;
};

type TodoWithOnlyTitleAndDesc = Pick<Todo, "title" | "description">;

type TodoWithoutDescription = Omit<Todo, "description">;

type TodoWithEverythingGoes = Partial<Todo>;
```
