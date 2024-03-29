---
sidebar_position: 9
---

# JavaScript-koodin tyyppimäärittelyt

TypeScriptillä kirjoittamasi ohjelmat hyödyntävät tyypillisesti erilaisia kirjastoja, jotka saattavat olla alun perin JavaScriptillä toteutettuja. Esimerkiksi suosittu [react-kirjasto](https://github.com/facebook/react) on toteutettu JavaScriptillä, mutta sitä käytetään laajasti TypeScript-projekteissa.

Kuinka TypeScript osaa auttaa sinua näiden projektien tyyppien tarkastamisessa ja oikeiden tyyppien ehdottamisessa?

> *"Throughout the sections you’ve read so far, we’ve been demonstrating basic TypeScript concepts using the built-in functions present in all JavaScript runtimes. However, almost all JavaScript today includes many libraries to accomplish common tasks. Having types for the parts of your application that aren’t your code will greatly improve your TypeScript experience. Where do these types come from?"*
>
> Type Declarations, https://www.typescriptlang.org/docs/handbook/2/type-declarations.html


## "Standardikirjastot"

> *"TypeScript includes a default set of type definitions for built-in JS APIs (like Math), as well as type definitions for things found in browser environments (like document). TypeScript also includes APIs for newer JS features matching the target you specify; for example the definition for Map is available if target is ES6 or newer."*
>
> https://www.typescriptlang.org/tsconfig#lib

Suoritusympäristöstäsi riippuen voit ottaa käyttöön eri suoritusympäristöistä riippuvaisia tyyppimäärityksiä, kuten `document` ja `window`, lisäämällä `tsconfig.json`-tiedostoosi `lib`-osioon kirjastoja. Tyypillinen kirjasto on `DOM`, joka sisältää [Document Object Model -api:in](https://developer.mozilla.org/en-US/docs/Glossary/DOM) määritetyt tyypit.

`tsconfig.json`-tiedoston lisäksi tyyppimäärityksiä [voidaan lisätä npm-pakettien avulla `node_modules`-hakemistoon](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#supporting-lib-from-node_modules), josta TypeScript lukee ne automaattisesti. Tyypillinen `npm`-pakettina asennettava tyyppikirjasto on esimerkiksi `node`, joka voidaan asentaa seuraavasti:

```sh
$ npm install --save-dev @types/node    # https://www.npmjs.com/package/@types/node
```

Tyyppimääritykset saattavat myös asentua automaattisesti projektisi riippuvuuksien kautta. Esimerkiksi asentaessamme `ts-node`-paketin, asentuu sen kautta myös yllä esitetty `@types/node`:

```sh {14}
$ npm ls -a
ts-oppitunti-2023-08-31@ /workspaces/ts-oppitunti-2023-08-31
├─┬ ts-node@10.9.1
│ ├─┬ @cspotcode/source-map-support@0.8.1
│ │ └─┬ @jridgewell/trace-mapping@0.3.9
│ │   ├── @jridgewell/resolve-uri@3.1.1
│ │   └── @jridgewell/sourcemap-codec@1.4.15
│ ├── UNMET OPTIONAL DEPENDENCY @swc/core@>=1.2.50
│ ├── UNMET OPTIONAL DEPENDENCY @swc/wasm@>=1.2.50
│ ├── @tsconfig/node10@1.0.9
│ ├── @tsconfig/node12@1.0.11
│ ├── @tsconfig/node14@1.0.3
│ ├── @tsconfig/node16@1.0.4
│ ├── @types/node@20.5.9    <--------- Node.js:n tyyppimääritykset
│ ├── acorn-walk@8.2.0
│ ├── acorn@8.10.0
│ ├── arg@4.1.3
│ ├── create-require@1.1.1
│ ├── diff@4.0.2
│ ├── make-error@1.3.6
│ ├── typescript@5.2.2 deduped
│ ├── v8-compile-cache-lib@3.0.1
│ └── yn@3.1.1
└── typescript@5.2.2
```


## JavaScriptillä toteutettujen pakettien "tyypitys"

TypeScript-määrittelyjä voidaan kirjoittaa esim. olemassa oleville npm-paketeille itse, mutta se on suosituille projekteille pääsääntöisesti tarpeetonta. Kehittäjäyhteisö ylläpitää yhteistä keskitettyä lähdettä kirjastojen tyyppimäärityksille:

> *"DefinitelyTyped / @types*
>
> *The [DefinitelyTyped repository](https://github.com/DefinitelyTyped/DefinitelyTyped/) is a centralized repo storing declaration files for thousands of libraries. The vast majority of commonly-used libraries have declaration files available on DefinitelyTyped.*
>
> *Definitions on DefinitelyTyped are also automatically published to npm under the @types scope. The name of the types package is always the same as the name of the underlying package itself. For example, if you installed the react npm package, you can install its corresponding types by running*
>
> `npm install --save-dev @types/react`
>
> *TypeScript automatically finds type definitions under node_modules/@types, so there’s no other step needed to get these types available in your program."*
>
> Type Declarations. https://www.typescriptlang.org/docs/handbook/2/type-declarations.html#external-definitions

Kirjoitushetkellä tyyppikirjastosta löytyy tyypit noin 7672:lle paketille, ja lukumäärä kasvaa koko ajan.


## Tyyppimäärittelyjen luonti omille käännetyille JS-tiedostoille

Mikäli TypeScriptillä kirjoitettu projekti julkaistaan esimerkiksi npm-palvelussa, voidaan sille generoida tyyppimäärittelyt automaattisesti. Näin pakettisi käyttäjät saavat TypeScript-tyypit automaattisesti käyttöönsä:

```shell
npx tsc --declaration
```

Itse tyyppimääritykset, kuten `koodi.d.ts`, näyttävät esim. seuraavilta:

```ts
declare let merkkijono: string;
declare let merkkijonot: string[];
declare let numerot: number[];
```

Lue lisää esimerkiksi artikkelista [Quick Tip — Generating a TypeScript Declaration File](https://gilfink.medium.com/quick-tip-generating-a-typescript-declaration-file-5db708c45d4b).
