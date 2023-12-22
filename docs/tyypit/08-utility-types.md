---
sidebar_position: 8
---

# Aputyypit (pick, omit, partial)

https://www.typescriptlang.org/docs/handbook/utility-types.html

```ts
//.e.g. Pick, Omit, Partial
type TodoPick = {
  title: string;
  description: string;
  completed: boolean;
};

type TodoWithOnlyTitleAndDesc = Pick<TodoPick, "title" | "description">;

type TodoWithOnlyTitleAndDesc2 = Omit<TodoPick, "completed">;

type TodoWithEverythingGoes = Partial<TodoPick>;
```
