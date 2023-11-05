// noImplicitAny
let noIdea;
noIdea.booom();

const badFn = (oops) => {
  oops.bang();
};

const obj = { key: "test" };

obj["keyz"] = 4;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// strictNullChecks
const result = ["Ahmed", "Hassanein"].find((name) => name === "Gamal");

result.toUpperCase(); // 💣

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// noUncheckedIndexedAccess
const obj2 = { key: "test" };

const test = obj2["oops"];

test.toUpperCase(); // 💣

const vals = ["car", "cat", "cam"];
const nope = vals[7].toUpperCase();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// noUnusedLocals

function unusedLocalsDemo() {
  const unused = true;
}

// noUnusedParameters

function unusedParamsDemo(param: string) {
  console.log("param? what param?");
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// useUnknownInCatchVariables

try {
  throw new Error("BOOM!");
} catch (err) {
  err.oops();
}
