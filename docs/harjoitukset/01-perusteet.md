---
sidebar_position: 1
---

# Perusteet

Tämän sivun tehtävät auttavat sinut alkuun TypeScript-ohjelmoinnin parissa. Tehtäviä on tarkoitus suorittaa samalla, kun perehdyt kurssin materiaaleissa [TypeScriptin perusteisiin](../perusteet/00-mika-on-typescript.md).

Tehtävien ratkaiseminen edellyttää koodieditoria ja Node.js-ohjelmointiympäristön ja siihen kuuluvan npm-pakettienhallinnan asennusta. `node`-, `npm`-, `npx`- ja `tsx`-komennot tulee suorittaa komentorivillä hakemistossa, jonne tallennat kurssilla tekemäsi harjoitukset. Kohdatessasi ongelmia niin TypeScriptin kuin eri työkalujen kanssa kysy matalalla kynnyksellä vinkkejä ja apua kurssin Teams-kanavalla.

Tehtävät palautetaan kerralla kurssin Teams-ryhmästä löytyvään tehtävään. Ohjeita tehtävän palauttamiseen löydät [Microsoftin ohjeista](https://support.microsoft.com/en-au/topic/turn-in-an-assignment-in-microsoft-teams-e25f383a-b747-4a0b-b6d5-a2845a52092b) ja tarvittaessa voit kysyä apua Teams-kanavalla. Palauta kaikki tiedostot mieluiten yhtenä zip-pakettina.


## 1. TypeScript tooling

TypeScript-käsikirjan sivulla [TypeScript Tooling in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html) on lyhyt tehtävä, jossa toteutetaan ohjeita seuraten skripti, joka näyttää tervehdyksen verkkosivulla. Vaikka itse tervehdys on yksinkertainen, sen toteuttamiseksi hyödynnetään monipuolisesti mm. luokkia ja rajapintoja. Tehtävän kautta opit myös kääntämään koodin ja liittämään käännetyn JavaScript-tiedoston osaksi tavallista HTML-sivua.

Tee tehtävä sivun https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html ohjeiden mukaisesti.


## 2. Projektin luonti ja konfigurointi

Tämän tehtävän tarkoituksena on perehdyttää sinut tyypillisen TypeScript-projektin rakenteeseen ja [package.json](https://docs.npmjs.com/creating-a-package-json-file)- sekä [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)-konfigurointitiedostoihin.

**npm-projektin luonti**

Aloita luomalla tehtävää varten uusi hakemisto ja siirry siihen komentorivillä. Suorita sen jälkeen `npm init`-komento, jonka avulla saat luotua uuden npm-projektin. Ohjeita projektin luomiseen löydät mm. [nodesource.com:in aloitusohjeista](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/).


**Asenna TypeScript**

Kuten [kurssin materiaalissa](../perusteet/03-tyokalut.md) käsitellään, TypeScript voidaan asentaa joko paikallisesti tai globaalisti. Seuraa materiaalissa olevia ohjeita asentaaksesi TypeScriptin uuteen npm-projektiisi paikallisesti. Varmista, että TypeScriptin paikallinen asennus on onnistunut suorittamalla komento `npx tsc --version`. Komennon pitäisi tuottaa teksti, joka on seuraavassa muodossa: `Version 5.X.Y`.


**Luo TypeScriptin `tsconfig.json`-konfiguraatiotiedosto**

Seuraa kurssin [kurssin materiaalin ohjeita](../perusteet/03-tyokalut.md) alustaaksesi projektiisi `tsconfig.json`-asetustiedoston.


**Konfiguroi `tsconfig.json`**

Avaa `tsconfig.json` koodieditorissasi. Perehdy [TypeScriptin dokumentaatiossa](https://www.typescriptlang.org/tsconfig) seuraaviin asetuksiin: `target`, `lib`, `module`, `rootDir `, `outDir`, `strict`, `esModuleInterop`, `include` ja `exclude`.

Suosittelemme sinua palaamaan tehtävän seuraavissa kohdissa tähän tiedostoon ja kokeilemaan, miten eri arvot vaikuttavat projektisi kääntämiseen. Määrittele kullekin edellä mainituista asetuksista sopivat arvot, joilla saat käännettyä `src`-hakemistossa sijaitsevat lähdekooditiedostot `build`-nimiseen hakemistoon.


**Luo `src`-hakemisto**

Luo projektiisi hakemisto nimeltä `src`. Tähän hakemistoon on tarkoitus kirjoittaa TypeScript-kieliset lähdekoodit, jotka käännetään JavaScriptiksi `build`-hakemistoon. Lisää `src`-hakemistoon uusi `index.ts`-tiedosto.


**Kirjoita TypeScript-koodia**

Avaa `index.ts` koodieditorissasi. Kirjoita yksinkertainen TypeScript-koodi, esimerkiksi:

```typescript
const tervehdys: string = "Hei, TypeScript!";
console.log(tervehdys);
```

**Käännä TypeScript-koodi**

Palaa terminaaliin ja käännä kirjoittamasi lähdekoodi TypeScriptistä JavaScriptiksi. Koska olet luonut `tsconfig.json`-tiedoston, osaa `tsc` hyödyntää sinne määritettyjä asetuksia, eikä sinun tarvitse erikseen määritellä käännettävää tiedostoa:

```
npx tsc
```

Huomaa, että yllä oleva komento tulee antaa projektin päähakemistossa eikä `src`-hakemistossa. Komennon suorittamisen jälkeen projektiisi pitäisi ilmestyä `build`-hakemisto, josta löytyy tiedosto nimeltä `index.js`.

**Suorita koodi komentorivillä**

Suorita lopuksi käännetty JavaScript-koodi käyttämällä Node.js:ää:

```
node build/index.js         # unix-tyyppiset käyttöjärjestelmät
node build\index.js         # windows
```

Jos kaikki sujui suunnitellusti, näet kirjoittamasi tervehdyksen terminaalissa.


## Tehtävien palauttaminen

Tehtävät palautetaan kerralla kurssin Teams-ryhmästä löytyvään tehtävään. Ohjeita tehtävän palauttamiseen löydät [Microsoftin ohjeista](https://support.microsoft.com/en-au/topic/turn-in-an-assignment-in-microsoft-teams-e25f383a-b747-4a0b-b6d5-a2845a52092b) ja tarvittaessa voit kysyä apua Teams-kanavalla. Palauta kaikki sivun tehtävänannossa mainiut tiedostot mieluiten yhtenä zip-pakettina.
