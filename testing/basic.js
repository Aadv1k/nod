const { spawn } = require("child_process");
const assert = require("assert");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

class Runner {
  constructor(testName) {
    this.name = testName;
  }

  pass() {
    console.log(`[✅] ${this.name}`)
  }

  isString(a) {
    assert.strictEqual(typeof(a), "string");
  }

  isNumber(a) {
    assert.number(typeof(a), "number");
  }

  is(a, b) {
    assert.strictEqual(a, b);
  }
}

class Test {
  constructor(testName, callback, after) {
    let timeout = null;

    if (typeof(after) === "number") {
      timeout = after;
    }

    this.testName = testName;
    sleep(timeout ?? 500).then(() => {
      callback(new Runner(testName));
    })
  }
}

module.exports = Test;
