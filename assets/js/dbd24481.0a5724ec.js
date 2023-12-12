"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[416],{8760:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var a=e(5893),s=e(1151);const n={sidebar_position:0,sidebar_label:"Mik\xe4 TypeScript?"},r="Mik\xe4 TypeScript?",o={id:"tutorial-basics/mika-on-typescript",title:"Mik\xe4 TypeScript?",description:'TypeScriptin omilla sivuilla kerrotaan, ett\xe4 "TypeScript is JavaScript with syntax for types" (typescriptlang.org). TypeScriptin GitHub-sivulla puolestaan kielt\xe4 kuvaillaan seuraavasti:',source:"@site/docs/tutorial-basics/00-mika-on-typescript.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/mika-on-typescript",permalink:"/docs/tutorial-basics/mika-on-typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/typescript-ohjelmointi/typescript-ohjelmointi.github.io/tree/main/docs/tutorial-basics/00-mika-on-typescript.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Mik\xe4 TypeScript?"},sidebar:"tutorialSidebar",previous:{title:"TypeScriptin perusteet",permalink:"/docs/category/typescriptin-perusteet"},next:{title:"TypeScript-elokuva",permalink:"/docs/tutorial-basics/typescript-elokuva"}},l={},p=[{value:"JavaScript with syntax for types",id:"javascript-with-syntax-for-types",level:2},{value:"Dynaaminen tyypitys",id:"dynaaminen-tyypitys",level:3},{value:"Staattinen tyypitys",id:"staattinen-tyypitys",level:3},{value:"Application-scale JavaScript",id:"application-scale-javascript",level:2},{value:"Any browser, any host, any OS",id:"any-browser-any-host-any-os",level:2},{value:"TypeScript compiles to JavaScript",id:"typescript-compiles-to-javascript",level:2}];function c(t){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"mik\xe4-typescript",children:"Mik\xe4 TypeScript?"}),"\n",(0,a.jsxs)(i.p,{children:['TypeScriptin omilla sivuilla kerrotaan, ett\xe4 "TypeScript is JavaScript with syntax for types" (',(0,a.jsx)(i.a,{href:"https://www.typescriptlang.org/",children:"typescriptlang.org"}),"). TypeScriptin ",(0,a.jsx)(i.a,{href:"https://github.com/microsoft/TypeScript",children:"GitHub-sivulla"})," puolestaan kielt\xe4 kuvaillaan seuraavasti:"]}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsxs)(i.em,{children:['"TypeScript is a language for ',(0,a.jsx)(i.strong,{children:"application-scale JavaScript"}),". TypeScript adds ",(0,a.jsx)(i.strong,{children:"optional types"})," to JavaScript that support tools for large-scale JavaScript applications for ",(0,a.jsx)(i.strong,{children:"any browser, for any host, on any OS"}),". ",(0,a.jsx)(i.strong,{children:"TypeScript compiles to readable, standards-based JavaScript"}),'."']})}),"\n",(0,a.jsxs)(i.p,{children:["Microsoft. ",(0,a.jsx)(i.a,{href:"https://github.com/microsoft/TypeScript",children:"TypeScript at GitHub.com"})]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"TypeScripti\xe4 voidaankin luonnehtia seuraavien edell\xe4 mainittujen ominaisuuksien kautta:"}),"\n",(0,a.jsx)(i.h2,{id:"javascript-with-syntax-for-types",children:"JavaScript with syntax for types"}),"\n",(0,a.jsx)(i.p,{children:"TypeScript tuo dynaamisesti tyypitettyyn JavaScriptiin tuen staattisille tyyppim\xe4\xe4rityksille."}),"\n",(0,a.jsx)(i.h3,{id:"dynaaminen-tyypitys",children:"Dynaaminen tyypitys"}),"\n",(0,a.jsxs)(i.p,{children:["Eri ohjelmointikieliss\xe4 on erilaisia l\xe4hestymistapoja arvojen tyyppien k\xe4sittelemiseksi. JavaScript-kieless\xe4 kaikilla arvoilla on olemassa jokin tyyppi, kuten numero, merkkijono, objekti tai taulukko. Tyypitys on kuitenkin ",(0,a.jsx)(i.strong,{children:"dynaamista"}),", eli muuttujiin voidaan asettaa vapaasti eri tyyppisi\xe4 arvoja ja funktiot voivat vastaanottaa ja niist\xe4 voidaan palauttaa eri tyyppisi\xe4 arvoja. Koska muuttujien, parametrien ja paluuarvojen tyypit riippuvat suoritusaikaisesta datasta, tyyppej\xe4 k\xe4sitell\xe4\xe4n ja mahdollisesti tarkastetaan ajonaikaisesti ohjelmaa suoritettaessa."]}),"\n",(0,a.jsxs)(i.p,{children:["Katsotaan esimerkiksi seuraavaa JavaScript-kielist\xe4 esimerkkikoodia, jossa etsit\xe4\xe4n numeerisen taulukon suurinta arvoa ",(0,a.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#syntax",children:"Math.max"}),"-funktion avulla. Mit\xe4 seuraava koodi tulostaa?"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",metastring:'title="demo.js"',children:"let numbers = [42, 0, -1, 100, 9];\nlet largest = Math.max(numbers);\n\nconsole.log({ largest });   // mit\xe4 t\xe4m\xe4 rivi tulostaa?\n"})}),"\n",(0,a.jsxs)(i.p,{children:["Yll\xe4 oleva koodiesimerkki tulostaa hieman yll\xe4tt\xe4en ",(0,a.jsx)(i.code,{children:"{ largest: NaN }"}),". T\xe4m\xe4 johtuu siit\xe4, ett\xe4 ",(0,a.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#syntax",children:"Math.max"})," odottaa saavansa joukon arvoja erillisin\xe4 parametreina, ",(0,a.jsx)(i.em,{children:"eik\xe4 taulukkona"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"T\xe4m\xe4nkaltaiset virheet voidaan tyypillisesti havaita jo koodia kirjoitettaessa, mik\xe4li funktioioden parametrit sek\xe4 muuttujat tyypitet\xe4\xe4n staattisesti."}),"\n",(0,a.jsx)(i.h3,{id:"staattinen-tyypitys",children:"Staattinen tyypitys"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Staattista tyypityst\xe4"})," hy\xf6dynnett\xe4ess\xe4 ohjelman muuttujille, parametreille ja paluuarvoille m\xe4\xe4ritell\xe4\xe4n etuk\xe4teen tyypit, joita hy\xf6dynnet\xe4\xe4n k\xe4\xe4nn\xf6svaiheessa ohjelmakoodin oikeellisuuden tarkastamiseksi."]}),"\n",(0,a.jsx)(i.p,{children:"Edellinen koodiesimerkki voidaankin kirjoittaa t\xe4sm\xe4lleen samalla tavalla TypeScript-kielell\xe4:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-ts",metastring:'title="demo.ts"',children:"let numbers = [42, 0, -1, 100];\nlet largest = Math.max(numbers);  // k\xe4\xe4nn\xf6svirhe\n\nconsole.log({ largest });\n"})}),"\n",(0,a.jsx)(i.p,{children:"Kun TypeScript-kielist\xe4 koodiesimerkki\xe4 k\xe4\xe4nnet\xe4\xe4n, havaitaan virhe jo k\xe4\xe4nn\xf6svaiheessa:"}),"\n",(0,a.jsxs)(i.admonition,{title:"k\xe4\xe4nn\xf6svirhe",type:"danger",children:[(0,a.jsxs)(i.p,{children:["K\xe4\xe4nnet\xe4\xe4n koodinp\xe4tk\xe4 ",(0,a.jsx)(i.code,{children:"npx tsc demo.ts"}),"-komennolla:"]}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'number'.\n\n2 let largest = Math.max(numbers);\n                         ~~~~~~~\n"})})]}),"\n",(0,a.jsxs)(i.p,{children:["TypeScript-k\xe4\xe4nt\xe4j\xe4 ",(0,a.jsx)(i.code,{children:"tsc"})," havaitsi siis yll\xe4 virheen, jossa ",(0,a.jsx)(i.code,{children:"Math.max"}),"-metodille annettiin numeron sijasta numerotaulukko. K\xe4yt\xe4nn\xf6ss\xe4 tulet kirjoittamaan TypeScript-koodia editorilla, joka tarkastaa koodia jo sit\xe4 kirjoitettaessa. Editorisi siis varoittaa todenn\xe4k\xf6isesti virheist\xe4 jo ennen kuin ehdit itse k\xe4\xe4nt\xe4\xe4 koodiasi."]}),"\n",(0,a.jsxs)(i.p,{children:["Jos katsot tarkemmin edell\xe4 esitetty\xe4 ",(0,a.jsx)(i.code,{children:"demo.ts"}),"-esimerkkikoodia, huomaat, ett\xe4 siin\xe4 ei itseasiassa ole m\xe4\xe4ritetty lainkaan tyyppej\xe4, vaikka TypeScripti\xe4 juuri v\xe4itettiin staattisesti tyypitetyksi kieleksi \ud83e\udd14. Tyyppien m\xe4\xe4ritteleminen itse ei olekaan monessa tapauksessa tarpeen, koska TypeScript osaa p\xe4\xe4tell\xe4 arvojen tyypit esimerkiksi sijoitusperaatioiden ja ",(0,a.jsx)(i.code,{children:"return"}),"-lauseiden perusteella. Tyyppien p\xe4\xe4ttelemisest\xe4 k\xe4ytet\xe4\xe4n tarkemmin termi\xe4 ",(0,a.jsx)(i.a,{href:"https://www.typescriptlang.org/docs/handbook/type-inference.html",children:(0,a.jsx)(i.strong,{children:"Type Inference"})}),"."]}),"\n",(0,a.jsxs)(i.p,{children:["Koska ",(0,a.jsx)(i.code,{children:"numbers"}),"-muuttujaan asetetaan taulukko, joka sis\xe4lt\xe4\xe4 vain numeroita, p\xe4\xe4ttelee TypeScript sen tyyliksi numerotaulukon eli ",(0,a.jsx)(i.code,{children:"number[]"}),". Numerotaulukko saadaan puolestaan purettua erillisiksi parameteriksi ",(0,a.jsxs)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",children:["JavaScriptin ",(0,a.jsx)(i.strong,{children:"spread"}),"-operaattorilla"]}),", eli ",(0,a.jsx)(i.code,{children:"Math.max(...numbers)"}),". Pidemmin kirjoitettuna koodi saadaan siis toimimaan seuraavasti:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-ts",metastring:'title="demo.ts"',children:"let numbers: number[] = [42, 0, -1, 100];\nlet largest: number = Math.max(...numbers);\n\nconsole.log({ largest });   // tulostaa { largest: 100 }\n"})}),"\n",(0,a.jsx)(i.h2,{id:"application-scale-javascript",children:"Application-scale JavaScript"}),"\n",(0,a.jsxs)(i.p,{children:["TypeScriptin ",(0,a.jsx)(i.a,{href:"https://www.typescriptlang.org/docs/handbook/intro.html#about-this-handbook",children:"k\xe4sikirjassa"})," todetaan osuvasti, ett\xe4 JavaScriptin k\xe4ytt\xf6 on viime vuosikymmenin\xe4 laajentunut pienist\xe4 verkkosivuille kehitett\xe4vist\xe4 interaktiivisista elementeist\xe4 ",(0,a.jsx)(i.a,{href:"https://stripe.com/blog/migrating-to-typescript",children:"miljoonien koodirivien kokoisiksi ohjelmiksi"}),". Samalla JavaScript-kielen kyky tukea suurempia projekteja sek\xe4 niiss\xe4 esiityvi\xe4 monimutkaisia sis\xe4isi\xe4 suhteita ei ole kehittynyt."]}),"\n",(0,a.jsx)(i.p,{children:"Pienemmiss\xe4 ohjelmistoprojekteissa TypeScriptin k\xe4ytt\xf6\xf6notto voi tuntua turhalta ja per\xe4ti ylim\xe4\xe4r\xe4iselt\xe4 ty\xf6lt\xe4. Suurempia kokonaisuuksia hallittaessa se kuitenkin helpottaa ohjelmistojen kehitt\xe4mist\xe4 merkitt\xe4v\xe4sti. K\xe4\xe4nt\xe4j\xe4 havaitsee koodin muutosten, poistamisen ja lis\xe4ysten vaikutukset, ja l\xf6yt\xe4\xe4 mahdollisia virheit\xe4 niihin liittyen ohjelmiston eri osien v\xe4lill\xe4. Ohjelmistojen riippuvuuksia voidaan my\xf6s p\xe4ivitt\xe4\xe4 huolettomammin, kun k\xe4\xe4nt\xe4j\xe4 tarkistaa jokaisen rivin automaattisesti."}),"\n",(0,a.jsx)(i.h2,{id:"any-browser-any-host-any-os",children:"Any browser, any host, any OS"}),"\n",(0,a.jsxs)(i.p,{children:["TypeScript-k\xe4\xe4nt\xe4j\xe4 k\xe4\xe4nt\xe4\xe4 TypeScript-kielisen l\xe4hdekoodin standardin mukaiseksi JavaScript-koodiksi, jota voidaan suorittaa miss\xe4 vain JavaScript-suoritusymp\xe4rist\xf6ss\xe4, esimerkiksi selaimessa tai Node.js",":ll","\xe4. TypeScript tukee my\xf6s eri ",(0,a.jsx)(i.a,{href:"https://ecma-international.org/publications-and-standards/standards/ecma-262/",children:"ECMAScript-versioita"}),", joten voit halutessasi k\xe4\xe4nt\xe4\xe4 nykyaikaista syntaksia hy\xf6dynt\xe4v\xe4n koodisi my\xf6s vanhempien selainten tukemaan muotoon."]}),"\n",(0,a.jsxs)(i.p,{children:["K\xe4yt\xe4nn\xf6ss\xe4 JavaScript-koodin suoritusymp\xe4rist\xf6\xf6n vaikuttaa monta tekij\xe4\xe4. Esimerkiksi selaimessa on k\xe4yt\xf6ss\xe4 ",(0,a.jsx)(i.a,{href:"https://html.spec.whatwg.org/multipage/",children:"WHATWG"}),'-spesifikaation mukaiset ominaisuudet kuten "dom". Vastaavasti Node.js-ymp\xe4rist\xf6ss\xe4 on ',(0,a.jsx)(i.a,{href:"https://nodejs.org/api/modules.html",children:"oma standardikirjastonsa"}),"."]}),"\n",(0,a.jsxs)(i.p,{children:["TypeScript-k\xe4\xe4nt\xe4j\xe4n toimintaa konfiguroidaan ",(0,a.jsxs)(i.a,{href:"https://www.typescriptlang.org/tsconfig",children:[(0,a.jsx)(i.code,{children:"tsconfig.json"}),"-tiedoston"]})," avulla, ja k\xe4\xe4nnetyn koodin suoritusymp\xe4rist\xf6 voidaan asettaa ",(0,a.jsx)(i.a,{href:"https://www.typescriptlang.org/tsconfig#target",children:"target"}),"- sek\xe4 ",(0,a.jsx)(i.a,{href:"https://www.typescriptlang.org/tsconfig#lib",children:"lib"}),"-arvojen avulla vastaamaan oman sovelluksen k\xe4ytt\xf6tapauksia."]}),"\n",(0,a.jsx)(i.h2,{id:"typescript-compiles-to-javascript",children:"TypeScript compiles to JavaScript"}),"\n",(0,a.jsx)(i.p,{children:'K\xe4\xe4nt\xe4j\xe4n tuottama JavaScript-koodi on "puhdasta" JavaScripti\xe4, eik\xe4 siin\xe4 ole merkkej\xe4 TypeScriptist\xe4.'})]})}function d(t={}){const{wrapper:i}={...(0,s.a)(),...t.components};return i?(0,a.jsx)(i,{...t,children:(0,a.jsx)(c,{...t})}):c(t)}},1151:(t,i,e)=>{e.d(i,{Z:()=>o,a:()=>r});var a=e(7294);const s={},n=a.createContext(s);function r(t){const i=a.useContext(n);return a.useMemo((function(){return"function"==typeof t?t(i):{...i,...t}}),[i,t])}function o(t){let i;return i=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),a.createElement(n.Provider,{value:i},t.children)}}}]);