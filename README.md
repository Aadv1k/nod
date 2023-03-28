# NOD

A collection of simple node js utilities to replace `node_modules/`. The goal is to primarily add *syntactic sugar* to node built-ins to make them more appealing to user over popular libraries such as [Jest](https://jestjs.com).

## Testing

### [`./testing/basic`]('./testing/basic')

Wraps [node:assert](https://nodejs.org/api/assert.html) with a more declarative test syntax.

#### Usage

```js
const test = require("./testing/basic");

new test("should check if 1 + 1 is infact 2", (t) => {
  // assert.strictEqual
  t.is(1 + 1, 2)
  t.isString("hello")
  t.isNumber(2)

  // Outputs a passed message on the terminal
  t.pass();
})

new test("should fail with AssertionError", (t) => {
  // assert.strictEqual
  t.isString(10)
})

```
