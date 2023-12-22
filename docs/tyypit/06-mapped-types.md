---
sidebar_position: 6
---

# Map-tyypit (mapped types)



## 1. Basic mapping of type

A mapped type is the process of creating a new type by mapping type information from an existing type. The in operator maps over each item in the union type to create a new type. In other words, the in operator allows us to loop through each type in a union type. (https://learntypescript.dev/08/l2-mapped-type). https://javascript.plainenglish.io/using-typescript-mapped-types-like-a-pro-be10aef5511a

```ts
type MappedTypeName = { [K in UnionType]: ExistingType };
type MappedTypeName = {[K in keyof ExistingType1]: ExistingType2;};
```

```ts
interface Todo {
    title: string
    description: string
    completed: boolean
}
```

```ts
//k in ...
//..manually. Try adding something else to in
type TodoConstucted = {[K in "title" | "description" | "completed"]: Todo[K]}
//..utilizing keyof
type TodoConstucted2 = {[K in keyof Todo]: Todo[K]}
```

## Some examples of mapped types with generics

```ts
type MyMakeOptional<T> = {
    [P in keyof T]?: T[P];
};

//-? expression
type MyRemoveOptional<T> = {
    [P in keyof T]-?: T[P];
};

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

const optionalTodo: MyMakeOptional<Todo> = { title: 'Optional todo' };
const readOnlyTodo: MyReadonly<Todo> = { title: 'Read only todo', description: 'desc', completed: false };
readOnlyTodo.title = 'Todo 2'; // Error: Cannot assign to 'Todo 2' because it mapped to a read-only property.
```

## Union type of the values in an array with [number]-syntax

```ts
const myArray = ['one', 'two'] as const
type ArrayType = typeof myArray
type ValidNumber = typeof myArray[number]
//why not this?
type ValidNumber2 = typeof myArray[keyof ArrayType]
//what about this, arrays are actually objects, aren't they? (//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Array_object)?
type ValidNumber3 = typeof myArray[0 | 1]
```

## Index signatures ([key: xxx])

https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures, https://blog.logrocket.com/typescript-mapped-types/

```ts
type User = {
    name: string;
    preferences: {
      [key: string]: string;
    }
};
const currentUser: User = {
    name: 'Foo Bar',
    preferences: {
        lang: 'en',
    },
};
```

## Mapping allows future additions to reflect on depending types "automatically"

https://blog.logrocket.com/typescript-mapped-types/

```ts
type AppConfig = {
    username: string,
    layout: string,
    //more in the future possibly, try adding here something
}

// Whether or not the user has permission to change configuration values
type AppPermissions = {
    // Notice the as-keyword
    // Notice template literal `change${Type}`
    // and "intrinsic string manipulation" (Capitalize)
    //(https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
    [Key in keyof AppConfig as `change${Capitalize<Key>}`]: boolean
}

const appPermission: AppPermissions = {changeUsername: true, changeLayout: false}
```



### "Record" ja avain-arvo-pareja sisältävät oliot

JavaScriptissä olioita (object) käytetään usein avain-arvo-pareja sisältävänä map-tietorakenteena. Tämä poikkeaa edellä esitellyistä esimerkeistä siten, että avainten nimet eivät ole ennalta tiedossa, vaikka sekä avainten että arvojen tyypit tiedetäänkin. TypeScript mahdollistaa ns. [index signaturen](https://basarat.gitbook.io/typescript/type-system/index-signatures#declaring-an-index-signature), jolla voidaan määritellä objektin avainten sekä arvojen tyypit:

```ts
let emojis: { [key: string]: string } = {};
emojis['smile'] = '🙂';
emojis['laugh'] = '😄';


// objektin kaikki avaimet saadaan array:na JS:n Object.keys-metodilla:
console.log(Object.keys(emojis));   // [ 'smile', 'laugh' ]

// objektin kaikki arvot saadaan array:na JS:n Object.values-metodilla:
console.log(Object.values(emojis)); // [ '🙂', '😄' ]


// TypeScript ei takaa, että avaimelle löytyy arvoa:
console.log(emojis['angry']);       // undefined

// avain voidaan tarkastaa `in`-operaatiolla:
if ('smile' in emojis) {
    console.log(emojis['smile']);   // 🙂
}

console.table(emojis); /* ┌─────────┬────────┐
                          │ (index) │ Values │
                          ├─────────┼────────┤
                          │  smile  │  '🙂'  │
                          │  laugh  │  '😄'  │
                          └─────────┴────────┘ */

```

TypeScriptin "utility types" -tyypeistä löytyy myös valmis `Record`, jonka avulla objektin avainten ja arvojen tyypit on määritettävissä vielä astetta selkeämmin:

> **Record&lt;Keys, Type&gt;**
>
> *"Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type."*
>
> https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type

```ts
let weekdays: Record<string, string> = {};
weekdays['monday'] = 'maanantai';
weekdays['tuesday'] = 'tiistai';

console.log(weekdays);                  // { monday: 'maanantai', tuesday: 'tiistai' }
console.log('tuesday' in weekdays);     // true

console.log(weekdays['someday']);       // undefined
```
