# @lookwe/try

A small utility function to simulate the behavior of the proposed [Try Operator](https://github.com/arthurfiorette/proposal-try-operator) in JavaScript. This package provides a functional approach to handling potential errors in synchronous and asynchronous operations, returning a `Result` object indicating success or failure.

**Inspired by:** [Try Operator Proposal](https://github.com/arthurfiorette/proposal-try-operator)

## Installation

You can install `@lookwe/try` using npm:

```bash
npm install @lookwe/try
```

## Usage

#### Basic Usage

The `_try` function takes a callback function as its argument. This callback will be executed within a `try...catch` block.

```ts
import { _try } from "@lookwe/try";

const [ok, error, value] = _try(() => {
  if (Math.random() > 0.5) throw new Error("Something went wrong!");
  return "Operation successful!";
});

if (ok) {
  console.log("Success:", value); // Output: Success: Operation successful!
} else {
  console.error("Error:", error); // Output: Error: Error: Something went wrong!
}
```

#### Handling Promises

`_try` also handles asynchronous operations that return Promises.

```ts
import { _try } from "@lookwe/try";

const [ok, error, value] = await _try(async () => {
  await sleep(500);
  if (Math.random() > 0.5) throw new Error("Something went wrong!");
  return "Operation successful!";
});

if (ok) {
  console.log("Success:", value); // Output: Success: Operation successful!
} else {
  console.error("Error:", error); // Output: Error: Error: Something went wrong!
}
```

## Result object

The `Result` object, returned by `_try`, supports destructuring into `[ok, error, value]` or `{ ok, error, value }`.
