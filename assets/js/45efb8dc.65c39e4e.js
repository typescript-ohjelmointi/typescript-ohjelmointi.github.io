"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[215],{6640:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var n=i(5893),s=i(1151);const a={sidebar_position:3},o="JavaScript-koodin tyyppim\xe4\xe4rittelyt",r={id:"tyypit/typing-js-code",title:"JavaScript-koodin tyyppim\xe4\xe4rittelyt",description:"TypeScriptill\xe4 kirjoittamasi ohjelmat hy\xf6dynt\xe4v\xe4t tyypillisesti erilaisia kirjastoja, jotka saattavat olla alun perin JavaScriptill\xe4 toteutettuja. Kuinka TypeScript osaa auttaa sinua n\xe4iden projektien tyyppien tarkastamisessa ja oikeiden tyyppien ehdottamisessa?",source:"@site/docs/tyypit/09-typing-js-code.md",sourceDirName:"tyypit",slug:"/tyypit/typing-js-code",permalink:"/docs/tyypit/typing-js-code",draft:!1,unlisted:!1,editUrl:"https://github.com/typescript-ohjelmointi/typescript-ohjelmointi.github.io/tree/main/docs/tyypit/09-typing-js-code.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Type ja interface",permalink:"/docs/tyypit/type-ja-interface"},next:{title:"Keyof ja typeof",permalink:"/docs/tyypit/keyof-typeof"}},l={},p=[{value:"&quot;Standardikirjastot&quot;",id:"standardikirjastot",level:2},{value:"JavaScriptill\xe4 toteutettujen pakettien &quot;tyypitys&quot;",id:"javascriptill\xe4-toteutettujen-pakettien-tyypitys",level:2},{value:"Tyyppim\xe4\xe4rittelyjen luonti omille k\xe4\xe4nnetyille JS-tiedostoille",id:"tyyppim\xe4\xe4rittelyjen-luonti-omille-k\xe4\xe4nnetyille-js-tiedostoille",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"javascript-koodin-tyyppim\xe4\xe4rittelyt",children:"JavaScript-koodin tyyppim\xe4\xe4rittelyt"}),"\n",(0,n.jsx)(t.p,{children:"TypeScriptill\xe4 kirjoittamasi ohjelmat hy\xf6dynt\xe4v\xe4t tyypillisesti erilaisia kirjastoja, jotka saattavat olla alun perin JavaScriptill\xe4 toteutettuja. Kuinka TypeScript osaa auttaa sinua n\xe4iden projektien tyyppien tarkastamisessa ja oikeiden tyyppien ehdottamisessa?"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:'"Throughout the sections you\u2019ve read so far, we\u2019ve been demonstrating basic TypeScript concepts using the built-in functions present in all JavaScript runtimes. However, almost all JavaScript today includes many libraries to accomplish common tasks. Having types for the parts of your application that aren\u2019t your code will greatly improve your TypeScript experience. Where do these types come from?"'})}),"\n",(0,n.jsxs)(t.p,{children:["Type Declarations, ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/2/type-declarations.html",children:"https://www.typescriptlang.org/docs/handbook/2/type-declarations.html"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"standardikirjastot",children:'"Standardikirjastot"'}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:'"TypeScript includes a default set of type definitions for built-in JS APIs (like Math), as well as type definitions for things found in browser environments (like document). TypeScript also includes APIs for newer JS features matching the target you specify; for example the definition for Map is available if target is ES6 or newer."'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/tsconfig#lib",children:"https://www.typescriptlang.org/tsconfig#lib"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Suoritusymp\xe4rist\xf6st\xe4si riippuen voit ottaa k\xe4ytt\xf6\xf6n eri suoritusymp\xe4rist\xf6ist\xe4 riippuvaisia tyyppim\xe4\xe4rityksi\xe4, kuten ",(0,n.jsx)(t.code,{children:"document"})," ja ",(0,n.jsx)(t.code,{children:"window"}),", lis\xe4\xe4m\xe4ll\xe4 ",(0,n.jsx)(t.code,{children:"tsconfig.json"}),"-tiedostoosi ",(0,n.jsx)(t.code,{children:"lib"}),"-osioon kirjastoja. Tyypillinen kirjasto on ",(0,n.jsx)(t.code,{children:"DOM"}),", joka sis\xe4lt\xe4\xe4 ",(0,n.jsxs)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/DOM",children:["Document Object Model -api",":in"]})," m\xe4\xe4ritetyt tyypit."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"tsconfig.json"}),"-tiedoston lis\xe4ksi tyyppim\xe4\xe4rityksi\xe4 ",(0,n.jsxs)(t.a,{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#supporting-lib-from-node_modules",children:["voidaan lis\xe4t\xe4 npm-pakettien avulla ",(0,n.jsx)(t.code,{children:"node_modules"}),"-hakemistoon"]}),", josta TypeScript lukee ne automaattisesti. Tyypillinen ",(0,n.jsx)(t.code,{children:"npm"}),"-pakettina asennettava tyyppikirjasto on esimerkiksi ",(0,n.jsx)(t.code,{children:"node"}),", joka voidaan asentaa seuraavasti:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ npm install --save-dev @types/node    # https://www.npmjs.com/package/@types/node\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Tyyppim\xe4\xe4ritykset saattavat my\xf6s asentua automaattisesti projektisi riippuvuuksien kautta. Esimerkiksi asentaessamme ",(0,n.jsx)(t.code,{children:"ts-node"}),"-paketin, asentuu sen kautta my\xf6s yll\xe4 esitetty ",(0,n.jsx)(t.code,{children:"@types/node"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ npm ls -a\nts-oppitunti-2023-08-31@ /workspaces/ts-oppitunti-2023-08-31\n\u251c\u2500\u252c ts-node@10.9.1\n\u2502 \u251c\u2500\u252c @cspotcode/source-map-support@0.8.1\n\u2502 \u2502 \u2514\u2500\u252c @jridgewell/trace-mapping@0.3.9\n\u2502 \u2502   \u251c\u2500\u2500 @jridgewell/resolve-uri@3.1.1\n\u2502 \u2502   \u2514\u2500\u2500 @jridgewell/sourcemap-codec@1.4.15\n\u2502 \u251c\u2500\u2500 UNMET OPTIONAL DEPENDENCY @swc/core@>=1.2.50\n\u2502 \u251c\u2500\u2500 UNMET OPTIONAL DEPENDENCY @swc/wasm@>=1.2.50\n\u2502 \u251c\u2500\u2500 @tsconfig/node10@1.0.9\n\u2502 \u251c\u2500\u2500 @tsconfig/node12@1.0.11\n\u2502 \u251c\u2500\u2500 @tsconfig/node14@1.0.3\n\u2502 \u251c\u2500\u2500 @tsconfig/node16@1.0.4\n\u2502 \u251c\u2500\u2500 @types/node@20.5.9    <--------- Node.js:n tyyppim\xe4\xe4ritykset\n\u2502 \u251c\u2500\u2500 acorn-walk@8.2.0\n\u2502 \u251c\u2500\u2500 acorn@8.10.0\n\u2502 \u251c\u2500\u2500 arg@4.1.3\n\u2502 \u251c\u2500\u2500 create-require@1.1.1\n\u2502 \u251c\u2500\u2500 diff@4.0.2\n\u2502 \u251c\u2500\u2500 make-error@1.3.6\n\u2502 \u251c\u2500\u2500 typescript@5.2.2 deduped\n\u2502 \u251c\u2500\u2500 v8-compile-cache-lib@3.0.1\n\u2502 \u2514\u2500\u2500 yn@3.1.1\n\u2514\u2500\u2500 typescript@5.2.2\n"})}),"\n",(0,n.jsx)(t.h2,{id:"javascriptill\xe4-toteutettujen-pakettien-tyypitys",children:'JavaScriptill\xe4 toteutettujen pakettien "tyypitys"'}),"\n",(0,n.jsx)(t.p,{children:"TypeScript-m\xe4\xe4rittelyj\xe4 voidaan kirjoittaa esim. olemassa oleville npm-paketeille itse, mutta se on suosituille projekteille p\xe4\xe4s\xe4\xe4nt\xf6isesti tarpeetonta. Kehitt\xe4j\xe4yhteis\xf6 yll\xe4pit\xe4\xe4 yhteist\xe4 keskitetty\xe4 l\xe4hdett\xe4 kirjastojen tyyppim\xe4\xe4rityksille:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:'"DefinitelyTyped / @types'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/",children:"DefinitelyTyped repository"})," is a centralized repo storing declaration files for thousands of libraries. The vast majority of commonly-used libraries have declaration files available on DefinitelyTyped."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Definitions on DefinitelyTyped are also automatically published to npm under the @types scope. The name of the types package is always the same as the name of the underlying package itself. For example, if you installed the react npm package, you can install its corresponding types by running"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"npm install --save-dev @types/react"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:'TypeScript automatically finds type definitions under node_modules/@types, so there\u2019s no other step needed to get these types available in your program."'})}),"\n",(0,n.jsxs)(t.p,{children:["Type Declarations. ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/2/type-declarations.html#external-definitions",children:"https://www.typescriptlang.org/docs/handbook/2/type-declarations.html#external-definitions"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Kirjoitushetkell\xe4 tyyppikirjastosta l\xf6ytyy tyypit noin 7672",":lle"," paketille, ja lukum\xe4\xe4r\xe4 kasvaa koko ajan."]}),"\n",(0,n.jsx)(t.h2,{id:"tyyppim\xe4\xe4rittelyjen-luonti-omille-k\xe4\xe4nnetyille-js-tiedostoille",children:"Tyyppim\xe4\xe4rittelyjen luonti omille k\xe4\xe4nnetyille JS-tiedostoille"}),"\n",(0,n.jsx)(t.p,{children:"Mik\xe4li TypeScriptill\xe4 kirjoitettu projekti julkaistaan esimerkiksi npm-palvelussa, voidaan sille generoida tyyppim\xe4\xe4rittelyt automaattisesti. N\xe4in pakettisi k\xe4ytt\xe4j\xe4t saavat TypeScript-tyypit automaattisesti k\xe4ytt\xf6\xf6ns\xe4:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ npx tsc --declaration\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Itse tyyppim\xe4\xe4ritykset, kuten ",(0,n.jsx)(t.code,{children:"koodi.d.ts"}),", n\xe4ytt\xe4v\xe4t esim. seuraavilta:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"declare let merkkijono: string;\ndeclare let merkkijonot: string[];\ndeclare let numerot: number[];\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Lue lis\xe4\xe4 esimerkiksi artikkelista ",(0,n.jsx)(t.a,{href:"https://gilfink.medium.com/quick-tip-generating-a-typescript-declaration-file-5db708c45d4b",children:"Quick Tip \u2014 Generating a TypeScript Declaration File"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(7294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);