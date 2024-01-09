"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[703],{7367:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(5893),a=i(1151);const s={sidebar_position:2},r="Type ja interface",o={id:"tyypit/type-ja-interface",title:"Type ja interface",description:"Edellisiss\xe4 kappaleissa olemme perehtyneet siihen, miten TypeScriptill\xe4 voidaan m\xe4\xe4ritell\xe4 eri muuttujille ja funktioille JavaScriptin perustietotyyppej\xe4 kuten string ja number. TypeScriptist\xe4 on kuitenkin viel\xe4 huomattavasti enemm\xe4n hy\xf6ty\xe4 silloin, kun omassa ohjelmalogiikassa hy\xf6dynnet\xe4\xe4n monipuolisesti omia ja eri kirjastoista l\xf6ytyvi\xe4 tietotyyppej\xe4.",source:"@site/docs/tyypit/02-type-ja-interface.md",sourceDirName:"tyypit",slug:"/tyypit/type-ja-interface",permalink:"/docs/tyypit/type-ja-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/typescript-ohjelmointi/typescript-ohjelmointi.github.io/tree/main/docs/tyypit/02-type-ja-interface.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Perustietotyypit",permalink:"/docs/tyypit/tyyppijarjestelma"},next:{title:"Keyof ja typeof",permalink:"/docs/tyypit/keyof-typeof"}},l={},d=[{value:"Type",id:"type",level:2},{value:"Interface",id:"interface",level:2},{value:"Valinnaiset attribuutit",id:"valinnaiset-attribuutit",level:2},{value:"Tyyppien yhdisteleminen",id:"tyyppien-yhdisteleminen",level:2},{value:"Union (<code>number | string</code>)",id:"union-number--string",level:3},{value:"Intersection (<code>&amp;</code>)",id:"intersection-",level:3},{value:"Sis\xe4kk\xe4iset tyypit",id:"sis\xe4kk\xe4iset-tyypit",level:3},{value:"Tuplet (monikko)",id:"tuplet-monikko",level:3},{value:"Muita hy\xf6dyllisi\xe4 ominaisuuksia",id:"muita-hy\xf6dyllisi\xe4-ominaisuuksia",level:2},{value:"<code>readonly</code> ja <code>as const</code>",id:"readonly-ja-as-const",level:3},{value:"Rakenteellinen tyypitys (structural typing)",id:"rakenteellinen-tyypitys-structural-typing",level:3},{value:"Control flow analysis (CFA)",id:"control-flow-analysis-cfa",level:3},{value:"Another example of (nested) CFA",id:"another-example-of-nested-cfa",level:3},{value:"Bonus: still some peculiarities about narrowing",id:"bonus-still-some-peculiarities-about-narrowing",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"type-ja-interface",children:"Type ja interface"}),"\n",(0,t.jsxs)(n.p,{children:["Edellisiss\xe4 kappaleissa olemme perehtyneet siihen, miten TypeScriptill\xe4 voidaan m\xe4\xe4ritell\xe4 eri muuttujille ja funktioille JavaScriptin perustietotyyppej\xe4 kuten ",(0,t.jsx)(n.code,{children:"string"})," ja ",(0,t.jsx)(n.code,{children:"number"}),". TypeScriptist\xe4 on kuitenkin viel\xe4 huomattavasti enemm\xe4n hy\xf6ty\xe4 silloin, kun omassa ohjelmalogiikassa hy\xf6dynnet\xe4\xe4n monipuolisesti omia ja eri kirjastoista l\xf6ytyvi\xe4 tietotyyppej\xe4."]}),"\n",(0,t.jsxs)(n.p,{children:["Tyypillisimm\xe4t tavat m\xe4\xe4ritell\xe4 omia tyyppej\xe4 TypeScriptiss\xe4 ovat ",(0,t.jsx)(n.code,{children:"type"}),", ",(0,t.jsx)(n.code,{children:"interface"})," ja ",(0,t.jsx)(n.code,{children:"class"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"type",children:"Type"}),"\n",(0,t.jsx)(n.p,{children:"Yksinkertaisimmillaan tietyn olion yyppi voidaan m\xe4\xe4ritell\xe4 suoraan muuttujaan:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let user: { id: number, username: string } = { id: 1, username: 'Alice'};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Yll\xe4 sijoitusoperaattorin ",(0,t.jsx)(n.code,{children:"="})," vasemmalla puolella on m\xe4\xe4ritetty olion tyyppi, ja oikealla puolella itse sijoitettava olio. TypeScript varmistaa, ett\xe4 muuttujaan sijoitettava arvo sis\xe4lt\xe4\xe4 tarvittavat attribuutit ja ett\xe4 ne ovat oikean tyyppisi\xe4."]}),"\n",(0,t.jsx)(n.p,{children:'Kuten huomaat, tyypin m\xe4\xe4ritteleminen suoraan muuttujaan on luettavuuden ja usein my\xf6s uudelleenk\xe4ytett\xe4vyyden n\xe4k\xf6kulmasta huono idea. Tyypeille voidaankin m\xe4\xe4ritell\xe4 "aliaksia", jotka tekev\xe4t niist\xe4 uudelleenk\xe4ytett\xe4vi\xe4:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type User = {\n    id: number;\n    username: string;\n};\n\nlet user1: User = { id: 1, username: 'Alice' };\nlet user2: User = { id: 2, username: 'Bob' };\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:'"Think of Types Like Variables'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:'Much like how you can create variables with the same name in different scopes, a type has similar semantics."'})}),"\n",(0,t.jsxs)(n.p,{children:["Microsoft. ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/static/TypeScript%20Types-ae199d69aeecf7d4a2704a528d0fd3f9.png",children:"TypeScript Cheat Sheet (Type)"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"type"}),"-avainsanan lis\xe4ksi TypeScriptiss\xe4 omia oliotyyppej\xe4 voidaan m\xe4\xe4ritell\xe4 my\xf6s rajapintoina ",(0,t.jsx)(n.code,{children:"interface"}),"-avainsanalla. Syntaktisesti ",(0,t.jsx)(n.code,{children:"interface"})," n\xe4ytt\xe4\xe4 hyvin samalta kuin ",(0,t.jsx)(n.code,{children:"type"}),', mutta siin\xe4 ei k\xe4ytet\xe4 "sijoitusoperaattoria" ',(0,t.jsx)(n.code,{children:"="}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface User {\n    id: number;\n    username: string;\n}\n\nlet user1: User = { id: 1, username: 'Alice' };\nlet user2: User = { id: 2, username: 'Bob' };\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sek\xe4 ",(0,t.jsx)(n.code,{children:"type"})," ett\xe4 ",(0,t.jsx)(n.code,{children:"interface"})," toimivat monilta osin samalla tavalla. Niill\xe4 on kuitenkin tiettyj\xe4 eroja liittyen erityisesti eri tyyppien yhdistelemiseen. Hy\xf6dynn\xe4mme t\xe4ll\xe4 sivulla p\xe4\xe4asiassa ",(0,t.jsx)(n.code,{children:"type"}),"-m\xe4\xe4rityksi\xe4"]}),"\n",(0,t.jsxs)(n.p,{children:["Voit lukea lis\xe4\xe4 rajapinnoista ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/interfaces.html",children:"TypeScriptin k\xe4sikirjasta"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{title:"Puolipisteet ja pilkut",type:"info",children:[(0,t.jsx)(n.p,{children:"TypeScript on eritt\xe4in salliva sen suhteen, k\xe4ytet\xe4\xe4nk\xf6 tyyppien m\xe4\xe4rittelyss\xe4 eri attribuuttien v\xe4lill\xe4 pilkkuja tai puolipisteit\xe4, tai j\xe4tet\xe4\xe4nk\xf6 ne kokonaan kirjoittamatta:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// puolipisteill\xe4:\ntype User = {\n    id: number;\n    username: string;\n};\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// pilkuilla:\ntype User = {\n    id: number,\n    username: string\n}\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// ilman:\ntype User = {\n    id: number\n    username: string\n}\n"})}),(0,t.jsxs)(n.p,{children:['T\xe4m\xe4 on makuasia ja "oikea" tapa riippuu osin henkil\xf6kohtaisista ja tiimin mieltymyksist\xe4. TypeScriptin omassa dokumentaatiossa suositaan ylint\xe4 tapaa (',(0,t.jsx)(n.code,{children:";"}),"), joten sit\xe4 k\xe4ytet\xe4\xe4n my\xf6s t\xe4m\xe4n kurssin esimerkeiss\xe4."]})]}),"\n",(0,t.jsx)(n.h2,{id:"valinnaiset-attribuutit",children:"Valinnaiset attribuutit"}),"\n",(0,t.jsxs)(n.p,{children:["Eri tyypeiss\xe4 voi olla my\xf6s valinnaisia attribuutteja, jolloin niiden nimen per\xe4\xe4n kirjoitetaan kysymysmerkki ",(0,t.jsx)(n.code,{children:"?"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type User = {\n    id: number;\n    username: string;\n    email?: string;  // `?` tarkoittaa valinnaista arvoa\n};\n\nlet user1: User = { id: 1, username: 'alice' };\nlet user2: User = { id: 2, username: 'bob', email: 'bob@example.com' };\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Yll\xe4 ",(0,t.jsx)(n.code,{children:"User"}),"-olioita voidaan siis luoda joko ",(0,t.jsx)(n.code,{children:"email"}),"-attribuutilla tai ilman. Koska attribuutti on m\xe4\xe4ritetty valinnaiseksi, TypeScript-k\xe4\xe4nt\xe4j\xe4 huolehtii siit\xe4, ett\xe4 koodissa varaudutaan my\xf6s tilanteisiin, joissa arvoa ei ole asetettu:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"console.log(user2.email.toLowerCase());   // k\xe4\xe4nn\xf6svirhe, koska email saattaa olla `undefined`\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Tyhjien arvojen tarkastamiseksi on useita eri l\xe4hestymistapoja, mutta esimerkiksi JavaScriptin ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",children:'"optional chaining"-operaattori'})," eli ",(0,t.jsx)(n.code,{children:"?"})," auttaa varautumaan puuttuvaan arvoon:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"console.log(user2.email?.toLowerCase());  // ei virhett\xe4\n"})}),"\n",(0,t.jsx)(n.h2,{id:"tyyppien-yhdisteleminen",children:"Tyyppien yhdisteleminen"}),"\n",(0,t.jsx)(n.p,{children:"TypeScriptiss\xe4 eri tyyppej\xe4 voidaan yhdistell\xe4 joukko-opin termien mukaisesti unioneilla (union) ja leikkauksilla (intersection)."}),"\n",(0,t.jsxs)(n.h3,{id:"union-number--string",children:["Union (",(0,t.jsx)(n.code,{children:"number | string"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["Uusia tyyppej\xe4 voidaan my\xf6s luoda yhdistelem\xe4ll\xe4 vakioita tai olemassa olevia tyyppej\xe4. Jos esimerkiksi haluamme luoda tyypin ",(0,t.jsx)(n.code,{children:"Size"}),", joka sallii ainoastaan merkkijonot ",(0,t.jsx)(n.code,{children:"s"}),", ",(0,t.jsx)(n.code,{children:"m"})," ja ",(0,t.jsx)(n.code,{children:"l"}),", voimme luoda sen seuraavasti:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Size = 's' | 'm' | 'l'; // sallii vain n\xe4m\xe4 ennalta m\xe4\xe4r\xe4tyt merkkijonot\n\ntype Shirt = {\n    size: Size;\n};\n\nlet smallShirt = { size: 's' }; // ok\n\nlet unknownShirt = { size: 'tall' }; // k\xe4\xe4nn\xf6svirhe!\n"})}),"\n",(0,t.jsx)(n.p,{children:"Yleinen k\xe4ytt\xf6tapaus union-tyypeille on my\xf6s esimerkiksi joko numeron tai merkkijonon salliminen funktion parametrina:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types\nfunction printId(id: number | string) {\n    console.log("Your ID is: " + id);\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Yll\xe4 parametrin tyypiksi on m\xe4\xe4ritetty ",(0,t.jsx)(n.em,{children:"unioni"})," ",(0,t.jsx)(n.code,{children:"number | string"}),", eli funktio sallii kumman tahansa tyyppisen arvon k\xe4ytt\xe4j\xe4n id",":n","\xe4. T\xe4ss\xe4kin tapauksessa voi olla kannattavaa m\xe4\xe4ritell\xe4 t\xe4lle tyypille ",(0,t.jsx)(n.em,{children:"alias"})," ",(0,t.jsx)(n.code,{children:"UserId"}),", joka edesauttaa koodin luettavuutta ja yll\xe4pidett\xe4vyytt\xe4:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'type UserId = string | number;\n\n// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types\nfunction printId(id: UserId) {\n    console.log("Your ID is: " + id);\n}\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"intersection-",children:["Intersection (",(0,t.jsx)(n.code,{children:"&"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["Uusia tyyppej\xe4 voidaan my\xf6s yhdistell\xe4 olemassa olevista tyypeist\xe4 ",(0,t.jsx)(n.em,{children:"intersection"})," -operaatiolla. Seuraavassa esimerkiss\xe4 on m\xe4\xe4ritetty tyypit ",(0,t.jsx)(n.code,{children:"Coordinate"})," ja ",(0,t.jsx)(n.code,{children:"Address"}),", sek\xe4 ",(0,t.jsx)(n.code,{children:"MapMarker"}),", joka sis\xe4lt\xe4\xe4 molempien edell\xe4 mainittujen tyyppien attribuutit:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Coordinate = {\n    lat: number;\n    lon: number;\n};\n\ntype Address = {\n    street: string;\n    city: string;\n};\n\ntype MapMarker = Address & Coordinate;\n\nlet haagaHelia: MapMarker = {\n    lat: 60,\n    lon: 24,\n    street: 'Ratapihantie 13',\n    city: 'Helsinki'\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Eri tyyppien yhdist\xe4minen voi olla k\xe4tev\xe4\xe4 esimerkiksi tapauksissa, joissa k\xe4ytt\xe4isit perint\xe4\xe4. Esimerkiksi tietokannasta luettujen tietojen yhteiset osat ",(0,t.jsx)(n.code,{children:"id"}),", ",(0,t.jsx)(n.code,{children:"createdAt"})," ja ",(0,t.jsx)(n.code,{children:"updatedAt"})," voidaan sis\xe4llytt\xe4\xe4 muihin tyyppeihi, kuten ",(0,t.jsx)(n.code,{children:"Author"})," ja ",(0,t.jsx)(n.code,{children:"Book"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Entity = {\n    id: number;\n    createdAt: Date;\n    updatedAt: Date;\n    deletedAt?: Date;\n};\n\ntype Author = Entity & { name: string };\ntype Book = Entity & { title: string, author: Author };\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sis\xe4kk\xe4iset-tyypit",children:"Sis\xe4kk\xe4iset tyypit"}),"\n",(0,t.jsxs)(n.p,{children:['Tyyppej\xe4 voidaan m\xe4\xe4ritell\xe4 my\xf6s sis\xe4kk\xe4in siten, ett\xe4 yhden "oliotyypin" sis\xe4ll\xe4 on toinen oliotyyppi. Esimerkiksi seuraavassa tapauksessa ',(0,t.jsx)(n.code,{children:"User"}),"-tyypill\xe4 on ",(0,t.jsx)(n.code,{children:"address"}),", joka m\xe4\xe4rittelee k\xe4ytt\xe4j\xe4n osoitteen omana erillisen\xe4 oliona:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type User = {\n    name: string;\n    email: string;\n    address: {\n        street: string;\n        city: string;\n        postalCode: string;\n    };\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Mik\xe4li sis\xe4kk\xe4inen tyyppi on luonteeltaan sellainen, jota tarvitaan mahdollisesti erill\xe4\xe4n ",(0,t.jsx)(n.code,{children:"User"}),"-tyypist\xe4, kannattaa se m\xe4\xe4ritell\xe4 erillisen\xe4 tyyppin\xe4, johon viitataan ",(0,t.jsx)(n.code,{children:"User"}),"-tyypist\xe4:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Address = {\n    street: string;\n    city: string;\n    postalCode: string;\n};\n\ntype User = {\n    name: string;\n    email: string;\n    address: Address;\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tuplet-monikko",children:"Tuplet (monikko)"}),"\n",(0,t.jsxs)(n.p,{children:["TS tukee JavaScriptin taulukoille my\xf6s erityist\xe4 ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types",children:"tuple-tyyppi\xe4"}),". Tuple on k\xe4yt\xe4nn\xf6ss\xe4 taulukko, mutta siihen voidaan m\xe4\xe4ritell\xe4 ennalta taulukon pituus sek\xe4 jokaisessa eri solussa olevan arvon tyyppi:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type NameAndAge = [string, number];\n\nlet alice: NameAndAge = ['Alice', 29];  // ok!\nlet bob: NameAndAge = ['Bob', 28, 1];   // k\xe4\xe4nn\xf6svirhe! `Source has 3 element(s) but target allows only 2`\n"})}),"\n",(0,t.jsx)(n.h2,{id:"muita-hy\xf6dyllisi\xe4-ominaisuuksia",children:"Muita hy\xf6dyllisi\xe4 ominaisuuksia"}),"\n",(0,t.jsxs)(n.h3,{id:"readonly-ja-as-const",children:[(0,t.jsx)(n.code,{children:"readonly"})," ja ",(0,t.jsx)(n.code,{children:"as const"})]}),"\n",(0,t.jsxs)(n.p,{children:["TypeScript mahdollistaa useita erilaisia k\xe4tevi\xe4 tapoja edist\xe4\xe4 oman koodin yll\xe4pidett\xe4vyytt\xe4, kuten ",(0,t.jsx)(n.code,{children:"private"})," ja ",(0,t.jsx)(n.code,{children:"readonly"})," -attribuutit sek\xe4 ",(0,t.jsx)(n.code,{children:"as const"}),". N\xe4iden avulla voidaan varmistaa, ett\xe4 dataan ei tehd\xe4 esimerkiksi tahattomia muutoksia."]}),"\n",(0,t.jsxs)(n.p,{children:["Seuraavassa esimerkiss\xe4 taulukko m\xe4\xe4ritell\xe4\xe4n vakioksi ",(0,t.jsx)(n.code,{children:"as const"})," -syntaksilla:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const days = ['ma', 'ti', 'ke', 'to', 'pe', 'la', 'su'] as const;\ndays[0] = 'm\xe5ndag'; // error: Cannot assign to '0' because it is a read-only property.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Vaihtoehtoisesti tyypiksi voidaan m\xe4\xe4ritell\xe4 ",(0,t.jsx)(n.code,{children:"readonly string[]"}),", jolla on samankaltainen vaikutus:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const days: readonly string[] = ['ma', 'ti', 'ke', 'to', 'pe', 'la', 'su'];\ndays[0] = 'm\xe5ndag'; // error: Index signature in type 'readonly string[]' only permits reading.\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"JavaScriptin"})," ",(0,t.jsx)(n.code,{children:"const"})," varmistaa, ett\xe4 muuttujaan ei voida asettaa uutta arvoa. ",(0,t.jsx)(n.code,{children:"const"}),"-muuttujaan asetetun arvon muuttaminen on kuitenkin mahdollista, esimerkiksi lis\xe4\xe4m\xe4ll\xe4 listaan uusia arvoja."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"TypeScriptin"})," ",(0,t.jsx)(n.code,{children:"as const"})," ja ",(0,t.jsx)(n.code,{children:"readonly"})," varmistavat muuttujan lis\xe4ksi my\xf6s siihen asetetun arvon muuttumattomuuden. N\xe4ihin ominaisuuksiin voit perehty\xe4 lis\xe4\xe4 itsen\xe4isesti."]}),"\n",(0,t.jsx)(n.h3,{id:"rakenteellinen-tyypitys-structural-typing",children:"Rakenteellinen tyypitys (structural typing)"}),"\n",(0,t.jsxs)(n.p,{children:["Toisin kuin monissa muissa kieliss\xe4, TypeScriptiss\xe4 tyyppij\xe4rjestelm\xe4 ei itse asiassa perustu siihen, ett\xe4 arvojen tyypit vastaisivat t\xe4sm\xe4lleen muuttujien tai parametrien tyyppej\xe4. Sen sijaan TypeScript tarkastaa, ett\xe4 tyypit ",(0,t.jsx)(n.strong,{children:"yhteensopivia"}),". Yhteensopivuus m\xe4\xe4r\xe4ytyy eri arvojen rakenteen mukaan."]}),"\n",(0,t.jsxs)(n.p,{children:["Esimerkiksi seuraavassa koodissa on tyypit ",(0,t.jsx)(n.code,{children:"Movie"})," ja ",(0,t.jsx)(n.code,{children:"Book"})," sek\xe4 ",(0,t.jsx)(n.code,{children:"printMovie"}),", joka tulostaa elokuvan nimen:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Movie = {\n    title: string;\n};\n\ntype Book = {\n    title: string;\n};\n\n\nlet borat: Movie = { title: 'Borat' };\nlet cleanCode: Book = { title: 'Clean code' };\n\n\nfunction printMovie(m: Movie) {\n    console.log(m.title);\n}\n\nprintMovie(borat);\nprintMovie(cleanCode); // cleanCode on `Book`, mutta t\xe4m\xe4 toimii silti\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Koodissa ",(0,t.jsx)(n.code,{children:"printMovie"}),"-funktiota voidaan kutsua sek\xe4 ",(0,t.jsx)(n.code,{children:"Movie"}),"- ett\xe4 ",(0,t.jsx)(n.code,{children:"Book"}),"-tyyppisten muuttujien kanssa, koska ",(0,t.jsx)(n.code,{children:"Book"})," sis\xe4lt\xe4\xe4 kaikki samat attribuutit kuin ",(0,t.jsx)(n.code,{children:"Movie"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Yhteensopivuus toimii samalla tavoin, vaikka tyypit olisivat m\xe4\xe4riteltyn\xe4 ristiin ",(0,t.jsx)(n.code,{children:"type"}),"-, ",(0,t.jsx)(n.code,{children:"interface"}),"- ja ",(0,t.jsx)(n.code,{children:"class"}),"-tyyppisin\xe4. Voit halutessasi perehty\xe4 olioiden yhteensopivuuteen lis\xe4\xe4 ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/type-compatibility.html",children:"TypeScriptin k\xe4sikirjassa"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"control-flow-analysis-cfa",children:"Control flow analysis (CFA)"}),"\n",(0,t.jsx)(n.p,{children:"Seuraavat koodiesimerkit n\xe4ytt\xe4v\xe4t, miten TypeScript osaa tulkita JavaScriptin kontrollirakenteita rajatakseen eri arvojen mahdollisia tyyppej\xe4."}),"\n",(0,t.jsxs)(n.p,{children:["Kun koodissa on tehty esimerkiksi tarkastus ",(0,t.jsx)(n.code,{children:'if (typeof x !== "number")'}),", osaa TypeScript automaattisesti rajata ",(0,t.jsx)(n.code,{children:"x"}),":n"," mahdollisia tyyppej\xe4 seuraavilla riveill\xe4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const square = (x: number | undefined) => {\n    if (!x) {\n        throw new Error("Undefined");\n    }\n    return x * x;\n};\n\nconst square2 = (x: number | undefined) => {\n    if (typeof x !== "number") {\n        //typeof type guard\n        throw new Error("Not a number");\n    }\n    return x * x;\n};\n\nconst square3 = (x: number | undefined | string) => {\n    if (typeof x === "string") {\n        //typeof type guard\n        throw new Error("Not a number");\n    } else if (!x) {\n        throw new Error("Undefined");\n    }\n    return x * x;\n};\n\nconst square4 = (x: number | Date) => {\n    if (x instanceof Date) {\n        //Date is a class that can be initialized\n        throw new Error("Invalid type");\n    }\n    if (typeof x === "Date") {\n        //Error: This comparison appears to be unintentional because the types \'"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"\' and \'"Date"\' have no overlap.\n        throw new Error("Invalid type");\n    }\n    return x * x;\n};\n'})}),"\n",(0,t.jsx)(n.h3,{id:"another-example-of-nested-cfa",children:"Another example of (nested) CFA"}),"\n",(0,t.jsxs)(n.p,{children:["Artikkelissa ",(0,t.jsx)(n.a,{href:"https://retool.com/blog/typescript-control-flow-analysis-best-of/",children:"Get the best of TypeScript Control Flow Analysis (retool.com)"})," k\xe4sitell\xe4\xe4n laajemmin TypeScriptin tyyppianalyysi\xe4. Analyysi mahdollistaa mm. seuraavassa esimerkiss\xe4 esitetyn logiikan, jossa ",(0,t.jsx)(n.code,{children:"x"}),":n"," tyyppi saadaan rajattua kolmen tyypin unionista yhteen:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const doSomething = (x: string | number | boolean) => {\n  const isString = typeof x === "string";\n  const isNumber = typeof x === "number";\n  const isStringOrNumber = isString || isNumber;\n\n  if (isStringOrNumber) {\n    x; // string | number\n    if (typeof x === "number") {\n      x; //number\n    }\n  } else {\n    x; //boolean\n  }\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"bonus-still-some-peculiarities-about-narrowing",children:"Bonus: still some peculiarities about narrowing"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/2/narrowing.html",children:"https://www.typescriptlang.org/docs/handbook/2/narrowing.html"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// JavaScript has an operator for determining if an object has a property with a name: the in operator.\n// TypeScript takes this into account as a way to narrow down potential types.\ntype Fish = { swim: () => void };\ntype Bird = { fly: () => void };\ntype Human = { swim?: () => void; fly?: () => void };\ntype Animal = Fish | Bird | Human;\n\nfunction move(animal: Animal) {\n    if ("swim" in animal) {\n        // Narrow down the type with JavaScript in operator\n        animal; // animal narrowed to Fish | Human\n\n        if ("fly" in animal) {\n            animal; // animal narrowed to Human\n\n        } else {\n            animal;\n            /* here it\'s still a Fish or Human, because TypeScript uses a concept called\n             *"control flow based type analysis" to determine the types of variables. This\n             * means that TypeScript can infer the type of a variable based on the control\n             * flow of the program, but it doesn\'t keep track of the types of variables\n             * within the different branches of the control flow. So, even though the type\n             * of animal was narrowed to Human in the previous block, TypeScript doesn\'t\n             * know that the type of animal is not Fish in the surrounding if-else block.*/\n        }\n    } else {\n        animal; // animal narrowed to Bird | Human\n    }\n    if (animal instanceof Fish) {\n        /* The instanceof operator is used to check the constructor of an object, but it\n         * doesn\'t work with discriminated unions. instanceof works by checking the prototype\n         * chain of an object, but since a union type can have multiple different prototypes,\n         * it can\'t determine the type correctly. */\n        animal;\n    }\n}\n\ntype Foo3 = {\n    x: number;\n};\ntype NumberType = Foo3["x"];\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(7294);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);