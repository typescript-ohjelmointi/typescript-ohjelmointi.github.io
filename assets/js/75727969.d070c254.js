"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[470],{966:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=i(5893),s=i(1151);const a={sidebar_position:5},o="Geneeriset tyypit",r={id:"tyypit/generics",title:"Geneeriset tyypit",description:"TypeScript tukee geneerisi\xe4 tyyppej\xe4 (generics) niin tyyppien m\xe4\xe4rityksiss\xe4 kuin esimerkiksi funktioiden parametreissa ja paluuarvoissa. Lyhyesti kuvailtuna geneeriset tyypit edesauttavat koodin uudelleenk\xe4ytett\xe4vyytt\xe4 tilanteissa, joissa sama funktio tai tyyppi voi k\xe4sitell\xe4 monen tyyppist\xe4 dataa.",source:"@site/docs/tyypit/04-generics.md",sourceDirName:"tyypit",slug:"/tyypit/generics",permalink:"/docs/tyypit/generics",draft:!1,unlisted:!1,editUrl:"https://github.com/typescript-ohjelmointi/typescript-ohjelmointi.github.io/tree/main/docs/tyypit/04-generics.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Keyof ja typeof",permalink:"/docs/tyypit/keyof-typeof"},next:{title:"Tyyppien unionit ja leikkaukset",permalink:"/docs/tyypit/unions-intersections"}},l={},c=[{value:"Geneeriset funktiot",id:"geneeriset-funktiot",level:2},{value:"Geneeriset tyyppim\xe4\xe4rittelyt",id:"geneeriset-tyyppim\xe4\xe4rittelyt",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"geneeriset-tyypit",children:"Geneeriset tyypit"}),"\n",(0,n.jsxs)(t.p,{children:["TypeScript tukee geneerisi\xe4 tyyppej\xe4 (generics) niin ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types",children:"tyyppien m\xe4\xe4rityksiss\xe4"})," kuin esimerkiksi ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions",children:"funktioiden parametreissa ja paluuarvoissa"}),". Lyhyesti kuvailtuna geneeriset tyypit edesauttavat koodin uudelleenk\xe4ytett\xe4vyytt\xe4 tilanteissa, joissa sama funktio tai tyyppi voi k\xe4sitell\xe4 monen tyyppist\xe4 dataa."]}),"\n",(0,n.jsx)(t.p,{children:"Aiheeseen perehtymiseksi suosittelemme seuraavaa lyhytt\xe4 videota:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=EcCTIExsqmI",children:(0,n.jsx)(t.strong,{children:"Learn TypeScript Generics In 13 Minutes. Web Dev Simplified. YouTube"})})}),"\n",(0,n.jsx)(t.h2,{id:"geneeriset-funktiot",children:"Geneeriset funktiot"}),"\n",(0,n.jsx)(t.p,{children:"Mik\xe4li haluat toteuttaa esimerkiksi funktion, joka palauttaa merkkijonotaulukosta satunnaisen arvon, voisit toteuttaa sen esimerkiksi seuraavasti:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"function getRandom(collection: string[]): string {\n    let randomIndex = Math.trunc(Math.random() * collection.length);\n    return collection[randomIndex];\n}\n\nconsole.log(getRandom(['kivi', 'paperi', 'sakset']));\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Funktion parametreissa m\xe4\xe4ritell\xe4\xe4n, ett\xe4 se saa parametrinaan merkkijonotaulukon ",(0,n.jsx)(t.code,{children:"string[]"})," ja ett\xe4 se palauttaa merkkijonon. Funktion sis\xe4ll\xe4 ei kuitenkaan ole lainkaan merkkijonoihin liittyv\xe4\xe4 logiikkaa, joten samaa koodia voitaisiin uudelleenk\xe4ytt\xe4\xe4 mink\xe4 tahansa tyyppisen taulukon k\xe4sittelemiseksi. Materiaalin ",(0,n.jsx)(t.a,{href:"/docs/tyypit/tyyppijarjestelma",children:"aikaisemmassa osassa"})," esittelimme ",(0,n.jsx)(t.code,{children:"any"}),"-tyypin, joka tavallaan voisi olla osa ratkaisua. Mik\xe4li vaihtaisimme parametrin tyypiksi ",(0,n.jsx)(t.code,{children:"any[]"})," ja paluuarvon tyypiksi ",(0,n.jsx)(t.code,{children:"any"}),", koodi toimisi mink\xe4 tahansa tyyppisten taulukkojen kanssa. T\xe4ll\xf6in paluuarvo olisi kuitenkin tyyppi\xe4 ",(0,n.jsx)(t.code,{children:"any"}),", joka aiheuttaisi ylim\xe4\xe4r\xe4ist\xe4 ty\xf6t\xe4 funktiota kutsuvassa koodissa. Sen sijaan voimme m\xe4\xe4ritell\xe4 funktiolle geneerisen tyyppiparametrin, jonka avulla sek\xe4 parametrin ett\xe4 paluuarvon tyyppi saadaan m\xe4\xe4ritetty\xe4 samaksi:"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:'"In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature."'})}),"\n",(0,n.jsxs)(t.p,{children:["Microsoft. More on Functions. ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions",children:"typescriptlang.org"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Tyyppiparametri m\xe4\xe4ritell\xe4\xe4n funktion nimen ja sulkujen v\xe4liss\xe4 kulmasulkujen (",(0,n.jsx)(t.code,{children:"<"})," ",(0,n.jsx)(t.code,{children:">"}),") sis\xe4ll\xe4. Tyyppiparametrin nimi voidaan valita itse, mutta tyypillisesti parametrin nimen\xe4 k\xe4ytet\xe4\xe4n kirjaimia ",(0,n.jsx)(t.code,{children:"T"}),", ",(0,n.jsx)(t.code,{children:"U"}),", ",(0,n.jsx)(t.code,{children:"V"}),"..."]}),"\n",(0,n.jsxs)(t.p,{children:["Kun funktion otsikoksi m\xe4\xe4ritell\xe4\xe4n ",(0,n.jsx)(t.code,{children:"function getRandom<T>(collection: T[]): T"})," funktio hyv\xe4ksyy mink\xe4 tahansa taulukon ja TypeScript tiet\xe4\xe4 paluuarvon olevan aina samaa tyyppi\xe4 kuin annettu taulukko. T\xe4m\xe4n muutoksen j\xe4lkeen funktiota voidaankin kutsua yht\xe4 hyvin merkkijono- kuin numerotaulukon kanssa:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"function getRandom<T>(collection: T[]): T {\n    let randomIndex = Math.trunc(Math.random() * collection.length);\n    return collection[randomIndex];\n}\n\nconsole.log(getRandom(['kivi', 'paperi', 'sakset']));\nconsole.log(getRandom([0, 1, 2]));\n"})}),"\n",(0,n.jsx)(t.h2,{id:"geneeriset-tyyppim\xe4\xe4rittelyt",children:"Geneeriset tyyppim\xe4\xe4rittelyt"}),"\n",(0,n.jsxs)(t.p,{children:["Toisinaan on my\xf6s tarpeen m\xe4\xe4ritell\xe4 tyyppej\xe4, joiden attribuutteina voi olla eri tyyppisi\xe4 arvoja. Seuraavassa koodiesimerkiss\xe4 onkin m\xe4\xe4riteltyn\xe4 tyyppi ",(0,n.jsx)(t.code,{children:"Box"}),", jonka sis\xe4lt\xf6n\xe4 voi olla eri tyyppisi\xe4 arvoja:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"interface Box<Type> {\n    contents: Type;\n}\n\n\nconst greeting: Box<string> = { contents: 'hello' }\n\n// TypeScript tarkastaa parametrisoidun tyypin\ngreeting = { contents: 1 } // error\n\n\n// uusi alias `Box`-tyypille, joka sis\xe4lt\xe4\xe4 merkkijonon:\ntype StringBox = Box<string>\n\nconst feedback: StringBox = { contents: 'good job!' }\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Er\xe4s hyvin yleinen parametrisoitu tyyppi on JavaScriptin ",(0,n.jsx)(t.code,{children:"Promise"}),", joka k\xe4ytt\xf6tapauksesta riippuen pit\xe4\xe4 sis\xe4ll\xe4\xe4n eri tyyppisi\xe4 arvoja. ",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts",children:"TypeScriptin l\xe4hdekoodissa"})," ",(0,n.jsx)(t.code,{children:"Promise"}),"-tyyppi onkin m\xe4\xe4ritetty seuraavasti:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"interface Promise<T> {\n  //...\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Voit lukea aiheesta lis\xe4\xe4 ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types",children:"TypeScriptin k\xe4sikirjasta"}),"."]})]})}function y(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(7294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);