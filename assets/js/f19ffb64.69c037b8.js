"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45],{5896:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(5893),a=i(1151);const s={sidebar_position:2},o="Omat tietotyypit",r={id:"tutorial-extras/omat-tyypit",title:"Omat tietotyypit",description:'TypeScriptist\xe4 on merkitt\xe4v\xe4\xe4 hy\xf6ty\xe4 silloin, kun omassa ohjelmalogiikassa hy\xf6dynnet\xe4\xe4n eri tyyppisi\xe4 olioita. Yksinkertaisimmillaan "oliotyyppi" voidaan m\xe4\xe4ritell\xe4 suoraan muuttujaan:',source:"@site/docs/tutorial-extras/02-omat-tyypit.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/omat-tyypit",permalink:"/docs/tutorial-extras/omat-tyypit",draft:!1,unlisted:!1,editUrl:"https://github.com/typescript-ohjelmointi/typescript-ohjelmointi.github.io/tree/main/docs/tutorial-extras/02-omat-tyypit.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Perustietotyypit",permalink:"/docs/tutorial-extras/tyyppijarjestelma"},next:{title:"JavaScript-koodin tyyppim\xe4\xe4rittelyt",permalink:"/docs/tutorial-extras/js-koodin-tyypitys"}},l={},d=[{value:"Union (<code>number | string</code>)",id:"union-number--string",level:3},{value:"Intersection (<code>&amp;</code>)",id:"intersection-",level:3},{value:"&quot;Record&quot; ja avain-arvo-pareja sis\xe4lt\xe4v\xe4t oliot",id:"record-ja-avain-arvo-pareja-sis\xe4lt\xe4v\xe4t-oliot",level:3},{value:"Muita kiinnostavia ominaisuuksia",id:"muita-kiinnostavia-ominaisuuksia",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"omat-tietotyypit",children:"Omat tietotyypit"}),"\n",(0,n.jsx)(t.p,{children:'TypeScriptist\xe4 on merkitt\xe4v\xe4\xe4 hy\xf6ty\xe4 silloin, kun omassa ohjelmalogiikassa hy\xf6dynnet\xe4\xe4n eri tyyppisi\xe4 olioita. Yksinkertaisimmillaan "oliotyyppi" voidaan m\xe4\xe4ritell\xe4 suoraan muuttujaan:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"let user: { id: number, name: string } = { id: 1, name: 'Alice'};\n"})}),"\n",(0,n.jsx)(t.p,{children:'Tyypin m\xe4\xe4ritteleminen muuttujaan on kuitenkin usein huono idea, erityisesti siksi, ett\xe4 tyyppi\xe4 joudutaan m\xe4\xe4rittelem\xe4\xe4n t\xe4ll\xf6in jokaiseen muuttujaan erikseen. Tyypeille voidaankin m\xe4\xe4ritell\xe4 "aliaksia", jotka tekev\xe4t niist\xe4 uudelleenk\xe4ytett\xe4vi\xe4:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"type User = {\n    id: number;\n    name: string;\n};\n\nlet user1: User = { id: 1, name: 'Alice' };\nlet user2: User = { id: 2, name: 'Bob' };\n"})}),"\n",(0,n.jsx)(t.p,{children:"Eri tyypeiss\xe4 voi olla my\xf6s valinnaisia attribuutteja:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"type User = {\n    id: number;\n    name: string;\n    email?: string;  // `?` tarkoittaa valinnaista arvoa\n};\n\nlet user1: User = { id: 1, name: 'Alice' };\nlet user2: User = { id: 2, name: 'Bob', email: 'bob@example.com' };\n\nconsole.log(user2.email.toLowerCase());   // k\xe4\xe4nn\xf6svirhe, koska email saattaa olla `undefined`\nconsole.log(user2.email?.toLowerCase());  // JS:n \"optional chaining\" -> ei virhett\xe4\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"union-number--string",children:["Union (",(0,n.jsx)(t.code,{children:"number | string"}),")"]}),"\n",(0,n.jsx)(t.p,{children:"Uusia tyyppej\xe4 voidaan my\xf6s luoda yhdistelem\xe4ll\xe4 vakioita tai olemassa olevia tyyppej\xe4:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"type Size = 's' | 'm' | 'l'; // sallii vain n\xe4m\xe4 ennalta m\xe4\xe4r\xe4tyt merkkijonot\n\ntype Shirt = {\n    size: Size;\n}\n\nlet smallShirt = { size: 's' }; // ok\n\nlet unknownShirt = { size: 'tall' }; // k\xe4\xe4nn\xf6svirhe!\n"})}),"\n",(0,n.jsx)(t.p,{children:"Yleinen k\xe4ytt\xf6tapaus union-tyypeille on my\xf6s esimerkiksi joko numeron tai merkkijonon salliminen parametrina:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types\nfunction printId(id: number | string) {\n  console.log("Your ID is: " + id);\n}\n'})}),"\n",(0,n.jsxs)(t.h3,{id:"intersection-",children:["Intersection (",(0,n.jsx)(t.code,{children:"&"}),")"]}),"\n",(0,n.jsxs)(t.p,{children:["Uusia tyyppej\xe4 voidaan my\xf6s yhdistell\xe4 olemassa olevista tyypeist\xe4 ",(0,n.jsx)(t.em,{children:"intersection"})," -operaatiolla. Seuraavassa esimerkiss\xe4 on m\xe4\xe4ritetty tyypit ",(0,n.jsx)(t.code,{children:"Coordinate"})," ja ",(0,n.jsx)(t.code,{children:"Address"}),", sek\xe4 ",(0,n.jsx)(t.code,{children:"MapMarker"}),", joka sis\xe4lt\xe4\xe4 molempien edell\xe4 mainittujen tyyppien attribuutit:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"type Coordinate = { lat: number, lon: number };\ntype Address = { street: string, city: string };\n\ntype MapMarker = Address & Coordinate;\n\nlet haagaHelia: MapMarker = {\n    lat: 60,\n    lon: 24,\n    street: 'Ratapihantie 13',\n    city: 'Helsinki'\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Eri tyyppien yhdist\xe4minen voi olla k\xe4tev\xe4\xe4 esimerkiksi tapauksissa, joissa k\xe4ytt\xe4isit perint\xe4\xe4. Esimerkiksi tietokannasta luettujen tietojen yhteiset osat ",(0,n.jsx)(t.code,{children:"id"}),", ",(0,n.jsx)(t.code,{children:"createdAt"})," ja ",(0,n.jsx)(t.code,{children:"updatedAt"})," voidaan sis\xe4llytt\xe4\xe4 muihin tyyppeihi, kuten ",(0,n.jsx)(t.code,{children:"Author"})," ja ",(0,n.jsx)(t.code,{children:"Book"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"type Entity = {\n    id: number,\n    createdAt: Date,\n    updatedAt: Date,\n    deletedAt?: Date    // undefined if not marked as deleted\n};\n\ntype Author = Entity & { name: string };\ntype Book = Entity & { title: string, author: Author };\n"})}),"\n",(0,n.jsx)(t.h3,{id:"record-ja-avain-arvo-pareja-sis\xe4lt\xe4v\xe4t-oliot",children:'"Record" ja avain-arvo-pareja sis\xe4lt\xe4v\xe4t oliot'}),"\n",(0,n.jsxs)(t.p,{children:["JavaScriptiss\xe4 olioita (object) k\xe4ytet\xe4\xe4n usein avain-arvo-pareja sis\xe4lt\xe4v\xe4n\xe4 map-tietorakenteena. T\xe4m\xe4 poikkeaa edell\xe4 esitellyist\xe4 esimerkeist\xe4 siten, ett\xe4 avainten nimet eiv\xe4t ole ennalta tiedossa, vaikka sek\xe4 avainten ett\xe4 arvojen tyypit tiedet\xe4\xe4nkin. TypeScript mahdollistaa ns. ",(0,n.jsx)(t.a,{href:"https://basarat.gitbook.io/typescript/type-system/index-signatures#declaring-an-index-signature",children:"index signaturen"}),", jolla voidaan m\xe4\xe4ritell\xe4 objektin avainten sek\xe4 arvojen tyypit:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"let emojis: { [key: string]: string } = {};\nemojis['smile'] = '\ud83d\ude42';\nemojis['laugh'] = '\ud83d\ude04';\n\n\n// objektin kaikki avaimet saadaan array:na JS:n Object.keys-metodilla:\nconsole.log(Object.keys(emojis));   // [ 'smile', 'laugh' ]\n\n// objektin kaikki arvot saadaan array:na JS:n Object.values-metodilla:\nconsole.log(Object.values(emojis)); // [ '\ud83d\ude42', '\ud83d\ude04' ]\n\n\n// TypeScript ei takaa, ett\xe4 avaimelle l\xf6ytyy arvoa:\nconsole.log(emojis['angry']);       // undefined\n\n// avain voidaan tarkastaa `in`-operaatiolla:\nif ('smile' in emojis) {\n    console.log(emojis['smile']);   // \ud83d\ude42\n}\n\nconsole.table(emojis); /* \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                          \u2502 (index) \u2502 Values \u2502\n                          \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n                          \u2502  smile  \u2502  '\ud83d\ude42'  \u2502\n                          \u2502  laugh  \u2502  '\ud83d\ude04'  \u2502\n                          \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 */\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:['TypeScriptin "utility types" -tyypeist\xe4 l\xf6ytyy my\xf6s valmis ',(0,n.jsx)(t.code,{children:"Record"}),", jonka avulla objektin avainten ja arvojen tyypit on m\xe4\xe4ritett\xe4viss\xe4 viel\xe4 astetta selke\xe4mmin:"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Record<Keys, Type>"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:'"Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type."'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",children:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type"})}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"let weekdays: Record<string, string> = {};\nweekdays['monday'] = 'maanantai';\nweekdays['tuesday'] = 'tiistai';\n\nconsole.log(weekdays);                  // { monday: 'maanantai', tuesday: 'tiistai' }\nconsole.log('tuesday' in weekdays);     // true\nconsole.log(weekdays['wednesday']);     // undefined\n"})}),"\n",(0,n.jsx)(t.h3,{id:"muita-kiinnostavia-ominaisuuksia",children:"Muita kiinnostavia ominaisuuksia"}),"\n",(0,n.jsxs)(t.p,{children:["TypeScript mahdollistaa useita erilaisia k\xe4tevi\xe4 tapoja edist\xe4\xe4 oman koodin yll\xe4pidett\xe4vyytt\xe4, kuten ",(0,n.jsx)(t.code,{children:"private"})," ja ",(0,n.jsx)(t.code,{children:"readonly"})," -attribuutit sek\xe4 ",(0,n.jsx)(t.code,{children:"as const"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const days = ['ma', 'ti', 'ke', 'to', 'pe', 'la', 'su'] as const;\ndays[0] = 'm\xe5ndag'; // error: \"Index signature in type 'readonly string[]' only permits reading.\"\n"})}),"\n",(0,n.jsxs)(t.p,{children:["JavaScriptin ",(0,n.jsx)(t.code,{children:"const"})," varmistaa, ett\xe4 muuttujaan ei voida asettaa uutta arvoa. ",(0,n.jsx)(t.code,{children:"const"}),"-muuttujaan asetetun arvon muuttaminen on kuitenkin mahdollista, esimerkiksi lis\xe4\xe4m\xe4ll\xe4 listaan uusia arvoja. TypeScriptin ",(0,n.jsx)(t.code,{children:"as const"})," varmistaa muuttujan lis\xe4ksi my\xf6s siihen asetetun arvon muuttumattomuuden. N\xe4ihin ominaisuuksiin voit perehty\xe4 lis\xe4\xe4 itsen\xe4isesti."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(7294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);