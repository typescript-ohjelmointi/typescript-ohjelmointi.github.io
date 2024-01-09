"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[829],{8127:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(5893),s=i(1151);const a={sidebar_position:3,sidebar_label:"Ty\xf6kalut"},o="Ty\xf6kalut",l={id:"perusteet/tyokalut",title:"Ty\xf6kalut",description:"Koska TypeScript ja JavaScript ovat monilta osin sama asia, monet JS-koodin kehitt\xe4miseksi k\xe4ytett\xe4v\xe4t ty\xf6kalut soveltuvat my\xf6s TypeScriptin kehitykseen. TypeScript-koodia kehitett\xe4ess\xe4 kaksi t\xe4rkeint\xe4 ty\xf6kalua ovat TypeScript-k\xe4\xe4nt\xe4j\xe4 eli tsc, sek\xe4 TypeScript-kielt\xe4 tukeva koodieditori.",source:"@site/docs/perusteet/03-tyokalut.md",sourceDirName:"perusteet",slug:"/perusteet/tyokalut",permalink:"/docs/perusteet/tyokalut",draft:!1,unlisted:!1,editUrl:"https://github.com/typescript-ohjelmointi/typescript-ohjelmointi.github.io/tree/main/docs/perusteet/03-tyokalut.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Ty\xf6kalut"},sidebar:"tutorialSidebar",previous:{title:"TypeScript-ohjelmoinnin aloittaminen",permalink:"/docs/perusteet/aloittaminen"},next:{title:"Tyypit",permalink:"/docs/category/tyypit"}},r={},c=[{value:"Paikallinen tai globaali asennus",id:"paikallinen-tai-globaali-asennus",level:2},{value:"Asennuskomennot",id:"asennuskomennot",level:2},{value:"K\xe4\xe4nt\xe4minen eli transpilointi",id:"k\xe4\xe4nt\xe4minen-eli-transpilointi",level:2},{value:"Yleisimm\xe4t komennot",id:"yleisimm\xe4t-komennot",level:2},{value:"tsc",id:"tsc",level:3},{value:"ts-node",id:"ts-node",level:3},{value:"tsconfig.json",id:"tsconfigjson",level:2},{value:"Teht\xe4v\xe4t",id:"teht\xe4v\xe4t",level:2}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"ty\xf6kalut",children:"Ty\xf6kalut"}),"\n",(0,n.jsxs)(t.p,{children:["Koska TypeScript ja JavaScript ovat monilta osin sama asia, monet JS-koodin kehitt\xe4miseksi k\xe4ytett\xe4v\xe4t ty\xf6kalut soveltuvat my\xf6s TypeScriptin kehitykseen. TypeScript-koodia kehitett\xe4ess\xe4 kaksi t\xe4rkeint\xe4 ty\xf6kalua ovat TypeScript-k\xe4\xe4nt\xe4j\xe4 eli ",(0,n.jsx)(t.strong,{children:"tsc"}),", sek\xe4 TypeScript-kielt\xe4 tukeva koodieditori."]}),"\n",(0,n.jsxs)(t.p,{children:["Kurssin puolesta suosittelemme editoriksi ",(0,n.jsxs)(t.a,{href:"https://code.visualstudio.com/",children:["Visual Studio Code",":a"," (VS Code)"]}),". VS Code sis\xe4lt\xe4\xe4 valmiiksi tuen TypeScript-kielelle ja itseasiassa se ",(0,n.jsx)(t.a,{href:"https://github.com/Microsoft/vscode/",children:"on my\xf6s itse toteutettu TypeScript-kielell\xe4"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Vaikka k\xe4ytt\xe4isit koodin editoimisessa VS Code",":a",", tarvitset silti erikseen TypeScript-k\xe4\xe4nt\xe4j\xe4n. K\xe4\xe4nt\xe4j\xe4 asennetaan ",(0,n.jsx)(t.a,{href:"https://nodejs.org/en",children:"Node.js"}),"-ajoymp\xe4rist\xf6n ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/",children:"npm-pakettienhallinnan (Node Package Manager)"})," avulla. Npm asentuu Node.js",":n"," mukana. Mik\xe4li sinulla ei ole viel\xe4 Node.js-ymp\xe4rist\xf6\xe4 asennettuna, voit asentaa sen ",(0,n.jsxs)(t.a,{href:"https://nodejs.org/en/learn/getting-started/how-to-install-nodejs",children:["Node.js",":n"," asennusohjeiden mukaisesti"]}),"."]}),"\n",(0,n.jsx)(t.admonition,{title:"Online-editorit",type:"info",children:(0,n.jsxs)(t.p,{children:["Kurssin puitteissa sinun ei ole aivan v\xe4ltt\xe4m\xe4t\xf6nt\xe4 asentaa kaikkia ty\xf6kaluja omalle koneellesi. Vaihtoehtoisesti voit hy\xf6dynt\xe4\xe4 online-palveluita, kuten ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/play",children:"TypeScript playground"}),". My\xf6s ilmaiset selainpohjaiset koodieditorit, kuten ",(0,n.jsx)(t.a,{href:"https://github.com/features/codespaces",children:"GitHub codespaces"}),", ",(0,n.jsx)(t.a,{href:"https://codepen.io/",children:"CodePen"})," tai ",(0,n.jsx)(t.a,{href:"https://stackblitz.com/",children:"StackBlitz"})," voivat soveltua kurssin suorittamiseen. N\xe4ihin palveluihin voidaan kuitenkin kurssin puolesta tarjota vain hyvin rajallista tukea."]})}),"\n",(0,n.jsxs)(t.p,{children:["Tarkempaa tietoa ty\xf6kaluista l\xf6yd\xe4t tiiviiss\xe4 muodossa TypeScriptin k\xe4sikirjasta luvusta ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html",children:"TypeScript Tooling in 5 minutes (typescriptlang.org)"}),". My\xf6s Node.js",":n"," dokumentaation artikkeli ",(0,n.jsx)(t.a,{href:"https://nodejs.org/en/learn/getting-started/nodejs-with-typescript",children:"Node.js with TypeScript (nodejs.org)"})," sis\xe4lt\xe4\xe4 hyv\xe4n johdannon TypeScript-kehityksen ty\xf6kaluihin ja ty\xf6vaiheisiin."]}),"\n",(0,n.jsx)(t.h2,{id:"paikallinen-tai-globaali-asennus",children:"Paikallinen tai globaali asennus"}),"\n",(0,n.jsxs)(t.p,{children:["TypeScript voidaan asentaa joko ",(0,n.jsx)(t.strong,{children:"globaalisti"})," koko k\xe4ytt\xf6j\xe4rjestelm\xe4\xe4n tai ",(0,n.jsx)(t.strong,{children:"paikallisesti"})," yksitt\xe4iseen projektiin. Globaali ja paikallinen asennus jakavat mielipiteit\xe4",(0,n.jsx)(t.a,{href:"https://github.com/loopbackio/loopback.io/issues/509",children:(0,n.jsx)("sup",{children:"1"})})," ja jopa TypeScriptin omat ohjeet vaihtelevat asennustavan suhteen. ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html",children:"K\xe4sikirjan ohjeessa asennus tehd\xe4\xe4n globaalisti"})," kun taas ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/download",children:"download-sivulla asennus tehd\xe4\xe4n paikallisesti"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Download-sivulla paikallista eli projektikohtaista asennusta perustellaan seuraavasti:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:'"Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently."'})}),"\n",(0,n.jsxs)(t.p,{children:["Microsoft. ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/download",children:"Download TypeScript"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Mik\xe4li et ty\xf6skentele samanaikaisesti lukuisten eri TypeScript-projektien parissa tai tee yhteisty\xf6t\xe4 muiden kehitt\xe4jien kanssa, ei asennustavalla ole suurta merkityst\xe4."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"T\xe4m\xe4n kurssin esimerkeiss\xe4 asennus tehd\xe4\xe4n paikallisesti"}),". Paikallisen asennuksen etuina koko projekti riippuvuuksineen asentuu kerralla yhdell\xe4 ",(0,n.jsx)(t.code,{children:"npm install"})," -komennolla  ja kaikilla kehitt\xe4jill\xe4 on k\xe4yt\xf6ss\xe4\xe4n sama versio TypeScriptist\xe4. Paikallisen asennuksen haittapuolena joudut kirjoittamaan ",(0,n.jsx)(t.code,{children:"tsc"}),"-komennon sijasta ",(0,n.jsx)(t.code,{children:"npx tsc"})," tai ",(0,n.jsx)(t.code,{children:"npm exec tsc"}),". Voit lukea lis\xe4\xe4 ",(0,n.jsx)(t.code,{children:"npx"}),"- ja ",(0,n.jsx)(t.code,{children:"npm exec"}),"-komennoista ",(0,n.jsxs)(t.a,{href:"https://docs.npmjs.com/cli/v8/commands/npx",children:["npm",":n"," dokumentaatiosta"]}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"asennuskomennot",children:"Asennuskomennot"}),"\n",(0,n.jsxs)(t.p,{children:["Asenna TypeScript itsellesi uuteen projektiin luomalla tyhj\xe4 hakemisto, siirtym\xe4ll\xe4 siihen komentorivill\xe4 ja suorittamalla komento ",(0,n.jsx)(t.code,{children:"npm install typescript --save-dev"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:['"TypeScript is available as a ',(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/typescript",children:"package on the npm registry"}),' available as "typescript". You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project."']})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"npm install typescript --save-dev\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/download",children:"https://www.typescriptlang.org/download"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Asennuksen j\xe4lkeen voit varmistaa, ett\xe4 se toimii oikein:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"npx tsc --version\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Edell\xe4 tehty asennus luo hakemistoosi ",(0,n.jsx)(t.code,{children:"node_modules"}),"-alihakemiston sek\xe4 ",(0,n.jsx)(t.code,{children:"package.json"}),"-tiedoston, jossa on m\xe4\xe4ritettyn\xe4 projektissa k\xe4ytett\xe4v\xe4 TypeScript-versio. Tiedosto voi n\xe4ytt\xe4\xe4 aluksi t\xe4lt\xe4, ja siihen voidaan lis\xe4t\xe4 my\xf6hemmin projektin muut riippuvuudet:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "devDependencies": {\n      "typescript": "^5"\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.admonition,{title:"Development dependency",type:"info",children:[(0,n.jsxs)(t.p,{children:["Kuten ylt\xe4 huomaat, TypeScript asennetaan ",(0,n.jsx)(t.strong,{children:"development"}),"-riippuvuudeksi ",(0,n.jsx)(t.code,{children:"--save-dev"}),"-vivulla. Koska TypeScript-koodi k\xe4\xe4nnet\xe4\xe4n JavaScriptiksi, TypeScripti\xe4 ei tosiaan tarvita varsinaisessa tuotantoymp\xe4rist\xf6ss\xe4, eli esimerkiksi selaimessa tai palvelimella."]}),(0,n.jsxs)(t.p,{children:["Voit lukea lis\xe4\xe4 eri tyyppisist\xe4 riippuvuuksista artikkelista ",(0,n.jsx)(t.a,{href:"https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file",children:"Specifying dependencies and devDependencies in a package.json file (docs.npmjs.com)"}),"."]})]}),"\n",(0,n.jsx)(t.h2,{id:"k\xe4\xe4nt\xe4minen-eli-transpilointi",children:"K\xe4\xe4nt\xe4minen eli transpilointi"}),"\n",(0,n.jsxs)(t.p,{children:["TypeScriptin omissa dokumenteissa k\xe4ytet\xe4\xe4n p\xe4\xe4s\xe4\xe4nt\xf6isesti termi\xe4 ",(0,n.jsx)(t.strong,{children:'"k\xe4\xe4nt\xe4minen"'})," (compiling), kun puhutaan TS-koodin muuntamisesta JS-koodiksi. K\xe4yt\xe4mme my\xf6s t\xe4m\xe4n kurssin materiaalissa samaa termi\xe4."]}),"\n",(0,n.jsxs)(t.p,{children:['K\xe4\xe4nt\xe4miselle tarkoitetaan perinteisesti operaatiota, jossa ihmisen luettava l\xe4hdekoodi muunnetaan matalamman abstraktiotason muotoon, joka on tyypillisesti konekielist\xe4 ja siten ihmisen vaikeasti luettavaa. TS-koodi k\xe4\xe4nnet\xe4\xe4n kuitenkin "saman abstraktiotason" JavaScript-koodiksi, joten joissain l\xe4hteiss\xe4 samasta asiasta k\xe4ytet\xe4\xe4n termi\xe4 ',(0,n.jsx)(t.strong,{children:'"transpilointi"'})," (transpiling). ",(0,n.jsx)(t.a,{href:"https://stackoverflow.com/a/44932758",children:"(StackOverflow: Compiling vs Transpiling)"})]}),"\n",(0,n.jsxs)(t.p,{children:["TypeScript-koodin k\xe4\xe4nt\xe4mist\xe4 voidaan kokeilla k\xe4tev\xe4sti sivulla ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/play",children:"TypeScript Playground"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"K\xe4\xe4nt\xe4j\xe4 osaa huomioida eri ECMAScript-versioita, eli sill\xe4 pystyt\xe4\xe4n tuottamaan my\xf6s vanhempien JavaScript-suoritusymp\xe4rist\xf6jen ymm\xe4rt\xe4m\xe4\xe4 koodia modernista TypeScript-koodista. Esimerkiksi oheinen oleva TypeScript-koodi hy\xf6dynt\xe4\xe4 JavaScriptin ominaisuuksia, joita erityisesti vanhemmissa selaimissa ei ole"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"class Person {\n    constructor(readonly firstName: string, readonly lastName: string) {\n    }\n\n    get fullName() {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.a,{href:"https://www.typescriptlang.org/play?target=1#code/MYGwhgzhAEAKCmAnCB7AdtA3gWAFDQOmHQgBdEBXYUlRACkXjABN0QBPaAMwEtlSAcmAC28AFzQyiHmgDmAGmiMWbTuDJDREqTNkBKLHkLQAvniOFZ8UtwogQm+HQM58xwo1IVEGAAYASTFIACx4IADpefkcTaECQsPD1QRF4E18AbgsCM1xcvBBraAAHaABeaDR4AHc4JFQ0OgByACkUYLQmxSaAERR4Jr0s3GI0VEKklFk6Ysi7B1ShoA",children:["Katso TypeScript playgroundista, miten TypeScript k\xe4\xe4nt\xe4\xe4 yll\xe4 olevan koodin ES5",":n"," mukaiseen muotoon"]}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Voit my\xf6s itse kokeilla k\xe4\xe4nt\xe4\xe4 koodia eri ES-versioiden tukemaan muotoon ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/play?target=1#code/MYGwhgzhAEAKCmAnCB7AdtA3gWAFDQOmHQgBdEBXYUlRACkXjABN0QBPaAMwEtlSAcmAC28AFzQyiHmgDmAGmiMWbTuDJDREqTNkBKLHkLQAvniOFZ8UtwogQm+HQM58xwo1IVEGAAYASTFIACx4IADpefkcTaECQsPD1QRF4E18AbgsCM1xcvBBraAAHaABeaDR4AHc4JFQ0OgByACkUYLQmxSaAERR4Jr0s3GI0VEKklFk6Ysi7B1ShoA",children:"TypeScript playground -palvelussa"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"yleisimm\xe4t-komennot",children:"Yleisimm\xe4t komennot"}),"\n",(0,n.jsxs)(t.p,{children:["TypeScript-koodia kirjoittaessasi tarvitset ",(0,n.jsx)(t.code,{children:"tsc"}),"-komentoa, eli TypeScript-k\xe4\xe4nt\xe4j\xe4\xe4. K\xe4\xe4nt\xe4j\xe4\xe4 k\xe4ytet\xe4\xe4n p\xe4\xe4asiassa komentorivilt\xe4 k\xe4sin, joten ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line",children:"komentorivin perusk\xe4yt\xf6n"})," on hyv\xe4 olla tuttua. Perusk\xe4ytt\xf6\xf6n riitt\xe4\xe4 t\xe4ss\xe4 yhteydess\xe4 hakemistojen v\xe4lill\xe4 siirtyminen sek\xe4 komentojen suorittaminen."]}),"\n",(0,n.jsx)(t.h3,{id:"tsc",children:"tsc"}),"\n",(0,n.jsxs)(t.p,{children:["Jos haluat k\xe4\xe4nt\xe4\xe4 kirjoittamasi TypeScript-kielisen ohjelman l\xe4hdekoodit JavaScript-kielisiksi l\xe4hdekoodeiksi, onnistuu se ",(0,n.jsx)(t.code,{children:"tsc"}),"-komennolla (TypeScript compiler). Yksitt\xe4inen ",(0,n.jsx)(t.code,{children:".ts"}),"-p\xe4\xe4tteinen l\xe4hdekooditiedosto saadaan k\xe4\xe4nnetty\xe4 JavaScript-koodiksi seuraavalla komennolla:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"tsc helloWorld.ts       # TypeScript asennettu globaalisti\nnpx tsc helloWorld.ts   # TypeScript asennettu paikallisesti\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"tsc"}),"-komento k\xe4\xe4nt\xe4\xe4 kirjoittamasi TypeScript-tiedostot JavaScript-tiedostoiksi. K\xe4\xe4nt\xe4j\xe4lle voidaan antaa useita eri komentoriviparametreja, jotka vaikuttavat k\xe4\xe4nt\xe4misen lopputulokseen. N\xe4ist\xe4 l\xf6yd\xe4t lis\xe4tietoa ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",children:"TypeScriptin k\xe4sikirjasta"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["K\xe4\xe4nnetyt JavaScript-tiedostot voidaan suorittaa selaimessa tai komentorivill\xe4 aivan kuten mitk\xe4 tahansa ",(0,n.jsx)(t.code,{children:".js"}),"-tiedostot. K\xe4\xe4nnetyn tiedoston suorittaminen komentorivill\xe4 ",(0,n.jsx)(t.code,{children:"node"}),"-komennolla onnistuu esimerkiksi seuraavasti:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"node helloWorld.js\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"tsconfig.json",type:"info",children:(0,n.jsxs)(t.p,{children:["Usein projektit koostuvat lukuisista tiedostoista, jotka sijaitsevat tarkoituksenmukaisen hakemistorakenteen sis\xe4ll\xe4. Projektit my\xf6s usein haluavat vaikuttaa siihen, mill\xe4 asetuksilla k\xe4\xe4nt\xe4minen tehd\xe4\xe4n. T\xe4m\xe4n vuoksi projekteihin toteutetaan usein ",(0,n.jsx)(t.code,{children:"tsconfig.json"}),"-niminen tiedosto, johon voidaan m\xe4\xe4ritell\xe4 k\xe4ytett\xe4v\xe4 hakemistorakenne sek\xe4 k\xe4\xe4nt\xe4misen asetukset."]})}),"\n",(0,n.jsx)(t.h3,{id:"ts-node",children:"ts-node"}),"\n",(0,n.jsxs)(t.p,{children:["L\xe4hdekoodin k\xe4\xe4nt\xe4minen ja suorittaminen kahdessa eri vaiheessa voi pidemm\xe4n p\xe4\xe4lle tuntua k\xf6mpel\xf6lt\xe4. Ty\xf6kalut osaavat kuitenkin onneksi huolehtia k\xe4\xe4nt\xe4misest\xe4 automaattisesti taustalla. ",(0,n.jsx)(t.code,{children:"tsc"}),"-k\xe4\xe4nt\xe4j\xe4 voidaan k\xe4ynnist\xe4\xe4 siten, ett\xe4 se ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",children:"k\xe4\xe4nt\xe4\xe4 tiedostot taustalla niiden muuttuessa"}),". Vaihtoehtoisesti voit k\xe4ynnist\xe4\xe4 Node.js-ohjelman suoraan TypeScript-muotoisesta tiedostosta ",(0,n.jsxs)(t.a,{href:"https://www.npmjs.com/package/ts-node",children:[(0,n.jsx)(t.strong,{children:"ts-node"}),"-ty\xf6kalulla"]}),", joka k\xe4\xe4nt\xe4\xe4 koodia sen suorituksen aikana:"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:['"',(0,n.jsx)(t.code,{children:"ts-node"}),' is a TypeScript execution engine and REPL for Node.js. It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling. "']})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/ts-node",children:"https://www.npmjs.com/package/ts-node"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ts-node"})," mahdollistaa siis TypeScript-koodin suorittamisen ilman etuk\xe4teen teht\xe4v\xe4\xe4 k\xe4\xe4nn\xf6svaihetta:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install ts-node --save-dev    # asentaa ts-noden paikallisesti\n\nnpx ts-node src/skripti.ts        # suorittaa skriptin `src/skripti.ts`\n\nnpx ts-node                       # k\xe4ynnist\xe4\xe4 ts-noden REPL-tilan\n"})}),"\n",(0,n.jsx)(t.h2,{id:"tsconfigjson",children:"tsconfig.json"}),"\n",(0,n.jsxs)(t.p,{children:["TypeScript-k\xe4\xe4nt\xe4j\xe4 ",(0,n.jsx)(t.code,{children:"tsc"})," sek\xe4 ty\xf6kalut kuten ",(0,n.jsx)(t.code,{children:"ts-node"})," ja ",(0,n.jsx)(t.code,{children:"ts-jest"}),", tukevat lukuisia TS-koodin k\xe4\xe4nt\xe4miseen liittyvi\xe4 asetuksia. N\xe4m\xe4 asetukset voidaan antaa komentoriviparametreina, mutta tyypillisesti niit\xe4 on niin paljon, ett\xe4 ne kannattaa tallentaa erilliseen asetustiedostoon."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:'"The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project"'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",children:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"tsconfig.json"}),"-asetustiedostoon voidaan m\xe4\xe4ritell\xe4 lukuisia k\xe4\xe4nt\xe4j\xe4n toimintaan vaikuttavia asetuksia. Voit luoda itsellesi uuden ",(0,n.jsx)(t.code,{children:"tsconfig.json"}),"-tiedoston ",(0,n.jsx)(t.code,{children:"tsc"}),"-komennon avulla:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx tsc --init\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Created a new tsconfig.json with:\n\n  target: es2016\n  module: commonjs\n  strict: true\n  esModuleInterop: true\n  skipLibCheck: true\n  forceConsistentCasingInFileNames: true\n\n\nYou can learn more at https://aka.ms/tsconfig\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Monet tiedoston asetukset liittyv\xe4t k\xe4\xe4nt\xe4j\xe4n tekemiin tarkastuksiin, kuten siihen, sallitaanko koodissa funktion parametreissa tai paluuarvoissa puuttuvia tietotyyppej\xe4. K\xe4\xe4nt\xe4j\xe4n tekem\xe4t tarkastukset ja varoitukset ovat  l\xe4ht\xf6kohtaisesti hy\xf6dyllisi\xe4, joten suosittelemme hy\xf6dynt\xe4m\xe4\xe4n niit\xe4 laajasti. ",(0,n.jsx)(t.code,{children:"strict"}),"-asetuksella saadaankin asetettua kerralla monet erilliset asetukset p\xe4\xe4lle:"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:'"The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness. Turning this on is equivalent to enabling all of the strict mode family options, which are outlined below. You can then turn off individual strict mode family checks as needed."'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/tsconfig#strict",children:"https://www.typescriptlang.org/tsconfig#strict"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Minimalistinen mutta toimiva asetustiedosto voi n\xe4ytt\xe4\xe4 esimerkiksi t\xe4lt\xe4:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'/* Visit https://aka.ms/tsconfig to read more about this file */\n{\n    "compilerOptions": {\n        /* Set the JavaScript language version for emitted JavaScript\n         * and include compatible library declarations. */\n        "target": "es2016",\n\n        /* Specify the root folder within your source files. */\n        "rootDir": "./src/",\n\n        /* Specify an output folder for all emitted files. */\n        "outDir": "./build/",\n\n        /* Emit additional JavaScript to ease support for importing CommonJS modules.\n         * This enables \'allowSyntheticDefaultImports\' for type compatibility. */\n        "esModuleInterop": true,\n\n        /* Enable all strict type-checking options. */\n        "strict": true,\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"teht\xe4v\xe4t",children:"Teht\xe4v\xe4t"}),"\n",(0,n.jsxs)(t.p,{children:["Perehdytty\xe4si materiaaliin ja asennettuasi ohjelmointiin tarvittavat ty\xf6kalut, olet valmis ensimm\xe4isiin teht\xe4viin! ",(0,n.jsx)(t.a,{href:"/docs/harjoitukset/perusteet",children:"L\xf6yd\xe4t TypeScriptin perusteisiin liittyv\xe4t teht\xe4v\xe4t omalta sivultaan"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Teht\xe4vien j\xe4lkeen etene TypeScriptin tyyppij\xe4rjestelm\xe4n pariin."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>o});var n=i(7294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);