---
sidebar_position: 4
---

# Keyof ja typeof

TypeScript osaa hyödyntää olemassa olevien arvojen ja funktioiden tyyppejä uusien tyyppien määrittelemiseksi.

## typeof

Otetaan esimerkiksi seuraava olio, joka sisältää kolme muuttujaa:

```ts
const takeOutTrash = {
  title: 'Take out the trash',
  description: 'Empty the trash bin and recyclables',
  completed: false,
};
```

Tätä olemassa olevaa oliota voidaan nyt hyödyntää esimerkiksi uuden `Task`-tyypin määrittelemiseksi:

```ts
type Task = typeof takeOutTrash; // { title: string; description: string; completed: boolean; }
```

Lisätietoja `typeof`-operaattorista löydät TypeScriptin [käsikirjasta](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html).

:::info typeof !== typeof

On hyvä huomioida, että TypeScriptin `typeof`-operaattori liittyy TypeScriptin tyyppien määrittelemiseen, kun taas [JavaScriptin `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) on ajonaikaisesti suoritettava lauseke.

Hieman epäonnisesti nämä kaksi operaatiota ovat nimetty täysin samalla tavalla 😕:

* TS: https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
* JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
:::

## keyof

TypeScriptissä voit luoda myös uuden tyypin, joka sisältää vakiot kaikista olemassa olevan toisen tyypin avaimista, eli käytännössä muuttujien nimistä. Tämä tapahtuu [`keyof`-operaattorilla](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html).

```ts
interface Color {
    red: number;
    green: number;
    blue: number;
}

type KeysOfColor = keyof Color; // red | green | blue
```

Tämä on erityisen hyödyllistä tapauksissa, joissa sinun tarvitsee käsitellä olion muuttujia, mutta et etukäteen tiedä mitä muuttujista milloinkin käytetään.

Ajattele esimerkiksi seuraavia funktioita, jotka käsittelevät värin punaista, sinistä tai vihreää komponenttia:

```ts
function incrementComponent(color: Color, component: keyof Color, percent: number) {
    color[component] *= 1 + percent / 100;
}

function swapColorComponents(color: Color, componentA: keyof Color, componentB: keyof Color) {
    [color[componentA], color[componentB]] = [color[componentB], color[componentA]];
}

let myColor: Color = { red: 255, green: 10, blue: 15 };

incrementComponent(myColor, 'blue', 10);
swapColorComponents(myColor, 'red', 'green');
```

Nyt yllä määritellyt funktiot toimivat millä tahansa värin komponentilla. TypeScript osaa silti varmistaa, että annettu merkkijono löytyy oikeasti `Color`-tyypistä, eli seuraava funktiokutsu aiheuttaisi käännettäessä virheen:

:::warning käännösvirhe
```ts
incrementComponent(myColor, 'yellow', 10);
```
**Argument of type '"yellow"' is not assignable to parameter of type 'keyof Color'**
:::
