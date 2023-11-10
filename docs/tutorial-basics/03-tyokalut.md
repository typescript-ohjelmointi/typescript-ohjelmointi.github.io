---
sidebar_position: 3
sidebar_label: Työkalut
---

# Työkalut

## Videosuositukset

[TypeScript Tooling in 5 minutes (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)

## TypeScriptin asentaminen

TypeScript voidaan asentaa joko globaalisti koko käyttöjärjestelmään tai paikallisesti yksittäiseen projektiin. Globaali asennus [jakaa mielipiteitä](https://github.com/loopbackio/loopback.io/issues/509) ja tämän kurssin esimerkeissä asennus tehdään aina paikallisesti. Paikallisen asennuksen etuina koko projekti riippuvuuksineen asentuu kerralla yhdellä komennolla (`npm install`) ja kaikilla kehittäjillä on käytössään sama versio TypeScriptistä. Paikallisen asennuksen haittapuolena joudut kirjoittamaan `tsc`-komennon sijasta `npx tsc` ([npx -- execute npm package binaries](https://www.npmjs.com/package/npx)).

> *"TypeScript is available as a package on the npm registry available as "typescript". You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project."*
>
> ```
> npm install typescript --save-dev
> ```
>
> *"You can then run the TypeScript compiler using one of the following commands:*"
>
> ```
> $ npm exec tsc
> $ npx tsc
> $ yarn tsc
> $ pnpm tsc
> ```
>
> https://www.typescriptlang.org/download

Asennuksen jälkeen `package.json`-tiedostosi näyttää esim. seuraavalta:

```json
{
  "devDependencies": {
      "typescript": "^5"
  }
}
```

Kuten yltä huomaat, TypeScript asennetaan development-vaiheen riippuvuudeksi. TypeScriptiä ei tarvita varsinaisessa tuotantoympäristössä lainkaan, koska koodi käännetään ensin JavaScriptiksi, jota suoritetaan sellaisenaan esimerkiksi selaimessa tai Node.js-ympäristössä.


## Kääntäminen eli transpilointi

TypeScriptin omissa dokumenteissa käytetään pääsääntöisesti termiä "kääntäminen" (compiling), kun puhutaan TS-koodin muuntamisesta JS-koodiksi. Kääntämiselle tarkoitetaan kuitenkin perinteisesti operaatiota, jossa ihmisen luettava lähdekoodi muunnetaan matalamman abstraktiotason muotoon, joka on tyypillisesti konekielistä ja ihmisen vaikeasti luettavaa. TS-koodi käännetään kuitenkin saman abstraktiotason JavaScript-koodiksi, joten monissa lähteissä tästä käytetään termiä "transpilointi" (transpiling). [(StackOverflow: Compiling vs Transpiling)](https://stackoverflow.com/a/44932758)

TypeScript-koodin transpilointia tai kääntämistä voidaan kokeilla kätevästi sivulla [TypeScript Playground](https://www.typescriptlang.org/play).

Lue lisää TypeScriptin työkaluista artikkelista [Tooling in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html).

Transpilointi mahdollistaa viimeisintä syntaksia hyödyntävän TypeScript-koodin muuntamisen yhteensopivaksi myös vanhojen JS-versioiden kanssa. [Kokeile esimerkiksi transpiloida TS-koodia, jossa esiintyy moderneja ominaisuuksia kuten `async` tai `await`](https://www.typescriptlang.org/play?target=0#code/MYewdgzgLgBA5gUygVQggThGBeGBDCATzGBgAoBKHAPhgG0BvGASwBMAuGARgBoYw8AWwScA5AEEANs2AJRMAL4BdANxA).


## TypeScript-työkalut

Koska TypeScript ja JavaScript ovat osittain sama asia, monet JS-koodin kehittämiseksi käytettävät työkalut soveltuvat myös TS-koodin kehitykseen. Esimerkiksi VS Code sekä Node.js ja npm toimivat hyvin yhteen TypeScript-projektien kanssa.


### Npx

Jos et asentanut [TypeScript-pakettia](https://www.npmjs.com/package/typescript) globaalisti, täytyy se suorittaa paikallisen projektin `node_modules`-hakemistosta. Tämä onnistuu joko komennolla `npm exec tsc` tai lyhyemmin `npx`-komennon avulla:

> *"\[npx\] command allows you to run an arbitrary command from an npm package (either one installed locally, or fetched remotely), in a similar context as running it via `npm run`.*"
>
> https://docs.npmjs.com/cli/v9/commands/npx

```bash
$ npx tsc   # suorittaa `tsc`-komennon, eikä edellytä globaalia asennusta
```

`npx`-komennon pitäisi löytyä sinulta valmiiksi, jos sinulla on `npm` asennettuna.


### Ts-node

> *"`ts-node` is a TypeScript execution engine and REPL for Node.js. It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling. "*
>
> https://www.npmjs.com/package/ts-node

`ts-node` mahdollistaa TypeScript-koodin suorittamisen ilman etukäteen tehtävää käännösvaihetta:

```bash
$ npm install ts-node --save-dev    # asentaa ts-noden paikallisesti

$ npx ts-node src/skripti.ts        # suorittaa skriptin `src/skripti.ts`

$ npx ts-node                       # käynnistää ts-noden REPL-tilan
```

### Tsc

Jos haluat kääntää kirjoittamasi TypeScript-kielisen ohjelman lähdekoodit JavaScript-kielisiksi lähdekoodeiksi, onnistuu se `tsc`-komennolla (TypeScript compiler):

```
$ npx tsc                   # kaikki .ts-tiedostot (edellyttää tsconfig-tiedostoa)
$ npx tsc helloWorld.ts     # yksi .ts-tiedosto
```

`tsc`-komento kääntää kirjoittamasi TypeScript-tiedostot JavaScript-tiedostoiksi, jotka voidaan suorittaa Node.js:llä tai selaimessa aivan kuten mitkä tahansa `.js`-tiedostot:

```
$ node helloWorld.js
```


### Tsconfig.json

TypeScript-kääntäjä sekä työkalut, kuten `ts-node`, tukevat lukuisia TS-koodin kääntämiseen liittyviä asetuksia. Nämä asetukset voidaan antaa komentoriviparametreina, mutta tyypillisesti niitä on niin paljon, että ne kannattaa tallentaa erilliseen asetustiedostoon.

> *"The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project"*
>
> https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

`tsconfig.json`-asetustiedostoon voidaan määritellä lukuisia kääntäjän toimintaan vaikuttavia asetuksia. Voit luoda itsellesi uuden `tsconfig.json`-tiedoston `tsc`-komennon avulla:

```bash
$ npx tsc --init

Created a new tsconfig.json with:

  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```

Monet tiedoston asetukset liittyvät kääntäjän tekemiin tarkastuksiin, kuten siihen, sallitaanko funktion parametreissa tai paluuarvoissa puuttuvia tietotyyppejä. Kääntäjän tekemät tarkastukset ja varoitukset ovat  lähtökohtaisesti hyödyllisiä, joten suosittelemme hyödyntämään niitä laajasti. `strict`-asetuksella saadaankin asetettua kerralla monet erilliset asetukset päälle:

> *"The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness. Turning this on is equivalent to enabling all of the strict mode family options, which are outlined below. You can then turn off individual strict mode family checks as needed."*
>
> https://www.typescriptlang.org/tsconfig#strict

Minimalistinen mutta toimiva asetustiedosto voi näyttää esimerkiksi tältä:

```js
/* Visit https://aka.ms/tsconfig to read more about this file */
{
    "compilerOptions": {
        /* Set the JavaScript language version for emitted JavaScript
         * and include compatible library declarations. */
        "target": "es2016",

        /* Specify the root folder within your source files. */
        "rootDir": "./src/",

        /* Specify an output folder for all emitted files. */
        "outDir": "./build/",

        /* Emit additional JavaScript to ease support for importing CommonJS modules.
         * This enables 'allowSyntheticDefaultImports' for type compatibility. */
        "esModuleInterop": true,

        /* Enable all strict type-checking options. */
        "strict": true,
    }
}
```
