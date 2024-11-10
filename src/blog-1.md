### The significance of union and intersection types in Typescript

In TypeScript, **union** and **intersection types** are essential tools for managing different types in a safe and flexible way.

#### **Union Types** (`A | B`)

A **union type** allows a variable to be one of several types, giving flexibility to handle different scenarios without duplicating code.

Example-

```typescript
function printId(id: number | string): void {
  console.log(`ID: ${id}`);
}
```

In this example, `id` can be either a `number` or a `string`. TypeScript ensures that `printId` can handle both cases, helping prevent runtime errors while keeping code flexible.

#### **Intersection Types** (`A & B`)

An **intersection type** combines multiple types into one. Instead of handling multiple types separately, an intersection type requires that an object includes properties from all specified types. This is useful when you want an object to meet multiple requirements at once.

Example-

```typescript
interface User {
  name: string;
  email: string;
}

interface Admin {
  adminLevel: number;
}

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: 'Alice',
  email: 'alice@example.com',
  adminLevel: 1,
};
```

In this case, `AdminUser` includes all properties from both `User` and `Admin`. TypeScript will ensure that any `AdminUser` object includes `name`, `email`, and `adminLevel`.

Using union and intersection types effectively helps to write code that is both flexible and safe, allowing TypeScript to catch potential issues while keeping code clear and maintainable.
