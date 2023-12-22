"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[453],{2047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=n(5893),i=n(1151);const s={sidebar_position:4},r="Keyof ja typeof",a={id:"tyypit/keyof-typeof",title:"Keyof ja typeof",description:"TypeScript osaa hy\xf6dynt\xe4\xe4 olemassa olevien arvojen ja funktioiden tyyppej\xe4 uusien tyyppien m\xe4\xe4rittelemiseksi.",source:"@site/docs/tyypit/03-keyof-typeof.md",sourceDirName:"tyypit",slug:"/tyypit/keyof-typeof",permalink:"/docs/tyypit/keyof-typeof",draft:!1,unlisted:!1,editUrl:"https://github.com/typescript-ohjelmointi/typescript-ohjelmointi.github.io/tree/main/docs/tyypit/03-keyof-typeof.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"JavaScript-koodin tyyppim\xe4\xe4rittelyt",permalink:"/docs/tyypit/typing-js-code"},next:{title:"Geneeriset tyypit",permalink:"/docs/tyypit/generics"}},l={},p=[{value:"typeof",id:"typeof",level:2},{value:"keyof",id:"keyof",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"keyof-ja-typeof",children:"Keyof ja typeof"}),"\n",(0,o.jsx)(t.p,{children:"TypeScript osaa hy\xf6dynt\xe4\xe4 olemassa olevien arvojen ja funktioiden tyyppej\xe4 uusien tyyppien m\xe4\xe4rittelemiseksi."}),"\n",(0,o.jsx)(t.h2,{id:"typeof",children:"typeof"}),"\n",(0,o.jsx)(t.p,{children:"Otetaan esimerkiksi seuraava olio, joka sis\xe4lt\xe4\xe4 kolme muuttujaa:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const takeOutTrash = {\n  title: 'Take out the trash',\n  description: 'Empty the trash bin and recyclables',\n  completed: false,\n};\n"})}),"\n",(0,o.jsxs)(t.p,{children:["T\xe4t\xe4 olemassa olevaa oliota voidaan nyt hy\xf6dynt\xe4\xe4 esimerkiksi uuden ",(0,o.jsx)(t.code,{children:"Task"}),"-tyypin m\xe4\xe4rittelemiseksi:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"type Task = typeof takeOutTrash;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Lis\xe4tietoja ",(0,o.jsx)(t.code,{children:"typeof"}),"-operaattorista l\xf6yd\xe4t TypeScriptin ",(0,o.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/2/typeof-types.html",children:"k\xe4sikirjasta"}),"."]}),"\n",(0,o.jsxs)(t.admonition,{title:"typeof !== typeof",type:"info",children:[(0,o.jsxs)(t.p,{children:["On hyv\xe4 huomioida, ett\xe4 TypeScriptin ",(0,o.jsx)(t.code,{children:"typeof"}),"-operaattori liittyy TypeScriptin tyyppien m\xe4\xe4rittelemiseen, kun taas ",(0,o.jsxs)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",children:["JavaScriptin ",(0,o.jsx)(t.code,{children:"typeof"})]})," on ajonaikaisesti suoritettava lauseke."]}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["TS: ",(0,o.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/2/typeof-types.html",children:"https://www.typescriptlang.org/docs/handbook/2/typeof-types.html"})]}),"\n",(0,o.jsxs)(t.li,{children:["JS: ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",children:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof"})]}),"\n"]})]}),"\n",(0,o.jsx)(t.h2,{id:"keyof",children:"keyof"}),"\n",(0,o.jsxs)(t.p,{children:["TypeScriptiss\xe4 voit luoda my\xf6s uuden tyypin, joka sis\xe4lt\xe4\xe4 vakiot kaikista olemassa olevan toisen tyypin avaimista, eli k\xe4yt\xe4nn\xf6ss\xe4 muuttujien nimist\xe4. T\xe4m\xe4 tapahtuu ",(0,o.jsxs)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/2/keyof-types.html",children:[(0,o.jsx)(t.code,{children:"keyof"}),"-operaattorilla"]}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"interface Color {\n    red: number;\n    green: number;\n    blue: number;\n}\n\ntype KeysOfColor = keyof Color; // red | green | blue\n"})}),"\n",(0,o.jsx)(t.p,{children:"T\xe4m\xe4 on erityisen hy\xf6dyllist\xe4 tapauksissa, joissa sinun tarvitsee k\xe4sitell\xe4 olion muuttujia, mutta et etuk\xe4teen tied\xe4 mit\xe4 muuttujista milloinkin k\xe4ytet\xe4\xe4n."}),"\n",(0,o.jsx)(t.p,{children:"Ajattele esimerkiksi seuraavia funktioita, jotka k\xe4sittelev\xe4t v\xe4rin punaista, sinist\xe4 tai vihre\xe4\xe4 komponenttia:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"function incrementComponent(color: Color, component: keyof Color, percent: number) {\n    color[component] *= 1 + percent / 100;\n}\n\nfunction swapColorComponents(color: Color, componentA: keyof Color, componentB: keyof Color) {\n    [color[componentA], color[componentB]] = [color[componentB], color[componentA]];\n}\n\nlet myColor: Color = { red: 255, green: 10, blue: 15 };\n\nincrementComponent(myColor, 'blue', 10);\nswapColorComponents(myColor, 'red', 'green');\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Nyt yll\xe4 m\xe4\xe4ritellyt funktiot toimivat mill\xe4 tahansa v\xe4rin komponentilla. TypeScript osaa silti varmistaa, ett\xe4 annettu merkkijono l\xf6ytyy oikeasti ",(0,o.jsx)(t.code,{children:"Color"}),"-tyypist\xe4, eli seuraava funktiokutsu aiheuttaisi k\xe4\xe4nnett\xe4ess\xe4 virheen:"]}),"\n",(0,o.jsxs)(t.admonition,{title:"k\xe4\xe4nn\xf6svirhe",type:"warning",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"incrementComponent(myColor, 'yellow', 10);\n"})}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Argument of type '\"yellow\"' is not assignable to parameter of type 'keyof Color'"})})]})]})}function y(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(7294);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);